import React from 'react';
import PropTypes from 'prop-types';

const Badge = ({ title, color, num }) => {
  return (
    <div className='d-flex justify-content-between'>
      <p className='text-muted'>{title}</p>
      <p className={`m-auto badge badge-pill badge-${color}`}>{num}</p>
    </div>
  );
};
Badge.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  num: PropTypes.number.isRequired
};

export default Badge;