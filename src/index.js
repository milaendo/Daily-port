import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BaseLayout from './components/BaseLayout'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'

ReactDOM.render(
    <Router>
        <BaseLayout>
            <Switch>
                <Route path="/Portfolio" component={Portfolio}/>
                <Route path="/about" component={About}/>
                <Route path="/" component={Home}/>
            </Switch>
        </BaseLayout>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
