import React from "react";
import style from "./Books.module.scss";
import Book from "../Book/Book.jsx";

export const Books = ({ bookData }) => {
  return (
    <div className={style.wrapper}>
      {bookData.map((data) => {
        return <Book data={data} key={data.id} />;
      })}
    </div>
  );
};
