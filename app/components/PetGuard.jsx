// File: PetMonitorCard.jsx
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
// import Button from "./ui/button";
import { ArrowRight, Plus } from "lucide-react";
import Pet_Safety_one from "../assets/Pet_Safety_one.png";
import back_card_one from "../assets/back_card_one.png";
import back_card_101 from "../assets/back_card_101.png";

const PetMonitorCard = () => {
    const [flippedCards, setFlippedCards] = useState([false, false, false, false]);

    const handleFlip = (i) => {
        setFlippedCards((prev) => {
            const copy = [...prev];
            copy[i] = !copy[i];
            return copy;
        });
    };

    return (
        <div>
            <h1 className="text-center text-[17px] md:text-[26px] font-medium !mb-6 md:!mt-[128px] !mt-[75px]">We Keep Watch While You're Out & About</h1>
            <div className="max-w-[1216px] w-full mx-auto flex flex-col gap-4 md:flex-row md:flex-wrap md:gap-[20px] md:justify-between md:gap-x-0">
                {/* ─────── CARD 1 ─────── */}
                <ReactCardFlip
                    isFlipped={flippedCards[0]}
                    flipDirection="horizontal"
                    containerClassName="w-full md:w-[49%]"
                    flipSpeedFrontToBack={0.6}
                    flipSpeedBackToFront={0.6}
                >
                    {/* Front 1 */}
                    <div
                        key="front"

                        className="relative bg-[#C4957E] rounded-3xl !p-[19px] md:!p-[48px] w-[100%]"
                    >
                        <p className="text-white/80 text-sm">When seconds count</p>
                        <h3 className="text-white text-2xl md:text-4xl font-semibold mb-4">
                            Waggle Pet Monitor
                        </h3>
                        <div className="flex justify-center mb-6">
                            <img src={Pet_Safety_one} alt="Waggle Pet Monitor" />
                        </div>
                        <div className="flex items-baseline gap-2 mb-6">
                            <span className="text-white">Starts at</span>
                            <span className="text-white/60 line-through">$199</span>
                            <span className="text-white text-4xl font-bold">$99</span>
                        </div>
                        <button className="inline-flex items-center px-8 py-2 bg-blue-500 text-white rounded-full">
                            View All<ArrowRight className="ml-2 h-5 w-5" />
                        </button>
                        <button
                            onClick={() => handleFlip(0)}
                            className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center"
                        >
                            <Plus className="h-5 w-5 text-black" />
                        </button>
                    </div>

                    {/* Back 1 */}
                    <div key="back" onClick={() => handleFlip(0)} className="relative bg-[#efefed] rounded-3xl w-[100%] flex h-[100%]">
                        <div>
                            <div className="flex justify-center h-[100%]">
                                <img src={back_card_one} alt="Monitor Anytime" className="!rounded-bl-[23px] !rounded-tl-[23px]" />
                            </div>
                        </div>
                        <div className="p-[40px] flex flex-col gap-[45px]">
                            <h3 className="text-[#000000] text-2xl md:text-4xl font-semibold">
                                Waggle Pet <br /> Monitor
                            </h3>

                            <div className="flex flex-col gap-[26px] w-[81%]">
                                <div className="flex gap-[8px]">
                                    <img src={back_card_101} alt="Monitor Anytime" />
                                    <span>Prevents heat/cold emergencies before they happen</span>
                                </div>
                                <div className="flex gap-[8px]">
                                    <img src={back_card_101} alt="Monitor Anytime" />
                                    <span>Prevents heat/cold emergencies before they happen</span>
                                </div>
                                <div className="flex gap-[8px]">
                                    <img src={back_card_101} alt="Monitor Anytime" />
                                    <span>Prevents heat/cold emergencies before they happen</span>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-baseline gap-2 mb-[20px]">
                                    <span className="text-[#000000]">Starts at</span>
                                    <span className="text-[#000000] line-through">$249</span>
                                    <span className="text-[#000000] text-4xl font-bold">$129</span>
                                </div>
                                <button className="inline-flex items-center px-8 py-2 bg-blue-500 text-white rounded-full mb-4">
                                    View All
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </ReactCardFlip>

                {/* ─────── CARD 2 ─────── */}
                <ReactCardFlip
                    isFlipped={flippedCards[1]}
                    flipDirection="horizontal"
                    containerClassName="w-full md:w-[49%]"
                    flipSpeedFrontToBack={0.6}
                    flipSpeedBackToFront={0.6}
                >
                    {/* Front 2 */}
                    <div
                        key="front"

                        className="relative bg-[#C4957E] rounded-3xl !p-[19px] md:!p-[48px] w-[100%]"
                    >
                        <p className="text-white/80 text-sm">Never lose track</p>
                        <h3 className="text-white text-2xl md:text-4xl font-semibold mb-4">
                            Smart Pet Tracker
                        </h3>
                        <div className="flex justify-center mb-6">
                            <img src={Pet_Safety_one} alt="Smart Pet Tracker" />
                        </div>
                        <div className="flex items-baseline gap-2 mb-6">
                            <span className="text-white/60 line-through">$159</span>
                            <span className="text-white text-4xl font-bold">$79</span>
                        </div>
                        <button className="inline-flex items-center px-8 py-2 bg-blue-500 text-white rounded-full">
                            View All<ArrowRight className="ml-2 h-5 w-5" />
                        </button>
                        <button
                            onClick={() => handleFlip(1)}
                            className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center"
                        >
                            <Plus className="h-5 w-5 text-black" />
                        </button>
                    </div>

                    {/* Back 2 */}
                    <div
                        key="back"
                        onClick={() => handleFlip(1)}
                        className="relative bg-[#efefed] rounded-3xl w-[100%] flex h-[100%]"
                    >
                        <div>
                            <div className="flex justify-center h-[100%]">
                                <img src={back_card_one} alt="Monitor Anytime" className="!rounded-bl-[23px] !rounded-tl-[23px]" />
                            </div>
                        </div>
                        <div className="p-[40px] flex flex-col gap-[45px]">
                            <h3 className="text-[#000000] text-2xl md:text-4xl font-semibold">
                                Waggle Pet <br /> Monitor
                            </h3>

                            <div className="flex flex-col gap-[26px] w-[81%]">
                                <div className="flex gap-[8px]">
                                    <img src={back_card_101} alt="Monitor Anytime" />
                                    <span>Prevents heat/cold emergencies before they happen</span>
                                </div>
                                <div className="flex gap-[8px]">
                                    <img src={back_card_101} alt="Monitor Anytime" />
                                    <span>Prevents heat/cold emergencies before they happen</span>
                                </div>
                                <div className="flex gap-[8px]">
                                    <img src={back_card_101} alt="Monitor Anytime" />
                                    <span>Prevents heat/cold emergencies before they happen</span>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-baseline gap-2 mb-[20px]">
                                    <span className="text-[#000000]">Starts at</span>
                                    <span className="text-[#000000] line-through">$249</span>
                                    <span className="text-[#000000] text-4xl font-bold">$129</span>
                                </div>
                                <button className="inline-flex items-center px-8 py-2 bg-blue-500 text-white rounded-full mb-4">
                                    View All
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </ReactCardFlip>

                {/* ─────── CARD 3 ─────── */}
                <ReactCardFlip
                    isFlipped={flippedCards[2]}
                    flipDirection="horizontal"
                    containerClassName="w-full md:w-[49%]"
                    flipSpeedFrontToBack={0.6}
                    flipSpeedBackToFront={0.6}
                >
                    {/* Front 3 */}
                    <div
                        key="front"

                        className="relative bg-[#C4957E] rounded-3xl !p-[19px] md:!p-[48px] w-[100%]"
                    >
                        <p className="text-white/80 text-sm">Adventure ready</p>
                        <h3 className="text-white text-2xl md:text-4xl font-semibold mb-4">
                            GPS Pet Collar
                        </h3>
                        <div className="flex justify-center mb-6">
                            <img src={Pet_Safety_one} alt="GPS Pet Collar" />
                        </div>
                        <div className="flex items-baseline gap-2 mb-6">
                            <span className="text-white/60 line-through">$249</span>
                            <span className="text-white text-4xl font-bold">$119</span>
                        </div>
                        <button className="inline-flex items-center px-8 py-2 bg-blue-500 text-white rounded-full">
                            View All<ArrowRight className="ml-2 h-5 w-5" />
                        </button>
                        <button
                            onClick={() => handleFlip(2)}
                            className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center"
                        >
                            <Plus className="h-5 w-5 text-black" />
                        </button>
                    </div>

                    {/* Back 3 */}
                    <div
                        key="back"
                        onClick={() => handleFlip(2)}
                        className="relative bg-[#efefed] rounded-3xl w-[100%] flex h-[100%]"
                    >
                        <div>
                            <div className="flex justify-center h-[100%]">
                                <img src={back_card_one} alt="Monitor Anytime" className="!rounded-bl-[23px] !rounded-tl-[23px]" />
                            </div>
                        </div>
                        <div className="p-[40px] flex flex-col gap-[45px]">
                            <h3 className="text-[#000000] text-2xl md:text-4xl font-semibold">
                                Waggle Pet <br /> Monitor
                            </h3>

                            <div className="flex flex-col gap-[26px] w-[81%]">
                                <div className="flex gap-[8px]">
                                    <img src={back_card_101} alt="Monitor Anytime" />
                                    <span>Prevents heat/cold emergencies before they happen</span>
                                </div>
                                <div className="flex gap-[8px]">
                                    <img src={back_card_101} alt="Monitor Anytime" />
                                    <span>Prevents heat/cold emergencies before they happen</span>
                                </div>
                                <div className="flex gap-[8px]">
                                    <img src={back_card_101} alt="Monitor Anytime" />
                                    <span>Prevents heat/cold emergencies before they happen</span>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-baseline gap-2 mb-[20px]">
                                    <span className="text-[#000000]">Starts at</span>
                                    <span className="text-[#000000] line-through">$249</span>
                                    <span className="text-[#000000] text-4xl font-bold">$129</span>
                                </div>
                                <button className="inline-flex items-center px-8 py-2 bg-blue-500 text-white rounded-full mb-4">
                                    View All
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </ReactCardFlip>

                {/* ─────── CARD 4 ─────── */}
                <ReactCardFlip
                    isFlipped={flippedCards[3]}
                    flipDirection="horizontal"
                    containerClassName="w-full md:w-[49%]"
                    flipSpeedFrontToBack={0.6}
                    flipSpeedBackToFront={0.6}
                >
                    {/* Front 4 */}
                    <div
                        key="front"

                        className="relative bg-[#C4957E] rounded-3xl !p-[19px] md:!p-[48px] w-[100%]"
                    >
                        <p className="text-white/80 text-sm">All-in-one protection</p>
                        <h3 className="text-white text-2xl md:text-4xl font-semibold mb-4">
                            Pet Safety Kit
                        </h3>
                        <div className="flex justify-center mb-6">
                            <img src={Pet_Safety_one} alt="Pet Safety Kit" />
                        </div>
                        <div className="flex items-baseline gap-2 mb-6">
                            <span className="text-white/60 line-through">$99</span>
                            <span className="text-white text-4xl font-bold">$59</span>
                        </div>
                        <button className="inline-flex items-center px-8 py-2 bg-blue-500 text-white rounded-full">
                            View All<ArrowRight className="ml-2 h-5 w-5" />
                        </button>
                        <button
                            onClick={() => handleFlip(3)}
                            className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center"
                        >
                            <Plus className="h-5 w-5 text-black" />
                        </button>
                    </div>

                    {/* Back 4 */}
                    <div
                        key="back"
                        onClick={() => handleFlip(3)}
                        className="relative bg-[#efefed] rounded-3xl w-[100%] flex h-[100%]"
                    >
                        <div>
                            <div className="flex justify-center h-[100%]">
                                <img src={back_card_one} alt="Monitor Anytime" className="!rounded-bl-[23px] !rounded-tl-[23px]" />
                            </div>
                        </div>
                        <div className="p-[40px] flex flex-col gap-[45px]">
                            <h3 className="text-[#000000] text-2xl md:text-4xl font-semibold">
                                Waggle Pet <br /> Monitor
                            </h3>

                            <div className="flex flex-col gap-[26px] w-[81%]">
                                <div className="flex gap-[8px]">
                                    <img src={back_card_101} alt="Monitor Anytime" />
                                    <span>Prevents heat/cold emergencies before they happen</span>
                                </div>
                                <div className="flex gap-[8px]">
                                    <img src={back_card_101} alt="Monitor Anytime" />
                                    <span>Prevents heat/cold emergencies before they happen</span>
                                </div>
                                <div className="flex gap-[8px]">
                                    <img src={back_card_101} alt="Monitor Anytime" />
                                    <span>Prevents heat/cold emergencies before they happen</span>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-baseline gap-2 mb-[20px]">
                                    <span className="text-[#000000]">Starts at</span>
                                    <span className="text-[#000000] line-through">$249</span>
                                    <span className="text-[#000000] text-4xl font-bold">$129</span>
                                </div>
                                <button className="inline-flex items-center px-8 py-2 bg-blue-500 text-white rounded-full mb-4">
                                    View All
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </ReactCardFlip>
            </div>
        </div>
    );
};

export default PetMonitorCard;
