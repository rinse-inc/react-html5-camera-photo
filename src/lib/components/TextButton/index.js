import React from 'react';
import PropTypes from 'prop-types';

import './styles/textButton.css';

export const TextButton = ({ onClick, isClicked, buttonText }) => {
  const innerButtonClasses = isClicked ? 'is-clicked' : '';
  return (
    <div className="text-button__container">
      <div
        className="text-button__outer"
        onClick = {
          (e) => {
            if (!isClicked) {
              onClick();
            }
          }
        }
      >
        <div className={`text-button__inner ${innerButtonClasses}`}>{buttonText}</div>
      </div>
    </div>
  );
};

TextButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isClicked: PropTypes.bool.isRequired,
  buttonText: PropTypes.string
};

export default TextButton;
