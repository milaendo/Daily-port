import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

class BaseLayout extends Component{
    render(){
        return (
            <div>
                <div className="nav">
                    <ul>
                    <Link to="/"><button>Home</button></Link>
                    <Link to="/About"><button>About</button></Link>
                    <Link to="/Portfolio"><button>Portfolio</button></Link>
                    </ul>
                </div>
            {this.props.children}
            <footer>
            <div>Look at my footer</div>
            </footer>
            </div>
        )
    }
}

export default BaseLayout