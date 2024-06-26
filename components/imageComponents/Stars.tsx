import React from "react";

const Stars = ({
    className,
    color,
}: {
    className?: string;
    color?: string;
}) => {
    return (
        <svg
            className={className}
            width="41"
            height="38"
            viewBox="0 0 41 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M20.8081 -0.00842285L21.7915 19.5508L40.6973 14.4419L22.3993 21.4212L33.1003 37.823L20.8081 22.5773L8.51596 37.823L19.217 21.4212L0.918985 14.4419L19.8248 19.5508L20.8081 -0.00842285Z"
                fill={color ? color : "currentColor"}
            />
        </svg>
    );
};

export default Stars;
