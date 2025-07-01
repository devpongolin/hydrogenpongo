import React from "react";

export default function WaysYouCanHelp({AmbassadorWaysYouCanHelp}) {
  const fields = AmbassadorWaysYouCanHelp || [];
  const getValue = (key) =>
    fields.find((field) => field.key === key)?.value;

  const getReferenceImageUrl = (key) =>
    fields.find((field) => field.key === key)?.reference?.image?.url;

  const MainTitleText = getValue('ambassador_ways_you_can_help_main_title');
  const ambassador_ways_you_can_help_card_title_node_1 = getValue('ambassador_ways_you_can_help_card_title_node_1');
  const ambassador_ways_you_can_help_card_title_node_2 = getValue('ambassador_ways_you_can_help_card_title_node_2');
  const ambassador_ways_you_can_help_card_title_node_3 = getValue('ambassador_ways_you_can_help_card_title_node_3');
  const ambassador_ways_you_can_help_card_title_node_4 = getValue('ambassador_ways_you_can_help_card_title_node_4');
  const ambassador_ways_you_can_help_card_subtitle_node_1 = getValue('ambassador_ways_you_can_help_card_subtitle_node_1');
  const ambassador_ways_you_can_help_card_subtitle_node_2 = getValue('ambassador_ways_you_can_help_card_subtitle_node_2');
  const ambassador_ways_you_can_help_card_subtitle_node_3 = getValue('ambassador_ways_you_can_help_card_subtitle_node_3');
  const ambassador_ways_you_can_help_card_subtitle_node_4 = getValue('ambassador_ways_you_can_help_card_subtitle_node_4');
  const ambassador_ways_you_can_help_card_image_node_1 = getReferenceImageUrl('ambassador_ways_you_can_help_card_image_node_1');
  const ambassador_ways_you_can_help_card_image_node_2 = getReferenceImageUrl('ambassador_ways_you_can_help_card_image_node_2');
  const ambassador_ways_you_can_help_card_image_node_3 = getReferenceImageUrl('ambassador_ways_you_can_help_card_image_node_3');
  const ambassador_ways_you_can_help_card_image_node_4 = getReferenceImageUrl('ambassador_ways_you_can_help_card_image_node_4');
  const ambassador_ways_you_can_help_button_icon = getReferenceImageUrl('ambassador_ways_you_can_help_button_icon');
  const ambassador_ways_you_can_help_button_text = getValue('ambassador_ways_you_can_help_button_text');
  
  const mainTitle = MainTitleText || "Ways You Can Help";

  const volunteerRoles = [
    {
      title: ambassador_ways_you_can_help_card_title_node_1 || "Community Connector",
      description:
      ambassador_ways_you_can_help_card_subtitle_node_1 || "You're the one friends go to for advice and we love that. Help us reach more pet parents by being the friendly face (and voice) of Waggle in your circles.",
      image: ambassador_ways_you_can_help_card_image_node_1,
      maxWidthClass: "max-w-[32rem] max-[768px]:max-w-[16rem]",
      boxClass: "w-[608px] h-[609.18px] max-[768px]:w-full max-[768px]:h-auto",
      imageMarginTop: "md:mt-[48px]",
    },
    {
      title: ambassador_ways_you_can_help_card_title_node_2 || "Event Rep",
      description:
      ambassador_ways_you_can_help_card_subtitle_node_2 || "Like chatting with fellow pet lovers? Represent Waggle at local events, meetups, or shows, and spread the word about keeping pets safe and happy—on the road and at home.",
      image: ambassador_ways_you_can_help_card_image_node_2,
      maxWidthClass: "max-w-[29rem]",
      boxClass: "w-[566px] h-[609.18px] max-[768px]:w-full max-[768px]:h-auto",
      imageMarginTop: "md:mt-[20px]",
    },
    {
      title: ambassador_ways_you_can_help_card_title_node_3 || "Brand Advocate",
      description:
      ambassador_ways_you_can_help_card_subtitle_node_3 || "Got a knack for storytelling or content creation? Use your voice, photos, or reels to show how Waggle makes a difference and inspire others to join the movement.",
      image: ambassador_ways_you_can_help_card_image_node_3,
      maxWidthClass: "max-w-[32rem] max-[768px]:max-w-[16rem]",
      boxClass: "w-[608px] h-[609.18px] max-[768px]:w-full max-[768px]:h-auto",
      imageMarginTop: "md:mt-[48px]",
    },
    {
      title: ambassador_ways_you_can_help_card_title_node_4 || "Feedback Insider",
      description:
      ambassador_ways_you_can_help_card_subtitle_node_4 || "Your voice matters. Help us build better tech for pets by sharing honest feedback, fresh ideas, and the little details only real pet parents notice.",
      image: ambassador_ways_you_can_help_card_image_node_4,
      maxWidthClass: "max-w-[29rem] max-[768px]:max-w-[16rem]",
      boxClass: "w-[566px] h-[609.18px] max-[768px]:w-full max-[768px]:h-auto",
      imageMarginTop: "md:mt-[20px]",
    },
  ];
  const button = {
    text: ambassador_ways_you_can_help_button_text || "Join the Pack",
    icon: ambassador_ways_you_can_help_button_icon,
    altText: "Arrow",
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto md:py-14 md:px-4 px-[20px] py-[37px]">
      <h2 className="text-center text-dark-gray font-medium text-[28.48px] md:text-[47px] leading-[100%] md:leading-[124%] md:tracking-[0] tracking-[-0.36px] lexend md:pb-7 pb-[20px]">
        {mainTitle}
      </h2>
      <div className="flex flex-wrap gap-[14px] md:gap-[40px] w-full mx-auto max-[768px]:flex-col min-[769px]:justify-center">
        {volunteerRoles.map(
          ({ title, description, image, maxWidthClass, boxClass, imageMarginTop }, index) => (
            <div
              key={index}
              className={`bg-cream border-soft width-500 border-[1px] rounded-[20px] md:rounded-[28px] min-[769px]:flex-shrink-0 max-[768px]:w-full ${boxClass}`}
            >
              <div className="md:pt-[40px] md:pr-[40px] md:pb-[20px] md:pl-[40px] p-[19px]">
                <span className="lexend font-medium text-[25px] md:text-[26.66px] leading-[40px] tracking-[-0.5px] text-dark-gray mb-[12px] block">
                  {title}
                </span>
                <p className={`gray-medium font-medium text-[17px] md:text-[20px] leading-[153%] md:leading-[144%] tracking-[0] lato ${maxWidthClass}`}>
                  {description}
                </p>
              </div>
              <div className={imageMarginTop}>
                <img
                  src={image}
                  alt={`${title} volunteer`}
                  className="max-w-none w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          )
        )}
      </div>
      <div className="flex justify-center mt-[14px] md:mt-[40px]">
        <button className="button-hover font-bold text-[16px] leading-[100%] tracking-[0] lato border-transparent border-[1px] rounded-[30px] pt-[6px] pr-[6px] pb-[6px] md:pt-[9px] md:pr-[9px] md:pb-[9px] pl-[28px] button1 text-dark-gray flex items-center">
          {button.text}
          <span className="ml-[16px] btn-image">
            <img
              src={button.icon}
              alt={button.altText}
              loading="lazy"
              className="cursor-pointer"
            />
          </span>
        </button>
      </div>
    </div>
  );
}
