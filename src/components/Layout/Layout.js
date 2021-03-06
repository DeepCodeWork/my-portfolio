import React from 'react';
import Aux from '../../hoc/Auxi';
import Home from '../Home/Home';
import About from '../About/About';
import ProjectSection from '../ProjectSection/ProjectSection';
import BlogSection from '../BlogSection/BlogSection';
import ContactSection from '../ContactSection/ContactSection';
import FooterSection from '../FooterSection/FooterSection';

const Layout = () => {
    return (
    <Aux>
        <Home/>
        <About id="/about"/>
        <ProjectSection/>
        <BlogSection/>
        <ContactSection/>
        <FooterSection/>
    </Aux>
    );
}

export default Layout;