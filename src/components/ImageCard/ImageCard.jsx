import css from "./ImageCard.module.css";

const ImageCard = ({ url, desc }) => {
  return (
    <li>
      <img className={css.img} src={url} alt={desc} />
    </li>
  );
};

export default ImageCard;
