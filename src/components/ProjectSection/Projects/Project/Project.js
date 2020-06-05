import React from 'react';
import ProjectImage from '../../../UI/ProjectImage/ProjectImage';

const Project = (props) => {
    return (
        <div>
            <ProjectImage image ={ props.image }></ProjectImage>
        </div>
    );
}
 
export default Project;