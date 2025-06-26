import React, {useState} from 'react';

// Desktop background images (3)
import desktopBg1 from '../assets/desktop-bg-1.webp';
import desktopBg2 from '../assets/desktop-bg-2.webp';
import desktopBg3 from '../assets/desktop-bg-3.webp';

// Mobile background images (3)
import mobileBg1 from '../assets/mobile-bg-1.webp';
import mobileBg2 from '../assets/mobile-bg-2.webp';
import mobileBg3 from '../assets/mobile-bg-3.webp';

// Arrow images (2)
import leftArrowImg from '../assets/left-arrow.webp';
import rightArrowImg from '../assets/right-arrow.webp';

// Button arrow image (1)
import btnArrowImg from '../assets/btnarrow.webp';

// Cross images (2 - desktop and mobile)
import crossDesktop from '../assets/cross-desktop.webp';
import crossMobile from '../assets/cross-mobile.webp';

// Icon images for Card 1
import icon1_1 from '../assets/icon1-1.webp';
import icon1_2 from '../assets/icon1-2.webp';
import icon1_3 from '../assets/icon1-3.webp';
import icon1_4 from '../assets/icon1-4.webp';

// Icon images for Card 2
import icon2_1 from '../assets/icon2-1.webp';
import icon2_2 from '../assets/icon2-2.webp';
import icon2_3 from '../assets/icon2-3.webp';
import icon2_4 from '../assets/icon2-4.webp';

// Icon images for Card 3
import icon3_1 from '../assets/icon3-1.webp';
import icon3_2 from '../assets/icon3-2.webp';
import icon3_3 from '../assets/icon3-3.webp';
import icon3_4 from '../assets/icon3-4.webp';

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const slides = [
    {
      id: 1,
      title: 'Road trip ready',
      subtitle: 'When adventure calls, your pet stays safe.',
      description: 'Trusted by 12,000+ RVers nationwide',
      buttonText: 'RV Protection',
      bgImage: desktopBg1,
      mobileBgImage: mobileBg1,
      features: [
        {icon: icon1_1, text: 'Instant temperature alerts'},
        {icon: icon1_2, text: '72-hour backup power'},
        {icon: icon1_3, text: 'Nationwide 4G no WiFi needed'},
        {icon: icon1_4, text: 'Motion alerts for security'},
      ],
    },
    {
      id: 2,
      title: 'Home Safe Home',
      subtitle: "Go about your day. We've got watch duty.",
      description: '',
      buttonText: 'Home Monitoring',
      bgImage: desktopBg2,
      mobileBgImage: mobileBg2,
      features: [
        {icon: icon2_1, text: '24/7 Home monitoring'},
        {icon: icon2_2, text: 'Smart notifications'},
        {icon: icon2_3, text: 'Remote access'},
        {icon: icon2_4, text: 'Emergency alerts'},
      ],
    },
    {
      id: 3,
      title: 'Gifts That Matter',
      subtitle: 'For the pet parent who worries (aka all of them).',
      description: '',
      buttonText: 'Paw-fect gifts',
      bgImage: desktopBg3,
      mobileBgImage: mobileBg3,
      features: [
        {icon: icon3_1, text: 'Perfect pet gifts'},
        {icon: icon3_2, text: 'Worry-free solutions'},
        {icon: icon3_3, text: 'Parent approved'},
        {icon: icon3_4, text: 'Love guaranteed'},
      ],
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="md:py-[55px] px-[80px]">
      <div className="flex items-center justify-between mb-8 md:mb-12 max-w-7xl mx-auto">
        <div className="text-left flex-1">
          <h1 className="text-3xl text-center md:text-5xl font-bold text-gray-800 mb-2">
            We Keep Watch While
          </h1>
          <p className="text-2xl text-center md:text-4xl font-light text-gray-700">
            You're Out & About
          </p>
        </div>
        <div className="flex gap-2 ml-8">
          <button
            onClick={prevSlide}
            className="flex items-center justify-center"
          >
            <img src={leftArrowImg} alt="Previous" />
          </button>
          <button
            onClick={nextSlide}
            className="flex items-center justify-center"
          >
            <img src={rightArrowImg} alt="Next" />
          </button>
        </div>
      </div>

      <div className="relative mx-auto">
        <div className="overflow-hidden rounded-2xl">
          <div
            className="flex gap-7 transition-transform duration-700 ease-in-out"
            style={{transform: `translateX(-${currentSlide * 100}%)`}}
          >
            {slides.map((slide, index) => (
              <div 
                key={slide.id} 
                className="w-full flex-shrink-0"
              >
              <div className="relative h-[600px] md:h-[512px] rounded-2xl overflow-hidden">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center md:hidden"
                  style={{backgroundImage: `url(${slide.mobileBgImage})`}}
                />
                <div
                  className="absolute inset-0 bg-cover bg-center hidden md:block"
                  style={{backgroundImage: `url(${slide.bgImage})`}}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
                
                {/* Close Button */}
                <button className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full flex items-center justify-center">
                  <img
                    src={isMobile ? crossMobile : crossDesktop}
                    alt="Close"
                  />
                </button>

                {/* Content - Always show */}
                <div className="absolute inset-0 z-10 flex items-center p-6 md:p-8">
                    <div className="flex-1 max-w-lg">
                      <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                        {slide.title}
                      </h2>
                      
                      {/* Features Grid */}
                      <div className="grid grid-cols-2 gap-x-6 gap-y-8 mb-8">
                        {slide.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex flex-col items-center text-center"
                          >
                            <div className="mb-3 flex items-center justify-center">
                              <img
                                src={feature.icon}
                                alt={feature.text}
                                className="object-contain"
                              />
                            </div>
                            {/* Full width line */}
                            <div className="h-px bg-white/60 w-full mb-3"></div>
                            <p className="text-white text-xs md:text-sm font-medium leading-tight">
                              {feature.text}
                            </p>
                          </div>
                        ))}
                      </div>
                      
                      <p className="text-white/90 text-lg md:text-xl mb-2 font-medium">
                        {slide.subtitle}
                      </p>
                      {slide.description && (
                        <p className="text-white/80 text-sm mb-6">
                          {slide.description}
                        </p>
                      )}
                      
                      {/* Button with arrow on the side */}
                      <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-200 flex items-center gap-2">
                        {slide.buttonText}
                        <img
                          src={btnArrowImg}
                          alt="Arrow"
                          className="w-4 h-4"
                        />
                      </button>
                    </div>
                  </div>
              </div>
            </div>
                      ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;