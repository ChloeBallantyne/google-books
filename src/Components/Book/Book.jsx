import React from "react";
import style from "../Books/Books.module.scss";

const Book = ({ data }) => {
  console.log(data);
  return (
    <div className={style.book}>
      <img className={style.book_img} src={data.image} alt={data.title}></img>
      <p className={style.book_info}>Title: {data.title}</p>
      <p className={style.book_info}>Author/s: {data.authors}</p>
      <p className={style.book_info}>
        Description: {truncateText(data.description, 50)}
      </p>
    </div>
  );
};

function truncateText(text, length) {
  if (text.length <= length) {
    return text;
  }

  return text.substr(0, length) + "\u2026";
}
export default Book;
