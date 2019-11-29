import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateExampleOne } from '../redux/actions/exampleOne';
import { createStructuredSelector } from 'reselect';
import { state_one_data } from '../redux/selectors/exampleOne';
import isEmpty from "../components/common/utils/isEmpty";

import Layout from "../layout/Layout";
import SEO from "../utils/seo"
import List from "../components/exampleOne/List";
import Pagination from "../components/exampleOne/pagination/Pagination";

const PaginationOne = ({ updateExampleOne, data }) => {
  // Fetch data CDM
  useEffect(() => {
    if(isEmpty(data)) updateExampleOne();
    // eslint-disable-next-line
  },[])
  return (
    <Layout>
      <SEO title="Pagination one" />
      <List />
      <Pagination />
  </Layout>
  )
};

PaginationOne.propTypes = {
  updateExampleOne: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired
};

const mapStateToProps = createStructuredSelector({
  data: state_one_data
});

export default connect(mapStateToProps, { updateExampleOne })(PaginationOne);