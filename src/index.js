import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const ProgressBar = ({
  darkTheam,
  expand,
  redToGreen,
  roundProgressbar,
  containerClass,
  containerStyle,
  titleClass,
  titleStyle,
  buttonClass,
  buttonStyle,
  descriptionClass,
  descriptionStyle,
  handleButton,
  titleText,
  showButton,
  titleButton,
  descriptionText,
  percentage,
}) => {
  return (
    <div
      className={`${!!darkTheam && 'divDark'} ${
        !!expand ? 'containerExpand' : 'container'
      } ${containerClass}`}
      style={containerStyle}
    >
      <p
        className={`title ${
          !!darkTheam ? 'textDark' : 'textWhite'
        } ${titleClass}`}
        style={titleStyle}
      >
        {!!titleText && titleText}
        {!!showButton && !!titleButton && !!handleButton && (
          <a
            className={`aButton ${
              !!darkTheam ? 'textDark' : 'textWhite'
            } ${buttonClass}`}
            style={buttonStyle}
            onClick={handleButton}
          >
            {titleButton}
          </a>
        )}
      </p>
      {!!descriptionText && (
        <p
          className={`text ${
            !!darkTheam ? 'textDark' : 'textWhite'
          } ${descriptionClass}`}
          style={descriptionStyle}
        >
          {descriptionText}
        </p>
      )}
      <div
        className={`${
          roundProgressbar && 'roundContainerProgress'
        } containerProgress`}
      >
        {!!percentage ? (
          <div
            className={`${
              !!redToGreen ? 'progressRedToGreen' : 'progressGreenToRed'
            } ${roundProgressbar && 'roundProgress'}`}
          >
            <div
              className={`showProgress ${
                roundProgressbar && 'roundShowProgress'
              }`}
              style={{ width: `${!!percentage ? 100 - percentage : 100}%` }}
            ></div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  darkTheam: PropTypes.bool,
  expand: PropTypes.bool,
  redToGreen: PropTypes.bool,
  roundProgressbar: PropTypes.bool,
  containerClass: PropTypes.string,
  containerStyle: PropTypes.object,
  titleClass: PropTypes.string,
  titleStyle: PropTypes.object,
  buttonClass: PropTypes.string,
  buttonStyle: PropTypes.object,
  descriptionClass: PropTypes.string,
  descriptionStyle: PropTypes.object,
  handleButton: PropTypes.func,
  titleText: PropTypes.string,
  showButton: PropTypes.bool,
  titleButton: PropTypes.string,
  descriptionText: PropTypes.string,
  percentage: PropTypes.number,
};

ProgressBar.defaultProps = {
  darkTheam: false,
  expand: false,
  redToGreen: false,
  roundProgressbar: true,
  containerClass: '',
  containerStyle: {},
  titleClass: '',
  titleStyle: {},
  buttonClass: '',
  buttonStyle: {},
  descriptionClass: '',
  descriptionStyle: {},
  handleButton: () => {},
  showButton: false,
  titleText: null,
  titleButton: null,
  descriptionText: null,
  percentage: 0,
};

export default ProgressBar;
