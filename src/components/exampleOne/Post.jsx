import React from 'react';
import PropTypes from 'prop-types';
import StyledPost from './Styled_Post';

const Post = ({ id, title }) => {
  return (
    <StyledPost>
      <div className='post'>
        <h5>{id}.</h5>
        <p>{title}</p>
      </div>
    </StyledPost>
  )
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}

export default Post;