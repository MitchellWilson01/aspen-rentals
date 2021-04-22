import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className="thing">
            <p><i className="fas fa-user-circle"></i>
            &nbsp;&nbsp;&nbsp;Christian Martinez</p>
            <p><i className="fas fa-envelope-open-text"></i> 
            &nbsp;&nbsp;&nbsp;Christian@aspenindustrialmachines.com</p>
            <p><i className="fas fa-phone"></i> 
            &nbsp;&nbsp;&nbsp;(713)-447-1487</p>
            </div>
        </div>
    );
}

export default Footer;