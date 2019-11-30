import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import StyledTitle from './Styled_Title';

const Title = ({ title }) => {
  return (
    <StyledTitle>
      <h5 className='title text-muted'>{title}</h5>
      <i className='helper'></i>
      <span className={classnames('test', {'show-full-title': title.length > 30})}>{title}</span>
    </StyledTitle>
  )
}

Title.propTypes = {
  title: PropTypes.string
}

export default Title;