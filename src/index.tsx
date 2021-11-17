import React from 'react';
import ReactDOM from 'react-dom';
//import {configureStore} from '@reduxjs/toolkit';

//import {createAPI} from './services/api';

import App from './App';

import './styles/styles.scss';

// const api = createAPI();
//
// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       thunk: {
//         extraArgument: api,
//       },
//     }),
// });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
