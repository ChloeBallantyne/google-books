import { createContext, useState } from "react";

export const BookContext = createContext(null);

const BookContextProvider = ({ children }) => {
  const [bookObject, setBookObject] = useState(null);

  return (
    <BookContext.Provider value={{ bookObject, setBookObject }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
