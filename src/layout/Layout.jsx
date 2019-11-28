import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

import './layout.scss';
import LayoutStyled from "./Layout_Styled";

const Layout = ({ children }) => {

  const { site: { siteMetadata: { title } } } = useStaticQuery(getTitle);
  
  return (
    <LayoutStyled>
      <Navbar siteTitle={title} />
        <main>{children}</main>
      <Footer />
    </LayoutStyled>
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