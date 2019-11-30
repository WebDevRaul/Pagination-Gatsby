import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Poster = ({ path }) => {
  const data = useStaticQuery(fetch).placeholderImage.childImageSharp.fluid
  return (
    <div className='wrapper'>
      <Img fluid={data} />
    </div>
  )
}

Poster.propTypes = {
  path: PropTypes.string
}

const fetch = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "questionMark.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 235) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Poster;