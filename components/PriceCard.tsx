"use client";

import { motion } from "framer-motion";

interface PriceCardProps {
    plan: string;
    price: string;
    features: string[];
    className?: string;
    colorClass?: string;
}

const PriceCard = ({ data }: { data: PriceCardProps }) => {
    const [price, pricePer] = data.price.split("/");

    return (
        <motion.div
            initial={{ transform: "scale(0)", opacity: 0 }}
            whileInView={{ transform: "scale(1)", opacity: 1 }}
            whileHover={{ transform: "scale(1.02)", opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`flex justify-center ${data.className}`}
        >
            <div
                className={`pt-6 min-h-64 w-72 flex flex-col gap-1 items-center ${
                    data.colorClass
                        ? data.colorClass
                        : "bg-black dark:bg-white text-white dark:text-black"
                } px-10 rounded-lg`}
            >
                <h4 className="text-2xl">{data.plan}</h4>
                <span className="flex items-end">
                    <h2 className="text-5xl font-ClashDisplaySemibold">
                        {price}
                    </h2>
                    <h4 className="pb-0.5">/{pricePer}</h4>
                </span>

                <ul className="pt-2 flex flex-col items-center w-full list-disc text-lg">
                    {data.features.map((feature, index) => {
                        return (
                            <li key={index} className="list-item">
                                {feature}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </motion.div>
    );
};

export default PriceCard;
