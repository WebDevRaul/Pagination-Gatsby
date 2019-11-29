import React from "react";
import { Link } from "gatsby";

import SEO from "../utils/seo";
import Layout from "../layout/Layout";
import CustomButton from "../components/common/buton/Custom_Button";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className='home d-flex justify-content-center align-items-center'>
      <>
        <Link to='/pagination-one'><CustomButton text='Example 1' isClass='mr-3' /></Link>
        <Link to='/pagination-two'><CustomButton text='Example 2' /></Link>
      </>
    </div>
  </Layout>
)

export default IndexPage;