"use client";

import { data } from "@/data/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { GoDownload } from "react-icons/go";

import iPhoneChart from "../assets/images/iPhone-13-Pro-Front-Chart.png";
import iPhoneDashBoard from "../assets/images/iPhone-13-Pro-Front-Dashboard.png";
import Circle from "./imageComponents/Circle";
import Stars from "./imageComponents/Stars";

const Banner = () => {
    return (
        <div className="relative min-h-96 p-10 md:p-20 rounded-xl gap bg-black text-white dark:bg-white dark:text-black">
            <div className="absolute w-full hidden lg:block -bottom-96 -right-80 text-white z-[0]">
                <Circle className="text-white dark:text-black" />
            </div>
            <Stars className="absolute transform -rotate-[15deg] right-1/4 top-16 xl:top-10 size-7 md:size-9 animate-pulse duration-700" />
            <div className="flex flex-col gap-2 z-10 absolute w-[calc(100%-160px)]">
                <h2 className="text-6xl capitalize font-ClashDisplayBold">
                    ready to get started?
                </h2>
                <p className="opacity-60">{data.hero.subheadline}</p>
                <Link
                    href={data.hero.ctaButtons[0].link}
                    className="h-[60px] px-8 md:px-12 w-fit rounded-md bg-white text-black dark:bg-black dark:text-white flex gap-2 justify-center items-center"
                >
                    <span>{data.hero.ctaButtons[0].text}</span>
                    <GoDownload className="size-6" />
                </Link>
            </div>
            <div className="absolute w-full bottom-0 md:bottom-1/2 xl:bottom-full left-1/2 xl:left-3/4 translate-x-[-50%] sm:translate-x-[-25%] md:translate-x-0">
                <motion.img
                    initial={{
                        x: -200,
                        opacity: 0,
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                    }}
                    transition={{ ease: "easeInOut", duration: 0.5 }}
                    className="z-10 absolute w-[200px] lg:w-[250px]"
                    width={250}
                    alt="iPhoneDashBoard"
                    src={iPhoneDashBoard.src}
                />
                <motion.img
                    initial={{
                        x: 0,
                        y: 0,
                        opacity: 0,
                    }}
                    animate={{
                        x: 150,
                        y: 50,
                        opacity: 1,
                    }}
                    transition={{
                        ease: "easeInOut",
                        duration: 0.5,
                        delay: 0.5,
                    }}
                    className="z-0 absolute w-[200px] lg:w-[250px]"
                    width={250}
                    alt="iPhoneChart"
                    src={iPhoneChart.src}
                />
                <motion.div
                    initial={{
                        left: "0%",
                        bottom: "0rem",
                        opacity: 0,
                    }}
                    animate={{
                        left: "-100%",
                        bottom: "-24rem",
                        opacity: 1,
                    }}
                    transition={{
                        ease: "easeInOut",
                        duration: 0.5,
                        delay: 0.5,
                    }}
                    className="absolute w-screen -bottom-96 -left-full md:hidden -z-[10]"
                >
                    <Circle className="text-black dark:text-white" />
                </motion.div>
            </div>
        </div>
    );
};

export default Banner;
