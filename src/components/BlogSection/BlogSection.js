import React from 'react';
import SectionTitle from '../UI/SectionTitle/SectionTitle';
import Blogs from './Blogs/Blogs';
import classes from './BlogSection.module.css';

const BlogSection = () => {
    
    return(
        <div>
            <div className ={classes.blogSection}>
                <div className = "container mb-5">
                    <SectionTitle title = "Blog"/>
                    <Blogs/>
                </div>
            </div>
        </div>
    );

}

export default BlogSection;