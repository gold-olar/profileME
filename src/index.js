import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './container/App';
import axios from 'axios';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';


axios.defaults.baseURL = 'http://profilemeeapi.herokuapp.com/api';
axios.defaults.headers.post['Content-Type'] = 'application/json';






ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
