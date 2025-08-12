"use client";

import { useClientStats } from "@/hooks/useClientStats";
import { UpRightArrowIcon } from "../icons/UpRightArrowIcon";
import CircularProgress from "../ui/CircularProgress";

const PlanningSummary = () => {
    const { data, isError } = useClientStats();

    if (isError || !data) {
        return (
            <div className="flex items-center justify-center text-destructive text-center py-14">
                Erro ao carregar dados.
            </div>
        );
    }

    return (
        <CircularProgress
            percentage={Math.round(data.percentageWithPlan)}
            size={140}
            label={`${data.clientsWithPlan} cliente${
                data.clientsWithPlan !== 1 ? "s" : ""
            }`}
            gradientColors={{
                start: "#93FD67",
                end: "#D8FF2C",
            }}
            percentageColor="white"
            labelColor="7C7C7C"
            labelFontSize="2rem"
            percentageFontSize="2.875rem"
            showGlow={true}
            glowColor="#93FD67"
            strokeWidth={15}
        >
            <UpRightArrowIcon />
        </CircularProgress>
    );
};
export default PlanningSummary;
