import React from "react";
import PropTypes from "prop-types";
import * as CustomTypes from "../../lib/custom-types";
import SearchResult from "../search-result/search-result";
import styles from "./search-results.css";

const SearchResults = ({ results, displayGiphy }) => {
  return (
    <div className={styles.container}>
      {results.map(result => (
        <SearchResult
          key={result.id}
          result={result}
          onClick={() => displayGiphy(result)}
        />
      ))}
    </div>
  );
};

SearchResults.propTypes = {
  results: PropTypes.arrayOf(CustomTypes.SearchResult).isRequired,
  displayGiphy: PropTypes.func.isRequired
};
export default SearchResults;
