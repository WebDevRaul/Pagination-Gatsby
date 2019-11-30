import React from 'react';
import PropTypes from 'prop-types';

import StyledTitle from './Styled_Title';

const Title = ({ title }) => {
  return (
    <StyledTitle>
      <h5 className='title'>{title}</h5>
    </StyledTitle>
  )
}

Title.propTypes = {
  title: PropTypes.string
}

export default Title;