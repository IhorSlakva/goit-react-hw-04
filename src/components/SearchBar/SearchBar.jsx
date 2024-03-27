import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

const notify = () => toast.error("Please enter text to search for images");

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target.elements.search.value.trim();
    if (!form) {
      notify();
      return;
    }
    onSearch(form);
    e.target.reset();
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.input}
          type="text"
          name="search"
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit">
          🔍
        </button>
        <Toaster position="top-left" />
      </form>
    </header>
  );
};

export default SearchBar;
