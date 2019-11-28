import React from 'react';
import PropTypes from 'prop-types';

import StyledButon from './Styled_Button';

const CustomButton = ({ text, isClass, onClick, type }) => {
  return (
    <StyledButon>
      <button className={`custom-button ${isClass}`} onClick={onClick} type={type}>
        {text}
      </button>
    </StyledButon>
  )
}

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  isClass: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string
}

CustomButton.defaultProps = {
  type: 'button'
}

export default CustomButton;