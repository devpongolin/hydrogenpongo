export default function PartnerwithWaggle({ BannerData }) {

  const fields = BannerData || [];
  const getValue = (key) =>
    fields.find((field) => field.key === key)?.value;

  const getReferenceImageUrl = (key) =>
    fields.find((field) => field.key === key)?.reference?.image?.url;

  const partnerprogram_banner_title_and_sub_title_data = getValue('partnerprogram_banner_title_and_sub_title_data');
  const bannerMainTitle = getValue('partnerprogram_banner_main_title');
  const bannerSubTitle = getValue('partnerprogram_banner_subtitle');
  const bannerDesktop = getReferenceImageUrl('partnerprogram_banner_desktop_image');
  const bannerMobile = getReferenceImageUrl('partnerprogram_banner_mobile_image');
  const bannerBottomLeft = getReferenceImageUrl('partnerprogram_banner_bottom_left_image');
  const bannerBottomMid = getReferenceImageUrl('partnerprogram_banner_bottom_mid_image');
  const bannerBottomRight = getReferenceImageUrl('partnerprogram_banner_bottom_image_right');


  const data = {
    images: {
      heartIcon: bannerBottomLeft,
      toggleIcon: bannerBottomMid,
      shieldIcon: bannerBottomRight,
      heroSectionDesktop: bannerDesktop,
      heroSectionMobile: bannerMobile
    },
    textContent: {
      heading: bannerMainTitle || "Partner with Waggle.",
      description: bannerSubTitle || "Whether you're reselling, sharing it with your followers, or teaming up on something bigger—this is for folks who care about pets and want to do some real good."
    },
    features: JSON.parse(partnerprogram_banner_title_and_sub_title_data),
    heroImage: {
      desktop: {
        src: "heroSectionDesktop",
        alt: "Partner with Waggle - People working with pets"
      },
      mobile: {
        src: "heroSectionMobile",
        alt: "Partner with Waggle - People working with pets (Mobile)"
      }
    }
  };

  return (
    <div className="main-bg-color md:py-[56px] md:pb-[77px] py-[37px] pb-[53px] my-class rounded-tl-[28px] rounded-tr-[28px] px-0">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center">
        <img
          src={data.images.heroSectionMobile}
          alt={data.heroImage.mobile.alt}
          className="mx-auto w-full max-w-full mb-[15px] md:hidden"
          loading="lazy"
        />
        <span className="font-medium text-[28.48px] md:text-[63.15px] leading-[124%] tracking-normal lexend text-dark-gray mb-[8px] md:mb-[6px] text-center">
          {data.textContent.heading}
        </span>
        <p className="lato font-normal text-[14px] md:text-[20.25px] leading-[144%] tracking-normal max-w-[20rem] md:max-w-[41rem] mx-auto text-dark-gray mb-[20px] md:mb-[40px] text-center">
          {data.textContent.description}
        </p>
        <img
          src={data.images.heroSectionDesktop}
          alt={data.heroImage.desktop.alt}
          className="mx-auto mb-[39px] hidden md:block"
          loading="lazy"
        />
        <div className="flex flex-col md:flex-row gap-[20px] md:gap-[40px] description-padding md:px-[0px] max-w-[949px] w-full">
          {data.features.map((feature) => (
            <div key={feature.id} className="text-center group">
              <div className="mx-auto mb-[18px] md:mb-[28px] flex items-center justify-center">
                <img
                  src={data.images[feature.icon]}
                  alt={feature.iconAlt}
                  loading="lazy"
                  className='md:h-auto md:w-auto h-[27px] w-[27px]'
                />
              </div>
              <h3 className="lato richGray font-medium md:text-[22.43px] text-[20px] leading-[124%] tracking-[-0.04px] mb-[8px]">
                {feature.title}
              </h3>
              <p className="inline-block lato font-medium text-[15.75px] leading-[144%] tracking-[0] max-w-[15rem] md:max-w-[20rem] dark-slate">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
