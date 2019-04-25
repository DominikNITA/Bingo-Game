import React from 'react';
import './Background.css';
import sign from '../../src/latest.svg';

const RightBanner = () => {
    return(
                <div className="right-banner">
                    <div className="sign-wrapper">
                        <img src={sign} className="sign" alt="sign" />
                    </div>
                </div>
    )
}

export default RightBanner;