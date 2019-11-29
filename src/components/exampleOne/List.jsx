import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {} from '../../redux/actions/exampleOne';
import { createStructuredSelector } from 'reselect';
import { state_example_one_posts } from '../../redux/selectors/exampleOne';
import Post from './Post';

const List = ({ list }) => {
  return (
    <div className='row no-gutters'>
      <div className='col-10 col-sm-8 col-md-6 m-auto'>
        {
          list &&
          list.map((i, index) => <Post key={index} { ...i } />)
        }
      </div>
    </div>
  )
};

List.propTypes = {
  list: PropTypes.array.isRequired
};

const mapStateToProps = createStructuredSelector({
  list: state_example_one_posts
});

export default connect(mapStateToProps, {  })(List);