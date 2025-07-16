import React, { useState, useRef, useEffect } from 'react';
import two from '../assets/Woman sleeping soundly while wearing an Oura ring.png';
import one from '../assets/Family of 3 generations together (1).png';
import twom from '../assets/Road trip  ready.png';
import onem from '../assets/Family of 3 generations together (2).png';
import open from '../assets/cross-mobile.webp';
import close from '../assets/cross-desktop.webp';
import slidimg from '../assets/Group 6357166 (1).png';
import pdpimg from '../assets/Product Image.png';

import node1 from '../assets/Group (1).png';
import node2 from '../assets/Group (2).png';
import node3 from '../assets/Group (3).png';
import node4 from '../assets/Group (4).png';

import node2di from '../assets/Home Safe Home.png';
import node2mi from '../assets/Item → Wellness and Longevity.png';
import node3di from '../assets/Gifts That Matter.png';
import node3mi from '../assets/Man wearing an Oura Ring while running outside.png';

import node2mobile2 from '../assets/Family of 3 generations together (3).png';
import node2mobile1 from '../assets/Home Safe  Home.png';
import node2slidimg from '../assets/Frame 2085665392 (1).png';
import node2pdpimg from '../assets/Group 1.png';

import node3mobile2 from '../assets/Man wearing an Oura Ring while running outside (1).png';
import node3mobile1 from '../assets/Gifts  That Matter.png';

import left from '../assets/left-arrow.webp';
import right from '../assets/right-arrow.webp';

const sectionHeading = "We Keep Watch While You're Out & About";

const slides = [
  {
    id: 0,
    title: 'Road trip ready',
    activeImageDesktop: two,
    inactiveImageDesktop: one,
    activeImageMobile: twom,
    inactiveImageMobile: onem,
    openIcon: open,
    closeIcon: close,
    slideImage: slidimg,
    pdpImage: pdpimg,
    features: [
      { icon: node1, text: 'Instant temperature alerts' },
      { icon: node2, text: '72-hour backup power' },
      { icon: node3, text: 'Nationwide 4G no WiFi needed' },
      { icon: node4, text: 'Motion alerts for security' },
    ],
    description: 'When adventure calls, your pet stays safe. Trusted by 12,000+ RVers nationwide',
    button: { text: 'RV Protection', link: '#' },
  },
  {
    id: 1,
    title: 'Home Safe Home',
    activeImageDesktop: node2di,
    inactiveImageDesktop: node2mi,
    activeImageMobile: node2mobile1,
    inactiveImageMobile: node2mobile2,
    openIcon: open,
    closeIcon: close,
    slideImage: node2slidimg,
    pdpImage: node2pdpimg,
    features: [
      { icon: node1, text: 'Real-time temp & humidity tracking' },
      { icon: node2, text: 'Smart motion detection' },
      { icon: node3, text: 'HD video with two-way audio' },
      { icon: node4, text: 'AI feeding monitors' },
    ],
    description: 'Go about your day. We`ve got watch duty.',
    button: { text: 'Home Monitoring', link: '#' },
  },
  {
    id: 2,
    title: 'Gifts That Matter',
    activeImageDesktop: node3di,
    inactiveImageDesktop: node3mi,
    activeImageMobile: node3mobile1,
    inactiveImageMobile: node3mobile2,
    openIcon: open,
    closeIcon: close,
    slideImage: '',
    pdpImage: '',
    features: [
      { icon: node1, text: 'Ready-to-use systems' },
      { icon: node2, text: 'Every budget covered' },
      { icon: node3, text: 'Premium gift packaging' },
      { icon: node4, text: 'Extended warranties' },
    ],
    description: 'For the pet parent who worries (aka all of them).',
    button: { text: 'Paw-fect gifts', link: '#' },
  },
];

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const cardRefs = useRef([]);
  const isMobile = window.innerWidth <= 768;

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
        <span className="block text-center font-medium md:font-[400] text-[28px] md:text-[47px] leading-[100%] tracking-[-0.36px] md:tracking-[0] lexend mb-[19px] md:mb-[34px] w-[51%] mx-auto">{sectionHeading}</span>
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
              <img src={imageSrc} alt="" className="w-full h-full object-cover rounded-lg" />

              {/* Active content */}
              <div className={`${isActive ? 'block' : 'hidden'}`}>
                <div className="mt-2 absolute top-[26px] left-[16px] md:top-[50px] md:left-[42px] text-[28px] md:text-[47px] text-white w-full leading-normal flex flex-col justify-between mb-[20px] md:!h-auto" style={{ height: '-webkit-fill-available' }}>
                  <span className="font-semibold w-[60%] md:w-[30%] block leading-[1]">
                    {slide.title}
                  </span>
                  <div className="px-[22px] md:px-0 md:left-[42px] w-full md:w-[46%]">
                    <div className="text-white flex mb-[22px] items-center md:mt-[50px]">
                      <div className="border-r border-r-[#80808070]">
                        {slide.features.slice(0, 2).map((f, i) => (
                          <div key={i} className={`flex px-[3px] py-[0px] md:px-[10px] md:py-[9px] ${i === 0 ? 'border-b border-b-[#80808070]' : ''} gap-[5px] md:gap-[17px]`}>
                            <img src={f.icon} alt="" className="w-[20px] h-[20px] my-auto" />
                            <span className="w-full md:w-[66%] text-[14px]">{f.text}</span>
                          </div>
                        ))}
                      </div>
                      <div>
                        {slide.features.slice(2, 4).map((f, i) => (
                          <div key={i} className={`flex px-[3px] py-[0px] md:px-[10px] md:py-[9px] ${i === 0 ? 'border-b border-b-[#80808070]' : ''} gap-[5px] md:gap-[17px]`}>
                            <img src={f.icon} alt="" className="w-[20px] h-[20px] my-auto" />
                            <span className="w-full md:w-[66%] text-[14px]">{f.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="text-white text-[37px] font-medium flex gap-4 flex-col">
                      <span className="text-[16px] md:text-[18px]">{slide.description}</span>
                      <a href={slide.button.link}>
                        <button className="button-hover2 text-[14px] cursor-pointer px-[26px] py-[14px] bg-[#0085FF] rounded-[55px] text-center flex items-center justify-center w-max">
                          {slide.button.text}
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[19px] right-[19px]">
                  <img src={slide.closeIcon} alt="close" />
                </div>
                <div className="justify-center lg:justify-end absolute md:right-[89px] md:top-[33px] right-[-10%] top-[38%] w-[58%] md:w-[33%] rounded-[26px] translate-x-[-50%] translate-y-[-50%] md:translate-x-0 md:translate-y-0">
                  <img src={slide.slideImage} alt="badge" className="bg-[linear-gradient(360deg,rgba(153,153,153,0.45)_39.98%,rgba(255,255,255,0)_100%)] rounded-[33px]" />
                  <img src={slide.pdpImage} alt="product" className="absolute top-[18px] left-[-23%] w-[44%]" />
                </div>
              </div>

              {/* Inactive content */}
              <div className={`${!isActive ? 'block' : 'hidden'}`}>
                <div className="absolute bottom-0 text-white text-[37px] px-[32px] py-[38px] font-medium leading-normal">
                  <span className="w-[70%] block leading-[1]">
                    {slide.title}
                  </span>
                </div>
                <div className="absolute top-[22px] right-[22px]">
                  <img src={slide.openIcon} alt="open" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex md:hidden justify-center mt-4 gap-[6px]">
        {slides.map((_, idx) => (
          <div key={idx} className="w-[8px] h-[8px] rounded-full" style={{ backgroundColor: activeIndex === idx ? '#AF7A56' : '#FFFFFF' }}></div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
