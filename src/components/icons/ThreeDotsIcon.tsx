interface ThreeDotsIconProps {
    height?: number;
    width?: number;
    color?: string;
    className?: string;
}

export const ThreeDotsIcon = ({
    height = 5,
    width = 23,
    color = "#444444",
    className,
}: ThreeDotsIconProps) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 23 5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <circle cx="2.5" cy="2.5" r="2.5" fill={color} />
        <circle cx="11.5" cy="2.5" r="2.5" fill={color} />
        <circle cx="20.5" cy="2.5" r="2.5" fill={color} />
    </svg>
);
