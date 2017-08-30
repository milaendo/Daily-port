import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';

class BaseLayout extends Component{
    render(){
        return (
            <div>
                <div className="nav">
                    <ul>
                    <NavLink to="/"><button>Home</button></NavLink>
                    <NavLink to="/About"><button>About</button></NavLink>
                    <NavLink to="/Portfolio"><button>Portfolio</button></NavLink>
                    <NavLink to='/Contacts'><button>Contact</button></NavLink>
                    <NavLink to='/References'><button>References</button></NavLink>
                    <NavLink to='ThisPage'><button>This Page</button></NavLink>
                    <NavLink to='ThatPage'><button>That Page</button></NavLink>
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