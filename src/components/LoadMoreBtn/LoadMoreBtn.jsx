import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className={css.containerBtn}>
      <button type="button" className={css.button} onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
