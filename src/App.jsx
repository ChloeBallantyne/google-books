import { useState } from "react";
import Header from "./Components/Header/Header";
import SearchBar from "./Components/SearchBar/SearchBar";
import BookLoader from "./Containers/BookLoader";
import Modal from "./Components/Modal/Modal";
import ModalContext from "./context/ModalContext";

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

      <ModalContext>
        <Modal />
      </ModalContext>
    </>
  );
}

export default App;
