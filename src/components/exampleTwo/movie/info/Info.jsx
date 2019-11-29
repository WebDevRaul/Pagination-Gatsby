import React from 'react';
import PropTypes from 'prop-types';
import Badge from './Badge';

const Info = ({ popularity, vote, lg, date }) => {
  return (
    <div>
      <Badge { ...popularity } color='primary' />
      {/* <Badge { ...vote } color='success' />
      <Badge { ...lg } color='warning' />
      <Badge { ...date } color='danger' /> */}
    </div>
  )
}

Info.propTypes = {
  popularity: PropTypes.object.isRequired
}

export default Info;