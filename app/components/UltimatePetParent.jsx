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
    <div className="custom-radial-blue-bg from-[#D6E7FF] to-white py-[40px] md:py-[55px]">
      <div className="relative max-w-[1280px] mx-auto mb-[40px] px-4 md:px-0">
        <h1 className="text-center font-[500] md:font-[400] text-[28px] md:text-[47px] leading-[100%] tracking-[0] lexend">
          The Ultimate Pet Parent Guide
        </h1>
        <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 items-center gap-2 cursor-pointer">
          <span className="font-[700] text-[16px] leading-[100%] tracking-[0] lato">
            View All
          </span>
          <img src={buttonIcon} alt="Arrow" loading="lazy" />
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto px-4 md:px-0">
        <div className="flex md:flex-wrap md:justify-center gap-[20px] overflow-x-auto pb-4 scrollbar-hide">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="flex-shrink-0 md:flex-shrink md:w-[305px] w-[280px] bg-white rounded-[30px] md:rounded-[32px] overflow-hidden shadow-md transition-colors duration-300 hover:bg-[#0085FF] group"
            >
              <div className="w-full">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="px-[22px] md:px-[28px] py-[17px] md:py-[19px] flex flex-col flex-grow">
                <p className="font-[400] text-[11px] md:text-[13.13px] lato leading-[100%] group-hover:text-white mb-[8px] md:mb-[30px]">
                  {card.date}
                </p>
                <h3 className="font-[700] text-[18px] md:text-[16px] lato leading-[100%] group-hover:text-white mb-[3px]">
                  {card.title}
                </h3>
                <p className="font-medium text-[14px] lato leading-[100%] text-gray-600 group-hover:text-white mb-[11px] md:mb-[30px]">
                  {card.description}
                </p>
                <a
                  href="#"
                  className="flex items-center gap-2 font-[400] text-[14px] lato leading-[100%] group-hover:text-white mt-auto cursor-pointer"
                >
                  <span>Read more</span>
                  <img src={buttonIcon} alt="Arrow" loading="lazy" />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="md:hidden flex justify-center mt-8">
          <div className="flex items-center gap-2 cursor-pointer button-hover2 bg-[#0085FF] text-white px-4 py-2 rounded-full">
            <span className="font-[700] text-[16px] leading-[100%] lato">
              View All
            </span>
            <img src={buttonIcon} alt="Arrow" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimatePetParent;
