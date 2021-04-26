import React, { useState } from 'react';
import './Footer.scss';

const Footer = () => {
    const initialMobile = window.innerWidth < 870 ? true : false;
    const [mobile, setMobile] = useState(initialMobile);

    const handleResize = () => {
        if (window.innerWidth < 870) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    }

    const logo = <div className="logo"></div>
    const buttons = <div className="buttons">
                        <a href="/about"><button className="contact">Contact</button></a>
                        <a href="/"><button className="home">Home</button></a>
                    </div>

    window.addEventListener("resize", handleResize);

    return (
        <div className="footer">
            {mobile ? null : buttons}
            {mobile ? null : logo}
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