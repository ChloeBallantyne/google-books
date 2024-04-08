import React from "react";

export const Books = ({ bookData }) => {
  console.log(bookData);
  return (
    <div>
      {bookData.map((data) => {
        return <img src={data.volumeInfo.imageLinks.thumbnail} alt=""></img>;
      })}
    </div>
  );
};
