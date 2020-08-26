import React from 'react';
import ReactDOM from 'react-dom';
import App from './Composants/Menu/App';
import './Composants/Menu/App.css';
import "bootstrap/dist/css/bootstrap.min.css";  
import {BrowserRouter as Router} from 'react-router-dom' 

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />  
    </Router>    
  </React.StrictMode>,
  document.getElementById('root')
);


