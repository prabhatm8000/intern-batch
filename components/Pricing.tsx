import { data } from "@/data/data";
import PriceCard from "./PriceCard";
import Stars from "./imageComponents/Stars";

const Pricing = () => {
    return (
        <div className="relative space-y-10 py-20">
            <h6 className="uppercase text-ascent w-full text-center">Pricing</h6>
            <Stars className="absolute transform -rotate-[45deg] left-1/4 top-32 size-7 md:size-9 animate-pulse duration-500" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {data.pricing.map((price, index) => {
                    return <PriceCard data={price} key={index} />;
                })}
            </div>

            <Stars className="absolute transform rotate-[90deg] left-2/3 bottom-0 size-7 md:size-9 animate-pulse duration-500" />
        </div>
    );
};

export default Pricing;
