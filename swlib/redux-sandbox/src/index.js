import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './components/counter.js';
import reducer from './reducer.js';
import * as actions from './actions.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/app.js';


const store = createStore(reducer);
const { dispatch } = store;

ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
     <App />
   </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

