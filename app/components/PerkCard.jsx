import React from 'react';

const PerksSection = ({ AmbassadorWeGotThose }) => {
  const fields = AmbassadorWeGotThose || [];
  const getValue = (key) =>
    fields.find((field) => field.key === key)?.value;

  const getReferenceImageUrl = (key) =>
    fields.find((field) => field.key === key)?.reference?.image?.url;

    const MainTitleText = getValue('ambassador_we_got_those_main_title');
    const ambassador_we_got_those_card_image_1 = getReferenceImageUrl('ambassador_we_got_those_card_image_1');
    const ambassador_we_got_those_card_image_2 = getReferenceImageUrl('ambassador_we_got_those_card_image_2');
    const ambassador_we_got_those_card_image_3 = getReferenceImageUrl('ambassador_we_got_those_card_image_3');
    const ambassador_we_got_those_card_image_4 = getReferenceImageUrl('ambassador_we_got_those_card_image_4');
    const ambassador_we_got_those_card_image_5 = getReferenceImageUrl('ambassador_we_got_those_card_image_5');
    const ambassador_we_got_those_card_image_6 = getReferenceImageUrl('ambassador_we_got_those_card_image_6');
    const ambassador_we_got_those_card_title_1 = getValue('ambassador_we_got_those_card_title_1');
    const ambassador_we_got_those_card_title_2 = getValue('ambassador_we_got_those_card_title_2');
    const ambassador_we_got_those_card_title_3 = getValue('ambassador_we_got_those_card_title_3');
    const ambassador_we_got_those_card_title_4 = getValue('ambassador_we_got_those_card_title_4');
    const ambassador_we_got_those_card_title_5 = getValue('ambassador_we_got_those_card_title_5');
    const ambassador_we_got_those_card_title_6 = getValue('ambassador_we_got_those_card_title_6');
    const ambassador_we_got_those_card_subtitle_1 = getValue('ambassador_we_got_those_card_subtitle_1');
    const ambassador_we_got_those_card_subtitle_2 = getValue('ambassador_we_got_those_card_subtitle_2');
    const ambassador_we_got_those_card_subtitle_3 = getValue('ambassador_we_got_those_card_subtitle_3');
    const ambassador_we_got_those_card_subtitle_4 = getValue('ambassador_we_got_those_card_subtitle_4');
    const ambassador_we_got_those_card_subtitle_5 = getValue('ambassador_we_got_those_card_subtitle_5');

  const perksData = {
    title: MainTitleText || "Perks? We've Got Those",
    perks: [
      {
        id: "welcome-gift",
        icon: ambassador_we_got_those_card_image_1,
        title: ambassador_we_got_those_card_title_1 || "$100 <br> Welcome Gift",
        description: ambassador_we_got_those_card_subtitle_1 || "Get a $100 gift card after your first full month with us."
      },
      {
        id: "exclusive-perks",
        icon: ambassador_we_got_those_card_image_2,
        title: ambassador_we_got_those_card_title_2 || "Exclusive Perks",
        description: ambassador_we_got_those_card_subtitle_2 || "Enjoy early product access, limited-edition Waggle, and insider deals."
      },
      {
        id: "spotlight-opportunities",
        icon: ambassador_we_got_those_card_image_3,
        title: ambassador_we_got_those_card_title_3 || "Spotlight Opportunities",
        description: ambassador_we_got_those_card_subtitle_3 || "Be featured on our website, socials, and newsletters."
      },
      {
        id: "ongoing-rewards",
        icon: ambassador_we_got_those_card_image_4,
        title: ambassador_we_got_those_card_title_4 || "Ongoing Rewards",
        description: ambassador_we_got_those_card_subtitle_4 || "Earn bonuses and recognition for referrals and great content."
      },
      {
        id: "event-sponsorships",
        icon: ambassador_we_got_those_card_image_5,
        title: ambassador_we_got_those_card_title_5 || "Event Sponsorships",
        description: ambassador_we_got_those_card_subtitle_5 || "Represent Waggle at RV shows, pet expos, and more."
      }
    ],
    joinCard: {
      title: ambassador_we_got_those_card_title_6 || "Join <br> the Pack",
      icon: ambassador_we_got_those_card_image_6,
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
        className="font-medium md:text-[28px] text-[20px] leading-[124%] tracking-[-0.04px] lexend md:mb-1 mb-2 w-[87%]"
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

  return (
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
};
export default PerksSection;
