import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './About.module.css';
import Features from './Features/Features';
import AvatarSkill from './AvatarSkill/AvatarSkill';
import SectionTitle from '../UI/SectionTitle/SectionTitle';

const About = (props) => {
    return (
    <Aux>
        <div className = {classes.about+" pb-5"}>
            <div className = "container">
                {/* About Heading */}
                <SectionTitle title="About"/>

                {/* About Features */}
                <div className = "row mt-3">
                    <Features/>
                </div>

                {/* Introduction and Skills */}
                <div>
                    <AvatarSkill/>
                </div>
            </div>
        </div>
    </Aux>
    );
}

export default About;