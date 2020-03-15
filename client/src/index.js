import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/layout';
import './index.css'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <div>
        <Route path="/">
            <Layout />
        </Route>
        <Route path="/home">
            <Layout />
        </Route>
        </div>
    </Router>, 
    document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
