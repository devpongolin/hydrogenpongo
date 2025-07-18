import React, { useState } from 'react';
import plusIcon from '../assets/minusIcon.webp';
import minusIcon from '../assets/plusIcon.webp';
import arrowIcon from '../assets/arrowIcon.webp';
import { Money } from '@shopify/hydrogen';

const PetSafetyCards = ({ petSafetyEssentials, petSafetyEssentialsTitle }) => {
  const [activeCard, setActiveCard] = useState(null); // ✅ changed from flippedCards
  const cardData = petSafetyEssentials?.map((item) => ({
    title: item?.node?.fields?.find((field) => field.key === 'card_tag')?.value || '',
    frontImage: item?.node?.fields?.find((field) => field.key === 'front_image')?.reference?.image?.url || '',
    backImage: item?.node?.fields?.find((field) => field.key === 'back_image')?.reference?.image?.url || '',
    frontPadding: 'pt-[4rem]',
    features: [
      {
        text: item?.node?.fields?.find((field) => field.key === 'feature_text_first')?.value || '',
        icon: item?.node?.fields?.find((field) => field.key === 'feature_icon_first')?.reference?.image?.url || '',
      },
      {
        text: item?.node?.fields?.find((field) => field.key === 'feature_text_second')?.value || '',
        icon: item?.node?.fields?.find((field) => field.key === 'feature_icon_second')?.reference?.image?.url || '',
      },
      {
        text: item?.node?.fields?.find((field) => field.key === 'feature_text_third')?.value || '',
        icon: item?.node?.fields?.find((field) => field.key === 'feature_icon_third')?.reference?.image?.url || '',
      }
    ],
    price: item?.node?.fields?.find((field) => field.key === 'price')?.value || '',
    originalPrice: item?.node?.fields?.find((field) => field.key === 'original_price')?.value || '',
    buttonText: item?.node?.fields?.find((field) => field.key === 'button_text')?.value || '',
    buttonLink: item?.node?.fields?.find((field) => field.key === 'button_product_link')?.reference?.handle || '',
    priceText: 'Starts at',
  }));

  const petSafetyData = {
    title: petSafetyEssentialsTitle || 'Pet Safety Essentials',
    productCards: [
      ...cardData, // Use the cardData array generated from petSafetyEssentials
    ],
    controlIcons: {
      plusIcon: plusIcon,
      minusIcon: minusIcon,
      arrowIcon: arrowIcon,
    },
  };
  const toggleCard = (index) => {
    setActiveCard((prevIndex) => (prevIndex === index ? null : index)); // ✅ flip only one
  };

  return (
    <div className="bg-[#EEDED3] px-[16px] md:px-[0px] md:py-[64px] w-full py-[40px]">
      <span className="block text-center font-medium md:font-[400] text-[28px] md:text-[47px] leading-[100%] tracking-[-0.36px] md:tracking-[0] lexend mb-[19px] md:mb-[39px]">
        {petSafetyData.title}
      </span>
      <div className="max-w-[1280px] mx-auto flex flex-wrap justify-center md:gap-2 gap-[38px]">
        {petSafetyData?.productCards?.map((card, index) => (
          <div
            key={index}
            className={`md:w-[314px] w-full max-w-[328px] h-[549px] transition-transform duration-700 [transform-style:preserve-3d] ${activeCard === index ? '[transform:rotateY(180deg)]' : ''
              }`}
          >
            {activeCard !== index ? (
              // Front
              <div className="bg-[#B47E57] rounded-[12px] h-full overflow-hidden">
                <div className="flex justify-between items-center p-[14px]">
                  <span className="bg-[#2E313870] rounded-[28px] py-2 px-[21px] text-white font-medium text-[14px] leading-[15.8px] tracking-[0] lato">
                    {card.title}
                  </span>
                  <button
                    onClick={() => toggleCard(index)}
                    className="cursor-pointer"
                  >
                    <img
                      src={petSafetyData.controlIcons.plusIcon}
                      alt="Plus"
                      loading="lazy"
                    />
                  </button>
                </div>
                <div
                  className={`flex justify-center items-center h-[calc(100%-96px)] ${card.frontPadding}`}
                >
                  <img
                    src={card.frontImage}
                    alt={card.title}
                    loading="lazy"
                    className="max-w-none object-contain"
                  />
                </div>
              </div>
            ) : (
              // Back
              <div className="bg-[#B47E57] rounded-3xl h-full flex flex-col [transform:rotateY(180deg)]">
                <div className="flex justify-between items-center pt-[14px] px-[14px]">
                  <span className="bg-[#2E313870] rounded-[28px] py-2 px-[21px] text-white font-medium text-[14px] leading-[15.8px] tracking-[0] lato">
                    {card.title}
                  </span>
                  <button
                    onClick={() => toggleCard(index)}
                    className="cursor-pointer"
                  >
                    <img
                      src={petSafetyData.controlIcons.minusIcon}
                      alt="Minus"
                      loading="lazy"
                    />
                  </button>
                </div>
                <div className={`flex justify-center my-auto mx-auto`}>
                  <img
                    src={card.backImage}
                    alt={card.title}
                    loading="lazy"
                    className="object-contain"
                  />
                </div>
                <div className="mt-auto mb-7">
                  <div className={`px-[22px]`}>
                    {card.features.map((feature, i) => (
                      <div key={i} className="flex flex-col">
                        <div className="flex space-x-3 pb-3">
                          <img
                            src={feature.icon}
                            alt="Feature icon"
                            loading="lazy"
                            className="object-contain w-[22px] mr-[7px]"
                          />
                          <span className="text-white font-[400] text-[14px] leading-[124%] tracking-[0] lato">
                            {feature.text}
                          </span>
                        </div>
                        {i !== card.features.length - 1 && (
                          <hr className="border-t border-white/30 mb-[10px]" />
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="px-4 ">
                    <div className="flex items-baseline">
                      <span className="text-white lato font-[500] text-[16px] leading-[100%] tracking-[0] mr-2">
                        {card.priceText}{' '}
                      </span>
                      <span className="relative inline-block text-white font-[500] text-[23px] leading-[100%] tracking-[0] lato mb-[20px]">
                        <Money data={{ amount: card.originalPrice, currencyCode: "USD" }} withoutTrailingZeros />
                        <span className="absolute left-0 top-1/2 w-full h-[2px] bg-[#007AFF] transform -rotate-[15deg] origin-center"></span>
                      </span>
                      <span className="text-white font-[600] text-[42px] md:text-[48px] leading-[100%] tracking-[0] lato ml-2">
                        <Money data={{ amount: card.price, currencyCode: "USD" }} withoutTrailingZeros />
                      </span>
                    </div>
                    <div className="flex items-center cursor-pointer">
                      <span className="text-white font-[700] text-[17.2px] leading-[100%] tracking-[0] lato mr-2">
                        {card.buttonText}
                      </span>
                      <img
                        src={petSafetyData.controlIcons.arrowIcon}
                        alt="Arrow"
                        loading="lazy"
                        className="p-[10px] bg-[#0085FF] w-[32px] h-[32px] rounded-[32px] object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetSafetyCards;
