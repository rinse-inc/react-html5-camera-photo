import React from 'react';
import PropTypes from 'prop-types';

import './styles/circleButton.css';

export const CircleButton = ({ onClick, isClicked }) => {
  const innerCircleClasses = isClicked ? 'is-clicked' : '';
  return (
    <div id="container-circles" className="circle-button__container">
      <div
        id="outer-circle"
        className="circle-button__outer"
        onClick = {
          (e) => {
            if (!isClicked) {
              onClick();
            }
          }
        }
      >
        <div
          id="inner-circle"
          className={`circle-button__inner ${innerCircleClasses}`}></div>
      </div>
    </div>
  );
};

CircleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isClicked: PropTypes.bool.isRequired
};

export default CircleButton;
