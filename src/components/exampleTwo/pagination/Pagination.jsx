import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';
import { nextPage } from '../../../redux/actions/exampleTwo';
import { createStructuredSelector } from 'reselect';
import { state_two_pages } from '../../../redux/selectors/exampleTwo';
import StyledPagination from './Styled_Pagination';

const Pagination = ({ nextPage, pages }) => {
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
          onPageChange={({ selected }) => nextPage({ movie: 'Matrix', page:selected })}
          activeClassName={'active'}
          // onPageChange={e => window.scrollTo({top: 245, behavior: 'smooth' })}
        />
      </div>
    </StyledPagination>
  )
}

Pagination.propTypes = {
  nextPage: PropTypes.func.isRequired,
  pages: PropTypes.number.isRequired
};

const mapStateToProps = createStructuredSelector({
  pages: state_two_pages
});

export default connect(mapStateToProps, { nextPage })(Pagination);