import React from 'react';
import classes from './ProjectImage.module.css';

const ProjectImage = (props) => {
    return (
        <div className = { classes.projectImage }>
            <img src={props.image}></img>
        </div>
    );
}

export default ProjectImage;