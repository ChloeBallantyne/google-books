import React, { useContext } from "react";
import styles from "./Modal.module.scss";
import { ModalContextProvide } from "../../context/ModalContext.jsx";
import { BookContext } from "../../context/BookContextProvider.jsx";

const Modal = () => {
  const { bookObject } = useContext(BookContext);

  const { modalOpen, toggleModalOpen } = useContext(ModalContextProvide);
  const classes = `${styles.modal} ${modalOpen ? styles.show : styles.hide}`;

  return (
    <>
      <div className={classes}>
        <button onClick={toggleModalOpen} className={styles.button}>
          Close
        </button>
        <div className={styles.wrapper}>
          <h2>{bookObject?.title}</h2>
          <img src={bookObject?.image} alt={bookObject?.title}></img>
          <p>Author/s: {bookObject?.authors}</p>
          <p>Description: {bookObject?.description}</p>
        </div>
      </div>
    </>
  );
};

export default Modal;
