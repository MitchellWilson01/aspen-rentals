import React from 'react';
import './Services.scss';

const Services = () => {
    return (
        <div className="services">
            <div className="container">
            <h1>Services</h1>
            <p>Third party services available for all metal briquetting systems 
            and shredders.</p>
            <p>All rentals come with installation assistance and start-up 
            training as well as future PM maintenance and support.</p>
            <p>With mobile trucks to service and repair your breakdowns on-site 
            without the additional cost of transports or additional lost time 
            for your equipment operators.</p>
            <p>We understand the costs associated with equipment downtime. You 
            can count on us for fast, reliable repairs and "Preventative 
            Maintenance Programs".</p>
            <p>For repair and service, please contact Charles Arnold 
            ( 612-986-8303 ).</p>
            <h2>Services Available</h2>
            <div className="list">
                <div className="list-r">
                    <i className="fas fa-caret-right"></i>
                    <p>Rebuilds/repairs/maintenance</p>
                </div>
                <div className="list-r">
                    <i className="fas fa-caret-right"></i>
                    <p>Chip conditioning consulting</p>
                </div>
                <div className="list-r">
                    <i className="fas fa-caret-right"></i>
                    <p>Set Up and equipment optimization</p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Services;