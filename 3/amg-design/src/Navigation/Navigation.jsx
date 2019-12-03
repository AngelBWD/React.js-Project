import React from 'react';
import './Navigation.css';
import Link from '../shared/Link/Link';


function Navigation () {
    return <nav className='Navigation'>
        <ul>
            <img id ='logo' src='logo1.png' alt='my-app-logo'/>
            <Link url='#'>Home</Link>
            <Link url='#'>About Us</Link>
            <Link url='#'>Services</Link>
            <Link url='#'>Our Projects</Link>
            <Link url='#'>Contact Us</Link>
            <Link url='#'>Loggin</Link>
            <Link url='#'>Register</Link>
            <Link url='#'>Logout</Link>
        </ul>
    </nav>;
};

export default Navigation;