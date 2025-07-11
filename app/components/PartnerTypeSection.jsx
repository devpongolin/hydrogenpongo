import React from 'react';
import petAdvocateImage from '../assets/pet-advocate-image.webp';
import resellerImage from '../assets/reseller-image.webp';
import brandsImage from '../assets/brands-image.webp';
import arrowIcon from '../assets/arrow-icon.webp';

// Import mobile images
import petAdvocateImageMobile from '../assets/pet-advocate-image-mobile.webp';
import resellerImageMobile from '../assets/reseller-image-mobile.webp';
import brandsImageMobile from '../assets/brands-image-mobile.webp';

const data = {
  images: {
    petAdvocateImage,
    resellerImage,
    brandsImage,
    arrowIcon,
    petAdvocateImageMobile,
    resellerImageMobile,
    brandsImageMobile,
  },
  textContent: {
    heading: "Find Your Partner Type"
  },
  partnerTypes: [
    {
      id: "pet-advocates",
      title: "Pet Advocates",
      description:
        "Got a loyal following or work directly with pet parents? If you're a trainer, influencer, or just a pet-obsessed human, share Waggle and earn while you do it.",
      image: "petAdvocateImage",
      mobileImage: "petAdvocateImageMobile",
      imageAlt: "Pet advocate working with clients and pets",
      buttonText: "Join as an Advocate",
      backgroundColor: "brand-brown",
      mobileMb: 'mb-[38px]'
    },
    {
      id: "resellers",
      title: "Resellers",
      description:
        "Own a pet shop, RV store, or online storefront? Bring Waggle to your shelves (digital or physical) and give your customers pet safety that sells.",
      image: "resellerImage",
      mobileImage: "resellerImageMobile",
      imageAlt: "Pet shop owner with dogs and products",
      buttonText: "Become a Reseller",
      backgroundColor: "brand-dark",
      mobileMb: 'mb-[15px]'
    },
    {
      id: "brands",
      title: "Brands",
      description:
        "Big ideas start with the right partner. Team up with Waggle on campaigns, content, or initiatives that put pets first.",
      image: "brandsImage",
      mobileImage: "brandsImageMobile",
      imageAlt: "Veterinarian examining a small dog",
      buttonText: "Partner with Us",
      backgroundColor: "brand-brown",
      mobileMb: 'mb-[17px]'
    },
  ],
};

const PartnerTypeSection = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="md:py-[56px] py-[37px] some-class mx-auto">
      <h2 className="lexend text-dark-gray font-medium md:text-[47.37px] text-[28.48px] md:leading-[124%] leading-[100%] tracking-normal text-center md:mb-[28px] mb-[17px]">
        {data.textContent.heading}
      </h2>
      <div className="flex px-5 md:px-0 flex-col md:flex-row justify-center gap-[40px] max-w-6xl mx-auto custom-flex-30">
        {data.partnerTypes.map((partner) => (
          <div
            key={partner.id}
            className={`w-full md:flex-[0_0_34%] ${partner.backgroundColor} white-text-element md:rounded-[28px] rounded-[20px] md:p-[28px] p-[20px] flex flex-col`}
          >
            <div className={`md:mb-[28px] mb-[14px] ${isMobile ? 'flex justify-center' : ''}`}>
              <img
                src={data.images[isMobile ? partner.mobileImage : partner.image]}
                alt={partner.imageAlt}
                className={`max-w-none ${isMobile ? 'w-full block md:hidden image-width' : 'hidden md:block'}`}
                loading="lazy"
              />
            </div>
            <div className="flex-grow">
              <h3 className="lexend center-on-mobile font-normal md:text-[28px] text-[20px] leading-[124%] tracking-normal mb-[8px]">
                {partner.title}
              </h3>
              <p className={`md:mb-[28px] ${partner.mobileMb} center-on-mobile text-off-white-80 lato font-normal md:text-[18px] text-[15.75px] leading-[144%] tracking-normal`}>
                {partner.description}
              </p>

            </div>
            <button className="button-hover btn-center-mobile main-bg-color text-dark-gray lato font-bold text-[16px] leading-[100%] tracking-normal pt-[8px] pr-[9px] pb-[8px] pl-[28px] rounded-[30px] border flex items-center transparent w-fit ">
              <span>{partner.buttonText}</span>
              <div className="ml-[15px] flex items-center justify-center">
                <img
                  src={data.images.arrowIcon}
                  alt="Arrow"
                  loading="lazy"
                  className="cursor-pointer"
                />
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerTypeSection;
