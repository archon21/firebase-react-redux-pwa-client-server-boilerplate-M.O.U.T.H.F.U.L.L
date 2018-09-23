import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import App from './app';
import history from './history'
// import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('app')
);
// registerServiceWorker()
