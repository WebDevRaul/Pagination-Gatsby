import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import exampleOne from './exampleOne';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['data', 'movieData']
};

const rootReducer = combineReducers({
  exampleOne
});


export default persistReducer(persistConfig, rootReducer);