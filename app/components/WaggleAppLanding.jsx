import backgroundImage from '../assets/background.webp';
import mobileImage from '../assets/mobile.webp';
import leftMobileImage from '../assets/leftmobile.webp';
import appStoreLogo from '../assets/appstore.webp';
import googlePlayLogo from '../assets/googleplay.webp';

export default function WaggleAppLanding() {
  return (
    <div className="md:px-[112px] section-wrapper md:pt-[55px] md:pb-[55px] px-[16px] py-[48px] w-full max-w-[1440px] mx-auto">
      <div className="relative overflow-hidden flex justify-center rounded-[40px]">
        <div className="inset-0 w-full h-full z-0">
          <img
            src={backgroundImage}
            alt="Background"
            className="hidden md:block object-cover h-full w-full"
          />
          <img
            src={mobileImage}
            alt="Mobile Background"
            className="md:hidden object-cover w-full h-full"
          />
        </div>
        <div className="w-full bottom-[32px] px-[20px] md:bottom-auto gap-0 absolute flex flex-col md:flex-row items-end justify-between md:gap-[64px] z-0">
          <div className="w-full layout-center lg:w-[60%] flex justify-start md:justify-center">
            <img 
              src={leftMobileImage}
              alt="Waggle App Devices"
              className="w-[65%] md:w-full"
            />
          </div>
          <div className="text-center md:pb-[76px]">
            <h2 className="text-white responsive-container lexend font-medium md:text-[47px] text-[28px] leading-[109%] tracking-[-0.36px] text-left">
              Safety at Your Fingertips.
              Anytime, Anywhere.
            </h2>
            <div className="flex w-[119px] md:w-[143px] md:flex-row gap-4 mt-9">
              <img src={appStoreLogo} alt="Download on App Store"  />
              <img src={googlePlayLogo} alt="Get it on Google Play"  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}