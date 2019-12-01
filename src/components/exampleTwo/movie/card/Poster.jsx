import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from "gatsby";
import isEmpty from '../../../common/utils/isEmpty';

const Poster = ({ path }) => {
  const data = useStaticQuery(fetch).placeholderImage.childImageSharp.fluid.src
  return (
    <div className='wrapper'>
      {
        !isEmpty(path)
        ? <img src={`https://image.tmdb.org/t/p/w185${path}`} alt={'poster'} width='100%' height='100%' />
        : <img src={data} width='100%' height='100%' />
      }
    </div>
  )
}

Poster.propTypes = {
  path: PropTypes.string
}

const fetch = graphql`
  query {
    placeholderImage: file(relativePath: {eq: "questionMark.jpg"}) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`

export default Poster;