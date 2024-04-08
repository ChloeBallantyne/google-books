import React from "react";

export const Books = ({ bookData }) => {
  console.log(bookData);
  return (
    <div>
      {bookData.map((data) => {
        return (
          <div>
            <img src={data.volumeInfo.imageLinks.thumbnail} alt=""></img>
            <p>{data.volumeInfo.title}</p>
          </div>
        );
      })}
    </div>
  );
};
