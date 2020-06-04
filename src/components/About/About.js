import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './About.module.css';
import Features from './Features/Features';
import AvatarSkill from '../AvatarSkill/AvatarSkill';

const About = (props) => {

    return (
    <Aux>
        <div className = {classes.about}>
    
            <div className = "container">
                {/* About Heading */}
                <div className = "row justify-content-center">
                    <p className = "display-4 mt-5"><strong>About</strong></p>
                </div>

                {/* About Features */}
                <div className = "row mt-3">
                    <Features></Features>
                </div>
            </div>

            {/* Introduction and Skills */}
                <div className = "container">
                        <AvatarSkill/>
                </div>
            </div>
    </Aux>
    );
}

export default About;