import React from 'react';
import classes from './Feature.module.css';

const Feature = (props) => {
    return (
        <div className = { classes.feature } id="check">
            <div className = {classes.rotate+" justify-content-center p-3"}>
                <i className = {classes.mdi+props.icon}></i>
                <h5><strong>{props.title}</strong></h5>
                <p>{props.body}</p>
            </div>
        </div>
    );
}

export default Feature;