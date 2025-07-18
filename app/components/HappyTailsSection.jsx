import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import paw from '../assets/paw-icon.webp';
import arrow1 from '../assets/rightarrow.webp';
import arrow2 from '../assets/leftarrow.webp';

// Prevent Swiper SSR crash
function useIsClient() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return isClient;
}

const HappyTailsSection = ({happyTails, title}) => {
  const swiperRef = useRef(null);
  const isClient = useIsClient();

  if (!isClient) return null;

  const sliderData = happyTails?.reduce((acc, edge) => {
    const fields = edge.node.fields || [];
    const image = fields.find(field => field.key === 'card_image')?.reference?.image?.url || '';
    const quote = fields.find(field => field.key === 'quote_text')?.value || '';
    const author = fields.find(field => field.key === 'author')?.value || '';
    const handle = fields.find(field => field.key === 'authorhandle')?.value || '';
    const icon = fields.find(field => field.key === 'icon')?.reference?.image?.url || '';

    // Determine type based on presence of image only or quote content
    if (image) {
      acc.push({
        type: 'image',
        image
      });
    } 
    if (quote && author && handle) {
      acc.push({
        type: 'card',
        icon,
        quote,
        author,
        handle
      });
    }

    return acc;
  }, []);

  if (sliderData?.length === 0) return null;

  return (
    <div className="bg-[#2c2f36] text-white py-[55px] relative z-0">
      {/* Title and Buttons */}
      <div className="text-center mb-10 relative">
        {title?.replace(/\\n/g, '\n')?.split('\n')?.map((line, index) => (
          <p key={index} className="text-[28px] md:text-[47px] font-normal lexend leading-none mb-[13px]">{line}</p>
        ))}

        <div className="absolute gap-2 z-10 top-[49%] right-[5%] hidden md:flex">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="flex items-center justify-center"
          >
            <img src={arrow2} alt="left arrow" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="flex items-center justify-center"
          >
            <img src={arrow1} alt="right arrow" />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="overflow-hidden md:px-[79px] max-w-[1440px] mx-auto w-full">
        <Swiper
          modules={[FreeMode, Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={24}
          slidesPerView={4.5}
          freeMode={true}
          className="!overflow-visible"
          breakpoints={{
            0: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 3.5,
            },
            1280: {
              slidesPerView: 4.5,
            },
          }}
        >
          {sliderData?.map((item, index) => (
            <SwiperSlide key={index}>
              {item.type === 'image' ? (
                <div className="w-full h-96 rounded-xl">
                  <img
                    src={item.image}
                    alt={`dog-${index}`}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              ) : (
                <div className="bg-white text-black flex flex-col p-6 relative w-full h-96 rounded-xl">
                  <div className="absolute top-3 left-5">
                    <img src={paw} alt="paw" />
                  </div>
                  <div className="flex flex-col justify-end px-2 mt-12">
                    <p className="text-gray-700 text-base leading-relaxed mb-6">
                      "{item.quote}"
                    </p>
                    <div>
                      <h3 className="font-semibold text-black text-base">{item.author}</h3>
                      <a href="#" className="text-gray-500 text-sm">{item.handle}</a>
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 bg-[#2E3138] rounded-none pt-[28px] pl-[28px] rounded-tl-[12px]">
                    <img src={item.icon} alt="icon" className="w-full h-full object-contain" />
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HappyTailsSection;
