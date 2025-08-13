import { useId } from "react";

interface UpRightArrowIconProps {
    colorStart?: string;
    colorEnd?: string;
}

export const UpRightArrowIcon = ({
    colorStart = "#67BF4E",
    colorEnd = "#A2FD5A",
}: UpRightArrowIconProps) => {
    const gradientId = useId();

    return (
        <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <mask
                id={`mask_${gradientId}`}
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="36"
                height="36"
            >
                <rect width="36" height="36" fill="#D9D9D9" />
            </mask>
            <g mask={`url(#mask_${gradientId})`}>
                <path
                    d="M9.68982 27.2951L7.29395 24.8992L21.4877 10.7055H8.88357V7.29297H27.2961V25.7055H23.8836V13.1013L9.68982 27.2951Z"
                    fill={`url(#${gradientId})`}
                />
            </g>
            <defs>
                <linearGradient
                    id={gradientId}
                    x1="17.295"
                    y1="7.29297"
                    x2="17.295"
                    y2="27.2951"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor={colorStart} />
                    <stop offset="1" stopColor={colorEnd} />
                </linearGradient>
            </defs>
        </svg>
    );
};
