import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; 
import { nextPage, prevPage } from '../../redux/actions/exampleOne';
import { createStructuredSelector } from 'reselect';
import { state_example_one_currentPage, state_example_one_pages } from '../../redux/selectors/exampleOne';
import StyledPagination from './Styled_Pagination';


const Pagination = ({ current, pages, nextPage, prevPage }) => {
  const prev = current > 1 ? true : false;
  const next = current < pages ? true : false;
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
  prevPage: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  current: state_example_one_currentPage,
  pages: state_example_one_pages
});

export default connect(mapStateToProps, { nextPage, prevPage })(Pagination);