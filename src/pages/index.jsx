import React from "react";

import Layout from "../layout/Layout";
import SEO from "../utils/seo";
import CustomButton from "../components/common/buton/Custom_Button";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className='home d-flex justify-content-center align-items-center'>
      <>
        <CustomButton text='JSON PLACEHOLDER' />
        <CustomButton text='THE MOVIE DB' />
      </>
    </div>
  </Layout>
)

export default IndexPage