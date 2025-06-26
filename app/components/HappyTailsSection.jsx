import React, { useRef } from 'react';

import dog1 from '../assets/human-dog-1.webp';
import dog2 from '../assets/human-dog-2.webp';
import dog3 from '../assets/human-dog-3.webp';
import paw from '../assets/paw-icon.webp';
import icon1 from '../assets/icon-1.webp';
import icon2 from '../assets/icon-2.webp';
import icon3 from '../assets/icon-3.webp';
import arrow1 from '../assets/rightarrow.webp';
import arrow2 from '../assets/leftarrow.webp';

const cardData = [
  { type: 'image', image: dog1 },
  {
    type: 'card',
    icon: icon1,
    quote: "With Waggle, I can check on my pets anytime and even comfort them with my voice while I'm away.",
    author: "Jackie's Parent",
    handle: '@RVAdventureFam',
  },
  { type: 'image', image: dog2 },
  {
    type: 'card',
    icon: icon2,
    quote: "With Waggle, I can check on my pets anytime and even comfort them with my voice while I'm away. It's my go-to for dog safety at home!",
    author: "Spark's Parent",
    handle: '@PetParentDiaries',
  },
  { type: 'image', image: dog3 },
  {
    type: 'card',
    icon: icon3,
    quote: "Waggle gives me peace of mind knowing I can always stay connected with my furry family members no matter where I am.",
    author: "Max's Parent",
    handle: '@DogLoverLife',
  }
];

const HappyTailsSection = () => {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    const container = containerRef.current;
    const scrollAmount = 320;
    if (container) {
      container.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
    }
  };

  return (
    <div className="bg-[#2c2f36] text-white py-16 px-4 relative min-h-screen">
      {/* Title and Buttons Section */}
      <div className="text-center mb-10 relative">
        <h1 className="text-5xl font-bold mb-2">80,000+</h1>
        <h2 className="text-3xl font-semibold">Happy Tails & Counting!</h2>

        <div className="absolute top-4 right-8 flex gap-2">
          <button onClick={() => scroll('left')} className="flex items-center justify-center">
            <img src={arrow2} alt="left arrow" />
          </button>
          <button onClick={() => scroll('right')} className="flex items-center justify-center">
            <img src={arrow1} alt="right arrow" />
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="overflow-hidden md:px-10">
        <div
          ref={containerRef}
          className="flex gap-6 scroll-smooth transition-all duration-300 overflow-x-auto scrollbar-hide"
        >
          {cardData.map((item, index) => (
            item.type === 'image' ? (
              <div key={index} className="flex-shrink-0 w-56 h-96 rounded-xl">
                <img
                  src={item.image}
                  alt={`dog-${index}`}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            ) : (
              <div
                key={index}
                className="bg-white text-black flex-shrink-0 flex flex-col p-6 relative w-[304px] h-96 rounded-xl"
              >
                <div className="absolute top-3 left-5">
                  <img src={paw} alt="paw" />
                </div>

                <div className="flex flex-col justify-end px-2 mt-12">
                  <p className="text-gray-700 text-base leading-relaxed mb-6">
                    "{item.quote}"
                  </p>
                  <div>
                    <h3 className="font-semibold text-black text-base">{item.author}</h3>
                    <a href="#" className="text-gray-500 text-sm">{item.handle}</a>
                  </div>
                </div>

                <div className="absolute bottom-7 right-7 bg-white rounded-lg p-2 w-10 h-10">
                  <img src={item.icon} alt="icon" className="w-full h-full object-contain" />
                </div>
              </div>
            )
          ))}
        </div>
      </div>

      {/* Hide Scrollbar CSS */}
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
