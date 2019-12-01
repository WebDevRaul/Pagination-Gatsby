import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';
import { nextPage } from '../../../redux/actions/exampleTwo';
import { createStructuredSelector } from 'reselect';
import { state_two_pages, state_two_movie, state_two_page } from '../../../redux/selectors/exampleTwo';
import StyledPagination from './Styled_Pagination';

const Pagination = ({ nextPage, pages, movie, page }) => {
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
          forcePage={page-1}
        />
      </div>
    </StyledPagination>
  )
}

Pagination.propTypes = {
  nextPage: PropTypes.func.isRequired,
  pages: PropTypes.number.isRequired,
  movie: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};

const mapStateToProps = createStructuredSelector({
  pages: state_two_pages,
  movie: state_two_movie,
  page: state_two_page
});

export default connect(mapStateToProps, { nextPage })(Pagination);