import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import StyledTitle from './Styled_Title';

const Title = ({ title }) => {
  return (
    <StyledTitle>
      <span className={classnames('popover', {'show-full-title': title.length > 30})}>{title}</span>
      <h5 className='title'>{title}</h5>
    </StyledTitle>
  )
}

Title.propTypes = {
  title: PropTypes.string
}

export default Title;