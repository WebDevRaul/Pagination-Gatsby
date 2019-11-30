import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Story = ({ overview }) => {
  const longText = overview.length > 300 ? true : false;
  return (
    <div className={classnames('wrapper', { 'scroll': longText })}>
      <i className='text-muted'>{overview}</i>
    </div>
  )
}

Story.propTypes = {
  overview: PropTypes.string
}

export default Story;