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
  title: PropTypes.string,
  color: PropTypes.string,
  num: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ])
};

export default Badge;