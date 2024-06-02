export const data = {
    hero: {
        headline: "Discover Our App",
        subheadline: "The best app for all your needs.",
        ctaButtons: [
            {
                text: "Download Now",
                link: "/download",
            },
            {
                text: "Learn More",
                link: "#features",
            },
        ],
    },
    features: [
        {
            title: "Feature One",
            description: "Description of feature one.",
            icon: "https://via.placeholder.com/100",
        },
        {
            title: "Feature Two",
            description: "Description of feature two.",
            icon: "https://via.placeholder.com/100",
        },
    ],
    testimonials: [
        {
            name: "User One",
            feedback: "This app is fantastic! It has changed my life.",
            avatar: "https://via.placeholder.com/50",
        },
        {
            name: "User Two",
            feedback: "I can't imagine my daily routine without this app.",
            avatar: "https://via.placeholder.com/50",
        },
    ],
    pricing: [
        {
            plan: "Free",
            price: "$0.00/month",
            features: ["Feature A"],
        },
        {
            plan: "Basic",
            price: "$9.99/month",
            features: ["Feature A", "Feature B", "Feature C"],
            colorClass: "bg-ascent",
        },
        {
            plan: "Premium",
            price: "$19.99/month",
            features: ["Feature A", "Feature B", "Feature C", "Feature D"],
            colorClass: "bg-yellow-400 text-black",
            className: "md:col-span-2 lg:col-span-1",
        },
    ],
};
