import { EXAMPLE_ONE } from '../actions/types';

const INITIAL_STATE = {
  exampleOne: {
    error: {}
  },
  exampleTwo: {
    error: {}
  }
};

const loading = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch(action.type) {
    case EXAMPLE_ONE.ERROR:
      return { ...state, exampleOne: { ...state.exampleOne, error: payload } };
    default:
      return state;
  };
};

export default loading;