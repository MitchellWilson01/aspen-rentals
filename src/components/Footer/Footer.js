import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <div className="footer">
            <p><i className="fas fa-envelope-open-text"></i> 
            &nbsp;&nbsp;&nbsp;admin@aspen-rentals.com</p>
            <p><i className="fas fa-phone"></i> 
            &nbsp;&nbsp;&nbsp;(979) 864-3990</p>
            <p><i className="fas fa-map-marker-alt"></i> 
            &nbsp;&nbsp;&nbsp;23603 N. Hwy 288, Angleton, TX 77515</p>
        </div>
    );
}

export default Footer;