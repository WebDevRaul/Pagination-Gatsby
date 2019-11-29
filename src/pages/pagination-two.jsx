import React from "react";

import Layout from "../layout/Layout";
import SEO from "../utils/seo";
import Search from "../components/exampleTwo/search/Search";
import List from "../components/exampleTwo/List";
import Pagination from "../components/exampleTwo/pagination/Pagination";

const PaginationTwo = () => (
  <Layout>
    <SEO title="Pagination two" />
    <Search />
    <List />
    <Pagination />
  </Layout>
)

export default PaginationTwo;