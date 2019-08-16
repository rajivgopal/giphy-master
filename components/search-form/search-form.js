import React from "react";
import PropTypes from "prop-types";
import styles from "./search-form.css";

const searchForm = ({ onSearchSubmitted }) => {
  let searchField = null;
  const searchSubmitted = e => {
    e.preventDefault();
    onSearchSubmitted(searchField.value);
  };

  return (
    <form className={styles.container} onSubmit={searchSubmitted}>
      <input
        className={styles.searchField}
        ref={e => (searchField = e)}
        type="search"
        placeholder="Search Giphy"
      />
      <input
        className={styles.button}
        type="submit"
        name="submit"
        value="Search"
      />
    </form>
  );
};

searchForm.propTypes = {
  onSearchSubmitted: PropTypes.func.isRequired
};

export default searchForm;
