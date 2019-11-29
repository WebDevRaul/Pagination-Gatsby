import { createSelector } from 'reselect';
import { postsPerPage, pageNumbers } from '../utils/exampleOne';

const select_example_one_state = state => state.exampleOne;
const select_isLoading_state = state => state.loading.exampleOne;
const select_errors_state = state => state.error.exampleOne.error;

export const state_example_one_data = createSelector(
  [select_example_one_state],
  state => state.data
);

export const state_example_one_posts = createSelector(
  [select_example_one_state],
  state => postsPerPage(state)
);

export const state_example_one_pages = createSelector(
  [select_example_one_state],
  state => pageNumbers(state)
);

export const state_example_one_currentPage = createSelector(
  [select_example_one_state],
  state => state.currentPage
);

export const state_example_one_isLoading = createSelector(
  [select_isLoading_state],
  state => state.set.isLoading
);

export const state_example_one_error = createSelector(
  [select_errors_state],
  state => state
);