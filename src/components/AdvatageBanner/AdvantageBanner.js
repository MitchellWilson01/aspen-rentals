import React, { useState } from 'react';
import './AdvantageBanner.scss';

const AdvantageBanner = () => {
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
        <div className="advantage">
            {mobile ? <h1>Why Rent Briquetter Equipment?</h1> : null}
            <div className="container-list">
            <div>
                {mobile ? null : <h1>Why Rent Briquetter Equipment?</h1>}
                <ul>
                    <li>
                        <i className="fas fa-caret-right"></i>
                        <p>No upfront capital costs</p>
                    </li>
                    <li>
                        <i className="fas fa-caret-right"></i>
                        <p>Rental pays for itself by increasing the value of your metal chips</p>
                    </li>
                    <li>
                        <i className="fas fa-caret-right"></i>
                        <p>Creates additional savings by the recycling of coolant fluid</p>
                    </li>
                    <li>
                        <i className="fas fa-caret-right"></i>
                        <p>Eliminate the need for centrifugal dryers</p>
                    </li>
                    <li>
                        <i className="fas fa-caret-right"></i>
                        <p>Significantly lower handling and storage costs</p>
                    </li>
                    <li>
                        <i className="fas fa-caret-right"></i>
                        <p>Accurately weigh your briquttes</p>
                    </li>
                </ul>
            </div>
            <div className="green"></div>
            </div>
        </div>
    );
}

export default AdvantageBanner;