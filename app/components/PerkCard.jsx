import React from 'react';
import giftImage from '../assets/event-rep1.webp';
import perksImage from '../assets/perks.webp';
import spotlightImage from '../assets/spotlight.webp';
import rewardsImage from '../assets/rewards.webp';
import eventsImage from '../assets/gift.webp';
import arrowImage from '../assets/arrow11.webp';

const perksData = {
  title: "Perks? We've Got Those",
  perks: [
    {
      id: "welcome-gift",
      icon: giftImage,
      title: "$100 <br> Welcome Gift",
      description: "Get a $100 gift card after your first full month with us."
    },
    {
      id: "exclusive-perks",
      icon: perksImage,
      title: "Exclusive Perks",
      description: "Enjoy early product access, limited-edition Waggle, and insider deals."
    },
    {
      id: "spotlight-opportunities",
      icon: spotlightImage,
      title: "Spotlight Opportunities",
      description: "Be featured on our website, socials, and newsletters."
    },
    {
      id: "ongoing-rewards",
      icon: rewardsImage,
      title: "Ongoing Rewards",
      description: "Earn bonuses and recognition for referrals and great content."
    },
    {
      id: "event-sponsorships",
      icon: eventsImage,
      title: "Event Sponsorships",
      description: "Represent Waggle at RV shows, pet expos, and more."
    }
  ],
  joinCard: {
    title: "Join <br> the Pack",
    icon: arrowImage,
    iconAlt: "Join arrow"
  }
};

const PerkCard = ({ icon, title, description, isSecond, isFirst, cardIndex }) => (
  <div
    className={`custom-background md:pt-[28px] pt-[15px] md:pr-[28px] pr-[14px] pl-[14px] md:pl-[28px] rounded-[20px] border my-class flex flex-col w-full md:h-[290px] h-[221px] card-padding
      ${isSecond ? 'md:pb-[28px]' : 'md:pb-[51px]'}
      ${[1, 3, 5].includes(cardIndex) ? 'pb-[35px]' : 'pb-[15px]'}
    `}
  >
    <div className="md:mb-[28px] mb-[21px]">
      <img
        src={icon}
        alt="Perk icon"
        className="w-[38.5px] h-[38.5px] md:w-auto md:h-auto"
        loading="lazy"
      />
    </div>
    <h3
      className={`font-medium md:text-[23px] text-[18px] leading-[124%] tracking-[-0.04px] mb-[8px] md:mb-3 lato text-dark-gray ${
        !isFirst ? 'max-w-8' : ''
      }`}
      dangerouslySetInnerHTML={{ __html: title }}
    />
    <p className="font-medium md:text-[16px] text-[14px] leading-[144%] tracking-normal text-dark-gray">
      {description}
    </p>
  </div>
);
const JoinCard = () => (
  <div className="md:pl-[28px] md:pb-[27px] pl-[14px] pb-[24px] blue-color rounded-[20px] flex flex-col white-text-element h-[221px] md:h-[290px] justify-end items-start w-full">
    <h3
      className="font-medium md:text-[28px] text-[20px] leading-[124%] tracking-[-0.04px] lexend md:mb-1 mb-2"
      dangerouslySetInnerHTML={{ __html: perksData.joinCard.title }}
    />
    <img
      src={perksData.joinCard.icon}
      alt={perksData.joinCard.iconAlt}
      className="w-[23px] h-[20px] md:w-auto md:h-auto cursor-pointer"
      loading="lazy"
    />
  </div>
);
const PerksSection = () => (
  <div className="w-full md:px-[111px] md:py-[56px] pt-[42px] pb-[38px] px-[15px] padding flex justify-center">
    <div className="w-full max-w-[1440px]">
      <div className="grid grid-cols-1 gap-y-4 md:grid-cols-3 md:gap-x-[150px] gap">
        <div className="md:col-span-1">
          <h2 className="lexend font-medium md:text-[47.37px] md:leading-[124%] md:tracking-[0] text-[28.48px] leading-[100%] tracking-[-0.36px] text-dark-gray md:mb-4 md:max-w-77">
            {perksData.title}
          </h2>
        </div>
        <div className="md:col-span-2 grid grid-cols-2 card-gap md:grid-cols-3 gap-y-[20px] gap-x-[16px] md:gap-[40px]">
          {perksData.perks.map((perk, index) => (
            <PerkCard
              key={perk.id}
              icon={perk.icon}
              title={perk.title}
              description={perk.description}
              isFirst={index === 0}
              isSecond={index === 1}
              cardIndex={index + 1}
            />
          ))}
          <JoinCard />
        </div>
      </div>
    </div>
  </div>
);

export default PerksSection;
