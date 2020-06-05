import React from 'react';
import Blog from './Blog/Blog';
import reactBlog from '../../../assets/images/react.jpg';
import angularBlog from '../../../assets/images/AngularBlog.png';
import css from '../../../assets/images/css.jpeg';
import classes from './Blogs.module.css';

const Blogs = () => {
    return (
        <div className={classes.blogs}>
            <div className={" row justify-content-center"}>

                {/* React BLog */}
                <div className = "col-lg-4">
                    <Blog image = {reactBlog}
                        title="React Router v6 Preview"
                        intro="The next major version of React Router, version 6, is just around the corner. We published"
                    />
                </div>

                <div className = "col-lg-4">
                    <Blog image = {angularBlog}
                        title="The Angular Developer Survey"
                        intro="The 2020 Angular Developer Survey ends this week! If you haven’t already, please complete the survey now. It takes only about a minute (82 seconds at the median 😃)."/>
                </div>

                <div className = "col-lg-4">
                    <Blog image = {css}
                        title="Beginner CSS Tips For Your Blog"
                        intro="For many people, their introduction to web design and the wonderful world of CSS is through blogging."/>
                </div>
            </div>
        </div>
    );
}

export default Blogs;