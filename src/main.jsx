/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';
import { configureStore, applyMiddleware } from '@reduxjs/toolkit'; // Correct import
import App from './components/App.jsx';
import './index.css';
import { data } from './data';
import { addMovies } from './actions';
import rootReducer from './reducers/index.jsx';

// const logger = function ({ dispatch, getState }) {
//   return function (next) {
//     // currying function
//     return function (action) {
//       console.log('dispatching', action);
//       const result = next(action);
//       console.log('next state', getState());
//       return result;
//     };
//   };
// };

const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    console.log('ACTION_TYPE', action.type);
    next(action);
  };

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), // Applying middleware correctly
});

console.log('store.getState()', store.getState());
store.dispatch(addMovies(data));
console.log('store.getState()', store.getState());

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
