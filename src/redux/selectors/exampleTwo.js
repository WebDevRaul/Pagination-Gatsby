import { createSelector } from 'reselect';

const select_two_state = state => state.exampleTwo;
const select_isLoading_state = state => state.loading.exampleTwo;
const select_errors_state = state => state.error.exampleTwo.error;

export const state_two_data = createSelector(
  [select_two_state],
  state => state.results
);

export const state_two_pages = createSelector(
  [select_two_state],
  state => state.total_pages
);

export const state_two_isLoading = createSelector(
  [select_isLoading_state],
  state => state.isLoading
);

export const state_two_error = createSelector(
  [select_errors_state],
  state => state
);