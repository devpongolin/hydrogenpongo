import backgroundImage from '../assets/background.webp';
import mobileImage from '../assets/mobile.webp';
import leftMobileImage from '../assets/leftmobile.webp';
import appStoreLogo from '../assets/appstore.webp';
import googlePlayLogo from '../assets/googleplay.webp';

export default function WaggleAppLanding() {
  return (

    <div className="md:px-[112px] md:pt-[55px] md:pb-[55px]">

      <div className="relative overflow-hidden flex justify-center rounded-[20px] md:rounded-[40px]">

        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src={backgroundImage}
            alt="Background"
            className="hidden md:block object-cover w-full "
          />
          <img
            src={mobileImage}
            alt="Mobile Background"
            className="md:hidden object-cover w-full h-full"
          />
        </div>

        <div className="relative  w-full max-w-screen-xl flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Images */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img 
              src={leftMobileImage}
              alt="Waggle App Devices"
              className=""
            />
          </div>
          <div className=" text-white text-center ">
            <h1 className="lexend font-medium md:text-[47px] text-[28px] leading-[100%] tracking-[-0.36px] text-left">
              Safety at Your Fingertips.
              Anytime, Anywhere.
            </h1>

            <div className="flex w-[119px] md:w-[143px] md:flex-row gap-4 mt-6 justify-center ">
              <img src={appStoreLogo} alt="Download on App Store"  />
              <img src={googlePlayLogo} alt="Get it on Google Play"  />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
