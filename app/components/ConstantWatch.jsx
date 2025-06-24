import React from "react";
import roadTripDesktop from "../assets/Road_Trip_Ready.png";
import roadTripMobile from "../assets/Road_Trip_Ready_mobile.png";
import ConstantWatch_first from "../assets/ConstantWatch_first.png";
import rightIconWhite from "../assets/right_icon_white.png";

const ConstantWatch = () => {
    return (
        <div >
            <h1 className="text-center text-[17px] md:text-[26px] font-medium !mb-6 !mt-0">We Keep Watch While You're Out & About</h1>
            <div className="flex flex-col gap-[20px] md:gap-[40px]">
                <div className="relative flex flex-col md:block max-w-[1216px] w-full mx-auto items-center">
                    <div className="w-full">
                        <img
                            src={roadTripDesktop}
                            alt="Waggle Banner Desktop"
                            className="hidden md:block w-full h-full object-cover !rounded-[32px]"
                        />

                        <img
                            src={roadTripMobile}
                            alt="Waggle Banner Mobile"
                            className="block md:hidden w-full h-full object-cover !rounded-[32px]"
                        />
                    </div>
                    <div className="absolute top-[28px] w-[90%] md:top-[74px] md:left-[56px]">
                        <h1 className="!m-0 !text-[32px] !mb-1 md:!text-[46px]">Road Trip Ready</h1>
                        <p className="!text-[14px] md:!text-[18px]">When adventure calls, your pet stays safe.</p>
                        <div className="flex flex-col gap-2 mt-[18px] md:flex-row md:flex-wrap md:w-[45%] md:gap-x-[40px] md:gap-y-[28px]">
                            <div className="flex items-center gap-2 md:w-[40%]">
                                <img
                                    src={ConstantWatch_first}
                                    alt="Waggle Banner Desktop"
                                />
                                <p className="!text-[14px] md:!text-[16px]">Instant temperature alerts</p>
                            </div>
                            <div className="flex items-center gap-2 md:w-[40%]">
                                <img
                                    src={ConstantWatch_first}
                                    alt="Waggle Banner Desktop"
                                />
                                <p className="!text-[14px] md:!text-[16px]">Instant temperature alerts</p>
                            </div>
                            <div className="flex items-center gap-2 md:w-[40%]">
                                <img
                                    src={ConstantWatch_first}
                                    alt="Waggle Banner Desktop"
                                />
                                <p className="!text-[14px] md:!text-[16px]">Instant temperature alerts</p>
                            </div>
                            <div className="flex items-center gap-2 md:w-[40%]">
                                <img
                                    src={ConstantWatch_first}
                                    alt="Waggle Banner Desktop"
                                />
                                <p className="!text-[14px] md:!text-[16px]">Instant temperature alerts</p>
                            </div>
                        </div>
                        <button className="flex items-center gap-2 bg-[#0085ff] text-[14px] text-white font-bold px-[19px] py-[13.5px] rounded-[83px] mt-[37px] md:mt-[40px]">RV Protection
                            <img
                                className="w-[10px]"
                                src={rightIconWhite}
                                alt="Waggle Banner Desktop"
                            />
                        </button>
                    </div>
                    <div className="flex justify-between bg-[#D6EAFF] absolute bottom-0 rounded-tl-[30px] rounded-tr-[30px] py-[8px] px-[29px] w-[85%] md:w-[100%] md:rounded-bl-[32px] md:rounded-br-[32px]">
                        <p className="!text-[12px] md:!text-[18px] font-bold">St. Patrick's Day Sale - 50% OFF</p>
                        <p className="!text-[12px] md:!text-[18px] font-bold">Free shipping on US orders $50+  |  Easy Returns</p>
                    </div>
                </div>

                <div className="relative flex flex-col md:block max-w-[1216px] w-full mx-auto items-center">
                    <div className="w-full">
                        <img
                            src={roadTripDesktop}
                            alt="Waggle Banner Desktop"
                            className="hidden md:block w-full h-full object-cover !rounded-[32px]"
                        />

                        <img
                            src={roadTripMobile}
                            alt="Waggle Banner Mobile"
                            className="block md:hidden w-full h-full object-cover !rounded-[32px]"
                        />
                    </div>
                    <div className="absolute top-[28px] w-[90%] md:top-[74px] md:left-[56px]">
                        <h1 className="!m-0 !text-[32px] !mb-1 md:!text-[46px]">Road Trip Ready</h1>
                        <p className="!text-[14px] md:!text-[18px]">When adventure calls, your pet stays safe.</p>
                        <div className="flex flex-col gap-2 mt-[18px] md:flex-row md:flex-wrap md:w-[45%] md:gap-x-[40px] md:gap-y-[28px]">
                            <div className="flex items-center gap-2 md:w-[40%]">
                                <img
                                    src={ConstantWatch_first}
                                    alt="Waggle Banner Desktop"
                                />
                                <p className="!text-[14px] md:!text-[16px]">Instant temperature alerts</p>
                            </div>
                            <div className="flex items-center gap-2 md:w-[40%]">
                                <img
                                    src={ConstantWatch_first}
                                    alt="Waggle Banner Desktop"
                                />
                                <p className="!text-[14px] md:!text-[16px]">Instant temperature alerts</p>
                            </div>
                            <div className="flex items-center gap-2 md:w-[40%]">
                                <img
                                    src={ConstantWatch_first}
                                    alt="Waggle Banner Desktop"
                                />
                                <p className="!text-[14px] md:!text-[16px]">Instant temperature alerts</p>
                            </div>
                            <div className="flex items-center gap-2 md:w-[40%]">
                                <img
                                    src={ConstantWatch_first}
                                    alt="Waggle Banner Desktop"
                                />
                                <p className="!text-[14px] md:!text-[16px]">Instant temperature alerts</p>
                            </div>
                        </div>
                        <button className="flex items-center gap-2 bg-[#0085ff] text-[14px] text-white font-bold px-[19px] py-[13.5px] rounded-[83px] mt-[37px] md:mt-[40px]">RV Protection
                            <img
                                className="w-[10px]"
                                src={rightIconWhite}
                                alt="Waggle Banner Desktop"
                            />
                        </button>
                    </div>
                    <div className="flex justify-between bg-[#D6EAFF] absolute bottom-0 rounded-tl-[30px] rounded-tr-[30px] py-[8px] px-[29px] w-[85%] md:w-[100%] md:rounded-bl-[32px] md:rounded-br-[32px]">
                        <p className="!text-[12px] md:!text-[18px] font-bold">St. Patrick's Day Sale - 50% OFF</p>
                        <p className="!text-[12px] md:!text-[18px] font-bold">Free shipping on US orders $50+  |  Easy Returns</p>
                    </div>
                </div>

                <div className="relative flex flex-col md:block max-w-[1216px] w-full mx-auto items-center">
                    <div className="w-full">
                        <img
                            src={roadTripDesktop}
                            alt="Waggle Banner Desktop"
                            className="hidden md:block w-full h-full object-cover !rounded-[32px]"
                        />

                        <img
                            src={roadTripMobile}
                            alt="Waggle Banner Mobile"
                            className="block md:hidden w-full h-full object-cover !rounded-[32px]"
                        />
                    </div>
                    <div className="absolute top-[28px] w-[90%] md:top-[74px] md:left-[56px]">
                        <h1 className="!m-0 !text-[32px] !mb-1 md:!text-[46px]">Road Trip Ready</h1>
                        <p className="!text-[14px] md:!text-[18px]">When adventure calls, your pet stays safe.</p>
                        <div className="flex flex-col gap-2 mt-[18px] md:flex-row md:flex-wrap md:w-[45%] md:gap-x-[40px] md:gap-y-[28px]">
                            <div className="flex items-center gap-2 md:w-[40%]">
                                <img
                                    src={ConstantWatch_first}
                                    alt="Waggle Banner Desktop"
                                />
                                <p className="!text-[14px] md:!text-[16px]">Instant temperature alerts</p>
                            </div>
                            <div className="flex items-center gap-2 md:w-[40%]">
                                <img
                                    src={ConstantWatch_first}
                                    alt="Waggle Banner Desktop"
                                />
                                <p className="!text-[14px] md:!text-[16px]">Instant temperature alerts</p>
                            </div>
                            <div className="flex items-center gap-2 md:w-[40%]">
                                <img
                                    src={ConstantWatch_first}
                                    alt="Waggle Banner Desktop"
                                />
                                <p className="!text-[14px] md:!text-[16px]">Instant temperature alerts</p>
                            </div>
                            <div className="flex items-center gap-2 md:w-[40%]">
                                <img
                                    src={ConstantWatch_first}
                                    alt="Waggle Banner Desktop"
                                />
                                <p className="!text-[14px] md:!text-[16px]">Instant temperature alerts</p>
                            </div>
                        </div>
                        <button className="flex items-center gap-2 bg-[#0085ff] text-[14px] text-white font-bold px-[19px] py-[13.5px] rounded-[83px] mt-[37px] md:mt-[40px]">RV Protection
                            <img
                                className="w-[10px]"
                                src={rightIconWhite}
                                alt="Waggle Banner Desktop"
                            />
                        </button>
                    </div>
                    <div className="flex justify-between bg-[#D6EAFF] absolute bottom-0 rounded-tl-[30px] rounded-tr-[30px] py-[8px] px-[29px] w-[85%] md:w-[100%] md:rounded-bl-[32px] md:rounded-br-[32px]">
                        <p className="!text-[12px] md:!text-[18px] font-bold">St. Patrick's Day Sale - 50% OFF</p>
                        <p className="!text-[12px] md:!text-[18px] font-bold">Free shipping on US orders $50+  |  Easy Returns</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConstantWatch;