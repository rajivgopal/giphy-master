import React, { Component } from "react";
import PropTypes from "prop-types";
import Spinner from "../spinner/spinner";

export default class InfiniteScroll extends Component {
  constructor(props) {
    super(props);
    this.container = null;
    this.scrollListener = this.scrollListener.bind(this);
  }

  scrollListener() {
    const { isLoading, onTrigger, isActive } = this.props;
    const viewPortHeight = document.documentElement.clientHeight;
    const { bottom } = this.container.getBoundingClientRect();

    if (isActive && !isLoading && bottom <= viewPortHeight) {
      onTrigger();
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollListener);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollListener);
  }

  render() {
    const { children, isLoading } = this.props;

    return (
      <div ref={e => (this.container = e)}>
        {children}
        {isLoading && <Spinner />}
      </div>
    );
  }
}

InfiniteScroll.propTypes = {
  children: PropTypes.element.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onTrigger: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired
};
