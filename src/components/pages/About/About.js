import React from 'react';
import './About.scss';

const About = () => {
    return (
        <div className="about">
            <div className="container">
            <h1>About Aspen</h1>
            <div className="contact-info">

            </div>
            <div className="content">
                <div className="about">
                    <p>Aspen Industrial Machines, LLC. was created to provide rental 
                    briquetting equipment for the manufacturing and recycling industries.</p>
                </div>
                <div className="about">
                    <div className="about1"></div>
                    <p className="p2">Manufacturing Facilities running machine centers and lathes have an 
                    an ongoing need to handle chips and turnings as well as to recycle 
                    coolant fluids.</p>
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