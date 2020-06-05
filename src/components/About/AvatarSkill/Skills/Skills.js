import React from 'react';
import Skill from './Skill/Skill';

const Skills = (props) => {
    return (
        <div>
            <Skill skillName="CSS" percent="70%"/>
            <Skill skillName="HTML" percent="60%"/>
            <Skill skillName="React" percent="60%"/>
            <Skill skillName="Angular" percent="50%"/>
            <Skill skillName="Node.Js" percent="60%"/>
            <Skill skillName="Spring Boot" percent="70%"/>
            <Skill skillName="Bootstrap" percent="75%"/>
        </div>
    );
}

export default Skills;