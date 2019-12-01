import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Badge from './badge/Badge';
import Toggle from './toggle/Toggle';
import Title from './title/Title';

import StyledMovie from './Styled_Movie';
import Card from './card/Card';

const Movie = ({original_title, poster_path, overview, popularity, vote_count, original_language, release_date, }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <StyledMovie>
      <div className="card mb-2">
        <Title title={original_title} />
        <Card toggle={toggle} path={poster_path} overview={overview} />
        <div className="card-body info">
          <Badge title='Popularity' num={popularity} color='primary' />
          <Badge title='Vote count'  num={vote_count} color='success' />
          <Badge title='Language' num={original_language} color='warning' />
          <Badge title='Date'  num={release_date} color='danger' />
        </div>
        <div className="card-body toggle p-2 d-flex justify-content-center">
          <Toggle toggle={toggle} setToggle={setToggle} />
        </div>
      </div>
    </StyledMovie>
  )
}

Movie.propTypes = {
  popularity: PropTypes.number,
  vote_count: PropTypes.number,
  original_language: PropTypes.string,
  date: PropTypes.string,
}

export default Movie;