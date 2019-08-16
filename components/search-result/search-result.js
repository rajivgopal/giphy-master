import React from "react";
import PropTypes from "prop-types";
import * as CustomTypes from "../../lib/custom-types";

const SearchResult = ({ result, onClick }) => {
  function handleClick(e) {
    e.preventDefault();
    onClick();
  }
  const { thumbnail } = result;
  return (
    <a href="#" onClick={handleClick}>
      <img src={thumbnail} />
    </a>
  );
};

export default SearchResult;

SearchResult.propTypes = {
  result: CustomTypes.SearchResult.isRequired,
  onClick: PropTypes.func.isRequired
};
