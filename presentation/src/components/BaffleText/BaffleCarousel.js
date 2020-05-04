import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import BaffleText from "./BaffleText";

const BaffleCarousel = ({ texts, duration, textChangeDuration, delay }) => {
  if (textChangeDuration <= duration) {
    throw new Error("`textChangeDuration` should be greater than `duration`");
  }

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => {
        if (i + 1 === texts.length) {
          return 0;
        }

        return i + 1;
      });
    }, textChangeDuration);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <BaffleText text={texts[index]} duration={duration} delay={delay} />;
};

BaffleCarousel.propTypes = {
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
  textChangeDuration: PropTypes.number,
  duration: PropTypes.number,
  delay: PropTypes.number,
};

BaffleCarousel.defaultProps = {
  textChangeDuration: 2000,
  duration: 1000,
  delay: 0,
};

export default BaffleCarousel;
