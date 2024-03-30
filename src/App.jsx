import { useEffect, useState } from "react";
import { requesForImages } from "./helpers/api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import Modal from "react-modal";
import { animateScroll } from "react-scroll";

Modal.setAppElement("#root");

const options = {
  duration: 500,
  smooth: true,
};

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchImagesByQuery = async () => {
      try {
        setIsLoading(true);
        const data = await requesForImages(query, page);
        setImages((prevImages) => [...prevImages, ...data.results]);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImagesByQuery();
  }, [query, page]);

  const onModalOpen = (pictures) => {
    setModalImage(pictures);
    setModalIsOpen(true);
  };

  const onModalClose = () => {
    setModalIsOpen(false);
  };

  const handleSearch = (data) => {
    setPage(1);
    setQuery(data);
  };

  const handleClick = () => {
    setPage(page + 1);
    animateScroll.scrollMore(470, options);
  };
  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <ImageGallery images={images} onModalOpen={onModalOpen} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {images.length > 0 && <LoadMoreBtn onClick={handleClick} />}
      <Modal isOpen={modalIsOpen} onRequestClose={onModalClose}>
        {modalImage && <ImageModal images={modalImage} />}
      </Modal>
    </>
  );
};

export default App;
