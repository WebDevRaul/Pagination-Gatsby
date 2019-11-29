import { EXAMPLE_TWO } from '../actions/types';

const INITIAL_STATE = {
  results: [],
  page: 0,
  total_results: 0,
  total_pages: 0,
};

const exampleTwo = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch(action.type) {
    case EXAMPLE_TWO.UPDATE:
      return { ...state, ...payload };
    default:
      return state;
  };
};

export default exampleTwo;