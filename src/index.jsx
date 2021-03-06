import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './modules/reducer/store';

import App from './App';
import GlobalStyles from './modules/styles/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('app')
);
