import React, { useState, useEffect } from 'react';

import backgroundImage from '../assets/backgrounddog.webp';
import mobileBackgroundImage from '../assets/backgrounddog-mobile.webp';



export default function WaggleHome({ mainBannerData }) {
  const mainBannerStripText1 = mainBannerData?.find(item => item.key === "main_banner_strip_text_node_1")?.value || "";
  const mainBannerStripText2 = mainBannerData?.find(item => item.key === "main_banner_strip_text_node_2")?.value || "";
  const mainBannerTitle = mainBannerData?.find(item => item.key === "main_banner_tiitle")?.value || "";
  const mainBannerURl = mainBannerData?.find(item=> item.key==="main_banner_url")?.value;
  const mainBannerSubTitle = mainBannerData?.find(item => item.key === "main_banner_sub_title")?.value || "";
  const mainBannerDesktopImage = mainBannerData?.find(item => item.key === "main_banner_image")?.reference?.image?.url || "";
  const mainBannerMobileImage = mainBannerData?.find(item => item.key === "main_banner_image_mobile")?.reference?.image?.url || "";
  const mainBannerSeconderyImage = mainBannerData?.find(item => item.key === "main_banner_secondary_image")?.reference?.image?.url || "";
  const mainBannerButtonTitle = mainBannerData?.find(item => item.key === "main_banner_button_text")?.value || "";
  const mainBannerButtonIcon = mainBannerData?.find(item => item.key === "main_banner_button_icon")?.reference?.image?.url || "";
  const mainBannerTrustTitle = mainBannerData?.find(item => item.key === "main_banner_trust_by_title")?.value || "";
  const mainBannerTrustIcon1 = mainBannerData?.find(item => item.key === "main_banner_trust_image_node_1")?.reference?.image?.url || "";
  const mainBannerTrustIcon2 = mainBannerData?.find(item => item.key === "main_banner_trust_image_node_2")?.reference?.image?.url || "";
  const mainBannerTrustIcon3 = mainBannerData?.find(item => item.key === "main_banner_trust_image_node_3")?.reference?.image?.url || "";
  const mainBannerCollectionImageNode1 = mainBannerData?.find(item => item.key === "main_banner_collection_image_node_1")?.reference?.image?.url || "";
  const mainBannerCollectionImageNode2 = mainBannerData?.find(item => item.key === "main_banner_collection_image_node_2")?.reference?.image?.url || "";
  const mainBannerCollectionImageNode3 = mainBannerData?.find(item => item.key === "main_banner_collection_image_node_3")?.reference?.image?.url || "";
  const mainBannerCollectionURLNode1 = mainBannerData?.find(item => item.key === "main_banner_collection_image_node_1main_banner_collection_image_")?.value || "";
  const mainBannerCollectionURLNode2 = mainBannerData?.find(item => item.key === "main_banner_collection_url_node_2")?.value || "";
  const mainBannerCollectionURLNode3 = mainBannerData?.find(item => item.key === "main_banner_collection_url_node_3")?.value || "";
  const mainBannerCollectionTextNode1 = mainBannerData?.find(item => item.key === "main_banner_collection_text_node_1")?.value || "";
  const mainBannerCollectionTextNode2 = mainBannerData?.find(item => item.key === "main_banner_collection_text_node_2")?.value || "";
  const mainBannerCollectionTextNode3 = mainBannerData?.find(item => item.key === "main_banner_collection_text_node_3")?.value || "";
  const mainBannerCollectionButtonIconNode1 = mainBannerData?.find(item => item.key === "main_banner_collection_icon_node_1")?.reference?.image?.url || "";
  const mainBannerCollectionButtonIconNode2 = mainBannerData?.find(item => item.key === "main_banner_collection_icon_node_2")?.reference?.image?.url || "";
  const mainBannerCollectionButtonIconNode3 = mainBannerData?.find(item => item.key === "main_banner_collection_icon_node_3")?.reference?.image?.url || "";

  const waggleHomeContent = {
    topBar: {
      leftText: mainBannerStripText1 || "St. Patrick's Day Sale - 50% OFF",
      rightText: mainBannerStripText2 || 'Free shipping on US orders $50+ | Easy Returns',
    },
    hero: {
      headline: mainBannerTitle || "Your pet's world,\nalways in view.",
      subheadline: mainBannerSubTitle || '360° protection with 24/7 peace of mind.',
      features: [
        {
          title: mainBannerCollectionTextNode1,
          image: mainBannerCollectionImageNode1,
          arrow: mainBannerCollectionButtonIconNode1,
          url: mainBannerCollectionURLNode1,
        },
        {
          title: mainBannerCollectionTextNode2,
          image: mainBannerCollectionImageNode2,
          arrow: mainBannerCollectionButtonIconNode2,
          url: mainBannerCollectionURLNode2,
        },
        {
          title: mainBannerCollectionTextNode3,
          image: mainBannerCollectionImageNode3,
          arrow: mainBannerCollectionButtonIconNode3,
          url: mainBannerCollectionURLNode3,
        },
      ],
      rightImage: {
        image: mainBannerSeconderyImage,
        alt: 'Temperature Monitoring Box',
      },
    },
    bannerButton:{
      title: mainBannerButtonTitle,
      icon: mainBannerButtonIcon,
      url: mainBannerURl,
    },
    footerLogos: {
      label: mainBannerTrustTitle || 'As featured in',
      logos: [
        { alt: 'Outdoor Life', image: mainBannerTrustIcon1 },
        { alt: 'Dog Gear Review', image: mainBannerTrustIcon2 },
        { alt: 'RV Life', image: mainBannerTrustIcon3 },
      ],
    },
  };


  const [currentIndex, setCurrentIndex] = useState(0);
  const messages = [
    waggleHomeContent.topBar.leftText,
    waggleHomeContent.topBar.rightText
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="relative overflow-hidden mx-auto rounded-[40.56px]">
      <div className="brand-brown white-text-element md:px-[80px] md:py-[23px] p-[6px] md:h-[59px] w-full rounded-t-[40.56px]">
        <div className="hidden md:flex justify-between items-center h-full">
          <span className="lato font-bold text-[18px] leading-[100%] tracking-[0]">
            {waggleHomeContent.topBar.leftText}
          </span>
          <span className="lato font-bold text-[18px] leading-[100%] tracking-[0]">
            {waggleHomeContent.topBar.rightText}
          </span>
        </div>
        <div className="md:hidden flex items-center justify-center h-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 flex items-center justify-center px-2"
              >
                <span className="lato font-bold text-[14px] leading-[100%] tracking-[0] text-center whitespace-nowrap">
                  {message}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <img
        src={mainBannerDesktopImage || backgroundImage}
        alt="Background"
        className="inset-0 w-full h-full object-cover hidden md:block"
        loading="lazy"
      />
      <img
        src={mainBannerMobileImage || mobileBackgroundImage}
        alt="Mobile Background"
        className="md:mt-[10%] inset-0 w-full h-full object-cover block md:hidden"
        loading="lazy"
      />
      <div className="responsive-temp-box mobile-flex-center max-w-[1280px] w-full top-[50%] md:top-[60.5%] left-[50%] md:left-[48.5%] translate-x-[-50%] translate-y-[-50%] absolute py-[30px] md:py-[0] md:px-[20px] px-[15px] flex flex-col h-full justify-between md:h-auto md:justify-normal">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="w-full lg:w-2/3 md:mb-12">
            <h2 className="Section-heading text-center md:text-left md:max-w-[34rem] mb-[12px] white-text-element lexend font-medium md:text-[63px] text-[34px] md:leading-[104%] leading-[113%] tracking-[0] pt-[30px] md:pt-[0px]">
              {waggleHomeContent.hero.headline}
            </h2>
            <p className="text-center Secondary-text md:text-left lato font-medium text-[20px] leading-[144%] tracking-[0] white-text-element md:mb-[40px] mb-[24px]">
              {waggleHomeContent.hero.subheadline}
            </p>
            <div className="md:space-y-3 max-w-sm mx-auto md:mx-0 flex gap-[22px] md:block">
              {waggleHomeContent.hero.features.map((feature, index) => {
                if (!feature.image) return;
                if (!feature.title) return;
                if (!feature.arrow) return;
                if (!feature.url) return;
                return (
                  <a href={feature.url} className="h-inherit">
                    <button
                      key={index}
                      className="h-[100%] bg-white/10 text-white rounded-[46.99px] p-[6.27px] gap-[15px] md:gap-[22px] flex flex-col md:flex-row items-center justify-center md:justify-between"
                    >
                      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-3">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="object-cover"
                          loading="lazy"
                        />
                        <div className="max-w-[5rem] inter font-medium text-[16px] leading-[100%] tracking-[0] text-center md:text-left">
                          {feature.title}
                        </div>
                      </div>
                      <img src={feature.arrow} alt="Arrow" loading="lazy" className='cursor-pointer' />
                    </button>
                  </a>
                )
              })}
            </div>
          </div>
          {mainBannerSeconderyImage && (
            <div className="justify-center lg:justify-end absolute right-[1.5%] bottom-[5.5%] hidden md:block backdrop-blur-custom rounded-[26px] border-[0.61px] border-white/45">
              <img
                src={waggleHomeContent.hero.rightImage.image}
                alt={waggleHomeContent.hero.rightImage.alt}
                className='hide-on-mobile-temp'
                loading="lazy"
              />
            </div>
          )}
        </div>
        {waggleHomeContent.bannerButton.url && waggleHomeContent.bannerButton.title && waggleHomeContent.bannerButton.icon && (
          <div>
            <a href={waggleHomeContent.bannerButton.url} className='flex items-center gap-[10px] px-8 py-[18px] bg-[#0085FF] rounded-[55px] text-white font-semibold w-fit button-hover2'>
              <span>{waggleHomeContent.bannerButton.title}</span>
              <img
                  src={waggleHomeContent.bannerButton.icon}
                  loading="lazy"
                  className='w-[10px] h-[12px]'
              />
            </a>
          </div>
        )}
        <div className="md:mt-21 mb-[11px] md:mb-[34px]">
          {waggleHomeContent.footerLogos.label &&
          <p className="white-text-element lexendPeta font-light md:text-[11.57px] text-[14px] leading-[100%] tracking-[0] mb-4">
            {waggleHomeContent.footerLogos.label}
          </p>
          }
          <div className="flex items-center justify-start divide-x-[0.72px] divide-[#C3CDD6]">
            {waggleHomeContent.footerLogos.logos.map((logo, index) => {
            if (!logo.image) return;
            return(
              <div
                key={index}
                className={index === 0 ? 'md:pr-[19px] pr-[12px]' : 'md:px-[28px] px-[5px]'}
              >
                <img src={logo.image} alt={logo.alt}
                  className='max-w-[94px] md:max-w-none'
                  loading="lazy" />
              </div>
            )}
            )}
          </div>
        </div>
      </div>
    </div>
  );
}