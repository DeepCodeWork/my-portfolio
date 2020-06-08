import React from 'react';
import classes from './Home.module.css';

const Home = () => {

    return (
    <header className = { classes.home }>
        <h1 className="text-light">Hello, I'm <span className = "text-dark font-weight-bold">Deep Kumar Singh.</span> </h1>
        <h1 className="text-light"> I'm a full stack web developer. </h1>
        <div className="btn-group mt-2 mb-4" role="group" aria-label="actionButtons">
        <span className = {classes.icon}><a href="/" className="btn d-block btn-outline-light btn-lg btn-border-2">View my work <i id="arrow-icon" className ={classes.fas +" fa fa-arrow-right"} aria-hidden="true"></i></a></span>
        </div>
    </header>
    );
}

export default Home;