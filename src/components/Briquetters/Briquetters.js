import React, { useState } from 'react';
import './Briquetters.scss';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Briquetters = () => {
    const initialMobile = window.innerWidth < 768 ? true : false;
    const [mobile, setMobile] = useState(initialMobile);

    const handleResize = () => {
        if (window.innerWidth < 768) {
            setMobile(true)
        } else {
            setMobile(false);
        }
    }

    window.addEventListener("resize", handleResize);

    if (mobile) {
        return (
            <div className="briquetters">
                <h2>Briquetters</h2>
                <p>Swipe left on any of the images to learn more about that peice of equipment</p>
                    <Carousel className="card card-1" showIndicators={false} autoPlay={false} showStatus={false} interval={60000}>
                        <div className="image"></div>
                        <div className="description">
                            <p>
                                Capacity (lbs/hr): <br />
                                Aluminum: 1,000 <br />
                                Steel or Cast Iron: 2,000 <br />
                                Copper or Brass 3,200 <br />
                                Briquette Size: 3.5″ x 3.5″ <br />
                                Main Motor: 40hp <br />
                                Main Cylinder Bore: 10″ <br />
                                Total Force Available: 196 tons <br />
                                Power Requirements: 100 amp, 460V w/ Three phase <br />
                                Maximum Pump Pressure: 5,000 psi <br />
                                Machine Weight: 8,500 lbs. <br />
                                Maximum Face Pressure: 40,744 psi <br />
                            </p>
                        </div>
                    </Carousel>
                    <p className="title">ARS 1000</p>
                    <Carousel className="card card-2" showIndicators={false} autoPlay={false} showStatus={false} interval={60000}>
                        <div className="image">
                        </div>
                        <div className="description">
                            <p>
                            Capacity (lbs/hr): <br />
                            Aluminum: 3,000: <br />
                            Steel or Cast Iron: 2,000 <br />
                            Copper or Brass: 3,200 <br />
                            </p>
                        </div>
                    </Carousel>
                    <p className="title">ARS 3000</p>
                    <Carousel className="card card-3" showIndicators={false} autoPlay={false} showStatus={false} interval={60000}>
                        <div className="image">
                        </div>
                        <div className="description">
                            <p>
                                Capacity (lbs/hr): <br /> 
                                Aluminum: 600 <br />
                                Steel or Cast Iron: 1,200 <br />
                                Copper or Brass: 1,600 <br />
                                Briquette Size 2.75″ x 3″ <br />
                                Main Motor: 20hp <br />
                                Main Cylinder Bore: 8″ <br />
                                Total Force Available: 126 tons <br />
                                Power Requirements: 60 amp, 460V w/ Three phase <br />
                                Maximum Pump Pressure: 5,000 psi <br />
                                Machine Weight: 5,000 lbs. <br />
                                Maximum Face Pressure: 42,427 psi
                            </p>
                        </div>
                    </Carousel>
                    <p className="title">ARS 600</p>
                    <Carousel className="card card-4" showIndicators={false} autoPlay={false} showStatus={false} interval={60000}>
                        <div className="image">
                        </div>
                        <div className="description">
                            <p>
                                Capacity (lbs/hr): <br />
                                Aluminum: 600 <br />
                                Steel or Cast Iron: 1,200 <br />
                                Copper or Brass: 1,600
                            </p>
                        </div>
                    </Carousel>
                    <p className="title">PMC 225</p>
                    <Carousel className="card card-5" showIndicators={false} autoPlay={false} showStatus={false} interval={60000}>
                        <div className="image">
                        </div>
                        <div className="description">
                            <p>
                                Capacity (lbs/hr):<br />
                                Aluminum: 1,000 <br />
                                Steel or Cast Iron: 2,000 <br />
                                Copper or Brass: 3,200
                            </p>
                        </div>
                    </Carousel>
                    <p className="title">PMC 275</p>
                    <Carousel className="card card-6" showIndicators={false} autoPlay={false} showStatus={false} interval={60000}>
                        <div className="image">
                        </div>
                        <div className="description">
                            <p>
                                Capacity (lbs/hr): <br />
                                Aluminum: 1,000 <br />
                                Steel or Cast Iron: 2,000 <br />
                                Copper or Brass: 3,200
                            </p>
                        </div>
                    </Carousel>
                    <p className="title">RUF 1100</p>
                    <Carousel className="card card-7" showIndicators={false} autoPlay={false} showStatus={false} interval={60000}>
                        <div className="image">
                        </div>
                        <div className="description">
                            <p>
                                Capacity (lbs/hr): <br />
                                Aluminum: 600 <br />
                                Steel or Cast Iron: 1,200 <br />
                                Copper or Brass: 1,600
                            </p>
                        </div>
                    </Carousel>
                    <p className="title">RUF 15</p>
                    <h2 className="conveyors">Conveyors & Shreddors</h2>
                    <Carousel className="card card-8" showIndicators={false} autoPlay={false} showStatus={false} interval={60000}>
                        <div className="image">
                        </div>
                        <div className="description">
                            <p>
                                Capacity (lbs/hr): <br />
                                Aluminum: 1,000 <br />
                                Steel or Cast Iron: 2,000 <br />
                                Copper or Brass: 3,200
                            </p>
                        </div>
                    </Carousel>
                    <p className="title">600</p>
                    <Carousel className="card card-9" showIndicators={false} autoPlay={false} showStatus={false} interval={60000}>
                        <div className="image">
                        </div>
                        <div className="description">
                            <p>
                                Capacity (lbs/hr): <br />
                                Aluminum: 600 <br />
                                Steel or Cast Iron: 1,200 <br />
                                Copper or Brass: 1,600
                            </p>
                        </div>
                    </Carousel>
                    <p className="title">SHREDDER</p>
            </div>
        );
    } else {
        return (
            <div className="briquetters">
                <h2>Briquetters</h2>
                <div className="card card-1">
                    <div>
                        <h5>ARS 1000</h5>
                        <p>
                            Capacity (lbs/hr): <br />
                            Aluminum: 1,000 <br />
                            Steel or Cast Iron: 2,000 <br />
                            Copper or Brass 3,200 <br />
                            Briquette Size: 3.5″ x 3.5″ <br />
                            Main Motor: 40hp <br />
                            Main Cylinder Bore: 10″ <br />
                            Total Force Available: 196 tons <br />
                            Power Requirements: 100 amp, 460V w/ Three phase <br />
                            Maximum Pump Pressure: 5,000 psi <br />
                            Machine Weight: 8,500 lbs. <br />
                            Maximum Face Pressure: 40,744 psi <br />
                        </p>
                    </div>
                    <div className="image image-1"></div>
                </div>
                <div className="card card-2">
                    <div>
                        <h5>ARS 3000</h5>
                        <p>
                            Capacity (lbs/hr): <br />
                            Aluminum: 3,000: <br />
                            Steel or Cast Iron: 2,000 <br />
                            Copper or Brass: 3,200 <br />
                        </p>
                    </div>
                    <div className="image image-2"></div>
                </div>
                <div className="card card-3">
                    <div>
                        <h5>ARS 600</h5>
                        <p>
                            Capacity (lbs/hr): <br /> 
                            Aluminum: 600 <br />
                            Steel or Cast Iron: 1,200 <br />
                            Copper or Brass: 1,600 <br />
                            Briquette Size 2.75″ x 3″ <br />
                            Main Motor: 20hp <br />
                            Main Cylinder Bore: 8″ <br />
                            Total Force Available: 126 tons <br />
                            Power Requirements: 60 amp, 460V w/ Three phase <br />
                            Maximum Pump Pressure: 5,000 psi <br />
                            Machine Weight: 5,000 lbs. <br />
                            Maximum Face Pressure: 42,427 psi
                        </p>
                    </div>
                    <div className="image image-3"></div>
                </div>
                <div className="card card-4">
                    <div>
                        <h5>PMC 225</h5>
                        <p>
                            Capacity (lbs/hr): <br />
                            Aluminum: 600 <br />
                            Steel or Cast Iron: 1,200 <br />
                            Copper or Brass: 1,600
                        </p>
                    </div>
                    <div className="image image-4"></div>
                </div>
                <div className="card card-5">
                    <div>
                        <h5>PMC 275</h5>
                        <p>
                            Capacity (lbs/hr):<br />
                            Aluminum: 1,000 <br />
                            Steel or Cast Iron: 2,000 <br />
                            Copper or Brass: 3,200
                        </p>
                    </div>
                    <div className="image image-5"></div>
                </div>
                <div className="card card-6">
                    <div>
                        <h5>RUF 1100</h5>
                        <p>
                            Capacity (lbs/hr):<br />
                            Aluminum: 1,000 <br />
                            Steel or Cast Iron: 2,000 <br />
                            Copper or Brass: 3,200
                        </p>
                    </div>
                    <div className="image image-6"></div>
                </div>
                <div className="card card-7">
                    <div>
                        <h5>RUF 15</h5>
                        <p>
                            Capacity (lbs/hr): <br />
                            Aluminum: 1,000 <br />
                            Steel or Cast Iron: 2,000 <br />
                            Copper or Brass 3,200 <br />
                            Briquette Size: 3.5″ x 3.5″ <br />
                            Main Motor: 40hp <br />
                            Main Cylinder Bore: 10″ <br />
                            Total Force Available: 196 tons <br />
                            Power Requirements: 100 amp, 460V w/ Three phase <br />
                            Maximum Pump Pressure: 5,000 psi <br />
                            Machine Weight: 8,500 lbs. <br />
                            Maximum Face Pressure: 40,744 psi <br />
                        </p>
                    </div>
                    <div className="image image-7"></div>
                </div>
                <div className="card card-8">
                    <div>
                        <h5>600</h5>
                        <p>
                            Capacity (lbs/hr): <br />
                            Aluminum: 600 <br />
                            Steel or Cast Iron: 1,200 <br />
                            Copper or Brass: 1,600
                        </p>
                    </div>
                    <div className="image image-8"></div>
                </div>
                <div className="card card-9">
                    <div>
                        <h5>Name of Thing</h5>
                        <p>
                            Capacity (lbs/hr): <br />
                            Aluminum: 600 <br />
                            Steel or Cast Iron: 1,200 <br />
                            Copper or Brass: 1,600
                        </p>
                    </div>
                    <div className="image image-9"></div>
                </div>
            </div>
        );
    }
}

export default Briquetters;
//