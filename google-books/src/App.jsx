import { useState } from "react";
import Header from "./Components/Header/Header";
import SearchBar from "./Components/SearchBar/SearchBar";
import BookLoader from "./Containers/BookLoader";

function App() {
  const [searchTerm, setSearchTerm] = useState(null);

  const onSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <>
      <Header />

      <SearchBar onSearch={onSearch} />

      <BookLoader searchTerm={searchTerm} />
    </>
  );
}

export default App;
