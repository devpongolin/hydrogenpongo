import React from 'react';
import desktopBg from '../assets/Offer_Image.png';
import mobileBg from '../assets/Offer_Image_mobile.png';

const OfferBanner = () => {
  return (
    <div className="w-full mt-[4%] pb-[40px] md:pb-[56px]">
      <picture className="max-w-[1280px] w-full block mx-auto">
        {/* Mobile image */}
        <source 
          media="(max-width: 767px)" 
          srcSet={mobileBg} 
        />
        {/* Desktop image */}
        <img 
          src={desktopBg} 
          alt="Special Offer" 
          className="w-full h-auto object-cover rounded-[35px]"
        />
      </picture>
    </div>
  );
};

export default OfferBanner;