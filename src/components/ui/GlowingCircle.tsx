import { cn } from "@/lib/utils";
import { CSSProperties, ReactNode } from "react";

interface GlowingButtonCircleProps {
    size?: number;
    gradientColors?: {
        start: string;
        end: string;
    };
    glowColor?: string;
    className?: string;
    children: ReactNode;
}

const GlowingCircle = ({
    size = 45,
    className,
    gradientColors = { start: "#8E5411", end: "#FFA53F" },
    glowColor,
    children,
}: GlowingButtonCircleProps) => {
    const glowStyle = {
        "--glow-color": glowColor || gradientColors.start,
    } as CSSProperties;

    return (
        <div
            className={cn(
                "relative flex items-center justify-center rounded-full",
                "drop-shadow-[0_0_12px_var(--glow-color)]",
                className
            )}
            style={{ ...glowStyle, width: size, height: size }}
        >
            <div
                style={{
                    backgroundImage: `linear-gradient(to bottom, ${gradientColors.end}, ${gradientColors.start})`,
                }}
                className="absolute inset-0 rounded-full"
            />

            <div
                style={{
                    backgroundImage: `linear-gradient(to bottom, ${gradientColors.start}, ${gradientColors.end})`,
                }}
                className="relative h-[88%] w-[88%] rounded-full"
            />

            <div className={cn("absolute flex items-center justify-center")}>
                <span
                    className={cn(
                        "text-white text-xl select-none",
                        "drop-shadow-[0_0_4px_rgba(255,255,255,1)]"
                    )}
                >
                    {children}
                </span>
            </div>
        </div>
    );
};

export default GlowingCircle;
