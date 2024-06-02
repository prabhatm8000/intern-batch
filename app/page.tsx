import Banner from "@/components/Banner";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";

export default function Home() {
    return (
        <main className="container mx-auto space-y-10">
            <Hero />
            <Features />
            <Testimonials />
            <Pricing />
            <Banner />
        </main>
    );
}
