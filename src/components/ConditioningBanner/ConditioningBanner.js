import React from 'react';
import './ConditioningBanner.scss';

const ConditioningBanner = () => {
    return (
        <div className="conditioning">
            <h1>Conditioning Chips</h1>
            <div className="container">
            <p>We recommend chip conditiong (shredding) as well as solids 
            protection when using our equipment. This will ensure that equipment 
            remains in great condition and leaves you with less hastle down the
            road.</p>
            <p>Aspen Industrial Machines can provide shredders and ferrous 
            solids protection as a rental option.</p>
            <h2>Chips and Turnings to Avoid</h2>
            <ul>
                <li>
                    <i className="fas fa-caret-right"></i>
                    <p>Magnesium</p>
                </li>
                <li>
                    <i className="fas fa-caret-right"></i>
                    <p>Bolts, screws, nuts, etc.</p>
                </li>
                <li>
                    <i className="fas fa-caret-right"></i>
                    <p>Pieces larger than 1/2 inch</p>
                </li>
                <li>
                    <i className="fas fa-caret-right"></i>
                    <p>Tangled "Rats Nests" turnings </p>
                </li>
            </ul>
            <h2>Examples of "Rats Nests"</h2>
            <div className="container-images">
                <div className="rats"></div>
                <div className="rats2"></div>
            </div>
            </div>
        </div>
    );
}

export default ConditioningBanner;