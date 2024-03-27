import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";

const App = () => {
  const [images, setImages] = useState("");
  console.log(images);

  const handleSearch = (data) => {
    setImages(data);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
    </>
  );
};

export default App;
