import React from 'react';
import './IntroBanner.scss';

const IntroBanner = () => {
    return (
        <div className="intro">
            <div className="logoLeaf"></div>
            <div className="logoText"></div>
            <h3 className="rentals">Briquetter Rentals</h3>
            <h3>All the savings,<br/>without all the capital</h3>
            <a href="/about"><button >contact</button></a>
        </div>
    );  
}

export default IntroBanner;

//<h1>ASPEN</h1>