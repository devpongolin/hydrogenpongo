import React from 'react';

import backgroundImage from '../assets/backgrounddog.webp';
import roundImage1 from '../assets/round1.webp';
import roundImage2 from '../assets/round2.webp';
import roundImage3 from '../assets/round3.webp';
import arrowImage from '../assets/arrow_2.webp';
import rvLifeLogo from '../assets/rvlife-logo.webp';
import outdoorLifeLogo from '../assets/outdoorlife-logo.webp';
import dogGearLogo from '../assets/doggear-logo.webp';
import temperatureBox from '../assets/temperature-box.webp';

const waggleHomeContent = {
  topBar: {
    leftText: "St. Patrick's Day Sale - 50% OFF",
    rightText: "Free shipping on US orders $50+ | Easy Returns"
  },
  hero: {
    headline: "Your pet's world,\nalways in view.",
    subheadline: "360° protection with 24/7 peace of mind.",
    features: [
      {
        title: "Paw-fect",
        subtitle: "Gifts",
        image: roundImage1,
        arrow: arrowImage
      },
      {
        title: "Home",
        subtitle: "Monitoring",
        image: roundImage2,
        arrow: arrowImage
      },
      {
        title: "RV Safety",
        subtitle: null,
        image: roundImage3,
        arrow: arrowImage
      }
    ],
    rightImage: {
      image: temperatureBox,
      alt: "Temperature Monitoring Box"
    }
  },
  footerLogos: {
    label: "As featured in",
    logos: [
      { alt: "Outdoor Life", image: outdoorLifeLogo },
      { alt: "Dog Gear Review", image: dogGearLogo },
      { alt: "RV Life", image: rvLifeLogo }
    ]
  }
};

export default function WaggleHome() {
  return (
    <div className="relative overflow-hidden max-w-[1440px] mx-auto rounded-[40.56px]">
      <img
        src={backgroundImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative bg-[#B47E57] text-white px-4 py-2 text-sm h-[59px] rounded-t-[40.56px]">
        <div className="flex justify-between items-center h-full">
          <span className="font-medium">{waggleHomeContent.topBar.leftText}</span>
          <span className="hidden md:block">{waggleHomeContent.topBar.rightText}</span>
        </div>
      </div>

      <main className="relative s mx-auto px-[80px] pt-[71px] pb-[67px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <div className="mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight whitespace-pre-line">
                {waggleHomeContent.hero.headline}
              </h1>
              <p className="text-xl text-gray-300 mb-8">{waggleHomeContent.hero.subheadline}</p>
            </div>
            <div className="space-y-4 max-w-sm">
              {waggleHomeContent.hero.features.map((feature, index) => (
                <button
                  key={index}
                  className="w-full bg-white/10 text-white rounded-full px-6 py-4 flex items-center justify-between hover:scale-105 backdrop-blur-sm transition-transform duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <img src={feature.image} alt={feature.title} className="object-cover" />
                    <div className="text-left">
                      <div className="font-semibold">{feature.title}</div>
                      {feature.subtitle && (
                        <div className="text-sm">{feature.subtitle}</div>
                      )}
                    </div>
                  </div>
                  <img src={feature.arrow} alt="Arrow" />
                </button>
              ))}
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src={waggleHomeContent.hero.rightImage.image}
                alt={waggleHomeContent.hero.rightImage.alt}
                className="w-full max-w-sm h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
        <div className="mt-24">
          <p className="text-gray-400 text-sm mb-8">{waggleHomeContent.footerLogos.label}</p>
          <div className="flex items-center justify-start space-x-12 opacity-60">
            {waggleHomeContent.footerLogos.logos.map((logo, index) => (
              <img key={index} src={logo.image} alt={logo.alt} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
