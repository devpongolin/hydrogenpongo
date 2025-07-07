import React from 'react';

import desktopBg from '../assets/desktop-bg.webp';
import mobileBg from '../assets/mobile-bg.webp';
import amazonLogo from '../assets/amazon-logo(2).webp';
import starImage from '../assets/star_1.webp';
import iconsvg1 from '../assets/iconsvg33.webp';
import iconsvg2 from '../assets/iconsvg11.webp';
import iconsvg3 from '../assets/iconsvg22.webp';

const productShowcaseContent = {
  background: {
    desktop: desktopBg,
    mobile: mobileBg,
  },
  amazon: {
    logo: amazonLogo,
    star: starImage,
  },
  headline: {
    line1: 'Loved by',
    highlight1: 'Pets,',
    line2: 'Trusted by',
    highlight2: 'Pet Parents',
  },
  stats: [
    {
      count: '1,600+',
      label: 'Global Ratings',
      icon: iconsvg1,
    },
    {
      count: '80,000+',
      label: 'Happy Pet Parents',
      icon: iconsvg2,
    },
    {
      count: '17+',
      label: 'Years of pet protection',
      icon: iconsvg3,
    },
  ],
};

const ProductShowcase = () => {
  const content = productShowcaseContent;

  return (
    <div className="bg-[#EEDED3] Padding-left-right md:py-[55px] py-[40px] md:px-[80px] px-[26px] ">
      <div className="relative overflow-hidden max-w-[1280px] mx-auto w-full">
        <img
          src={content.background.desktop}
          alt="Background Desktop"
          className="border border-gray-300 rounded-[32px] hidden md:block w-full h-full object-cover max-w-[1440px] mx-auto"
        />
        <img
          src={content.background.mobile}
          alt="Background Mobile"
          className="md:hidden w-full h-full object-cover rounded-[22px]"
        />
        <div className="absolute top-0 w-full h-[-webkit-fill-available] items-center md:px-[68px] md:py-[55px] py-[27px] px-[22px] md:min-h-[535px] flex flex-col md:flex-row  md:items-start justify-between gap-8 md:gap-12">
          <div className="flex flex-col">
            <div className="flex items-center mb-6 md:mb-[24px]">
              <img src={content.amazon.logo} alt="Amazon" className='w-[126px] md:w-auto'/>
              <img
                src={content.amazon.star}
                alt="Star Rating"
                className="ml-3 md:ml-3 md:mb-[10px] flex items-center w-[126px] md:w-auto"
              />
            </div>
            <h1 className="lexend font-extralight md:text-[47px] text-[28px] leading-[1.12] tracking-[-0.03em] text-dark-gray mb-2">
              {content.headline.line1}
              <br />
              <span className="font-medium text-dark-gray">
                {content.headline.highlight1}
              </span>
              <br />
              {content.headline.line2}
              <br />
              <span className="font-medium text-dark-gray">
                {content.headline.highlight2}
              </span>
            </h1>
          </div>
          <div className="flex flex-col gap-4 mt-4 md:gap-[17px] md:px-[0px] gap-[8px] w-[262px]">
            {content.stats.map((stat, idx) => (
              <div
                key={idx}
                className="my-dark-gradient-box rounded-[10px] p-[15px] white-text-element"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="lexend font-semibold md:text-[47.37px] text-[28px] leading-[124%] tracking-[-0.02px] mb-[5px]">
                    {stat.count}
                  </span>
                  <img src={stat.icon} alt={stat.label} loading="lazy" />
                </div>
                <p className="lexend font-normal md:text-base text-sm  leading-[124%] tracking-[-0.02px]">
                  {stat.label}
                </p>    
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;