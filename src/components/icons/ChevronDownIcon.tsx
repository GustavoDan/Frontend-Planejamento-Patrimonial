import { cn } from "@/lib/utils";

interface ChevronDownIconProps {
    className?: string;
    color?: string;
}

export const ChevronDownIcon = ({
    color = "#9F9F9F",
    className,
}: ChevronDownIconProps) => (
    <svg
        width="20"
        height="12"
        viewBox="0 0 20 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(className)}
    >
        <path
            d="M2 2L10 10L18 2"
            stroke={color}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
