"use client";

import { DataBar } from "../ui/DataBar";
import { useAlignmentDistribution } from "@/hooks/usePlanningData";
import Loading from "../ui/Loading";
import Error from "../ui/Error";

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
    const { data, isLoading, isError } = useAlignmentDistribution();

    if (isLoading) {
        return <Loading />;
    }

    if (isError || !data) {
        return <Error />;
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
