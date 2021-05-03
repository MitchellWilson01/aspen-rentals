import React from 'react';
import './ConditioningBanner.scss';

const ConditioningBanner = () => {
    return (
        <div className="conditioning">
            <h1>Conditioning Chips</h1>
            <div className="container">
            <p>The success of any briquetting process is in the condition of the chips.</p>
            <p>Chip conditioning can also affect the overall throughput of the system you 
            select. Chip density directly affects how many pounds an hour your system will 
            do. Determining your chip density is easy and we would be happy to show you how.</p>
            <p>We recommend chip conditioning (shredding) as well as solids protection when 
            using our equipment. This will ensure that equipment remains in great condition 
            and leaves you with less hassle down the road.</p>
            <p>Aspen Industrial Machine LLC can provide rental equipment to support conditioning 
            or even recommend the right equipment available on the market today.</p>
            <h2>Chips and Turnings to Avoid</h2>
            <ul>
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