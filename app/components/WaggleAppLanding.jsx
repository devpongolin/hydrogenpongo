export default function WaggleAppLanding({ SafetyAtYourFingertipsData }) {
  const getValue = (key) =>
    SafetyAtYourFingertipsData?.find((item) => item.key === key)?.value || "";

  const getImageUrl = (key) =>
    SafetyAtYourFingertipsData?.find((item) => item.key === key)?.reference?.image?.url || "";

  const hydrogen_safety_at_your_fingertips_main_title = getValue("hydrogen_safety_at_your_fingertips_main_title");
  const hydrogen_safety_at_your_fingertips_sub_image_1 = getImageUrl("hydrogen_safety_at_your_fingertips_sub_image_1");
  const hydrogen_safety_at_your_fingertips_main_image_1 = getImageUrl("hydrogen_safety_at_your_fingertips_main_image_1");
  const hydrogen_safety_at_your_fingertips_main_image_2 = getImageUrl("hydrogen_safety_at_your_fingertips_main_image_2");
  const hydrogen_safety_at_your_fingertips_download_image_1 = getImageUrl("hydrogen_safety_at_your_fingertips_download_image_1");
  const hydrogen_safety_at_your_fingertips_download_image_2 = getImageUrl("hydrogen_safety_at_your_fingertips_download_image_2");

  const isHeroDataValid =
    hydrogen_safety_at_your_fingertips_main_title &&
    hydrogen_safety_at_your_fingertips_main_image_1 &&
    hydrogen_safety_at_your_fingertips_main_image_2 &&
    hydrogen_safety_at_your_fingertips_sub_image_1;

  return (
    <div className="md:px-[112px] section-wrapper md:pt-[55px] md:pb-[55px] px-[16px] py-[48px] w-full max-w-[1440px] mx-auto">
      {isHeroDataValid && (
        <div className="relative overflow-hidden flex justify-center rounded-[40px]">
          <div className="inset-0 w-full h-full z-0">
            <img
              src={hydrogen_safety_at_your_fingertips_main_image_1}
              alt="Background"
              className="hidden md:block object-cover h-full w-full"
            />
            <img
              src={hydrogen_safety_at_your_fingertips_main_image_2}
              alt="Mobile Background"
              className="md:hidden object-cover w-full h-full"
            />
          </div>
          <div className="w-full bottom-[32px] px-[20px] md:bottom-auto gap-0 absolute flex flex-col md:flex-row items-end justify-between md:gap-[64px] z-0">
            <div className="w-full layout-center lg:w-[60%] flex justify-start md:justify-center">
              <img 
                src={hydrogen_safety_at_your_fingertips_sub_image_1}
                alt="Waggle App Devices"
                className="w-[65%] md:w-full"
              />
            </div>
            <div className="text-center md:pb-[76px]">
              <h2 className="text-white responsive-container lexend font-medium md:text-[47px] text-[28px] leading-[109%] tracking-[-0.36px] text-left">
                {hydrogen_safety_at_your_fingertips_main_title}
              </h2>
              {(hydrogen_safety_at_your_fingertips_download_image_1 || hydrogen_safety_at_your_fingertips_download_image_2) && (
                <div className="flex w-[119px] md:w-[143px] md:flex-row gap-4 mt-9">
                  {hydrogen_safety_at_your_fingertips_download_image_1 && (
                    <img
                      src={hydrogen_safety_at_your_fingertips_download_image_1}
                      alt="Download on App Store"
                    />
                  )}
                  {hydrogen_safety_at_your_fingertips_download_image_2 && (
                    <img
                      src={hydrogen_safety_at_your_fingertips_download_image_2}
                      alt="Get it on Google Play"
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
