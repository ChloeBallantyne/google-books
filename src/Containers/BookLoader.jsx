import React, { useEffect, useState, useContext } from "react";
import { getBooksBySearchTerm } from "../services/book-services";
import { Books } from "../Components/Books/Books";
import { BookContext } from "../context/BookContextProvider";

const BookLoader = ({ searchTerm }) => {
  const { setBookObject } = useContext(BookContext);

  const [bookData, setBookData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchTerm !== null) {
      setIsLoading(true);
      setBookData(null);
      setError(null);

      getBooksBySearchTerm(searchTerm)
        .then((results) => {
          setBookData(results);
        })
        .catch((error) => setError(error))
        .finally(() => setIsLoading(false));
    }
  }, [searchTerm]);

  return (
    <>
      {isLoading && <p>...Loading</p>}
      {!isLoading && error && <p style={{ color: "red" }}>{error.message}</p>}
      {!isLoading && bookData && <Books bookData={bookData} />}
    </>
  );
};

export default BookLoader;
