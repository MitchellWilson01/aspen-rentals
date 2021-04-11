import React, { useState } from 'react';
import './ServiceCards.scss';

const ServiceCards = () => {
    const initialMobile = window.innerWidth < 1200 ? true : false;
    const [mobile, setMobile] = useState(initialMobile);

    const handleResize = () => {
        if (window.innerWidth < 1200) {
            setMobile(true)
        } else {
            setMobile(false);
        }
    }
    
    window.addEventListener("resize", handleResize);

    return (
        <>
        <div className="service">
            <div className="card">
                {mobile ? <i className="fas fa-cogs"></i> : null}
                <a href="/equipment">
                <div>
                    <h5>Equipment</h5>
                    {mobile ? null : <i className="fas fa-cogs"></i>}
                    <p>A variety of rental equipment at an affordable price</p>
                </div>
                </a>
            </div>
            <div className="card other border">
                {mobile ? <i className="fas fa-tools"></i> : null}
                <a href="/equipment">
                <div>
                    <h5>Repairs</h5>
                    {mobile ? null : <i className="fas fa-tools"></i>}
                    <p>Third party repair services for all major manufacturers</p>
                </div>
                </a>
            </div>
            <div className="card border">
                {mobile ? <i className="fas fa-toolbox"></i> : null}
                <a href="/conditioning">
                <div>
                    <h5>Chip Specification & Testing</h5>
                    {mobile ? null : <i className="fas fa-toolbox"></i>}
                    <p>Test, shred, and protect your chips</p>
                </div>
                </a>
            </div>
            <div className="card other border">
                {mobile ? <i className="fas fa-question"></i> : null}
                <a href="/FAQ">
                <div>
                    <h5>FAQ</h5>
                    {mobile ? null : <i className="fas fa-question"></i>}
                    <p>Frequently asked questions by customers </p>
                </div>
                </a>
            </div>
        </div>
        </>
    );
}

export default ServiceCards;