import { cn } from "@/lib/utils";
import React, { ReactNode, useId, useMemo } from "react";

interface CircularProgressProps {
    percentage: number;
    size?: number;
    strokeWidth?: number;
    gradientColors?: { start: string; end: string };
    showInnerCircle?: boolean;
    innerCircleColor?: string;
    showEmptyTrail?: boolean;
    emptyTrailColor?: string;
    label?: string;
    labelColor?: string;
    labelFontSize?: string;
    showPercentage?: boolean;
    percentageColor?: string;
    percentageFontSize?: string;
    className?: string;
    showGlow?: boolean;
    glowColor?: string;
    children?: ReactNode;
}

const CircularProgress = ({
    percentage,
    size = 100,
    strokeWidth = 10,
    gradientColors = { start: "#676CFD", end: "#69C4EC" },
    showInnerCircle = true,
    innerCircleColor = "#353535",
    showEmptyTrail = true,
    emptyTrailColor = "#2E2E2E",
    label,
    labelColor,
    labelFontSize,
    showPercentage = true,
    percentageColor,
    percentageFontSize,
    showGlow = false,
    glowColor = "#676CFD",

    className,
    children,
}: CircularProgressProps) => {
    const uniqueGradientId = useId();
    const uniqueFilterId = useId();

    const viewBox = useMemo(() => `0 0 ${size} ${size}`, [size]);
    const radius = useMemo(() => (size - strokeWidth) / 2, [size, strokeWidth]);
    const circumference = useMemo(() => radius * 2 * Math.PI, [radius]);
    const strokeDashoffset = useMemo(
        () => circumference - (percentage / 100) * circumference,
        [circumference, percentage]
    );
    const centerX = useMemo(() => size / 2, [size]);
    const centerY = useMemo(() => size / 2, [size]);

    return (
        <div className="flex items-center justify-center gap-6 font-semibold">
            <div
                className={cn("relative", className)}
                style={{ width: size, height: size }}
            >
                <svg
                    width={size}
                    height={size}
                    viewBox={viewBox}
                    className="-rotate-90"
                    style={{ overflow: "visible" }}
                >
                    <defs>
                        <linearGradient
                            id={uniqueGradientId}
                            x1="0%"
                            y1="90%"
                            x2="80%"
                            y2="100%"
                        >
                            <stop
                                offset="0%"
                                stopColor={gradientColors.start}
                            />
                            <stop
                                offset="100%"
                                stopColor={gradientColors.end}
                            />
                        </linearGradient>

                        {showGlow && (
                            <filter
                                id={uniqueFilterId}
                                x="-50%"
                                y="-50%"
                                width="200%"
                                height="200%"
                            >
                                <feDropShadow
                                    dx="0"
                                    dy="0"
                                    stdDeviation="20"
                                    floodColor={glowColor}
                                    floodOpacity="0.7"
                                />
                            </filter>
                        )}
                    </defs>

                    {showEmptyTrail && (
                        <circle
                            style={{ stroke: emptyTrailColor }}
                            cx={centerX}
                            cy={centerY}
                            r={radius}
                            strokeWidth={strokeWidth}
                            fill="none"
                        />
                    )}

                    {showInnerCircle && (
                        <circle
                            cx={centerX}
                            cy={centerY}
                            r={radius}
                            fill={innerCircleColor}
                        />
                    )}

                    <circle
                        cx={centerX}
                        cy={centerY}
                        r={radius}
                        strokeWidth={strokeWidth}
                        fill="none"
                        stroke={`url(#${uniqueGradientId})`}
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        className="transition-all duration-500 ease-out"
                        filter={showGlow ? `url(#${uniqueFilterId})` : "none"}
                    />
                </svg>
                {children && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        {children}
                    </div>
                )}
            </div>

            <div className="flex flex-col">
                {showPercentage && (
                    <span
                        style={{
                            color: percentageColor || gradientColors.end,
                            fontSize: percentageFontSize || "1.75rem",
                        }}
                        className="text-nowrap"
                    >
                        {percentage} %
                    </span>
                )}
                {label && (
                    <span
                        style={{
                            color: labelColor || "#DADADA",
                            fontSize: labelFontSize || "1.25rem",
                        }}
                        className="text-nowrap"
                    >
                        {label}
                    </span>
                )}
            </div>
        </div>
    );
};

export default CircularProgress;
