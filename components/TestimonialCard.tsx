"use client";
import { motion } from "framer-motion";

interface TestimonialCardProps {
    name: string;
    feedback: string;
    avatar: string;
}

const TestimonialCard = ({ data }: { data: TestimonialCardProps }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full flex items-start gap-4 min-h-36 border border-black/40 dark:border-white/40 rounded-lg p-4"
        >
            <img
                src={data.avatar}
                alt={data.name}
                width={60}
                height={60}
                className="object-cover rounded-full"
            />
            <div className="flex flex-col">
                <h4 className="text-2xl font-ClashDisplaySemibold">
                    {data.name}
                </h4>
                <p>{data.feedback}</p>
            </div>
        </motion.div>
    );
};

export default TestimonialCard;
