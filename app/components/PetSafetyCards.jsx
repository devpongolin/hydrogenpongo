import React, {useState} from 'react';

import petMonitorFront from '../assets/petMonitorFront.webp';
import waggleCameraFront from '../assets/WaggleCamera.webp';
import rvCameraFront from '../assets/WaggleRV4GCamera.webp';
import smartBowlFront from '../assets/WaggleSmartAIBowl.webp';

import petMonitorBack from '../assets/petMonitorBack.webp';
import waggleCameraBack from '../assets/waggleCameraBack.webp';
import rvCameraBack from '../assets/rvCameraBack.webp';
import smartBowlBack from '../assets/smartBowlBack.webp';

import plusIcon from '../assets/minusIcon.webp';
import minusIcon from '../assets/plusIcon.webp';
import arrowIcon from '../assets/arrowIcon.webp';

import heatProtectionIcon from '../assets/wifiBackupIcon.webp';
import wifiBackupIcon from '../assets/familyAlertIcon.webp';
import familyAlertIcon from '../assets/autoFollowIcon.webp';
import autoFollowIcon from '../assets/stabilityIcon.webp';
import stabilityIcon from '../assets/treatDispenserIcon.webp';
import treatDispenserIcon from '../assets/noWifiIcon.webp';
import noWifiIcon from '../assets/powerBackupIcon.webp';
import powerBackupIcon from '../assets/weatherProofIcon.webp';
import weatherProofIcon from '../assets/healthMonitorIcon.webp';
import healthMonitorIcon from '../assets/heatProtectionIcon.webp';
import weightManagementIcon from '../assets/weightManagementIcon.webp';
import petIdentificationIcon from '../assets/petIdentificationIcon.webp';

const petSafetyData = {
  title: 'Pet Safety Essentials',
  productCards: [
    {
      title: 'Waggle Pet Monitor',
      frontImage: petMonitorFront,
      backImage: petMonitorBack,
      frontPadding: 'pt-[5rem]',
      features: [
        {
          text: 'Prevents heat/cold emergencies before they happen',
          icon: heatProtectionIcon,
        },
        {text: 'Works when WiFi fails (built-in 4G)', icon: wifiBackupIcon},
        {
          text: 'Alerts your entire family circle instantly',
          icon: familyAlertIcon,
        },
      ],
      price: '$99',
      originalPrice: '$199',
      buttonText: 'Monitor Anytime',
      priceText: 'Starts at',
    },
    {
      title: 'Waggle Camera',
      frontImage: waggleCameraFront,
      backImage: waggleCameraBack,
      frontPadding: 'pt-[4rem] pl-[34px]',
      backImagePadding: 'pt-[1.5rem]',
      features: [
        {
          text: 'Follows your pet automatically room-to-room',
          icon: autoFollowIcon,
        },
        {text: 'Stays put (even with ninja cats)', icon: stabilityIcon},
        {text: 'Tosses treats with a tap', icon: treatDispenserIcon},
      ],
      price: '$59',
      originalPrice: '$199',
      buttonText: 'Get Protection',
      priceText: 'Starts at',
    },
    {
      title: 'Waggle RV 4G Camera',
      frontImage: rvCameraFront,
      backImage: rvCameraBack,
      frontPadding: 'pt-[3rem]',
      backImagePadding: 'pt-[1rem]',
      features: [
        {text: 'Works without WiFi, anywhere', icon: noWifiIcon},
        {text: 'Outlasts power outages for days', icon: powerBackupIcon},
        {text: 'Handles whatever weather hits', icon: weatherProofIcon},
      ],
      price: '$59',
      originalPrice: '$199',
      buttonText: 'Keep Watch',
      priceText: 'Starts at',
    },
    {
      title: 'Waggle Smart AI Bowl',
      frontImage: smartBowlFront,
      backImage: smartBowlBack,
      frontPadding: 'pt-[4rem]',
      backImagePadding: 'pt-[5rem]',
      features: [
        {text: 'Spots illness through eating changes', icon: healthMonitorIcon},
        {
          text: 'Prevents weight issues automatically',
          icon: weightManagementIcon,
        },
        {text: 'Knows which pet ate what', icon: petIdentificationIcon},
      ],
      price: '$99',
      originalPrice: '$199',
      buttonText: 'Monitor Anytime',
      priceText: 'Starts at',
    },
  ],
  controlIcons: {
    plusIcon: plusIcon,
    minusIcon: minusIcon,
    arrowIcon: arrowIcon,
  },
};

const PetSafetyCards = () => {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleCard = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="bg-[#EEDED3] max-w-[1440px] mx-auto py-[55px] w-full">
      <span className="block text-center font-[400] text-[47px] leading-[100%] tracking-[0] lexend mb-[39px]">
        {petSafetyData.title}
      </span>
      <div className="max-w-[1280px] mx-auto flex flex-wrap justify-center gap-2">
        {petSafetyData.productCards.map((card, index) => (
          <div
            key={index}
            className={`md:w-[314px] w-[328px] h-[549px] transition-transform duration-700 [transform-style:preserve-3d] ${
              flippedCards[index] ? '[transform:rotateY(180deg)]' : ''
            }`}
          >
            {!flippedCards[index] ? (
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
                <div className={`flex justify-center ${card.backImagePadding}`}>
                  <img
                    src={card.backImage}
                    alt={card.title}
                    loading="lazy"
                    className="object-contain"
                  />
                </div>
                <div className=" px-[22px]">
                  {card.features.map((feature, i) => (
                    <div key={i} className="flex flex-col">
                      <div className="flex space-x-3 pb-3">
                        <img
                          src={feature.icon}
                          alt="Feature icon"
                          loading="lazy"
                          className="object-contain"
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
                  <span className="text-white lato font-[500] text-[16px] leading-[100%] tracking-[0] ">
                    {card.priceText}{'  '}
                  </span>
                  <span className="relative inline-block text-white font-[500] text-[23px] leading-[100%] tracking-[0] lato mb-[20px]" >
                    {card.originalPrice}
                    <span className="absolute left-0 top-1/2 w-full h-[2px] bg-[#007AFF] transform -rotate-[15deg] origin-center"></span>
                  </span>

                  <span className="text-white font-[600] text-[48px] leading-[100%] tracking-[0] lato ml-2">
                    {card.price}
                  </span>
                  <div className="flex items-center cursor-pointer">
                    <span className="text-white font-[700] text-[17.2px] leading-[100%] tracking-[0] lato mr-2">
                      {card.buttonText}
                    </span>
                    <img
                      src={petSafetyData.controlIcons.arrowIcon}
                      alt="Arrow"
                      loading="lazy"
                    />
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
