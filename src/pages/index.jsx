import React from "react"
import { Link } from "gatsby"

import Layout from "../layout/Layout";
import SEO from "../utils/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/pagination-one/">Go to page 1</Link>
    <Link to="/pagination-two/">Go to page 2</Link>
  </Layout>
)

export default IndexPage