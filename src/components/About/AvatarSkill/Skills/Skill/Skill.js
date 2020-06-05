import React from 'react';
import classes from './Skill.module.css';

const Skill = (props) => {
    return(
        <div className = {classes.skill}>
            <div className={ classes.progress+" progress mt-1"} >
            <div className={classes.title+" progress-bar px-2"}>{props.skillName}</div>
            <div className={classes.bar+" progress-bar progress-bar-striped progress-bar-animated"} style = {{width: props.percent}}></div>
            </div>
        </div>
    );
}

export default Skill;