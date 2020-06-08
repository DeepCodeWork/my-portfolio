import React from 'react';
import ProjectImage from '../../../UI/ProjectImage/ProjectImage';

const Project = (props) => {
    return (
        <div>
            <a href={props.link}><ProjectImage image ={ props.image }></ProjectImage></a>
        </div>
    );
}
 
export default Project;