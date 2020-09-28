import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { DataContextProvider } from './appContext'
import {BrowserRouter as Router} from 'react-router-dom'


ReactDOM.render(
  <DataContextProvider>
    <Router>
    <App />
    </Router>
    </DataContextProvider>,
  document.getElementById('root')
);


