"use client";
import { data } from "@/data/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { GoDownload } from "react-icons/go";
import { PiMoney, PiTrophyLight } from "react-icons/pi";
import iPhoneChart from "../assets/images/iPhone-13-Pro-Front-Chart.png";
import iPhoneDashBoard from "../assets/images/iPhone-13-Pro-Front-Dashboard.png";
import Stars from "./imageComponents/Stars";

const Hero = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
            <Stars className="absolute transform -rotate-[15deg] left-1/4 top-32 size-7 md:size-9 animate-pulse duration-500" />
            <div className="capitalize mt-32 space-y-6">
                <motion.h1
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 0.5 }}
                    className="text-5xl md:text-6xl font-ClashDisplayBold"
                >
                    {data.hero.headline}
                </motion.h1>
                <motion.p
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 0.6 }}
                    transition={{
                        ease: "easeOut",
                        duration: 0.5,
                        delay: 0.2,
                    }}
                >
                    {data.hero.subheadline}
                </motion.p>

                <motion.div
                    className="flex gap-2 md:gap-4 md:text-lg"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                        ease: "easeOut",
                        duration: 0.5,
                        delay: 0.2,
                    }}
                >
                    {/* download */}
                    <Link
                        href={data.hero.ctaButtons[0].link}
                        className="h-[60px] px-8 md:px-12 rounded-md bg-black text-white dark:bg-white dark:text-black flex gap-2 justify-center items-center"
                    >
                        <span>{data.hero.ctaButtons[0].text}</span>
                        <GoDownload className="size-6" />
                    </Link>

                    {/* feature */}
                    <Link
                        href={data.hero.ctaButtons[1].link}
                        className="h-[60px] px-8 md:px-12 flex gap-2 justify-center items-center "
                    >
                        <span>{data.hero.ctaButtons[1].text}</span>
                    </Link>
                </motion.div>

                {/* screen: up to 768px */}
                <div className="md:hidden py-14 flex flex-col justify-center items-center gap-4">
                    <div className="relative w-full p-6 flex flex-col sm:flex-row gap-4 justify-between bg-black text-white dark:bg-white dark:text-black rounded-lg">
                        <div className="flex gap-2 items-center">
                            <PiTrophyLight className="size-10 p-1.5 border rounded-full border-ascent" />
                            <div className="flex flex-col">
                                <span className="text-sm font-ClashDisplaySemibold">
                                    achievements
                                </span>
                                <span className="text-sm opacity-70">
                                    best finance app on playstore
                                </span>
                            </div>
                        </div>

                        <div className="flex gap-2 items-center">
                            <PiMoney className="size-10 p-1.5 border rounded-full border-ascent" />
                            <div className="flex flex-col">
                                <span className="text-sm font-ClashDisplaySemibold">
                                    finance
                                </span>
                                <span className="text-sm opacity-70">
                                    most popular accounting app
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="relative px-6 flex gap-4 justify-center items-center text-black bg-ascent rounded-lg">
                        <Stars className="size-16 px-4 border-x border-black" />
                        <div className="flex flex-col text-sm">
                            <span className="font-ClashDisplaySemibold">
                                uifry premium
                            </span>
                            <span>free trial</span>
                        </div>
                    </div>
                </div>

                {/* screen: 768px and up */}
                <div className="size-[450px] hidden md:block relative">
                    <Stars className="absolute transform rotate-[10deg] size-7 md:size-9 left-1/4 bottom-3/4 animate-pulse duration-700" />
                    <motion.div
                        initial={{
                            top: 0,
                            left: 0,
                            opacity: 0,
                        }}
                        whileInView={{
                            top: 160,
                            transform: "rotate(-28deg)",
                            opacity: 1,
                        }}
                        transition={{
                            ease: "easeOut",
                            duration: 0.5,
                            delay: 0.2,
                        }}
                        className="relative w-[600px] h-[86px] px-10 flex justify-between bg-black text-white dark:bg-white dark:text-black rounded-e-lg"
                    >
                        <span className="absolute -top-[2px] -left-16 text-black dark:text-white text-9xl font-ClashDisplayBold leading-[94px]">
                            A
                        </span>
                        <div className="flex gap-2 items-center">
                            <PiTrophyLight className="size-10 p-1.5 border rounded-full border-ascent" />
                            <div className="flex flex-col">
                                <span className="text-sm font-ClashDisplaySemibold">
                                    achievements
                                </span>
                                <span className="text-sm opacity-70">
                                    best finance app on playstore
                                </span>
                            </div>
                        </div>

                        <div className="flex gap-2 items-center">
                            <PiMoney className="size-10 p-1.5 border rounded-full border-ascent" />
                            <div className="flex flex-col">
                                <span className="text-sm font-ClashDisplaySemibold">
                                    finance
                                </span>
                                <span className="text-sm opacity-70">
                                    most popular accounting app
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{
                            top: 0,
                            left: 0,
                            opacity: 0,
                        }}
                        whileInView={{
                            transform: "rotate(-45deg)",
                            top: 72,
                            left: 224,
                            opacity: 1,
                        }}
                        transition={{
                            ease: "easeOut",
                            duration: 0.5,
                            delay: 0.2,
                        }}
                        className="relative -z-10 pe-10 h-[86px] w-fit flex items-center bg-ascent text-black rounded-e-lg"
                    >
                        <span className="w-0 h-0 -translate-x-[99%] rounded-s-lg border-[88px] border-x-[86.6px] border-e-[0px] border-transparent border-b-ascent border-t-0"></span>
                        <span>Make The Best Financial Decisions</span>
                    </motion.div>

                    <motion.div
                        initial={{
                            top: 0,
                            left: 0,
                            opacity: 0,
                        }}
                        whileInView={{
                            top: 168,
                            left: 252,
                            opacity: 1,
                        }}
                        transition={{
                            ease: "easeOut",
                            duration: 0.5,
                            delay: 0.2,
                        }}
                        className="relative -z-20 px-14 h-[86px] w-fit flex items-center gap-4 bg-ascent text-black rounded-e-lg"
                    >
                        <Stars className="size-20 px-4 border-x border-black" />
                        <div className="flex flex-col text-sm">
                            <span className="font-ClashDisplaySemibold">
                                uifry premium
                            </span>
                            <span>free trial</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="relative w-full h-96 md:h-[500px] flex justify-center">
                <motion.img
                    initial={{
                        top: 0,
                        opacity: 0,
                    }}
                    whileInView={{
                        transform: "rotate(-15deg) translateX(-50%)",
                        opacity: 1,
                    }}
                    transition={{ ease: "easeOut", duration: 0.5 }}
                    className="absolute z-20 w-[150px] sm:w-[200px] lg:w-[250px]"
                    width={250}
                    alt="iPhoneDashBoard"
                    src={iPhoneDashBoard.src}
                />
                <motion.img
                    initial={{
                        top: 0,
                        opacity: 0,
                    }}
                    whileInView={{
                        top: 60,
                        transform: "rotate(-15deg)",
                        opacity: 1,
                    }}
                    transition={{
                        ease: "easeOut",
                        duration: 0.5,
                        delay: 0.2,
                    }}
                    className="absolute z-10 w-[150px] sm:w-[200px] lg:w-[250px]"
                    width={250}
                    alt="iPhoneChart"
                    src={iPhoneChart.src}
                />
                <motion.img
                    initial={{
                        top: 0,
                        opacity: 0,
                    }}
                    whileInView={{
                        top: 128,
                        transform: "rotate(-15deg) translateX(50%)",
                        opacity: 1,
                    }}
                    transition={{
                        ease: "easeOut",
                        duration: 0.5,
                        delay: 0.4,
                    }}
                    className="absolute z-0 w-[150px] sm:w-[200px] lg:w-[250px]"
                    width={250}
                    alt="iPhoneDashBoard"
                    src={iPhoneDashBoard.src}
                />
                <Stars className="absolute transform rotate-[4deg] size-7 md:size-9 right-2/3 bottom-1/2 md:bottom-1/3 animate-pulse duration-700" />
            </div>
        </div>
    );
};

export default Hero;
