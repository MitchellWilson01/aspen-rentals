import React from 'react';
import './ServiceCards.scss';

const ServiceCards = () => {
    return (
        <div className="service">
            <div className="card">
                <i className="fas fa-cogs"></i>
                <div>
                    <h3>Equipment Rental</h3>
                    <p>Wide selection of equipment for rent at an affordable price</p>
                </div>
            </div>
            <div className="card other">
                <i className="fas fa-tools"></i>
                <div>
                    <h3>Repairs & Refurbishing</h3>
                    <p>Third party repair services for all major manufacturers</p>
                </div>
            </div>
            <div className="card">
                <i className="fas fa-toolbox"></i>
                <div>
                    <h3>Custom Modifications</h3>
                    <p>Modifications of equipment to meet customer's needs</p>
                </div>
            </div>
            <div className="card other">
                <i className="fas fa-industry"></i>
                <div>
                    <h3>OEM & Specialty Parts</h3>
                    <p>Genuine parts from reputable major manufactures </p>
                </div>
            </div>
            <div className="card">
                <i className="fas fa-trailer"></i>
                <div>
                    <h3>Trailer Conversions</h3>
                    <p>Easily transfer fixed units onto mobile trailers</p>
                </div>
            </div>
        </div>
    );
}

export default ServiceCards;