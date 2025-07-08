import React, { useState } from 'react';
import desktopBg from '../assets/video_image_desktop.png';
import mobileBg from '../assets/video_image_mobile.png';
import desktopBgwaves from '../assets/Frame 1410125529.png';
import mobileBgwaves from '../assets/Frame 1410125529 (1).png';

import pdpImage from '../assets/image160.webp';
import showImage1 from '../assets/OBJECT1.webp';
import showImage2 from '../assets/OBJECT2.webp';
import showImage3 from '../assets/OBJECT3.webp';

import arrow from '../assets/arrow11.webp';
import cart from '../assets/cart.webp';

const videoBannerData = {
  bannerImages: {
    desktop: desktopBg,
    mobile: mobileBg
  },
  backgroundWaves: {
    desktop: desktopBgwaves,
    mobile: mobileBgwaves
  },
  headline: 'The Must-Have Safety Gear For RVing With Pets.',
  ctaButtons: [
    {
      text: 'Pet Monitor',
      variant: 'primary',
      product: {
        title: 'Waggle Pet Monitor',
        description:
          'Pets left alone in extreme temperatures can suffer from heatstroke or hypothermia. And when Wi-Fi goes down, most monitors fail—leaving pets vulnerable.',
        image: pdpImage,
        features: [
          {
            icon: showImage1,
            text: 'Real-time temperature',
            position: 'absolute left-[8%] top-[18%]'
          },
          {
            icon: showImage2,
            text: 'Instant power loss notifications',
            position: 'absolute right-[2%] top-[24%]'
          },
          {
            icon: showImage3,
            text: 'Cellular-based monitoring',
            position: 'absolute left-[8%] bottom-[12%]'
          }
        ],
        price: '$199.00'
      }
    },
    {
      text: 'RV 4G Camera',
      variant: 'secondary',
      product: {
        title: 'Waggle RV 4G Camera',
        description: 'Leaving your pet alone in your RV feels risky. What if they’re in distress and you don’t know? And with RV theft on the rise, losing your home-on-wheels is a real concern.',
        image: pdpImage,
        features: [
          {
            icon: showImage1,
            text: 'Motion alerts to monitor',
            position: 'absolute left-[8%] top-[18%]'
          },
          {
            icon: showImage2,
            text: 'GPS tracking for theft prevention',
            position: 'absolute right-[2%] top-[24%]'
          },
          {
            icon: showImage3,
            text: 'Heatproof & built for rugged travel',
            position: 'absolute left-[8%] bottom-[12%]'
          }
        ],
        price: '$149.00'
      }
    }
  ],
  priceLabel: 'starting from',
  actionButtons: [
    {
      text: 'View Product',
      icon: arrow,
      variant: 'primary',
      className: 'button-hover2 font-semibold lato px-[32px] py-[18px] flex items-center gap-[10px] bg-[#0085FF] rounded-[55px] text-white text-[18px] h-fit'
    },
    {
      text: 'Add to Cart',
      icon: cart,
      variant: 'secondary',
      className: 'button-hover font-semibold lato px-[32px] py-[18px] flex items-center gap-[10px] bg-[#E5F3FF] rounded-[55px] text-[18px] h-fit'
    }
  ]
};

const VideoBanner = () => {
  const [activeProductIdx, setActiveProductIdx] = useState(0);
  const activeProduct = videoBannerData.ctaButtons[activeProductIdx].product;

  return (
    <div className="w-full">
      <picture className="max-w-[1230px] w-full block mx-auto relative z-1 top-[57px]">
        <source media="(max-width: 767px)" srcSet={videoBannerData.bannerImages.mobile} />
        <img
          src={videoBannerData.bannerImages.desktop}
          alt="Special Offer"
          className="w-full h-auto object-cover rounded-[35px]"
        />
      </picture>
      <div className='bg-[#2E3138] relative bottom-[50px] rounded-tl-[112px] rounded-tr-[112px] pt-[56px]'>
        <picture>
          <source media="(max-width: 767px)" srcSet={videoBannerData.backgroundWaves.mobile} />
          <img
            src={videoBannerData.backgroundWaves.desktop}
            alt="Special Offer"
            className="w-full h-auto object-cover"
          />
        </picture>
        <div>
          <span className="w-full block text-center max-w-[642px] mx-auto text-white font-[500] lexend text-[47.37px] mt-[57px] leading-[1.4]">
            {videoBannerData.headline}
          </span>
          <div className="p-[10px] bg-[#ffffff] flex w-fit mx-auto rounded-[55px] mt-[46px]">
            {videoBannerData.ctaButtons.map((btn, idx) => (
              <button
                key={idx}
                onClick={() => setActiveProductIdx(idx)}
                className={`px-[57px] py-[18px] text-[16px] lato ${
                  activeProductIdx === idx ? 'bg-[#0085ff] text-white' : ''
                } rounded-[55px]`}
              >
                {btn.text}
              </button>
            ))}
          </div>
          <div className="max-w-[612px] w-full mx-auto text-center text-white mt-[27px]">
            <span className="text-[35px] font-[500] lexend">{activeProduct.title}</span>
            <p className="text-[16px] lato my-[5px] mx-[3px]">{activeProduct.description}</p>
          </div>
          <div className="flex flex-col relative items-center max-w-[833px] mx-auto w-full mt-[27px]">
            <img src={activeProduct.image} alt="" className="w-[336px] ml-[5%] z-1" />
            {activeProduct.features.map((feature, idx) => (
              <div key={idx} className={`rounded-[12px] ${feature.position} border-[0.64px] border-[#80808040] flex items-center bg-[#FFFFFF1F] px-[25px] py-[20px] gap-[12px] text-white w-[29%]`}>
                <img src={feature.icon} alt="" />
                <span className="text-[18px] w-[82%]">{feature.text}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-end gap-[14px] mt-[11px]">
            <span className="text-[20px] text-[#FEFDFDCC] lato">{videoBannerData.priceLabel}</span>
            <span className="text-[35px] text-white font-[500] lexend">{activeProduct.price}</span>
          </div>
          <div className="flex justify-center gap-[12px] mt-[18px] pb-[51px]">
            {videoBannerData.actionButtons.map((btn, idx) => (
              <button key={idx} className={btn.className}>
                {btn.text}
                <img src={btn.icon} alt="" className={idx === 0 ? 'w-[10px]' : 'w-[26px] object-none'} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBanner;