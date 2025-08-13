import { ReactNode } from "react";
import { calculatePosition } from ".";

interface TimelineBarProps {
    children: ReactNode;
    totalYears: number;
    startYear: number;
}

const TimelineBar = ({ startYear, totalYears, children }: TimelineBarProps) => (
    <div className="relative w-full h-0.5 bg-[#919191] my-4">
        {Array.from({ length: totalYears + 1 }).map((_, i) => {
            const year = startYear + i;
            if (year % 5 === 0 || year === 2025) {
                return (
                    <div
                        key={`tick-${i}`}
                        className="absolute top-1/2 h-4 w-0.5 bg-[#919191] -translate-y-1/2"
                        style={{ left: `${calculatePosition(year)}%` }}
                    />
                );
            }
            return null;
        })}
        {children}
    </div>
);

export default TimelineBar;
