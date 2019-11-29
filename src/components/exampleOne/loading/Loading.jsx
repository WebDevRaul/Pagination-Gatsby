import React from 'react';
import StyledLoading from './Styled_Loading';

const Loading = ({ id }) => (
  <StyledLoading>
    <div className='post-loading'>
      <h5>{id}.</h5>
      <p>
        <i></i>
        <i></i>
      </p>
    </div>
  </StyledLoading>
);

export default Loading;