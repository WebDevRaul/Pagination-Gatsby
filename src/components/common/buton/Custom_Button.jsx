import React from 'react';
import PropTypes from 'prop-types';

import StyledButon from './Styled_Button';

const CustomButton = ({ text, isClass, type }) => {
  return (
    <StyledButon>
      <button className={`custom-button ${isClass}`} type={type}>
        {text}
      </button>
    </StyledButon>
  )
}

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  isClass: PropTypes.string,
  type: PropTypes.string
}

CustomButton.defaultProps = {
  type: 'button'
}

export default CustomButton;