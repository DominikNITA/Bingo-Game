import React from 'react';
import './Background.css';
import sign from '../../src/latest.svg';

const RightBanner = () => {
    return(
        <div className="right-banner">
            <img src={sign} className="sign" alt="sign" />
        </div>
    )
}

export default RightBanner;