import React from "react";
import desktopImage from "../assets/Hero_image_desktop.png";
import mobileImage from "../assets/Hero_image_mobile.png";
import circleOne from "../assets/hero_banner_highlight.png";
import circleOneMid from "../assets/hero_banner_highlight_mid.png";
import circleOneLast from "../assets/hero_banner_highlight_last.png";
import rightIcon from "../assets/right_icon.png";

const WaggleBannerHome = () => {
    return (
        <div className="flex flex-col-reverse md:block max-w-[1216px] w-full mx-auto">
            <div className="relative">
                <img
                    src={desktopImage}
                    alt="Waggle Banner Desktop"
                    className="hidden md:block w-full h-full object-cover !rounded-[32px]"
                />

                <img
                    src={mobileImage}
                    alt="Waggle Banner Mobile"
                    className="block md:hidden w-full h-full object-cover !rounded-[32px]"
                />

                <div className="absolute w-[100%] top-[0%] flex items-center flex-col gap-[28px]">
                    <div className="w-[88%] md:w-[52%] text-center">
                        <h1 className="!m-0 md:!text-[56px] !text-[26px] text-white font-medium">Your pet’s world, always in view.</h1>
                        <p className="md:!text-[20px] !text-[14px] text-white font-bold">360° protection with 24/7 peace of mind.</p>
                    </div>
                    <div className="flex gap-[22px] md:gap-[28px]">
                        <div className="flex items-center bg-white md:!rounded-tr-[170px] md:!rounded-br-[170px] md:rounded-tl-[487px] md:rounded-bl-[487px] md:flex-row flex-col rounded-bl-[10.92px] rounded-br-[10.92px] rounded-tl-[487px] rounded-tr-[487px]">
                            <img
                                src={circleOne}
                                alt="Waggle Banner Desktop"
                            />
                            <div className="flex flex-col gap-[10px] md:!pl-[8px] px-[6px] py-[11px] items-center text-center md:items-start md:text-left">
                                <p className="w-[99%] !text-[12px] md:!text-[16px] md:font-bold">Paw-fect Gifts</p>
                                <img
                                    className="w-[10px]"
                                    src={rightIcon}
                                    alt="Waggle Banner Desktop"
                                />
                            </div>
                        </div>
                        <div className="flex items-center bg-white md:!rounded-tr-[170px] md:!rounded-br-[170px] md:rounded-tl-[487px] md:rounded-bl-[487px] md:flex-row flex-col rounded-bl-[10.92px] rounded-br-[10.92px] rounded-tl-[487px] rounded-tr-[487px]">
                            <img
                                src={circleOneMid}
                                alt="Waggle Banner Desktop"
                            />
                            <div className="flex flex-col gap-[10px] md:!pl-[8px] px-[6px] py-[11px] items-center text-center md:items-start md:text-left">
                                <p className="w-[99%] !text-[12px] md:!text-[16px] md:font-bold">Paw-fect Gifts</p>
                                <img
                                    className="w-[10px]"
                                    src={rightIcon}
                                    alt="Waggle Banner Desktop"
                                />
                            </div>
                        </div>
                        <div className="flex items-center bg-white md:!rounded-tr-[170px] md:!rounded-br-[170px] md:rounded-tl-[487px] md:rounded-bl-[487px] md:flex-row flex-col rounded-bl-[10.92px] rounded-br-[10.92px] rounded-tl-[487px] rounded-tr-[487px]">
                            <img
                                src={circleOneLast}
                                alt="Waggle Banner Desktop"
                            />
                            <div className="flex flex-col gap-[10px] md:!pl-[8px] px-[6px] py-[11px] items-center text-center md:items-start md:text-left">
                                <p className="w-[99%] !text-[12px] md:!text-[16px] md:font-bold">Paw-fect Gifts</p>
                                <img
                                    className="w-[10px]"
                                    src={rightIcon}
                                    alt="Waggle Banner Desktop"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between bg-[#D6EAFF] md:rounded-b-[40.56px] md:px-[62px] md:py-[10px] max-w-[1147px] md:w-[88%] mx-auto px-[64px] py-[10px] rounded-tl-[30px] md:rounded-tl-[0px] rounded-tr-[30px] md:rounded-tr-[0px] w-[88%]">
                <p className="!text-[12px] md:!text-[18px] font-bold">St. Patrick's Day Sale - 50% OFF</p>
                <p className="!text-[12px] md:!text-[18px] font-bold">Free shipping on US orders $50+  |  Easy Returns</p>
            </div>
        </div>
    );
};

export default WaggleBannerHome;