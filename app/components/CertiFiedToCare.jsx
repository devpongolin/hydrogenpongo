import React, { useState, useEffect } from 'react';
import heroImageDesktop from '../assets/CTA.webp';
import heroImageMobile from '../assets/CTA(1).webp';

const data = {
  component: "Certifiedtocare",
  images: {
    hero: {
      desktop: heroImageDesktop,
      mobile: heroImageMobile
    }
  },
  textContent: {
    title: "Certified\nto Care",
    buttonText: "Partner with Us"
  }
};

const Certifiedtocare = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const titleLines = data.textContent.title.split('\n');

  return (
    <div className="w-full md:py-[33px] py-[36px] p-5 md:pt-[63px]">
      <div className="max-w-[1216px] mx-auto md:pb-[22px]">
        <div className="relative overflow-hidden rounded-[40px]">
          <img
            src={isMobile ? data.images.hero.mobile : data.images.hero.desktop}
            alt="Woman with dog using laptop"
            loading="lazy"
            className="w-full h-auto"
          />
          <div className={`absolute inset-0 flex ${isMobile ? 'items-end pb-8' : 'items-center'}`}>
            <div className="px-10 md:px-26 md:py-8 max-w-md">
              <h1 className="text-[28px] md:text-[48px] font-medium white-text-element lexend md:leading-[60px] leading-[139%] mb-[10px] md:mb-[17px]">
                {titleLines.map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < titleLines.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h1>
              <button className="button2 button-hover2 light-cream p-4 md:pt-[19px] pr-[32px] md:pb-[22px] pl-[32px] pt-[16px] pb-[13px] rounded-[100px] text-base lato font-bold text-[18px] leading-[100%] tracking-[0] mb-[4px] md:mb-0">
                {data.textContent.buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifiedtocare;
