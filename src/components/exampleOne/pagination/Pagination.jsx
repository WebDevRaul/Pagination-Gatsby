import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; 
import { nextPage, prevPage } from '../../../redux/actions/exampleOne';
import { createStructuredSelector } from 'reselect';
import { state_one_currentPage, state_one_pages, state_one_isLoading } from '../../../redux/selectors/exampleOne';
import StyledPagination from './Styled_Pagination';


const Pagination = ({ current, pages, nextPage, prevPage, isLoading }) => {
  const prev = current > 1 ? true : false;
  const next = current < pages ? true : false;
  if(!pages) return null;
  return (
    <StyledPagination>
      <div className='pagination'>
        <button className='btn' disabled={!prev} onClick={() => prevPage(current - 1)}>
          Prev
        </button>
        <div className='buttons'>
          <h5><span>{current}</span><i>-</i><span>{pages}</span></h5>
        </div>
        <button  className='btn' disabled={!next} onClick={() => nextPage(current + 1)}>
          Next
        </button>
      </div>
    </StyledPagination>
  )
};

Pagination.propTypes = {
  current: PropTypes.number,
  pages: PropTypes.number,
  nextPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = createStructuredSelector({
  current: state_one_currentPage,
  pages: state_one_pages,
  isLoading: state_one_isLoading
});

export default connect(mapStateToProps, { nextPage, prevPage })(Pagination);