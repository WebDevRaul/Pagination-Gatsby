import axios from 'axios';
import { GATSBY_MOVIE_API_KEY } from '../../config/key';
import { EXAMPLE_TWO } from './types';

export const updateMovie =  movie => dispatch => {
  dispatch({ type: EXAMPLE_TWO.LOADING });
  dispatch({ type: EXAMPLE_TWO.SET_MOVIE, payload: movie });
  axios
    .get(`https://api.themoviedb.org/3/search/movie?api_key=${GATSBY_MOVIE_API_KEY}&query=${movie}`)
    .then(({ data }) => {
      dispatch({ type: EXAMPLE_TWO.UPDATE, payload: data });
      dispatch({ type: EXAMPLE_TWO.LOADED });
    })
    .catch(err => {
      dispatch({ type: EXAMPLE_TWO.ERROR, payload: err.response.data });
      dispatch({ type: EXAMPLE_TWO.LOADED });
    })
}

export const nextPage = ({ movie, selected }) => dispatch => {
  dispatch({ type: EXAMPLE_TWO.LOADING });
  axios
    .get(`https://api.themoviedb.org/3/search/movie?api_key=${GATSBY_MOVIE_API_KEY}&query=${movie}&page=${selected}`)
    .then(({ data }) => {
      dispatch({ type: EXAMPLE_TWO.UPDATE, payload: data });
      dispatch({ type: EXAMPLE_TWO.LOADED });
    })
    .catch(err => {
      dispatch({ type: EXAMPLE_TWO.ERROR, payload: err.response.data });
      dispatch({ type: EXAMPLE_TWO.LOADED });
    })
}