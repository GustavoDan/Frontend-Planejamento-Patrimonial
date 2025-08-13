"use client";

import { cn } from "@/lib/utils";
import clsx from "clsx";
import React, { useMemo } from "react";

type BarVariant = "success" | "warning" | "danger" | "critical";

interface AllocationBarProps {
    label: string;
    value: number;
    variant: BarVariant;
    className?: string;
}

const getVariantColor = (variant: BarVariant) => {
    switch (variant) {
        case "success":
            return "bg-[#68C04F]";
        case "warning":
            return "bg-[#CCC04F]";
        case "danger":
            return "bg-[#DC943C]";
        case "critical":
            return "bg-[#D24B4B]";
    }
};

export const AllocationBar = ({
    label,
    value,
    variant,
    className,
}: AllocationBarProps) => {
    const colorClass = useMemo(() => getVariantColor(variant), [variant]);

    return (
        <div
            className={cn(
                "relative flex h-10 w-full items-center justify-between rounded-full bg-[#353535] px-4",
                className
            )}
        >
            <div
                className={clsx(
                    "absolute left-0 top-0 flex h-full items-center rounded-full px-4 text-[#FEFEFE] font-semibold",
                    colorClass
                )}
                style={{ width: `${value}%` }}
            >
                <span className="absolute left-3">{value}%</span>
            </div>

            <span className="absolute right-3 z-10 text-[#FEFEFE] font-semibold">
                {label}
            </span>
        </div>
    );
};
