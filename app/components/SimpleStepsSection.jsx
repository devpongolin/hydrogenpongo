const SimpleStepsSection = ({SimpleSteps}) => {
  const fields = SimpleSteps || [];
  const getValue = (key) =>
    fields.find((field) => field.key === key)?.value;

  const getReferenceImageUrl = (key) =>
    fields.find((field) => field.key === key)?.reference?.image?.url;

  const mainTitle = getValue('partnerprogram_simple_steps_main_title');
  const buttonText = getValue('partnerprogram_simple_steps_button_text');
  const desktopImage = getReferenceImageUrl('partnerprogram_simple_steps_desktop_image');
  const mobileImage = getReferenceImageUrl('partnerprogram_simple_steps_mobile_image');
  const buttonImage = getReferenceImageUrl('partnerprogram_simple_steps_button_icon');
  const partnerprogram_simple_steps_title_and_description_data = getValue('partnerprogram_simple_steps_title_and_description_data');



  const data = {
    images: {
      backgroundImage: desktopImage,
      backgroundImageMobile: mobileImage,
      arrowIcon: buttonImage,
    },
    textContent: {
      heading: mainTitle || "3 Simple Steps to Get Started",
      buttonText: buttonText || "Partner with Us"
    },
    backgroundImageAlt: "Woman with golden retriever dog",
    steps: JSON.parse(partnerprogram_simple_steps_title_and_description_data),
  };
  return (
    <div className="semi-transparent-bg padding-custom md:px-[112px] pt-[50px] px-[20px] pb-[40px] md:py-[56px]">
      <div className="relative w-full max-w-[1440px] mx-auto rounded-[32px] overflow-hidden">
          <div className="absolute md:inset-0 custom-background"></div>
          <img
            src={data.images.backgroundImageMobile}
            alt={data.backgroundImageAlt}
            className="w-full object-cover relative md:hidden"
            loading="lazy"
          />
          <img
            src={data.images.backgroundImage}
            alt={data.backgroundImageAlt}
            className="w-full object-cover relative pt-[56px] hidden md:block"
            loading="lazy"
          />
          <div className="md:absolute inset-0 flex flex-col md:h-auto h-[640px]">
            <div className="absolute top-0 left-0 pt-[24px] pr-[90px] pl-[19px] md:relative md:p-[56px]">
              <h2 className="lexend font-normal text-[28.48px] leading-[100%] tracking-[0] md:text-4xl md:lg:text-5xl md:leading-tight max-w-[22rem]  md:text-inherit">
                {data.textContent.heading}
              </h2>
            </div>
            <div className="relative bottom-[140px] md:bottom-[0px] px-[26px] flex-1 bg-radial-peach flex items-end md:px-[51px] md:pb-[54px]">
              <div className="md:grid grid-cols-4 w-full flex flex-col gap-4 max-w-sm mx-auto md:max-w-none md:mx-0">
                {data.steps.map((step) => (
                  <div key={step.id} className="p-[40px] md:p-[39px] layout-padding bg-[#ffffff] rounded-[28px]">
                    <div className="lato my-text-color font-medium text-[14px] pt-[4px] pb-[4px] px-[12px] leading-[100%] tracking-[0] md:tracking-normal mb-[10px] w-fit bg-[#FBFAF9] border border-[#18181812] rounded-[50px]">
                      {step.stepNumber}
                    </div>
                    <h3 className="lexend my-text-color font-normal text-[20px] leading-[121%] tracking-[0] md:text-[23px] md:leading-[100%] md:tracking-normal">
                      {step.title}
                    </h3>
                  </div>
                ))}
                <div>
                  <button className="blue-400 rounded-[28px] h-full white-text-element font-bold p-[40px] md:p-[39px] flex flex-col gap-[30px] md:justify-between group w-full last:gap-[69px]">
                    <span className="lexend font-normal text-[20px] leading-[100%] tracking-normal md:text-[22px]">
                      {data.textContent.buttonText}
                    </span>
                    <img
                      src={data.images.arrowIcon}
                      alt="Arrow"
                      className="cursor-pointer"
                      loading="lazy"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default SimpleStepsSection;
        {/* Mobile View */}
        {/* <div className="md:hidden w-full custom-gradient">
          <div className="relative w-full">
            <img
              src={data.images.backgroundImageMobile}
              alt={data.backgroundImageAlt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 flex pt-[24px] pr-[90px] pl-[19px]">
              <h2 className="lexend font-normal text-[28.48px] leading-[100%] tracking-[0]">
                {data.textContent.heading}
              </h2>
            </div>
          </div>
          <div className="relative -mt-[9rem] px-[30px]">
              <div className="flex flex-col gap-4 max-w-sm mx-auto">
                {data.steps.map((step) => (
                  <div key={step.id} className="p-[40px] bg-uniq-color rounded-[28px]">
                    <div className="lato my-text-color font-medium text-[14px] leading-[100%] tracking-[0] pt-[4px] pb-[4px] px-[12px] mb-[12px]">
                      {step.stepNumber}
                    </div>
                    <h3 className="lexend my-text-color font-normal text-[20px] leading-[121%] tracking-[0]">
                      {step.title}
                    </h3>
                  </div>
                ))}
                <button className="blue-400 rounded-[28px] white-text-element font-bold p-[40px] flex flex-col gap-[30px] group w-full ">
                  <span className="lexend font-normal text-[20px] leading-[100%] tracking-normal">
                    {data.textContent.buttonText}
                  </span>
                  <img
                    src={data.images.arrowIcon}
                    alt="Arrow"
                    className="cursor-pointer"
                    loading="lazy"
                  />
                </button>
              </div>
          </div>
        </div> */}
      
