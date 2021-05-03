import React, { useState } from 'react';
import './About.scss';

const About = () => {
    const initialMobile = window.innerWidth < 768 ? true : false;
    const [mobile, setMobile] = useState(initialMobile);

    const handleResize = () => {
        if (window.innerWidth < 768) {
            setMobile(true)
        } else {
            setMobile(false);
        }
    }

    const info = <div className="info">
                    <div className="christian">                       
                        <p><i className="fas fa-user-circle"></i> &nbsp; Christian Martinez
                        <br/><i className="fas fa-envelope-open-text"></i> &nbsp; Christian@aspenindustrialmachines.com
                        <br/><i className="fas fa-phone"></i> &nbsp; (713)-447-1487</p>
                    </div>
                    <div className="annah">         
                        <p><i className="fas fa-user-circle"></i> &nbsp; Annah Johnson
                        <br/><i className="fas fa-envelope-open-text"></i> &nbsp; Annah@aspenindustrialmachines.com
                        <br/><i className="fas fa-phone"></i> &nbsp; (512)-740-4092</p>
                        <p></p>
                    </div>
                </div>

    window.addEventListener("resize", handleResize);

    return (
        <div className="about">
            <h1>About Aspen</h1>
            {mobile ? null : info}
            <div className="container">
            <div className="content">
                {mobile ? info : null}
                <div className="about">
                    <p>Aspen Industrial Machines, LLC. was created to provide rental 
                    options in the field of chip processing and management.</p>
                </div>
                <div className="about">
                    <div className="about1"></div>
                    <p className="p2">Briquetting loose and west scrap material has 
                    been a leading processing method for many years, known globally 
                    for increasing scrap valve, volume reduction and liquid recovery.</p>
                </div>
                <div className="about about-mad">
                    <p>For years, there have been companies selling briquetter systems. 
                    However there has not been a "zero captial" rental option. 
                    Now, there is a second option that allows you to rent</p>
                    <p className="p2">top-of-the-line systems providing 
                    all the value of of briquetting your material without the upfront cost.
                    </p>
                    <div className="about2"></div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default About;