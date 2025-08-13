import { ReactNode } from "react";
import { GraphCurveIcon } from "../icons/GraphCurveIcon";
import GlowingCircle from "../ui/GlowingCircle";
import ViewSimulationButton from "./ViewSimulationButton";

interface HistoryContainerProps {
    title: string;
    circleGradientColors: {
        start: string;
        end: string;
    };
    children?: ReactNode;
}

const HistoryContainer = ({
    title,
    circleGradientColors,
    children,
}: HistoryContainerProps) => {
    return (
        <div className="border border-[#4B4B4B] rounded-[1.25rem] px-8 py-6 flex flex-col gap-5">
            <div className="flex justify-between">
                <div className="flex items-center gap-5">
                    <GlowingCircle
                        size={44}
                        gradientColors={circleGradientColors}
                    >
                        <GraphCurveIcon />
                    </GlowingCircle>
                    <span className="text-[#EAEAEA]">{title}</span>
                </div>
                {!children && <ViewSimulationButton />}
            </div>

            {children}
        </div>
    );
};
export default HistoryContainer;
