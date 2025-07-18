import dogsImage from '../assets/Heroimage_(2).webp';
import mobileDogsImage from '../assets/moblieimg.webp';
import arrowImage from '../assets/arrow.webp';

const WaggleHero = ({BannerData}) => {
  const fields = BannerData || [];

  const getValue = (key) =>
    fields.find((field) => field.key === key)?.value;

  const getReferenceImageUrl = (key) =>
    fields.find((field) => field.key === key)?.reference?.image?.url;

  const mainTitle = getValue('aboutus_main_title');
  const description = getValue('aboutus_discription');
  const buttonText = getValue('aboutus_button_text');
  const buttonLink = getValue('button_link');
  const desktopImage = getReferenceImageUrl('aboutus_banner_image_desktop');
  const mobileImage = getReferenceImageUrl('aboutus_banner_image_mobile');
  const buttonIcon = getReferenceImageUrl('aboutus_button_logo');


  const data = {
    images: { dogsImage, mobileDogsImage, arrowImage },
    textContent: {
      heading: mainTitle || "We built Waggle for pet parents like us." ,
      description: description || "You walk out the door and instantly wonder—did I leave the AC on? Did the dog spill the water bowl? Is it too hot in the RV? Is my pet okay? So we built a way to check in, no matter where you are.",
      buttonText: buttonText || "Find Your Waggle",
      buttonLink: buttonLink || "#",
    },
  };


  return (
    <div className="bg-[#B47E57] md:px-[112px] md:py-[55px] pt-5 pb-[34px] md:rounded-t-[34px] rounded-t-[28px] overflow-hidden">
      <div className="max-w-[1280px] flex flex-col-reverse md:flex-col mx-auto w-full">
      <div className="flex flex-col md:flex-row md:items-start justify-between">
        <div className="md:w-[100%] text-center md:text-left flex flex-wrap">
          <span className="md:w-[52%] text-custom47 white-text-element md:text-[63px] text-[28.48px] lexend mt-[13px] md:mt-0 leading-[36px] font-medium md:leading-[79px] tracking-[0] ml-[15px] mr-[15px] md:ml-0 md:mr-0">
            {data.textContent.heading}
          </span>
          <div className="md:w-[48%] md:pl-[37px] md:mt-[3.3%] mt-[8px] md:pr-[6px] flex flex-col items-center md:items-start">
            <span className="text-off-white-80 white-text-element lato text-[14px] tracking-[0] font-normal text-sm md:text-[20.25px] px-4 md:px-0 text-center md:text-left">
              {data.textContent.description}
            </span>
          </div>
          <div className="flex justify-center md:justify-start mt-[14px] md:mt-6 w-full">
            <a href={data?.textContent?.buttonLink} className="button1 button-hover border border-gray-transparent text-dark-gray pt-[6px] pr-[6px] pb-[6px] pl-[28px] md:py-[9px] md:pl-[28px] md:pr-[9px] rounded-full flex items-center md:gap-4 gap-3 mx-auto md:mx-0">
              <span className="font-bold tracking-[0] text-[16px] lato text-dark-gray">
                {data.textContent.buttonText}
              </span>
              <span className="flex items-center justify-center rounded-full">
                <img
                  src={buttonIcon}
                  alt="Arrow right"
                  loading="lazy"
                  width="40"
                  height="40"
                  className="cursor-pointer"
                />
              </span>
            </a>
          </div>
        </div>
        
      </div>
      <div className="flex justify-center mt-0 md:mt-10">
        <img
          src={mobileImage}
          alt="Golden retriever with owner"
          loading="lazy"
          className="block md:hidden object-contain"
        />
        <img
          src={desktopImage}
          alt="Two dogs with owners connected by curved line"
          loading="lazy"
          className="hidden md:block object-contain"
        />
      </div>
      </div>
    </div>
  );
};

export default WaggleHero;
