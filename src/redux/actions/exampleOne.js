import axios from 'axios';
import { EXAMPLE_ONE } from './types';

export const updateExampleOne = () => dispatch => {
  dispatch({ type: EXAMPLE_ONE.LOADING })
  axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(({ data }) => {
      dispatch({ type: EXAMPLE_ONE.UPDATE, payload: data });
      dispatch({ type: EXAMPLE_ONE.LOADED });
    })
    .catch(err => {
      dispatch({ type: EXAMPLE_ONE.ERROR, payload: err.response.data })
      dispatch({ type: EXAMPLE_ONE.LOADED });
    })
};

export const nextPage = num => ({
  type: EXAMPLE_ONE.NEXT_PAGE,
  payload: num
})
export const prevPage = num => ({
  type: EXAMPLE_ONE.PREVIOUS_PAGE,
  payload: num
})