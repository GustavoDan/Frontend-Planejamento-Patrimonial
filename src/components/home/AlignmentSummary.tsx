"use client";

import { useMemo } from "react";
import { DataBar } from "../ui/DataBar";

const AlignmentSummary = () => {
    const data = useMemo(
        () => [
            {
                label: "Superior a 90%",
                percentage: 14,
                variant: "success" as const,
            },
            { label: "90% a 70%", percentage: 20, variant: "warning" as const },
            { label: "70% a 50%", percentage: 45, variant: "danger" as const },
            {
                label: "Inferior a 50%",
                percentage: 21,
                variant: "critical" as const,
            },
        ],
        []
    );

    return (
        <div className="flex flex-col gap-2 py-6 px-3 font-semibold text-lg">
            {data.map((item) => (
                <DataBar
                    key={item.label}
                    label={item.label}
                    percentage={item.percentage}
                    variant={item.variant}
                />
            ))}
        </div>
    );
};
export default AlignmentSummary;
