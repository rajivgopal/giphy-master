import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchResults from "../../search-results/search-results.container";
import InfiniteScroll from "../../infinite-scroll/infinite-scroll";

export default class Trending extends Component {
  componentDidMount() {
    this.props.onSearchSubmitted();
  }

  render() {
    const { onInfiniteScroll, isLoading, isActive } = this.props;
    return (
      <div>
        <InfiniteScroll
          isLoading={isLoading}
          isActive={isActive}
          onTrigger={() => onInfiniteScroll()}
        >
          <SearchResults />
        </InfiniteScroll>
      </div>
    );
  }
}

Trending.propTypes = {
  onSearchSubmitted: PropTypes.func.isRequired,
  onInfiniteScroll: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isActive: PropTypes.bool.isRequired
};
