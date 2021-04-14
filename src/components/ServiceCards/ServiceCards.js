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
            {mobile ? null : <h5 className="title">Resources</h5>}
            <div className="card">
                {mobile ? <i className="fas fa-cogs"></i> : null}
                <a href="/equipment">
                <div>
                    {mobile ? null : <i className="fas fa-cogs"></i>}
                    <h5>Equipment</h5>
                    <p>Variety of high-quality and affordable rental equipment</p>
                </div>
                </a>
            </div>
            <div className="card other border">
                {mobile ? <i className="fas fa-tools"></i> : null}
                <a href="/equipment">
                <div>
                    {mobile ? null : <i className="fas fa-tools"></i>}
                    <h5>Repairs</h5>
                    <p>Third party repair services for all major manufacturers</p>
                </div>
                </a>
            </div>
            <div className="card border">
                {mobile ? <i className="fas fa-toolbox"></i> : null}
                <a href="/conditioning">
                <div>
                    {mobile ? null : <i className="fas fa-toolbox"></i>}
                    <h5>Chip Specification</h5>
                    <p>Test, shred, and protect your chips</p>
                </div>
                </a>
            </div>
            <div className="card other border">
                {mobile ? <i className="fas fa-question"></i> : null}
                <a href="/FAQ">
                <div>
                    {mobile ? null : <i className="fas fa-question"></i>}
                    <h5>FAQ</h5>
                    <p>Frequently asked questions by customers </p>
                </div>
                </a>
            </div>
        </div>
        </>
    );
}

export default ServiceCards;