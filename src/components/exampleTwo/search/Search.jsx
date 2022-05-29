import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateMovie } from '../../../redux/actions/exampleTwo';
import StyledSearch from './Styled_Search';
import CustomInput from '../../common/input/Custom_Input';
import CustomButton from '../../common/buton/Custom_Button';
import isEmpty from '../../common/utils/isEmpty';

const Search = ({ updateMovie }) => {
  const [movie, setMovie] = useState('');
  
  useEffect(() => {
    setMovie('matrix');
    updateMovie("matrix")
    return;
  },[])

  const onChange = e => setMovie(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    if(isEmpty(movie)) return;
    updateMovie(movie)
  }

  return (
    <StyledSearch>
      <div className='row no-gutters search'>
        <div className='col-11 col-sm-8 col-md-6 m-auto'>
          <form noValidate onSubmit={onSubmit} className='search'>
            <div className='col-6 p-0'>
              <CustomInput
                name='search'
                value={movie}
                onChange={onChange}
                label='Search movie'
              />
            </div>
            <div className='col-4 offset-2 p-0'>
              <CustomButton text='Search' type='submit'/>
            </div>
          </form>
        </div>
      </div>
    </StyledSearch>
  )
};

Search.propTypes = {
  updateMovie: PropTypes.func.isRequired
};

export default connect(null, { updateMovie })(Search);
