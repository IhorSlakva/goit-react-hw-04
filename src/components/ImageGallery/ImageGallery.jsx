import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  return (
    <ul className={css.list}>
      {Array.isArray(images) &&
        images.map((image) => {
          return (
            <ImageCard
              key={image.id}
              url={image.urls.small}
              desc={image.alt_description}
            />
          );
        })}
    </ul>
  );
};

export default ImageGallery;
