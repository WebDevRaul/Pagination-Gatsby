import { EXAMPLE_ONE } from '../actions/types';

const INITIAL_STATE = {
  data: [],
  currentPage: 1,
  postsPerPage: 10
};

const exampleOne = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch(action.type) {
    case EXAMPLE_ONE.UPDATE:
      return { ...state, data: payload };
    case EXAMPLE_ONE.NEXT_PAGE:
    case EXAMPLE_ONE.PREVIOUS_PAGE:
      return { ...state, currentPage: payload }
    default:
      return state;
  };
};

export default exampleOne;