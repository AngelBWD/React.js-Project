import React from 'react';
import './Footer.css';
import Link from '../shared/Link/Link';


function Footer () {
    return <nav className='Footer'>
        <ul>
            <img id ='logo' src='logo1.png' alt='my-app-logo'/>
            <Link url='#'><i class="fab fa-facebook-square"></i></Link>
            <Link url='#'><i class="fab fa-instagram"></i></Link>
            <Link url='#'><i class="fab fa-linkedin"></i></Link>
        </ul>
    </nav>;
};

export default Footer;