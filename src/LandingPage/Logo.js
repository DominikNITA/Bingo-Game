import React from 'react';
import './Logo_text';
import './Logo_image';
import LogoImage from './Logo_image';
import LogoText from './Logo_text';
import './LandingPage.css'

const Logo = () =>{
    return(
        <div className="Logo">
            <LogoImage/>
            <LogoText/>
        </div>
    )
}

export default Logo;