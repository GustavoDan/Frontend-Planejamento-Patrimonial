import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import React from "react";

interface LabeledProgressProps {
    label: string;
    value: number;
    className?: string;
}

const LabeledProgress = ({ label, value, className }: LabeledProgressProps) => {
    return (
        <div
            className={cn(
                "grid grid-cols-12 items-center gap-x-4 pt-3",
                className
            )}
        >
            <span className="col-span-4 text-sm text-[#D9D9D9] text-nowrap">
                {label}
            </span>

            <div className="relative col-span-8">
                <Progress value={value} />

                <span
                    className="absolute -top-5 text-sm font-semibold text-[#438EFF] transition-all duration-500 ease-out"
                    style={{
                        left: `calc(${value}% - 1rem)`,
                    }}
                >
                    {value}%
                </span>
            </div>
        </div>
    );
};

export default LabeledProgress;
