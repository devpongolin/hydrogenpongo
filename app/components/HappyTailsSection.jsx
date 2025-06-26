import React, { useRef } from 'react';

import dog1 from '../assets/human-dog-1.webp';
import dog2 from '../assets/human-dog-2.webp';
import dog3 from '../assets/human-dog-3.webp';
import paw from '../assets/paw-icon.webp';
import icon1 from '../assets/icon_1.webp';
import icon2 from '../assets/icon_2.webp';
import icon3 from '../assets/icon_3.webp';
import arrow1 from '../assets/rightarrow.webp';
import arrow2 from '../assets/leftarrow.webp';

const pairData = [
  {
    image: dog1,
    card: {
      icon: icon1,
      quote: "With Waggle, I can check on my pets anytime and even comfort them with my voice while I'm away.",
      author: "Jackie's Parent",
      handle: '@RVAdventureFam',
    }
  },
  {
    image: dog2,
    card: {
      icon: icon2,
      quote: "With Waggle, I can check on my pets anytime and even comfort them with my voice while I'm away. It's my go-to for dog safety at home!",
      author: "Spark's Parent",
      handle: '@PetParentDiaries',
    }
  },
  {
    image: dog3,
    card: {
      icon: icon3,
      quote: "Waggle gives me peace of mind knowing I can always stay connected with my furry family members no matter where I am.",
      author: "Max's Parent",
      handle: '@DogLoverLife',
    }
  }
];

const HappyTailsSection = () => {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    const container = containerRef.current;
    const scrollAmount = 580;
    if (container) {
      container.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
    }
  };

  const getPaddingTop = (index) => {  
    switch (index) {
      case 0: return 'pt-[5rem] md:pt-[14rem]';
      case 1: return 'md:pt-[12.5rem]';
      case 2: return 'md:pt-[12.5rem]';
      default: return 'md:pt-[14rem]';
    }
  };

  return (
    <div className="bg-[#2c2f36] text-white md:py-[55px] py-[48px] relative w-full">
      <h1 className="lexend font-normal md:text-[47.37px] text-[28px] leading-[100%] text-center md:mb-2">80,000+</h1>
      <h2 className="lexend font-normal md:text-[47.37px] text-[28px] leading-[100%] text-center mb-[19px] md:mb-[34px]">Happy Tails & Counting!</h2>

      <div className="absolute top-[15%] right-8 gap-2 hidden md:flex">
        <button onClick={() => scroll('left')} className="flex items-center justify-center cursor-pointer">
          <img src={arrow2} alt="left arrow" loading="lazy" />
        </button>
        <button onClick={() => scroll('right')} className="flex items-center justify-center cursor-pointer">
          <img src={arrow1} alt="right arrow" loading="lazy" />
        </button>
      </div>

      <div className="overflow-hidden md:px-10">
        <div
          ref={containerRef}
          className="flex gap-6 justify-center px-[23px] md:px-[0] scroll-smooth transition-all duration-300 overflow-x-auto scrollbar-hide"
        >
          {pairData.map((pair, index) => (
            <div key={index} className="flex md:gap-6 gap-[13px] flex-shrink-0">
              <div className="flex-shrink-0 h-[313px] md:h-[400px] rounded-xl">
                <img
                  src={pair.image}
                  alt={`dog-${index}`}
                  className="w-[124px] md:w-full h-full object-cover md:rounded-[12px] rounded-[6px]"
                  loading="lazy"
                />
              </div>
              <div className="bg-white text-black flex-shrink-0 flex flex-col relative md:w-[304px] w-[168px] h-[313px] md:h-[400px] rounded-xl">
                <div className="absolute top-1 left-2">
                  <img src={paw} alt="paw" className="w-[20px] md:w-full" loading="lazy" />
                </div>
                <div className={`flex flex-col justify-end pl-[11px] pr-[16px] md:pl-[16px] md:pr-[18px] ${getPaddingTop(index)}`}>
                  <p className="lato font-normal md:text-base text-[14px] leading-[22px] tracking-normal mb-[5rem] md:mb-[48px]">
                    "{pair.card.quote}"
                  </p>
                  <div>
                    <h3 className="lato font-normal text-[8px] md:text-base md:leading-[24px] md:tracking-normal text-black">{pair.card.author}</h3>
                    <a href="#" className="text-[#6C6F73] lato font-normal text-[6px] md:text-sm md:leading-[20px] md:tracking-[1.5px]">{pair.card.handle}</a>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0">
                  <img
                    src={pair.card.icon}
                    alt="icon"
                    className="w-[50px] md:w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default HappyTailsSection;
