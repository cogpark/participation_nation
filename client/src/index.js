import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './components/app'
import './index.css'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import CivicLitRenderer from './components/civicLitRenderer';

ReactDOM.render(
    <>  
        <div class='container'>
            <nav id="toc" class='col-sm-2' > 
                <p class='toc-subhead'><b>VOTING INFO</b></p>
                <div class="toc-item">
                <a href="/voting">Voting</a>
                </div>
                <p class='toc-subhead'><b>WHAT IS THE...</b></p>
                <div class="toc-item"> 
                <a href="/bill-of-rights">Bill of Rights</a>
                </div>
                <div class="toc-item"> 
                <a href="/amendments-eleven-to-twenty-seven">Amendments 11 to 27</a>
                </div>
                <p class='toc-subhead'><b>WHAT IS A...</b></p>
                <div class="toc-item"> 
                <a href="/whats-a-liberal">Liberal</a>
                </div>
                <div class="toc-item"> 
                <a href="/whats-a-conservative">Conservative</a>
                </div>
            </nav>
            <Router>
                <div>
                <Route exact path="/">
                    <App />
                </Route>
                <Route path="/voting">
                    <App />
                </Route>
                <Route path="/bill-of-rights">
                    <CivicLitRenderer url = {'BillOfRights'}/>
                </Route>
                <Route path="/amendments-eleven-to-twenty-seven">
                    <CivicLitRenderer url = {'AllAmendments'}/>
                </Route>
                <Route path="/whats-a-liberal">
                    <CivicLitRenderer url = {'WhatsALiberal'}/>
                </Route>
                <Route path="/whats-a-conservative">
                    <CivicLitRenderer url = {'WhatsAConservative'}/>
                </Route>
                </div>
            </Router>
        </div>
        
    </>,
    document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
