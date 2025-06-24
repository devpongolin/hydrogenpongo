import React, { useState, useEffect } from 'react';

import backgroundImage from '../assets/backgrounddog.webp';
import mobileBackgroundImage from '../assets/backgrounddog-mobile.webp';
import roundImage1 from '../assets/round1.webp';
import roundImage2 from '../assets/round2.webp';
import roundImage3 from '../assets/round3.webp';
import arrowImage from '../assets/arrow_2.webp';
import rvLifeLogo from '../assets/rvlife-logo.webp';
import outdoorLifeLogo from '../assets/outdoorlife-logo.webp';
import dogGearLogo from '../assets/doggear-logo.webp';
import temperatureBox from '../assets/temperature-box.webp';

const waggleHomeContent = {
  topBar: {
    leftText: "St. Patrick's Day Sale - 50% OFF",
    rightText: 'Free shipping on US orders $50+ | Easy Returns',
  },
  hero: {
    headline: "Your pet's world,\nalways in view.",
    subheadline: '360° protection with 24/7 peace of mind.',
    features: [
      {
        title: 'Paw-fect Gifts',
        image: roundImage1,
        arrow: arrowImage,
      },
      {
        title: 'Home Monitoring',
        image: roundImage2,
        arrow: arrowImage,
      },
      {
        title: 'RV Safety',
        image: roundImage3,
        arrow: arrowImage,
      },
    ],
    rightImage: {
      image: temperatureBox,
      alt: 'Temperature Monitoring Box',
    },
  },
  footerLogos: {
    label: 'As featured in',
    logos: [
      {alt: 'Outdoor Life', image: outdoorLifeLogo},
      {alt: 'Dog Gear Review', image: dogGearLogo},
      {alt: 'RV Life', image: rvLifeLogo},
    ],
  },
};

export default function WaggleHome() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const messages = [
    waggleHomeContent.topBar.leftText,
    waggleHomeContent.topBar.rightText
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="relative max-w-[1440px] overflow-hidden mx-auto rounded-[40.56px]">
      <img
        src={backgroundImage}
        alt="Background"
        className="mt-[4%] inset-0 w-full h-full object-cover hidden md:block"
        loading="lazy"
      />
      <img
        src={mobileBackgroundImage}
        alt="Mobile Background"
        className="md:mt-[10%] inset-0 w-full h-full object-cover block md:hidden"
        loading="lazy"
      />  
      <div className="absolute top-0 brand-brown white-text-element md:px-[80px] md:py-[23px] p-[6px] md:h-[59px] w-full rounded-t-[40.56px]">
        <div className="hidden md:flex justify-between items-center h-full">
          <span className="lato font-bold text-[18px] leading-[100%] tracking-[0]">
            {waggleHomeContent.topBar.leftText}
          </span>
          <span className="lato font-bold text-[18px] leading-[100%] tracking-[0]">
            {waggleHomeContent.topBar.rightText}
          </span>
        </div>
        <div className="md:hidden flex items-center justify-center h-full overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 flex items-center justify-center px-2"
              >
                <span className="lato font-bold text-[14px] leading-[100%] tracking-[0] text-center whitespace-nowrap">
                  {message}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="responsive-temp-box mobile-flex-center max-w-[1280px] w-full top-[50%] md:top-[60.5%] left-[50%] md:left-[48.5%] translate-x-[-50%] translate-y-[-50%] absolute py-[30px] md:py-[0] md:px-[20px] px-[15px] flex flex-col h-full justify-between md:h-auto md:justify-normal">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="w-full lg:w-2/3 md:mb-12">
            <h2 className="Section-heading text-center md:text-left mb-[12px] md:max-w-[33rem] white-text-element lexend font-medium md:text-[63px] text-[34px] md:leading-[104%] leading-[113%] tracking-[0]">
              {waggleHomeContent.hero.headline}                   
            </h2>
            <p className="text-center Secondary-text md:text-left lato font-medium text-[20px] leading-[144%] tracking-[0] white-text-element md:mb-[40px] mb-[24px]">
              {waggleHomeContent.hero.subheadline}
            </p>
            <div className="md:space-y-3 max-w-sm mx-auto md:mx-0 flex gap-[22px] md:block">
              {waggleHomeContent.hero.features.map((feature, index) => (
                <button
                  key={index}
                  className="bg-white/10 text-white rounded-[46.99px] p-[6.27px] gap-[15px] md:gap-[22px] flex flex-col md:flex-row items-center justify-center md:justify-between"
                >
                  <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-3">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="object-cover"
                      loading="lazy"
                    />
                    <div className="max-w-[5rem] inter font-medium text-[16px] leading-[100%] tracking-[0] text-center md:text-left">
                      {feature.title}
                    </div>
                  </div>
                  <img src={feature.arrow} alt="Arrow" loading="lazy" className='cursor-pointer' />
                </button>
              ))}
            </div>
          </div>
          <div className="flex justify-center lg:justify-end absolute right-[1.5%] bottom-[5.5%] hidden md:block">
            <img
              src={waggleHomeContent.hero.rightImage.image}
              alt={waggleHomeContent.hero.rightImage.alt}
              className='hide-on-mobile-temp'
              loading="lazy"
            />
          </div>
        </div>
        <div className="md:mt-21 mb-[11px] md:mb-[34px]">
          <p className="white-text-element lexendPeta font-light md:text-[11.57px] text-[14px] leading-[100%] tracking-[0] mb-4">
            {waggleHomeContent.footerLogos.label}
          </p>
          <div className="flex items-center justify-start divide-x-[0.72px] divide-[#C3CDD6]">
            {waggleHomeContent.footerLogos.logos.map((logo, index) => (
              <div
                key={index}
                className={index === 0 ? 'md:pr-[19px] pr-[12px]' : 'md:px-[28px] px-[5px]'}
              >
                <img src={logo.image} alt={logo.alt} 
                className='max-w-[94px] md:max-w-none'
                loading="lazy"/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}