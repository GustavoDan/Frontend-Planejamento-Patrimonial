import { UpRightArrowIcon } from "@/components/icons/UpRightArrowIcon";
import CircularProgress from "@/components/ui/CircularProgress";

const ContributionTarget = () => {
    return (
        <div className="flex flex-col gap-5 rounded-[2rem] py-4 px-8 bg-[#1B1B1B]">
            <span className="text-[#D9D9D9] text-xl">Meta aportes</span>
            <CircularProgress
                percentage={75}
                showPercentage={false}
                primaryLabel="R$ 83.000,00"
                primaryLabelColor="#5BD64D"
                primaryLabelFontSize="1.25rem"
                labelFontSize="1.25rem"
                size={90}
                label={"R$ 100.000,00"}
                gradientColors={{
                    start: "#93FD67",
                    end: "#D8FF2C",
                }}
                percentageColor="white"
                labelColor="#6D6D6D"
                percentageFontSize="2.875rem"
                showGlow={true}
                glowColor="#93FD67"
                strokeWidth={15}
            >
                <UpRightArrowIcon />
            </CircularProgress>
        </div>
    );
};

export default ContributionTarget;
