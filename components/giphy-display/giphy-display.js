import React from "react";
import PropTypes from "prop-types";
import styles from "./giphy-display.css";
import classNames from "classnames";
import * as CustomTypes from "../../lib/custom-types";

export default function GiphyDisplay({ isGiphyShown, giphy, onClick }) {
  const containerClassName = classNames(styles.container, {
    [styles.isShown]: isGiphyShown
  });

  return (
    <div className={containerClassName} onClick={onClick}>
      <img
        className={styles.isShown}
        src={giphy ? giphy.full : ""}
        isGiphyShown={isGiphyShown}
      />
    </div>
  );
}

GiphyDisplay.propTypes = {
  isGiphyShown: PropTypes.bool.isRequired,
  giphy: CustomTypes.SearchResult,
  onClick: PropTypes.func.isRequired
};
