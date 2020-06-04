import React from 'react';
import Feature from './Feature/Feature';
import classes from './Features.module.css'

const Features = (props) => {

    return (
        <div className = {classes.features+" d-flex flex-row"}>
            <div className = "col-lg-3">
                <Feature icon = " mdi mdi-speedometer"
                    title = "Fast"
                    body = "Fast load times and lag free interaction, my highest priority."></Feature>
            </div>
            <div className = "col-lg-3">
                <Feature icon = " mdi mdi-cellphone-link"
                    title = "Responsive"
                    body = "My layouts will work on any device, big or small any size"></Feature>
            </div>
            <div className = "col-lg-3">
                <Feature icon = " mdi mdi-lightbulb"
                    title = "Intuitive"
                    body = "Strong preference for easy to use, intuitive UX/UI."></Feature>
            </div>
            <div className = "col-lg-3">    
                <Feature icon = " mdi mdi-rocket"
                title = "Dynamic"
                body = "Websites don't have to be static, I love making pages come to life."></Feature>
            </div>
        </div>
    );
}

export default Features;