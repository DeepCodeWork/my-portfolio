import React from 'react';
import classes from './Navbar.module.css';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
import ReactProjects from '../Projects/ReactProjects/ReactProjects';
import HtmlCssProjects from '../Projects/HtmlCssProjects/HtmlCssProjects';
import Projects from '../Projects/Projects';

const Navbar = () => {
    return (
        <div>
            <div className = {classes.navbar+" btn-group"}>
                <Link to="/" exact><button className = "btn">Html/Css</button></Link>

                <Link to="/react"><button className = "btn">React</button></Link>

                <Link to="/angular"><button className = "btn">Angular</button></Link>
                
                <Link to="/node"><button className = "btn">NodeJS</button></Link>
                
                <Link to="/spring"><button className = "btn">Spring</button></Link>
            </div>
            
            <div className="row">
                <Projects>
                <Route path="/" exact component={HtmlCssProjects}/>
                <Route path="/react" component={ReactProjects}/>
                </Projects>
            </div>
            </div>
    );
}

export default Navbar;