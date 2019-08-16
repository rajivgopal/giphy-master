import React from "react";
import PropTypes from "prop-types";
import Navigation from "../navigation/navigation.container";
import styles from "./app.css";
import GiphyDisplay from "../giphy-display/giphy-display";
import * as CustomTypes from "../../lib/custom-types";

const App = ({ children, isGiphyShown, onClick, giphy }) => (
  <div>
    <h1 className={styles.header}>Giphy master</h1>
    <Navigation />
    {children}
    <GiphyDisplay isGiphyShown={isGiphyShown} onClick={onClick} giphy={giphy} />
  </div>
);

App.propTypes = {
  isGiphyShown: PropTypes.bool.isRequired,
  giphy: CustomTypes.SearchResult,
  onClick: PropTypes.func.isRequired
};

export default App;
