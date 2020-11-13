import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, HashRouter} from "react-router-dom";
import * as serviceWorker from './serviceWorker';

// basename={process.env.PUBLIC_URL}
ReactDOM.render(
  <HashRouter>
      <App />
  </HashRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();