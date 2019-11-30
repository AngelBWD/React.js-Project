import React from 'react';
import './Navigation.css';
import Link from '../shared/Link/Link';


function Navigation () {
    return <nav className='Navigation'>
        <ul>
            <img id ='logo' src='logo1.png' alt='my-app-logo'/>
            <Link url='#'>Link1</Link>
            <Link url='#'>Link2</Link>
            <Link url='#'>Link3</Link>
            <Link url='#'>rhhrhrhrhrhr</Link>
        </ul>
    </nav>;
};

export default Navigation;