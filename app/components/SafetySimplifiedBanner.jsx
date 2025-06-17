import React from "react";
import CTA_desktop from "../assets/CTA_desktop.png";
import CTA_mobile from "../assets/CTA_mobile.png";

const SafetySimplifiedBanner = () => {
  return (
    <div className="max-w-[1216px] w-full mx-auto md:!mt-[128px] !mt-[75px]">
      {/* Desktop Image */}
      <img
        src={CTA_desktop}
        alt="Safety Simplified Desktop Banner"
        className="hidden md:block w-full h-auto object-cover"
      />

      {/* Mobile Image */}
      <img
        src={CTA_mobile}
        alt="Safety Simplified Mobile Banner"
        className="block md:hidden w-full h-auto object-cover"
      />
    </div>
  );
};

export default SafetySimplifiedBanner;