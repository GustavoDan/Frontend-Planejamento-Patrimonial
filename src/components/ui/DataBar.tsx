import { cn } from "@/lib/utils";
import clsx from "clsx";
import React from "react";

type BarVariant = "success" | "warning" | "danger" | "critical";

interface DataBarProps {
    label: string;
    percentage: number;
    variant: BarVariant;
    className?: string;
}

const getVariantStyles = (variant: BarVariant) => {
    switch (variant) {
        case "success":
            return {
                pill: "bg-[#68C04F]",
                glow: "drop-shadow-[0_0_6px_rgba(104,192,79,0.7)]",
            };
        case "warning":
            return {
                pill: "bg-[#CCC04F]",
                glow: "drop-shadow-[0_0_6px_rgba(204,192,79,0.6)]",
            };
        case "danger":
            return {
                pill: "bg-[#DC943C]",
                glow: "drop-shadow-[0_0_6px_rgba(220,148,60,0.6)]",
            };
        case "critical":
            return {
                pill: "bg-[#D24B4B]",
                glow: "drop-shadow-[0_0_6px_rgba(210,75,75,0.6)]",
            };
    }
};

export const DataBar = ({
    label,
    percentage,
    variant,
    className,
}: DataBarProps) => {
    const styles = getVariantStyles(variant);

    return (
        <div className={cn("flex items-center gap-x-4", className)}>
            <span className="w-4/12 text-[#949494] text-nowrap">{label}</span>

            <div className="h-9 w-8/12 rounded-[2rem] bg-[#353535]">
                <div
                    className={clsx(
                        "h-full rounded-[2rem] flex items-center pl-2 text-white",
                        styles.pill,
                        styles.glow
                    )}
                    style={{ width: `${percentage}%` }}
                >
                    {percentage}%
                </div>
            </div>
        </div>
    );
};
