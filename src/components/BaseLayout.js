import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';

class BaseLayout extends Component{
    render(){
        return (
            <div>
                <div className="nav">
                    <ul>
                    <NavLink exact activeClassName='active' to="/"><button>Home</button></NavLink>
                    <NavLink activeClassName='active'to="/About"><button>About</button></NavLink>
                    <NavLink activeClassName='active'to="/Portfolio"><button>Portfolio</button></NavLink>
                    <NavLink activeClassName='active'to='/Contacts'><button>Contact</button></NavLink>
                    <NavLink activeClassName='active'to='/References'><button>References</button></NavLink>
                    <NavLink activeClassName='active'to='/ThisPage'><button>This Page</button></NavLink>
                    <NavLink activeClassName='active'to='/ThatPage'><button>That Page</button></NavLink>
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