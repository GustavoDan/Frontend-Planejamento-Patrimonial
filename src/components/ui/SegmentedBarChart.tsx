"use client";

import { cn } from "@/lib/utils";
import { useMemo } from "react";

interface SegmentedBarChartProps {
    highlightPercentage: number;
    barCount?: number;
}

const SegmentedBarChart = ({
    highlightPercentage,
    barCount = 32,
}: SegmentedBarChartProps) => {
    const bars = useMemo(() => Array.from({ length: barCount }), [barCount]);
    const activeBarCount = useMemo(
        () => Math.round((highlightPercentage / 100) * barCount),
        [barCount, highlightPercentage]
    );

    return (
        <div className="flex h-10 w-full items-center gap-1">
            {bars.map((_, index) => {
                const isActive = index < activeBarCount;

                const barClass = isActive ? "bg-[#6777FA]" : "bg-[#292D52]";

                return (
                    <div
                        key={index}
                        className={cn("h-full flex-1 rounded-full", barClass)}
                    />
                );
            })}
        </div>
    );
};

export default SegmentedBarChart;
