import React from 'react';
import classes from './ExternalLink.module.css';

const ExternalLink = (props) => {
    return (
        <div className = { classes.link +" bg-dark"}>
            <div>
                <a href={props.link}><i className={props.media}></i></a>
            </div>
        </div>
    );
}

export default ExternalLink;

