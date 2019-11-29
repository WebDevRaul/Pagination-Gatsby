import { EXAMPLE_ONE, EXAMPLE_TWO } from '../actions/types';

const INITIAL_STATE = {
  exampleOne: {
    isLoading: false
  },
  exampleTwo: {
    isLoading: false
  }
};

const loading = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case EXAMPLE_ONE.LOADING:
      return { ...state, exampleOne: { ...state.exampleOne, isLoading: true } };
    case EXAMPLE_ONE.LOADED:
      return { ...state, exampleOne: { ...state.exampleOne, isLoading: false }};
    case EXAMPLE_TWO.LOADING:
      return { ...state, exampleTwo: { ...state.exampleTwo, isLoading: true } };
    case EXAMPLE_TWO.LOADED:
      return { ...state, exampleTwo: { ...state.exampleTwo, isLoading: false }};
    default:
      return state;
  };
};

export default loading;