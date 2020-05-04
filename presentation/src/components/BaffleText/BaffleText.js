import React, { Component } from "react";
import PropTypes from "prop-types";
import baffle from "baffle";

class BaffleText extends Component {
  constructor(props) {
    super(props);
    this.textElement = React.createRef();
  }

  componentDidMount() {
    const { text, duration, delay } = this.props;

    this.timeout = setTimeout(() => {
      this.animate({ text, duration });
    }, delay);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.text !== this.props.text) {
      this.animate({
        text: nextProps.text,
        duration: nextProps.duration,
      });
    }
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  animate({ text, duration }) {
    if (!this.textElement.current) {
      return;
    }

    if (!this.baffle) {
      this.baffle = baffle(this.textElement.current, {
        characters: [
          "█",
          "▓",
          "▒",
          "░",
          "█",
          "▓",
          "▒",
          "░",
          "█",
          "▓",
          "▒",
          "░",
          "<",
          ">",
          "/",
        ],
      }).start();
    }

    this.baffle.text(() => text).reveal(duration);
  }

  render() {
    return <span ref={this.textElement} />;
  }
}

BaffleText.propTypes = {
  text: PropTypes.string.isRequired,
  duration: PropTypes.number,
  delay: PropTypes.number,
};

BaffleText.defaultProps = {
  duration: 3000,
  delay: 3000,
};

export default BaffleText;
