"use client";

import { DataBar } from "../ui/DataBar";
import { useAlignmentDistribution } from "@/hooks/usePlanningData";

const categories = [
    {
        key: "green",
        label: "Superior a 90%",
        variant: "success" as const,
    },
    {
        key: "yellow-light",
        label: "90% a 70%",
        variant: "warning" as const,
    },
    {
        key: "yellow-dark",
        label: "70% a 50%",
        variant: "danger" as const,
    },
    {
        key: "red",
        label: "Inferior a 50%",
        variant: "critical" as const,
    },
] as const;

const AlignmentSummary = () => {
    const { data, isError } = useAlignmentDistribution();

    if (isError || !data) {
        return (
            <div className="flex items-center justify-center text-destructive text-center py-[6.125rem]">
                Erro ao carregar dados.
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-2 py-6 px-3 font-semibold text-lg">
            {categories.map((category) => (
                <DataBar
                    key={category.key}
                    label={category.label}
                    percentage={data[category.key].percentage}
                    variant={category.variant}
                />
            ))}
        </div>
    );
};
export default AlignmentSummary;
