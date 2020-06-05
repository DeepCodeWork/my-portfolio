import React from 'react';
import SectionTitle from '../UI/SectionTitle/SectionTitle';
import Projects from './Projects/Projects';
import classes from './ProjectSection.module.css';

const ProjectSection = () => {
    return(
        <div className = {classes.projectSection+" bg-light"}>
            <div className = "container">
                <SectionTitle title="Projects"/>
                <Projects/>
            </div>
        </div>
    );
}

export default ProjectSection;