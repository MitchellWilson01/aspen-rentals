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
                <div>
                    <h5>Equipment Rental</h5>
                    {mobile ? null : <i className="fas fa-cogs"></i>}
                    <p>Wide selection of equipment for rent at an affordable price</p>
                </div>
            </div>
            <div className="card other border">
                {mobile ? <i className="fas fa-tools"></i> : null}
                <div>
                    <h5>Repairs & Refurbishing</h5>
                    {mobile ? null : <i className="fas fa-tools"></i>}
                    <p>Third party repair services for all major manufacturers</p>
                </div>
            </div>
            <div className="card border">
                {mobile ? <i className="fas fa-toolbox"></i> : null}
                <div>
                    <h5>Custom Modifications</h5>
                    {mobile ? null : <i className="fas fa-toolbox"></i>}
                    <p>Modifications of equipment to meet customer's needs</p>
                </div>
            </div>
            <div className="card other border">
                {mobile ? <i className="fas fa-industry"></i> : null}
                <div>
                    <h5>OEM & Specialty Parts</h5>
                    {mobile ? null : <i className="fas fa-industry"></i>}
                    <p>Genuine parts from reputable major manufactures </p>
                </div>
            </div>
            <div className="card">
                {mobile ? <i className="fas fa-trailer"></i> : null}
                <div>
                    <h5>Trailer Conversions</h5>
                    {mobile ? null : <i className="fas fa-trailer"></i>}
                    <p>Easily transfer fixed units onto mobile trailers</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default ServiceCards;