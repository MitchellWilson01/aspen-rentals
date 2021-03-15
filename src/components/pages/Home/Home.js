import React from 'react';
import IntroBanner from '../../IntroBanner/IntroBanner';
import ServiceCards from '../../ServiceCards/ServiceCards';
import AdvantageBanner from '../../AdvatageBanner/AdvantageBanner';
import CompatableBanner from '../../CompatableBanner/CompatableBanner';
import ConditioningBanner from '../../ConditioningBanner/ConditioningBanner';

const Home = () => {
    return (
        <div className="home">
            <IntroBanner />
            <ServiceCards />
            <AdvantageBanner />
            <CompatableBanner />
            <ConditioningBanner />
        </div>
    );
}

export default Home;