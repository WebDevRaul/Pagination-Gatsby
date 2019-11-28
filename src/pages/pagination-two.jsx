import React from "react"
import { Link } from "gatsby"

import Layout from "../layout/Layout";
import SEO from "../utils/seo";

const PaginationTwo = () => (
  <Layout>
    <SEO title="Pagination two" />
    <h1>Hi from the pagination one</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default PaginationTwo;