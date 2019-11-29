import React from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';

export default ({ element }) => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      {element}
    </PersistGate>
  </Provider>
);