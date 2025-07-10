import React, { useState, useRef, useEffect } from 'react';
import two from '../assets/Item → Sleep and Rest.png';
import one from '../assets/Family of 3 generations together.png';

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cards = [0, 1, 2, 3];
  const cardRefs = useRef([]);

  useEffect(() => {
    if (cardRefs.current[activeIndex]) {
      cardRefs.current[activeIndex].scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [activeIndex]);

  return (
    <div className="bg-[#EEDED3] py-8 overflow-x-auto">
      <div className="flex gap-4 px-4 min-w-full">
        {cards.map((index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            onClick={() => setActiveIndex(index)}
            className={`flex-shrink-0 cursor-pointer ${ 
              activeIndex === index ? 'w-[75%]' : 'w-[25%]'
            }`}
          >
            <img
              src={activeIndex === index ? two : one}
              alt=""
              className="w-full h-[100%] rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
