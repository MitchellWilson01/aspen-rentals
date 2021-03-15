import React from 'react';
import './CompatableBanner.scss';

const CompatableBanner = () => {
    return (
        <div className="compatable">        
            <h1>Compatable Metals & Alloys</h1>
            <ul>
                <li>
                    <i className="fas fa-caret-right"></i>
                    <p>Titanium</p>
                </li>
                <li className="other">
                    <i className="fas fa-caret-right"></i>
                    <p>Alluminum</p>
                </li>
                <li className="other">
                    <i className="fas fa-caret-right"></i>
                    <p>Copper</p>
                </li>
            </ul>
            <p>The materials above are those that do not require any special 
            tooling. Samples of your metals can be sent to us to test 
            compatability with our equipment.</p>
            <p className="bottom">A cubic yard of material is <span>required </span>  
            for testing. Reports and briquette samples will be sent back to 
            leaser.</p>
            <div className="copper"></div>
            <div className="alluminum"></div>
        </div>
    );
}

export default CompatableBanner;