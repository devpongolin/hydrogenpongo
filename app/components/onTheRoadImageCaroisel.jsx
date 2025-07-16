import React, { useState, useRef, useEffect } from 'react';
// Asset imports...
import d1node1 from '../assets/Cold ProtectionSmall.png';
import d2node2 from '../assets/Power Security.png';
import d3node3 from '../assets/Man wearing an Oura Ring while running outside (2).png';
import d4node4 from '../assets/Man wearing an Oura Ring while running outside (3).png';
import d5node5 from '../assets/Man wearing an Oura Ring while running outside (4).png';

import dnode1 from '../assets/Cold Protection.png';
import dnode2 from '../assets/Power Security (1).png';
import dnode3 from '../assets/Break-in Detection.png';
import dnode4 from '../assets/Visual Check-ins.png';
import dnode5 from '../assets/GPS Tracking.png';

import m1node1 from '../assets/Cold Protectionmobile.png';
import m2node2 from '../assets/Power  Security.png';
import m3node3 from '../assets/Break-in  Detection.png';
import m4node4 from '../assets/Visual  Check-ins.png';
import m5node5 from '../assets/GPS  Tracking.png';

import mnode1 from '../assets/ColdProtectionm2.png';
import mnode2 from '../assets/Power  Security (1).png';
import mnode3 from '../assets/Break-in  Detection (1).png';
import mnode4 from '../assets/Visual  Check-ins (1).png';
import mnode5 from '../assets/GPS  Tracking (1).png';

import pdpnode1 from '../assets/Break-in Detection (1).png';
import pdpnode2 from '../assets/Break-in Detection (2).png';
import pdpnode3 from '../assets/Break-in Detection (3).png';
import pdpnode4 from '../assets/Visual Check-ins (1).png';
import pdpnode5 from '../assets/GPS Tracking (1).png';

import pdpnodemi1 from '../assets/OBJECT (8).png';
import pdpnodemi2 from '../assets/Group (6).png';
import pdpnodemi3 from '../assets/Group (7).png';
import pdpnodemi4 from '../assets/Group (8).png';
import pdpnodemi5 from '../assets/OBJECT (9).png';

import open from '../assets/cross-mobile.webp';
import close from '../assets/cross-desktop.webp';
import left from '../assets/left-arrow.webp';
import right from '../assets/right-arrow.webp';

const sectionHeading = "The Complete RV Pet Safety System";

const slides = [
  {
    id: 0,
    title: 'Heat / Cold Protection',
    activeImageDesktop: dnode1,
    inactiveImageDesktop: d1node1,
    activeImageMobile: mnode2,
    inactiveImageMobile: m2node2,
    openIcon: open,
    closeIcon: close,
    mainicon: pdpnodemi1,
    pdpImage: pdpnode2,
    description: 'Prevents tragedy with instant temperature alerts',
  },
  {
    id: 1,
    title: 'Power Security',
    activeImageDesktop: dnode2,
    inactiveImageDesktop: d2node2,
    activeImageMobile: mnode1,
    inactiveImageMobile: m1node1,
    openIcon: open,
    closeIcon: close,
    mainicon: pdpnodemi2,
    pdpImage: pdpnode1,
    description: 'Notifies you the moment electricity fails',
  },
  {
    id: 2,
    title: 'Break-in Detection',
    activeImageDesktop: dnode3,
    inactiveImageDesktop: d3node3,
    activeImageMobile: mnode3,
    inactiveImageMobile: m3node3,
    openIcon: open,
    closeIcon: close,
    mainicon: pdpnodemi3,
    pdpImage: pdpnode3,
    description: 'Alerts you if someone approaches your RV',
  },
  {
    id: 3,
    title: 'Visual Check-ins',
    activeImageDesktop: dnode4,
    inactiveImageDesktop: d4node4,
    activeImageMobile: mnode4,
    inactiveImageMobile: m4node4,
    openIcon: open,
    closeIcon: close,
    mainicon: pdpnodemi4,
    pdpImage: pdpnode4,
    description: 'See and comfort your pets from anywhere',
  },
  {
    id: 4,
    title: 'GPS Tracking',
    activeImageDesktop: dnode5,
    inactiveImageDesktop: d5node5,
    activeImageMobile: mnode5,
    inactiveImageMobile: m5node5,
    openIcon: open,
    closeIcon: close,
    mainicon: pdpnodemi5,
    pdpImage: pdpnode5,
    description: 'Monitors your RV location for theft protection',
  },
];

const OnTheRoadImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const cardRefs = useRef([]);
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  // ✅ FIX: Ensure active slide scroll stays within visible bounds
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
              className={`flex-shrink-0 cursor-pointer relative snap-center ${isActive ? 'md:w-[81%] w-[90%] min-w-[360px] md:min-w-0' : 'md:w-[31.3%] w-[100%] h-fit md:h-auto'}`}
            >
              <img src={imageSrc} alt="slide" className="w-full h-full object-cover rounded-lg" />

              {/* Active content */}
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
                  <div className="absolute w-[58%] md:w-[33%] right-[-7%] md:right-[-72px] top-[50%] md:top-[17%] rounded-[26px] translate-x-[-50%] translate-y-[-50%] md:translate-x-0 md:translate-y-0">
                    <img src={slide.pdpImage} alt="product" className="absolute top-[18px] left-[-23%] w-[90%]" />
                  </div>
                </>
              )}

              {/* Inactive content */}
              {!isActive && (
                <>
                  <div className="absolute bottom-0 text-white text-[37px] px-[32px] py-[38px] font-medium leading-normal">
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

export default OnTheRoadImageCarousel;
