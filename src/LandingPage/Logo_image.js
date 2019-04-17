import React from 'react';
import logo from '../logo.svg';
import './LandingPage.css';

const LogoImage = () => {
    return (
        <div className="logo-image-container">
            <img src={logo} className="logo-image" alt="logo"/>
        </div>
    )
}

export default LogoImage;