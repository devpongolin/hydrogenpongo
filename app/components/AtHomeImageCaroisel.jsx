import React, { useState, useRef, useEffect } from 'react';
// Asset imports
import d1node1 from '../assets/Extreme temperatures.png';
import d2node2 from '../assets/Power  Security (2).png';
import d3node3 from '../assets/Activity  Tracking.png';
import d4node4 from '../assets/Visual  Check-ins (2).png';
import d5node5 from '../assets/Nutrition  Management.png';

import dnode1 from '../assets/Main Image.png';
import dnode2 from '../assets/Power Security (2).png';
import dnode3 from '../assets/Activity Tracking.png';
import dnode4 from '../assets/Visual Check-ins (2).png';
import dnode5 from '../assets/Nutrition Management.png';

import m1node1 from '../assets/Extreme temperatures.png';
import m2node2 from '../assets/Power  Security (2).png';
import m3node3 from '../assets/Activity  Tracking.png';
import m4node4 from '../assets/Visual  Check-ins (2).png';
import m5node5 from '../assets/Nutrition  Management.png';

import mnode1 from '../assets/Extreme temperatures (1).png';
import mnode2 from '../assets/Power Security (3).png';
import mnode3 from '../assets/Activity Tracking (1).png';
import mnode4 from '../assets/Visual Check-ins (3).png';
import mnode5 from '../assets/Nutrition Management (1).png';

import pdpnodemi1 from '../assets/OBJECT (8).png';
import pdpnodemi2 from '../assets/Group (6).png';
import pdpnodemi3 from '../assets/Fast_Time.png';
import pdpnodemi4 from '../assets/Group (8).png';
import pdpnodemi5 from '../assets/g318.png';

import open from '../assets/cross-mobile.webp';
import close from '../assets/cross-desktop.webp';
import left from '../assets/left-arrow.webp';
import right from '../assets/right-arrow.webp';

const sectionHeading = "The Complete RV Pet Safety System";

const slides = [
  {
    id: 0,
    title: 'Extreme temperatures',
    activeImageDesktop: dnode1,
    inactiveImageDesktop: dnode1,
    activeImageMobile: mnode2,
    inactiveImageMobile: mnode2,
    openIcon: open,
    closeIcon: close,
    mainicon: pdpnodemi1,
    description: 'Prevents emergencies with temperature monitoring',
  },
  {
    id: 1,
    title: 'Power Security',
    activeImageDesktop: dnode2,
    inactiveImageDesktop: dnode2,
    activeImageMobile: mnode1,
    inactiveImageMobile: mnode1,
    openIcon: open,
    closeIcon: close,
    mainicon: pdpnodemi2,
    description: 'Alerts you instantly during outages',
  },
  {
    id: 2,
    title: 'Activity Tracking',
    activeImageDesktop: dnode3,
    inactiveImageDesktop: dnode3,
    activeImageMobile: mnode3,
    inactiveImageMobile: mnode3,
    openIcon: open,
    closeIcon: close,
    mainicon: pdpnodemi3,
    description: 'Shows what they’re up to when you’re gone',
  },
  {
    id: 3,
    title: 'Visual Check-ins',
    activeImageDesktop: dnode4,
    inactiveImageDesktop: dnode4,
    activeImageMobile: mnode4,
    inactiveImageMobile: mnode4,
    openIcon: open,
    closeIcon: close,
    mainicon: pdpnodemi4,
    description: 'See and speak to them from anywhere',
  },
  {
    id: 4,
    title: 'Nutrition Management',
    activeImageDesktop: dnode5,
    inactiveImageDesktop: dnode5,
    activeImageMobile: mnode5,
    inactiveImageMobile: mnode5,
    openIcon: open,
    closeIcon: close,
    mainicon: pdpnodemi5,
    description: 'Ensures they eat properly throughout the day',
  },
];

const AtHomeImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const cardRefs = useRef([]);
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  // ✅ Scroll fix: clamp scroll position so last card doesn't overshoot
  useEffect(() => {
    if (activeIndex !== null && cardRefs.current[activeIndex]) {
      const card = cardRefs.current[activeIndex];
      const parent = card?.parentElement;

      if (parent && card) {
        const offset = card.offsetLeft - parent.offsetLeft;
        const maxScroll = parent.scrollWidth - parent.clientWidth;
        const newScrollLeft = Math.min(offset, maxScroll);

        parent.scrollTo({
          left: newScrollLeft,
          behavior: 'smooth',
        });
      }
    }
  }, [activeIndex]);

  const goToNext = () => {
    if (activeIndex === null || activeIndex >= slides.length - 1) return;
    setActiveIndex(activeIndex + 1);
  };

  const goToPrev = () => {
    if (activeIndex === null || activeIndex <= 0) return;
    setActiveIndex(activeIndex - 1);
  };

  return (
    <div className="bg-[#EEDED3] py-8">
      <div className="flex w-full max-w-[1281px] mx-auto">
        <span className="block text-center font-medium md:font-[400] text-[28px] md:text-[47px] leading-[100%] tracking-[-0.36px] md:tracking-[0] lexend mb-[19px] md:mb-[34px] w-[51%] mx-auto">
          {sectionHeading}
        </span>
        <div className="gap-2 hidden md:flex">
          <button className="flex items-center justify-center" onClick={goToPrev} disabled={activeIndex === 0 || activeIndex === null}>
            <img src={left} alt="left arrow" className={`${activeIndex === 0 || activeIndex === null ? 'opacity-30' : ''}`} />
          </button>
          <button className="flex items-center justify-center" onClick={goToNext} disabled={activeIndex === slides.length - 1 || activeIndex === null}>
            <img src={right} alt="right arrow" className={`${activeIndex === slides.length - 1 || activeIndex === null ? 'opacity-30' : ''}`} />
          </button>
        </div>
      </div>

      <div className="flex gap-4 px-4 max-w-[1440px] mx-auto pl-[20px] md:pl-[79px] overflow-x-auto hide-scrollbar scroll-snap-x snap-mandatory">
        {slides.map((slide, index) => {
          const isActive = activeIndex === index;
          const imageSrc = isActive
            ? (isMobile ? slide.activeImageMobile : slide.activeImageDesktop)
            : (isMobile ? slide.inactiveImageMobile : slide.inactiveImageDesktop);

          return (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              className={`flex-shrink-0 cursor-pointer relative snap-center transition-[height] md:transition-[width] duration-900 ease-in-out ${
                isActive
                  ? 'w-[90%] md:min-w-0 h-[683px] max-w-[1076px] pb-8 md:h-[512px] md:w-[80vw]'
                  : 'h-[388px] w-[80vw] max-w-[1076px] pb-8 md:h-[512px] md:w-[404px]'
              }`}
            >
              <img src={imageSrc} alt="slide" className="w-full h-full object-cover rounded-lg" />

              {isActive && (
                <>
                  <div className="absolute top-[4%] left-[8%] md:top-1/2 md:left-[20%] md:translate-x-[-50%] md:translate-y-[-50%] text-[28px] md:text-[47px] text-white font-semibold w-[60%] md:w-[30%] leading-[1]">
                    <img src={slide.mainicon} alt={`${slide.title} icon`} className="mb-2 w-fit" />
                    {slide.title}
                    <div className="text-white text-[16px] md:text-[18px] font-medium mt-[9px]">
                      {slide.description}
                    </div>
                  </div>

                  <div className="absolute top-[19px] right-[19px]">
                    <img src={slide.closeIcon} alt="close" />
                  </div>
                </>
              )}

              {!isActive && (
                <>
                  <div className="absolute bottom-[32px] text-white text-[37px] px-[32px] py-[38px] font-medium leading-normal">
                    <span className="w-[70%] block leading-[1]">{slide.title}</span>
                  </div>
                  <div className="absolute top-[22px] right-[22px]">
                    <img src={slide.openIcon} alt="open" />
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex md:hidden justify-center mt-4 gap-[6px]">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className="w-[8px] h-[8px] rounded-full"
            style={{ backgroundColor: activeIndex === idx ? '#AF7A56' : '#FFFFFF' }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AtHomeImageCarousel;
