import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';
import { nextPage } from '../../../redux/actions/exampleTwo';
import { createStructuredSelector } from 'reselect';
import { state_two_pages, state_two_movie } from '../../../redux/selectors/exampleTwo';
import StyledPagination from './Styled_Pagination';

const Pagination = ({ nextPage, pages, movie }) => {
  const changePage = selected => {
    nextPage({movie, selected});
    window.scrollTo({top: 170, behavior: 'smooth' });
  }
  if(pages === 0) return null;
  return (
    <StyledPagination>
      <div className="pagination">
        <ReactPaginate
          previousLabel={'Prev'}
          nextLabel={'Next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pages}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          onPageChange={({ selected }) => changePage(selected)}
          activeClassName={'active'}
        />
      </div>
    </StyledPagination>
  )
}

Pagination.propTypes = {
  nextPage: PropTypes.func.isRequired,
  pages: PropTypes.number.isRequired,
  movie: PropTypes.string.isRequired
};

const mapStateToProps = createStructuredSelector({
  pages: state_two_pages,
  movie: state_two_movie
});

export default connect(mapStateToProps, { nextPage })(Pagination);