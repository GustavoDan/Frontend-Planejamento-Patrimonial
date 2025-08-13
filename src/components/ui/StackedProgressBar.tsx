import { cn } from "@/lib/utils";
import React from "react";

const colorStyles = {
    cyan: {
        text: "text-[#46B7CD]",
        bg: "bg-[#46B7CD]",
        border: "border-[#46B7CD]",
        legend: "bg-[#46B7CD]",
    },
    green: {
        text: "text-green-400",
        bg: "bg-green-400",
        border: "border-green-400",
        legend: "bg-green-400",
    },
    yellow: {
        text: "text-[#F7C14C]",
        bg: "bg-[#F7C14C]",
        border: "border-[#F7C14C]",
        legend: "bg-[#F7C14C]",
    },
};

export interface BarSegment {
    id: string;
    label: string;
    value: number;
    color: keyof typeof colorStyles;
    type: "solid" | "dashed";
}

interface StackedProgressBarProps {
    data: BarSegment[];
}
export const StackedProgressBar = ({ data }: StackedProgressBarProps) => {
    return (
        <div className="w-full">
            <div className="relative mb-2 h-6">
                {data.map((segment) => (
                    <span
                        key={`${segment.id}-label`}
                        className={cn(
                            "absolute text-sm font-semibold",
                            colorStyles[segment.color].text
                        )}
                        style={{
                            left: `${segment.value}%`,
                            transform: "translateX(-50%)",
                        }}
                    >
                        {segment.value}%
                    </span>
                ))}
            </div>

            <div className="relative h-5 w-full rounded-full bg-neutral-800">
                {[...data].reverse().map((segment) => (
                    <div
                        key={segment.id}
                        className={cn(
                            "absolute h-full rounded-full",
                            segment.type === "solid" &&
                                colorStyles[segment.color].bg,
                            segment.type === "dashed" &&
                                `bg-transparent border-2 z-[10] border-dashed ${
                                    colorStyles[segment.color].border
                                }`
                        )}
                        style={{ width: `${segment.value}%` }}
                    />
                ))}
            </div>

            <div className="mt-4 flex items-center gap-x-6 text-sm text-neutral-400">
                {data.map((segment) => (
                    <div
                        key={`${segment.id}-legend`}
                        className="flex items-center gap-x-2"
                    >
                        <div
                            className={cn(
                                "h-3 w-3 rounded-sm",
                                colorStyles[segment.color].legend
                            )}
                        />
                        <span>{segment.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
