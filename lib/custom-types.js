import PropTypes from "prop-types";

export const SearchResult = PropTypes.shape({
  id: PropTypes.string.isRequired,
  full: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired
});
