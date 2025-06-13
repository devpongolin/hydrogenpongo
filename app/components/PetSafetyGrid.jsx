import React, { useState, useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import dogImage1 from "../assets/dog1.webp";
import dogImage2 from "../assets/dog2.webp";
import dogImage3 from "../assets/dog3.webp";

const petSafetyContent = {
  title: "The Ultimate Pet Parent Guide",
  articles: [
    {
      title: "Watch Over Your Pet Anytime:",
      description:
        "Remote monitoring lets you check in on your pet, no matter where you ar",
      date: "February 1, 2025",
      image: dogImage1,
      alt: "Husky dog with owner",
    },
    {
      title: "Watch Over Your Pet Anytime:",
      description:
        "Remote monitoring lets you check in on your pet, no matter where you ar",
      date: "February 1, 2025",
      image: dogImage2,
      alt: "White dog with owner",
    },
    {
      title: "Watch Over Your Pet Anytime:",
      description:
        "Remote monitoring lets you check in on your pet, no matter where you ar",
      date: "February 1, 2025",
      image: dogImage3,
      alt: "Golden retriever with owner",
    },
  ],
};

const PetSafetyGrid = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // On scroll, update active dot based on which card is mostly visible
  const handleScroll = () => {
    if (!scrollRef.current) return;

    const scrollLeft = scrollRef.current.scrollLeft;
    const cardWidth = 366; // 360px width + 6px gap approx
    const newIndex = Math.round(scrollLeft / cardWidth);

    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  // Scroll smoothly to clicked dot card
  const scrollToIndex = (index) => {
    if (!scrollRef.current) return;
    const cardWidth = 366;
    scrollRef.current.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll, { passive: true });

    return () => container.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  return (
    <div className="py-[55px] md:px-[112px] px-[10px] sm:px-6 lg:px-8">
      <div className="max-w-[1216px] w-full mx-auto">
        <h1 className="lexend font-medium text-[36px] leading-[100%] tracking-[0] text-center text-dark-gray mb-[28px]">
          {petSafetyContent.title}
        </h1>

        <div
          ref={scrollRef}
          className="
            mb-[16px]
            overflow-x-auto
            scrollbar-hide
            md:grid md:grid-cols-3 md:gap-8 md:overflow-visible
            flex flex-row gap-6
          "
          style={{ scrollSnapType: "x mandatory" }}
        >
          {petSafetyContent.articles.map((item, idx) => (
            <div
              key={idx}
              className="
                rounded-[40px] overflow-hidden shadow-lg relative mx-auto group
                flex-shrink-0 w-[360px] h-[380px]
                scroll-snap-align-start
                md:w-auto md:h-auto md:flex-shrink-1
              "
            >
              <div className="relative h-full">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute bottom-[10px] left-[10px] cursor-pointer
                             md:w-[360px] md:h-[200px] rounded-[30px] shadow-md
                             px-[30px] py-[30px] bg-white transition-all duration-300
                             transform origin-bottom-left group-hover:bg-blue-500
                             group-hover:w-[380px] group-hover:left-0
                             group-hover:bottom-0 group-hover:rounded-b-none"
                >
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h3 className="lato font-bold text-[20px] leading-[100%] tracking-[0]  group-hover:text-white">
                        {item.title}
                      </h3>
                      <p className="max-w-[17rem] lato font-medium text-[16px] leading-[130%] tracking-[0] mt-[11px] text-[#6C6F73] group-hover:text-white group-hover:text-opacity-90">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-[39px]">
                      <span className="lato font-normal text-[16px] leading-[100%] tracking-[0] text-[#20212470] group-hover:text-white group-hover:text-opacity-70">
                        {item.date}
                      </span>
                      <button className="absolute right-[47px] bottom-[32px] flex items-center justify-center w-[40px] h-[40px] bg-blue-500 rounded-full text-white group-hover:bg-white group-hover:text-blue-500">
                        <ArrowRight className="h-5 w-5 cursor-pointer" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-4 mb-[24px] md:hidden">
          {petSafetyContent.articles.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${
                idx === activeIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
              aria-label={`Scroll to item ${idx + 1}`}
            />
          ))}
        </div>

        <div className="text-center">
          <button className="inline-flex lato text-[18px] leading-[100%] tracking-[0] items-center px-[32px] py-[18px] blue-400 white-text-element font-semibold rounded-[100px] button-hover2">
            View All
            <ArrowRight className="ml-2 h-5 w-5 cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetSafetyGrid;
