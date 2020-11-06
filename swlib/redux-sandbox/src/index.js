import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import reducer from './reducer.js';
import * as actions from './actions.js';
import { createStore, bindActionCreators } from 'redux';



const store = createStore(reducer);
const { dispatch } = store;

/*const bindActionCreator = (creator, dispatch) => (...args) => {
 dispatch(creator(...args));  тоже самое из под капота bindActionCreators
}*/

const { inc, dec, rnd} =  bindActionCreators(actions, dispatch);

document
  .getElementById('inc')
  .addEventListener('click', inc);

document
  .getElementById('dec')
  .addEventListener('click', dec);

document
  .getElementById('rnd')
  .addEventListener('click', () => {
    const payload = Math.floor(Math.random()*10);
    rnd(payload);
  });

const update = () => {
  document
   .getElementById('counter')
   .innerHTML = store.getState();
};

store.subscribe(update);




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
