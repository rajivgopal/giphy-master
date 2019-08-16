import React, { Component } from "react";
import PropTypes from "prop-types";
import * as CustomTypes from "../../../lib/custom-types";

class Random extends Component {
  componentDidMount() {
    this.props.onRandomSubmitted();
  }

  render() {
    const { onRandomSubmitted, giphy, thumbnailClicked } = this.props;

    return (
      <div>
        <br />
        <input
          type="button"
          name="submit"
          value="Next Giphy"
          onClick={onRandomSubmitted}
        />
        <br />
        <br />
        {giphy && (
          <a
            href="#"
            onClick={e => {
              e.preventDefault();
              thumbnailClicked(giphy);
            }}
          >
            <img src={giphy ? giphy.thumbnail : ""} alt="" />
          </a>
        )}
      </div>
    );
  }
}

Random.propTypes = {
  onRandomSubmitted: PropTypes.func.isRequired,
  giphy: CustomTypes.SearchResult,
  thumbnailClicked: PropTypes.func.isRequired
};

export default Random;
