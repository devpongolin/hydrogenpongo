import React from "react";

import outdoorLifeLogo from "../assets/outdoor_life.png";
import dogGearReviewLogo from "../assets/dog_gear.png";
import rvLifeLogo from "../assets/RVLife_logo.png";
import line from "../assets/Line 57.png";

const FeaturedInSection = () => {
  return (



      <div className="w-full bg-white py-10 flex justify-center items-center">
        <div className="max-w-[1216px] w-full flex flex-col md:flex-row items-center justify-center gap-6 px-4">
          <span className="font-light text-[16px] leading-[100%] tracking-[0px] text-center align-middle font-['Lexend_Peta']">
            As featured in
          </span>

          <div className="flex items-center justify-evenly w-full md:w-auto gap-4 md:gap-10">
            <img src={outdoorLifeLogo} alt="Outdoor Life" className="h-8 object-contain w-[25%] md:w-auto" />
            <img src={line} alt="line" />
            <img src={dogGearReviewLogo} alt="Dog Gear Review" className="object-contain w-[25%] md:w-auto h-[49px]" />
            <img src={line} alt="line" />
            <img src={rvLifeLogo} alt="RV Life" className="object-contain h-[48px] w-[25%] md:w-auto" />
          </div>
        </div>
      </div>
  );
};

export default FeaturedInSection;