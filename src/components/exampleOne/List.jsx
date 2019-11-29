import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { state_one_posts, state_one_isLoading } from '../../redux/selectors/exampleOne';
import Post from './post/Post';
import Loading from './loading/Loading';

const List = ({ list, isLoading }) => {
  return (
    <div className='row no-gutters'>
      <div className='col-10 col-sm-8 col-md-6 m-auto'>
        {
          isLoading &&
          <>
            {
              [...Array(10)].map((i, index) => <Loading key={index} id={index+1} />)
            }
          </>
        }
        {
          list &&
          list.map((i, index) => <Post key={index} { ...i } />)
        }
      </div>
    </div>
  )
};

List.propTypes = {
  list: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = createStructuredSelector({
  list: state_one_posts,
  isLoading: state_one_isLoading
});

export default connect(mapStateToProps, null)(List);