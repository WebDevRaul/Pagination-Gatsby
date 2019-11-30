import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { state_two_data } from '../../redux/selectors/exampleTwo';
import Movie from './movie/Movie';

const List = ({ list }) => {
  return (
    <div className='row no-gutters pr-4 pl-4'>
      {
        list &&
        list.map((movie, index) => 
          <div key={index} className='col col-sm-6 col-md-4 col-lg-3'>
            <Movie { ...movie } />
          </div>)
      }
    </div>
  )
};

List.propTypes = {
  list: PropTypes.array.isRequired
};

const mapStateToProps = createStructuredSelector({
  list: state_two_data
});

export default connect(mapStateToProps, null)(List);