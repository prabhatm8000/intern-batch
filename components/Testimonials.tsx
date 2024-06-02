import { data } from "@/data/data";
import TestimonialCard from "./TestimonialCard";
import Stars from "./imageComponents/Stars";

const Testimonials = () => {
    return (
        <div className="relative space-y-6">
            <div className="flex flex-col justify-center items-center">
                <h6 className="uppercase text-ascent">Testimonials</h6>
                <h2 className="font-ClashDisplaySemibold text-5xl capitalize text-center">
                    what our users say about as?
                </h2>
                <Stars className="absolute transform -rotate-[45deg] left-1/4 top-32 size-7 md:size-9 animate-pulse duration-500" />
            </div>
            <div className="relative w-full p-8 md:p-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {data.testimonials.map((testimonial, index) => {
                        return (
                            <TestimonialCard data={testimonial} key={index} />
                        );
                    })}
                </div>
                <Stars className="absolute transform -rotate-[45deg] right-1/4 bottom-0 size-7 md:size-9 animate-pulse duration-500" />
            </div>
        </div>
    );
};

export default Testimonials;
