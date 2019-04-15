import React from 'react';
import './Logo_text';
import './Logo_image';
import Logo_image from './Logo_image';
import Logo_text from './Logo_text';
import './LandingPage.css'

const Logo = () =>{
    return(
        <div className="Logo">
            <Logo_image/>
            <Logo_text/>
        </div>
    )
}

export default Logo;