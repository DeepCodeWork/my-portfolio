import React from 'react';
import Avatar from './Avatar/Avatar';
import avatarImage from '../../../assets/images/avatar.jpeg';
import classes from './AvatarSkill.module.css';
import Skills from './Skills/Skills';

const AvatarSkill = (props) => {
    return (
            <div className = {classes.avatarSkill+" row flex flex-row justify-content-center mt-5"}>
            
                {/* Avatar */}  
                <div className = {classes.intro+" col-lg-6"}>
                    <Avatar avatar = {avatarImage}/>
                    <h2 className = "p-3"><strong>Who's this guy?</strong></h2>
                    <p>I'm a Full Stack Developer for Cognizant in Kochi, Kerala.
                        I have serious passion for UI effects, creating intuitive, dynamic user experiences.
                        <span className = "text-info">Let's make something special.</span>
                    </p>
                </div>

                {/* Skills Meter */}
                <div className = "col-lg-6">
                    <Skills/>
                </div>
            
            </div>
    );
}

export default AvatarSkill;