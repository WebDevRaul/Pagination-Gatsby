import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Poster from './Poster';
import Story from './Story';
import StyledCard from './Styled_Card';

const Card = ({ toggle, path, overview }) => {
  return (
    <StyledCard>
      <div className="flip-card">
        <div className={classnames('flip-card-inner', {'flip' : toggle})}>
          <div className="flip-card-front">
            <Poster path={path} />
          </div>
          <div className="flip-card-back">
            <Story overview={overview} />
          </div>
        </div>
      </div>
    </StyledCard>
  )
}

Card.propTypes = {
  toggle: PropTypes.bool.isRequired,
  path: PropTypes.string,
  overview: PropTypes.string
}

export default Card;