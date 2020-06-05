import React from 'react';
import classes from './Blog.module.css';

const Blog = (props) => {
    return (
        <div className = {classes.blog}>
            <div className = "card">
                <div className = "card-body">
                    <img src = {props.image}></img>
                    <div className = "card-title">
                        <h3 className="text-weight-bold py-1">{props.title}</h3>
                        <p className = "text-truncate py-1">{props.intro}</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Blog;