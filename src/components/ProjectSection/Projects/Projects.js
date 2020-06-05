import React from 'react';
import Project from './Project/Project';
import html1 from '../../../assets/images/htmlPro1.PNG';
import html2 from '../../../assets/images/htmlPro2.PNG';
import html3 from '../../../assets/images/reactImage1.PNG';
import html4 from '../../../assets/images/reactImage2.PNG'

const Projects = () => {
    return (
        <div>
            <div className = "row mb-3">
                <div className = "col-lg-6">
                    <Project image={html1}/>
                </div>
                <div className = "col-lg-6">
                    <Project image={html2}/>
                </div>
            </div>
        
            <div className = "row">
                <div className = "col-lg-6">
                    <Project image={html3}/>
                </div>
                <div className = "col-lg-6">
                    <Project image={html4}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;