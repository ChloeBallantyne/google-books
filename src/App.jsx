import { useState } from "react";
import Header from "./Components/Header/Header";
import SearchBar from "./Components/SearchBar/SearchBar";
import BookLoader from "./Containers/BookLoader";
import Modal from "./Components/Modal/Modal";
import { ModalContext } from "./context/ModalContext";
import BookContextProvider from "./context/BookContextProvider";

function App() {
  const [searchTerm, setSearchTerm] = useState(null);

  const onSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <>
      <BookContextProvider>
        <ModalContext>
          <Header />

          <SearchBar onSearch={onSearch} />

          <BookLoader searchTerm={searchTerm} />

          <Modal />
        </ModalContext>
      </BookContextProvider>
    </>
  );
}

export default App;
