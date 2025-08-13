"use client";

import { useClientStats } from "@/hooks/useClientStats";
import { UpRightArrowIcon } from "../icons/UpRightArrowIcon";
import CircularProgress from "../ui/CircularProgress";
import Loading from "../ui/Loading";
import Error from "../ui/Error";

const PlanningSummary = () => {
    const { data, isLoading, isError } = useClientStats();

    if (isLoading) {
        return <Loading />;
    }

    if (isError || !data) {
        return <Error />;
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
            labelColor="#7C7C7C"
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
