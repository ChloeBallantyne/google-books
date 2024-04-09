import React from "react";
import styles from "./SearchBar.module.scss";

function cleanSearch(searchTerm) {
  return searchTerm.trim().split(" ").join("+");
}

const SearchBar = ({ onSearch }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const searchTerm = data.get("search");
    const cleanTerm = cleanSearch(searchTerm);
    onSearch(cleanTerm);
    form.reset();
  };
  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={onSubmit}>
        <input
          className={styles.bar}
          type="text"
          placeholder="Search for books"
          name="search"
        />
        <button className={styles.btn}>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
