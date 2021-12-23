import React from 'react';
import ReactDOM from 'react-dom';
// import { App } from './App';
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

// define initial state (redux)
let initState = {
  all: ['hummus', 'celery', 'cucumber'] 
}

//create a reducer function
function myReducer (state=initState, action){
  switch(action.type){
    case 'UPDATE_LIST':
      return { ...state, username: action.payload };
    }
}
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
