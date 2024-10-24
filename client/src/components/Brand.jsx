import React from 'react';
import { bgImage } from '../assets';

const HeroSection = () => {
    return (
        <div
            className="h-96 sm:h-auto p-6 sm:p-32 md:p-32 lg:p-18 xl:p-32 text-white text-center flex items-center justify-center"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'overlay',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
            }}
        >
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold">
                <h1>Our Blog's</h1>
            </div>
        </div>
    ); z
};

export default HeroSection;
