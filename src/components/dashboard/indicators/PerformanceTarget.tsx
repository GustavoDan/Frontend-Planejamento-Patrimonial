import { UpRightArrowIcon } from "@/components/icons/UpRightArrowIcon";
import CircularProgress from "@/components/ui/CircularProgress";

const PerformanceTarget = () => {
    return (
        <div className="flex flex-col gap-5 rounded-[2rem] py-4 px-8 bg-[#1B1B1B]">
            <span className="text-[#D9D9D9] text-xl">Meta aportes</span>
            <CircularProgress
                percentage={75}
                showPercentage={false}
                primaryLabel="R$ 33.000,00"
                primaryLabelFontSize="1.25rem"
                labelFontSize="1.25rem"
                size={90}
                label={"R$ 100.000,00"}
                gradientColors={{
                    start: "#438EFF",
                    end: "#438EFF",
                }}
                percentageColor="white"
                labelColor="#6D6D6D"
                percentageFontSize="2.875rem"
                showGlow={true}
                glowColor="#438EFF"
                strokeWidth={15}
            >
                <UpRightArrowIcon colorStart="#438EFF" colorEnd="#438EFF" />
            </CircularProgress>
        </div>
    );
};

export default PerformanceTarget;
