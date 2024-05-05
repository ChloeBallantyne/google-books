import React from "react";
import style from "../Books/Books.module.scss";
import { ModalContextProvide } from "../../context/ModalContext";
import { useContext } from "react";
import { BookContext } from "../../context/BookContextProvider";

const Book = ({ data, index }) => {
  const { toggleModalOpen } = useContext(ModalContextProvide);
  const { setBookObject } = useContext(BookContext);

  const openBookModal = () => {
    setBookObject(data);
    toggleModalOpen();
  };

  return (
    <button onClick={openBookModal}>
      <div className={style.book}>
        <img className={style.book_img} src={data.image} alt={data.title}></img>
        <p className={style.book_info}>Title: {data.title}</p>
        <p className={style.book_info}>Author/s: {data.authors}</p>
        <p className={style.book_info}>
          Description: {truncateText(data.description, 50)}
        </p>
      </div>
    </button>
  );
};

function truncateText(text, length) {
  if (text.length <= length) {
    return text;
  }

  return text.substr(0, length) + "\u2026";
}
export default Book;
