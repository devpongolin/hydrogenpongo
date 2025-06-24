import React from 'react';
import card1Image from '../assets/card1.webp';
import card2Image from '../assets/card2.webp';
import card3Image from '../assets/card4.webp';
import card4Image from '../assets/card3.webp';
import buttonIcon from '../assets/arrowIcon.webp';

const UltimatePetParent = () => {
  const cardData = [
    {
      id: 1,
      image: card1Image,
      date: 'February 9, 2025',
      title: 'Watch Over Your Pet Anytime:',
      description:
        'Remote monitoring lets you check in on your pet, no matter where you are',
    },
    {
      id: 2,
      image: card2Image,
      date: 'February 9, 2025',
      title: 'Watch Over Your Pet Anytime:',
      description:
        'Remote monitoring lets you check in on your pet, no matter where you are',
    },
    {
      id: 3,
      image: card3Image,
      date: 'February 9, 2025',
      title: 'Watch Over Your Pet Anytime:',
      description:
        'Remote monitoring lets you check in on your pet, no matter where you are',
    },
    {
      id: 4,
      image: card4Image,
      date: 'February 9, 2025',
      title: 'Watch Over Your Pet Anytime:',
      description:
        'Remote monitoring lets you check in on your pet, no matter where you are',
    },
  ];

  return (
    <div className="bg-gradient-to-r from-[#D6E7FF] to-white py-[55px] max-w-[1440px] mx-auto">
      <div className="relative max-w-[1280px] mx-auto mb-[40px]">
        <h1 className="font-[400] text-[47px] leading-[100%] tracking-[0] lexend text-center">
          The Ultimate Pet Parent Guide
        </h1>
        <button className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2 cursor-pointer">
          <span className="font-[700] text-[16px] leading-[100%] tracking-[0] lato">View All</span>
          <img src={buttonIcon} alt="Arrow" loading="lazy" />
        </button>
      </div>

      <div className="flex flex-wrap gap-[20px] justify-center lg:justify-between max-w-[1280px] mx-auto">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="flex flex-col rounded-[32px] overflow-hidden bg-white hover:bg-blue-600 transition-colors duration-300 group shadow-md w-[305px]"
          >
            <img src={card.image} alt={card.title} className="object-cover" loading="lazy" />   
            <div className="px-[28px] py-[19px] flex flex-col flex-grow">
              <p className="font-[400] text-[13.13px] leading-[100%] tracking-[0] lato group-hover:text-white mb-[30px]">
                {card.date}
              </p>
              <h3 className="font-[700] text-[16px] leading-[100%] tracking-[0] lato group-hover:text-white mb-[3px]">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600 group-hover:text-white mb-[30px]">
                {card.description}
              </p>
              <button className="flex items-center gap-2 font-[400] text-[14px] leading-[100%] tracking-[0] align-middle lato group-hover:text-white mt-auto cursor-pointer">
                <span>Read more</span>
                <img src={buttonIcon} alt="Arrow" loading="lazy" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UltimatePetParent;
