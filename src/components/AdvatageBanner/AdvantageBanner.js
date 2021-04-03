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
            {mobile ? <h1>Why Briquette Material?</h1> : null}
            <div className="container-list">
            <div>
                {mobile ? null : <h1>Why Briquette Material?</h1>}
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
            </div>
            <div className="green"></div>
            </div>
        </div>
    );
}

export default AdvantageBanner;