import React from 'react';
import Aux from '../../hoc/Aux';
import Home from '../Home/Home';
import About from '../About/About';

const Layout = () => {
    return (
    <Aux>
        <Home/>
        <About/>
    </Aux>
    );
}

export default Layout;