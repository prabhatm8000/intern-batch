"use client";
import { data } from "@/data/data";
import { motion } from "framer-motion";

import iPhoneDashBoard from "../assets/images/iPhone-13-Pro-Front-Dashboard.png";
import Stars from "./imageComponents/Stars";

import Circle from "./imageComponents/Circle";

const Features = () => {
    return (
        <div className="w-full flex flex-col-reverse md:flex-row justify-center gap-6 md:gap-20 relative pb-20">
            <Stars className="absolute transform rotate-[40deg] left-2/4 -translate-y-20 size-7 md:size-9 animate-pulse duration-1000" />
            <div className="w-full flex justify-center relative">
                <motion.div
                    initial={{
                        x: -50,
                        y: 50,
                        opacity: 0,
                    }}
                    whileInView={{
                        x: 0,
                        y: 0,
                        opacity: 0.6,
                    }}
                    transition={{ ease: "easeOut", duration: 0.5 }}
                    className="absolute w-full -bottom-0 -left-full text-white -z-10"
                >
                    <Circle className="w-screen" />
                </motion.div>

                <motion.img
                    initial={{
                        x: -50,
                        opacity: 0,
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                    }}
                    transition={{ ease: "easeOut", duration: 0.5 }}
                    className="h-fit"
                    width={250}
                    alt="iPhoneDashBoard"
                    src={iPhoneDashBoard.src}
                />
            </div>

            <motion.div
                initial={{
                    x: 50,
                    opacity: 0,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                transition={{ ease: "easeOut", duration: 0.5 }}
                className="w-full flex flex-col gap-6"
            >
                <div className="flex flex-col">
                    <h6 className="uppercase text-ascent">Features</h6>
                    <h2 className="font-ClashDisplaySemibold text-5xl">
                        Uifry Premium
                    </h2>
                </div>

                {data.features.map((feature, index) => {
                    return (
                        <div key={index} className="flex items-center gap-4">
                            <img
                                width={30}
                                height={30}
                                alt={feature.title}
                                src={feature.icon}
                            />
                            <div className="flex flex-col">
                                <h5 className="font-ClashDisplaySemibold">
                                    {feature.title}
                                </h5>
                                <p className="opacity-60">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </motion.div>
            <Stars className="absolute transform rotate-[70deg] right-0 bottom-0 -translate-y-20 size-7 md:size-9 animate-pulse duration-700" />
        </div>
    );
};

export default Features;
