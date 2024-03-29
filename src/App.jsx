import { useEffect, useState } from "react";
import { requesForImages } from "./helpers/api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

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

  const handleSearch = (data) => {
    setPage(1);
    setQuery(data);
  };

  const handleClick = () => {
    setPage(page + 1);
  };
  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <ImageGallery images={images} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {images.length > 0 && <LoadMoreBtn onClick={handleClick} />}
    </>
  );
};

export default App;
