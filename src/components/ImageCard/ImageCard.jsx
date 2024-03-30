import css from "./ImageCard.module.css";

const ImageCard = ({ image, onModalOpen }) => {
  const { urls, desc } = image;

  return (
    <li>
      <img
        onClick={() => onModalOpen(image)}
        className={css.img}
        src={urls.small}
        alt={desc}
      />
    </li>
  );
};

export default ImageCard;
