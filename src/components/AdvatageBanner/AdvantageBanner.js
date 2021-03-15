import React from 'react';
import './AdvantageBanner.scss';

const AdvantageBanner = () => {
    return (
        <div className="advantage">
            <h1>Why Briquette Material?</h1>
            <ul>
                <li>
                    <i className="fas fa-caret-right"></i>
                    <p>Increase the value of your metal chips</p>
                </li>
                <li>
                    <i className="fas fa-caret-right"></i>
                    <p>Allow for recycling of coolant fluids</p>
                </li>
                <li>
                    <i className="fas fa-caret-right"></i>
                    <p>Little residual coolant during transport</p>
                </li>
                <li>
                    <i className="fas fa-caret-right"></i>
                    <p>Eliminate the need for centrifugal dryers</p>
                </li>
                <li>
                    <i className="fas fa-caret-right"></i>
                    <p>Lower handling and storage costs</p>
                </li>
                <li>
                    <i className="fas fa-caret-right"></i>
                    <p>Accurately weigh your briquttes</p>
                </li>
                <li>
                    <i className="fas fa-caret-right"></i>
                    <p>Lower transportation costs</p>
                </li>
            </ul>
            <div className="green"></div>
        </div>
    );
}

export default AdvantageBanner;