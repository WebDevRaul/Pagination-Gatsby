import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';
import './layout.scss';
import StyledLayout from "./Styled_Layout";

const Layout = ({ children }) => {

  const { site: { siteMetadata: { title } } } = useStaticQuery(getTitle);
  
  return (
    <StyledLayout>
      <Navbar siteTitle={title} />
        <main>{children}</main>
      <Footer />
    </StyledLayout>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

const getTitle = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Layout;