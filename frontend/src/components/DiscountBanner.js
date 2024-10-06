// src/components/DiscountBanner.js
import React from 'react';

const DiscountBanner = () => {
    return (
        <div className="discount-banner-container">
            <div className="discount-banner text-center">
                <p>🎉 Special Offer: Get 20% Off on All Services! 🎉</p>
                <a href="#services" className="cta-button">Book Now</a>
            </div>
        </div>
    );
}

export default DiscountBanner;
