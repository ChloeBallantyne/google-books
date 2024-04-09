import React from "react";
import style from "./Books.module.scss";

export const Books = ({ bookData }) => {
  console.log(bookData);
  return (
    <div className={style.wrapper}>
      {bookData.map((data) => {
        return (
          <div className={style.book}>
            <img
              className={style.book_info}
              src={data.volumeInfo.imageLinks.thumbnail}
              alt=""
            ></img>
            <p className={style.book_info}>Title: {data.volumeInfo.title}</p>
            <p className={style.book_info}>
              Author/s: {data.volumeInfo.authors}
            </p>
            {/* <p className={style.book_info}>
              Description: {data.volumeInfo.description}
            </p> */}
          </div>
        );
      })}
    </div>
  );
};
