import React from 'react';
import PropTypes from 'prop-types';
import Poster from './Poster';
import Story from './Story';

const Card = ({ toggle, path }) => {
  return (
    <>
      {
        toggle ? <Poster path={path} /> : <Story />
      }
    </>
  )
}

Card.propTypes = {
  toggle: PropTypes.bool.isRequired,
  path: PropTypes.string
}

export default Card;