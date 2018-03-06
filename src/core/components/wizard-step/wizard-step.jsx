import React, { Component } from "react";
import PropTypes from "prop-types";

const WizardStep = function(props) {
  const { startIndex, endIndex, currentIndex } = props;

  return (
    <div>
      {props.children}
      <div>
        {currentIndex !== startIndex && (
          <button onClick={onPreviousClick}>Previous</button>
        )}
        <button onClick={onNextClick}>
          {currentIndex === endIndex ? (
            <span>Complete</span>
          ) : (
            <span>Next</span>
          )}
        </button>
      </div>
    </div>
  );

  function onPreviousClick(e) {
    e.preventDefault();
    props.onPreviousClick(
      currentIndex === startIndex ? currentIndex : currentIndex - 1
    );
  }

  function onNextClick(e) {
    e.preventDefault();
    props.onNextClick(
      currentIndex === endIndex ? currentIndex : currentIndex + 1
    );
  }
};

WizardStep.propTypes = {
  startIndex: PropTypes.number,
  endIndex: PropTypes.number,
  currentIndex: PropTypes.number,
  onPreviousClick: PropTypes.func,
  onNextClick: PropTypes.func
};

export default WizardStep;
