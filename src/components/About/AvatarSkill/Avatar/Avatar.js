import React from 'react';
import classes from './Avatar.module.css';

const Avatar = (props) => {
    return (
        <div className = {classes.avatar}>
            <img src={props.avatar}></img> 
        </div>
    );
}

export default Avatar;