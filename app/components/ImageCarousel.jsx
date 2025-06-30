import React, { useState, useEffect, useRef } from "react";

import desktopBg1 from "./assets/desktop-bg-1.png";
import desktopBg2 from "./assets/desktop-bg-2.png";
import desktopBg3 from "./assets/desktop-bg-3.png";
import mobileBg1 from "./assets/mobile-bg-2.jpg";
import mobileBg2 from "./assets/mobile-bg-3.jpg";
import mobileBg3 from "./assets/mobile-bg-1.jpg";

import smallCard1 from "./assets/smallCard1.png";
import smallCard2 from "./assets/smallCard2.jpg";
import smallCard3 from "./assets/smallCard3.png";

import icon1_1 from "./assets/icon1-1.png";
import icon1_2 from "./assets/icon1-2.png";
import icon1_3 from "./assets/icon1-3.png";
import icon1_4 from "./assets/icon1-4.png";
import icon2_1 from "./assets/icon2-1.png";
import icon2_2 from "./assets/icon2-2.png";
import icon2_3 from "./assets/icon2-3.png";
import icon2_4 from "./assets/icon2-4.png";
import icon3_1 from "./assets/icon3-1.png";
import icon3_2 from "./assets/icon3-2.png";
import icon3_3 from "./assets/icon3-3.png";
import icon3_4 from "./assets/icon3-4.png";

import btnArrowImg from "./assets/btnarrow.png";
import leftArrow from "./assets/left-arrow.png";
import rightArrow from "./assets/right-arrow.png";
import crossDesktop from "./assets/cross-desktop.png";
import crossMobile from "./assets/cross-mobile.png";
import plusIcon from "./assets/plus-icon (2).png";

import mobileExtra1_1 from "./assets/mobile-extra-1-1.png";
import mobileExtra1_2 from "./assets/mobile-extra-1-22.png";
import mobileExtra2_1 from "./assets/mobile-extra-2-1.png";
import mobileExtra2_2 from "./assets/mobile-extra-2-2.webp";

const ImageCarousel = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [screenSize, setScreenSize] = useState('desktop');
  const [orderedCards, setOrderedCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const originalCards = [
    {
      id: 1,
      title: "Road trip ready",
      description: "When adventure calls, your pet stays safe.Trusted by 12,000+ RVers nationwide",
      buttonText: "RV Protection",
      bigImage: desktopBg1,
      mobileBigImage: mobileBg1,
      smallCardImage: smallCard1,
      features: [
        { icon: icon1_1, text: "Instant temperature alerts" },
        { icon: icon1_2, text: "72-hour backup power" },
        { icon: icon1_3, text: "Nationwide 4G no WiFi needed" },
        { icon: icon1_4, text: "Motion alerts for security" },
      ],
      mobileMiddleImages: [mobileExtra1_1, mobileExtra1_2],
    },
    {
      id: 2,
      title: "Home Safe Home",
      description: "Go about your day. We've got watch duty.",
      buttonText: "Home Monitoring",
      bigImage: desktopBg2,
      mobileBigImage: mobileBg2,
      smallCardImage: smallCard2,
      features: [
        { icon: icon2_1, text: "Real-time temp & humidity tracking" },
        { icon: icon2_2, text: "Smart motion detection" },
        { icon: icon2_3, text: "HD video with two-way audio" },
        { icon: icon2_4, text: "AI feeding monitors" },
      ],
      mobileMiddleImages: [mobileExtra2_1, mobileExtra2_2],
    },
    {
      id: 3,
      title: "Gifts That Matter",
      description: "For the pet parent who worries aka all of them",
      buttonText: "Paw-fect gifts",
      bigImage: desktopBg3,
      mobileBigImage: mobileBg3,
      smallCardImage: smallCard3,
      features: [
        { icon: icon3_1, text: "Ready-to-use systems" },
        { icon: icon3_2, text: "Every budget covered" },
        { icon: icon3_3, text: "Premium gift packaging" },
        { icon: icon3_4, text: "Extended warranties" },
      ],
      mobileMiddleImages: [mobileExtra1_1, mobileExtra1_2],
    },
  ];

  useEffect(() => {
    setOrderedCards([...originalCards]);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize('mobile');
      } else {
        setScreenSize('desktop');
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getCardWidth = (isSelected) => {
    if (isSelected) {
      return screenSize === 'mobile' ? 'w-full' : 'w-[1076px]';
    } else {
      return screenSize === 'mobile' ? 'w-[90%]' : 'w-[320px]';
    }
  };

  const getCardHeight = () => {
    return screenSize === 'mobile' ? 'h-[683px]' : 'h-[512px]';
  };

  const reorderCards = (selectedCardId) => {
    if (screenSize === 'mobile') {
      return [...originalCards];
    }

    const selectedCardIndex = originalCards.findIndex(card => card.id === selectedCardId);
    if (selectedCardIndex === -1) return originalCards;

    if (selectedCardId === 3) {
      return [
        originalCards[1],
        originalCards[2],
      ];
    }

    const reordered = [
      originalCards[selectedCardIndex],
      ...originalCards.filter((_, index) => index !== selectedCardIndex)
    ];

    return reordered;
  };

  const handleCardSelect = (cardId) => {
    setSelectedCard(cardId);

    if (screenSize === 'desktop') {
      const newOrderedCards = reorderCards(cardId);
      setOrderedCards(newOrderedCards);

      if (cardId === 3) {
        setCurrentIndex(160);
      } else {
        setCurrentIndex(0);
      }
    }
  };

  const handleCardDeselect = () => {
    setSelectedCard(null);

    if (screenSize === 'desktop') {
      setCurrentIndex(0);
      setOrderedCards([...originalCards]);
    }
  };

  const goToPrevious = () => {
    if (screenSize === 'mobile') {
      if (selectedCard) {
        handleCardDeselect();
      } else {
        setCurrentIndex(prev => Math.max(0, prev - 1));
      }
    } else {
      if (selectedCard) {
        handleCardDeselect();
        setTimeout(() => {
          const moveAmount = 344;
          setCurrentIndex(prev => Math.max(0, prev - moveAmount));
        }, 50);
      } else {
        const moveAmount = 344;
        setCurrentIndex(prev => Math.max(0, prev - moveAmount));
      }
    }
  };

  const goToNext = () => {
    if (screenSize === 'mobile') {
      if (selectedCard) {
        handleCardDeselect();
      } else {
        setCurrentIndex(prev => Math.min(originalCards.length - 1, prev + 1));
      }
    } else {
      if (selectedCard) {
        handleCardDeselect();
        setTimeout(() => {
          const moveAmount = 344;
          setCurrentIndex(prev => prev + moveAmount);
        }, 50);
      } else {
        const moveAmount = 344;
        setCurrentIndex(prev => prev + moveAmount);
      }
    }
  };

  const getContainerTransform = () => {
    if (screenSize === 'mobile') {
      return {
        transform: `translateX(-${currentIndex * 100}%)`
      };
    } else {
      if (selectedCard === 3) {
        return {
          transform: 'translateX(-10rem)'
        };
      } else {
        return {
          transform: `translateX(-${currentIndex}px)`
        };
      }
    }
  };

  return (
    <div className="py-10 md:py-14 md:px-10 relative" ref={containerRef}>
      <div className="text-center mb-8 md:mb-8 mx-auto flex justify-center items-center">
        <h1 className="lexend Lexend] font-normal md:text-[47px] leading-[100%] tracking-[0] text-[28px]  md:max-w-[30rem] text-gray-800 mb-2 md:mb-8">
          We Keep Watch While You're Out & About
        </h1>
        <div className="hidden md:flex gap-2 ml-8">
          <button className="transition-opacity hover:opacity-80" onClick={goToPrevious}>
            <img src={leftArrow} alt="Left" />
          </button>
          <button className="transition-opacity hover:opacity-80" onClick={goToNext}>
            <img src={rightArrow} alt="Right" />
          </button>
        </div>
      </div>
      <div className="relative overflow-hidden pb-6">
        <div className="flex  md:gap-6 gap-3" style={getContainerTransform()}>
          {orderedCards.map((card, index) => (
            <div
              key={`${card.id}-${selectedCard === card.id ? 'selected' : 'normal'}`}
              className={`flex-shrink-0 ${getCardWidth(selectedCard === card.id)} ${getCardHeight()} transition-all duration-500 ease-out`}
            >
              <div className={`w-full h-full overflow-hidden relative ${selectedCard === card.id ? 'rounded-lg' : 'rounded-xl'} transition-all duration-300`}>
                {selectedCard === card.id ? (
                  <div
                    className="w-full h-full bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${screenSize === 'mobile' ? card.mobileBigImage : card.bigImage})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
                    <button className="absolute top-4 right-4 z-20 transition-opacity hover:opacity-80" onClick={handleCardDeselect}>
                      <img src={screenSize === 'mobile' ? crossMobile : crossDesktop} alt="Close" />
                    </button>

                    <div className="absolute inset-0 pt-4 px-6 pb-7 md:pt-12 md:px-10 md:pb-14 flex h-full flex-col md:flex-row md:justify-between">
                      <div className="flex-1 max-w-lg z-10">
                        <h2 className="max-w-60 font-semibold text-3xl md:text-5xl leading-tight text-white">
                          {card.title}
                        </h2>

                        {screenSize === 'mobile' && selectedCard === card.id && (
                          <div className="relative w-full h-[250px] mb-6">
                            {card.id === 1 && (
                              <>
                                <img
                                  src={mobileExtra1_1}
                                  alt=""
                                  className="absolute z-[1] top-[20%] left-0 w-[120.53px] h-[124px] rounded-lg"
                                />
                                <img
                                  src={mobileExtra1_2}
                                  alt=""
                                  className="absolute top-[25%] right-[15%] w-[203.74px] h-[226.28px] rounded-lg backdrop-blur-[28.32px] border border-white/45"
                                  style={{
                                    background:
                                      "linear-gradient(360deg, rgba(153,153,153,0.45) 39.98%, rgba(255,255,255,0) 100%)",
                                  }}
                                />
                              </>
                            )}

                            {card.id === 2 && (
                              <>
                                <img
                                  src={mobileExtra2_1}
                                  alt=""
                                  className="absolute top-[35%] left-[5%] z-[1] w-[112.05px] h-[142px] rounded-lg"
                                />
                                <img
                                  src={mobileExtra2_2}
                                  alt=""
                                  className="absolute top-[20%] right-[10%]  w-[199px] h-[228px] rounded-lg"
                                  style={{
                                    background:
                                      "linear-gradient(360deg, rgba(153,153,153,0.45) 39.98%, rgba(255,255,255,0) 100%)",
                                  }}
                                />
                              </>
                            )}
                          </div>
                        )}
                        <div className="grid grid-cols-2 pt-10 md:pt-20">
                          {card.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className={`flex items-center p-4 ${idx === 0 || idx === 2 ? "border-r border-white/30" : ""} ${idx < 2 ? "border-b border-white/30" : ""}`}
                            >
                              <img src={feature.icon} alt={feature.text} className="mr-3 object-contain" />
                              <p className="text-white max-w-32 lexend font-normal text-[14px] leading-[124%] tracking-[-0.02px]">
                                {feature.text}
                              </p>
                            </div>
                          ))}
                        </div>

                        <div className={`${screenSize === 'mobile' ? 'block' : 'flex items-center justify-between'} mt-6`}>
                          <p className="text-white/90 max-w-80 lato font-normal text-[18px] leading-[1.44] tracking-[0]">
                            {card.description}
                          </p>

                          {screenSize !== 'mobile' && (
                            <button className="bg-blue-500 button-hover2 text-white inter md:lato font-medium text-[15px] md:font-bold md:text-[14.74px] leading-[1] tracking-[0px] rounded-[81.9px] pt-[14.74px] pr-[26.21px] pb-[13.92px] pl-[26.21px] flex gap-2 ml-4">
                              {card.buttonText}
                              <img src={btnArrowImg} alt="Arrow" />
                            </button>
                          )}
                        </div>

                        {screenSize === 'mobile' && (
                          <div className="flex items-center gap-2 w-full mt-2">
                            <button className="bg-blue-500 hover:bg-blue-600 transition-colors rounded-full py-3 px-4 text-white font-bold text-sm leading-tight tracking-normal flex gap-2">
                              {card.buttonText}
                              <img src={btnArrowImg} alt="Arrow" />
                            </button>
                            <button className="transition-opacity hover:opacity-80" onClick={goToPrevious}>
                              <img src={leftArrow} alt="Left" />
                            </button>
                            <button className="transition-opacity hover:opacity-80" onClick={goToNext}>
                              <img src={rightArrow} alt="Right" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className="w-full h-full bg-cover bg-center cursor-pointer relative group"
                    style={{ backgroundImage: `url(${card.smallCardImage})` }}
                    onClick={() => screenSize === 'desktop' ? handleCardSelect(card.id) : null}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 transition-all duration-300" />
                    <button className="absolute top-4 right-4 rounded-full z-10 transition-transform hover:scale-110" onClick={(e) => {
                      e.stopPropagation();
                      handleCardSelect(card.id);
                    }}>
                      <img src={plusIcon} alt="Expand" className="object-contain" />
                    </button>

                    <div className="md:hidden absolute bottom-6 right-4 flex gap-2 z-20">
                      <button className="transition-opacity hover:opacity-80" onClick={(e) => {
                        e.stopPropagation();
                        goToPrevious();
                      }}>
                        <img src={leftArrow} alt="Left" />
                      </button>
                      <button className="transition-opacity hover:opacity-80" onClick={(e) => {
                        e.stopPropagation();
                        goToNext();
                      }}>
                        <img src={rightArrow} alt="Right" />
                      </button>
                    </div>
                    <div className="absolute bottom-10 left-8 right-0">
                      <h3 className="text-white max-w-55 md:inter md:font-semibold md:text-[47px] text-[37px] lexend font-medium md:leading-[98%] leading-[100%] tracking-[-0.36px] md:tracking-[0] group-hover:text-blue-100 transition-colors">
                        {card.title}
                      </h3>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;