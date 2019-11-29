import React from 'react';
import PropTypes from 'prop-types';
import StyledMovie from './Styled_Movie';

import Info from './info/Info';

const Movie = ({ popularity, vote_count, original_language, release_date, }) => {
  return (
    <StyledMovie>
      <div className='col col-sm-6 col-md-4 col-lg-3'>
      <div className="card">
        {/* image here */}
        <div className="card-body">
          <Info 
            popularity={{ title:'Popularity', num:{popularity} }}
            // vote={{ title:'Vote count', num:{vote_count} }}
            // lg={{ title:'Language', num:{original_language} }}
            // date={{ title:'Release date', num:{release_date} }}
          />
        </div>
        <div className="card-body">
          more info
        </div>
      </div>
      </div>
    </StyledMovie>
  )
}

Movie.propTypes = {
  // popularity: PropTypes.number.isRequired,
  // vote_count: PropTypes.number.isRequired,
  // original_language: PropTypes.string.isRequired,
  // date: PropTypes.string.isRequired,
}

export default Movie;