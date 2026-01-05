import React from 'react';
import Background from './Background';
import RatingBadge from './RatingBadge';
import HeroSection from './HeroSection';
import BottomNav from './BottomNav';

const HomeContainer = () => {
    return (
        <div className="homepage-container" style={{ position: 'relative', minHeight: '100vh', width: '100%' }}>
            <Background />
            <RatingBadge />
            <HeroSection />
            <BottomNav />
        </div>
    );
};

export default HomeContainer;
