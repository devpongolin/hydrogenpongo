import React from 'react';
import modernDogLogo from '../assets/moderndog.webp';
import travelswithdelaneyLogo from '../assets/travelswithdelaney.webp';
import harvestHostsLogo from '../assets/harvesthosts.webp';
import fmcaLogo from '../assets/fmca.webp';
import likeTheresNoTomorrowLogo from '../assets/liketheresnottomorrow.webp';
import dogsterLogo from '../assets/dogster.webp';
import catsterLogo from '../assets/catster.webp';

const contentData = {
  heading: "Trusted by Top Dogs"
};

const partnersData = [
  { id: 1, name: "Modern Dog Magazine", logo: modernDogLogo, alt: "Modern Dog Magazine" },
  { id: 2, name: "Travels with Delaney", logo: travelswithdelaneyLogo, alt: "Travels with Delaney" },
  { id: 3, name: "Harvest Hosts", logo: harvestHostsLogo, alt: "Harvest Hosts" },
  { id: 4, name: "FMCA", logo: fmcaLogo, alt: "FMCA" },
  { id: 5, name: "Like There's No Tomorrow", logo: likeTheresNoTomorrowLogo, alt: "Like There's No Tomorrow" },
  { id: 6, name: "Dogster", logo: dogsterLogo, alt: "Dogster" },
  { id: 7, name: "Catster", logo: catsterLogo, alt: "Catster" }
];

const ModernDog = () => {
  return (
    <div className="w-full mx-auto pt-[40px] pb-[50px] px-[20px] md:py-[56px] md:px-[65px]">
      <h2 className="md:mb-[37px] mb-[16px] inter gray-medium text-center font-normal text-[14px] md:text-[16px] leading-[164%] tracking-[0] uppercase">
        {contentData.heading}
      </h2>
      <div className="flex flex-wrap gap-[22px] md:hidden justify-center">
        {partnersData.map(({ id, logo, alt }) => (
          <div key={id} className="min-w-0 basis-[calc(33.333%-15px)] flex justify-center">
            <img
              src={logo}
              alt={alt}
              className="h-auto w-auto mx-auto object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <div className="hidden md:flex md:flex-wrap md:justify-center md:gap-[36px]">
        {partnersData.map(({ id, logo, alt }) => (
          <img
            key={id}
            src={logo}
            alt={alt}
            className="h-auto w-auto object-contain"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

export default ModernDog;
