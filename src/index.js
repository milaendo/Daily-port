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
import Contact from './components/Contacts'
import References from './components/References'
import ThisPage from './components/ThisPage'
import ThatPage from './components/ThatPage'

ReactDOM.render(
    <Router>
        <BaseLayout>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/Portfolio" component={Portfolio}/>
                <Route path="/about" component={About}/>
                <Route path="/Contacts" component={Contact}/>
                <Route path="/References" component={References}/>
                <Route path='/ThisPage' component={ThisPage}/>
                <Route path='/ThatPage' component={ThatPage}/>
            </Switch>
        </BaseLayout>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
