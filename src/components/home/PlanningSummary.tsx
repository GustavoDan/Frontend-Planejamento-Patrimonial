import { UpRightArrowIcon } from "../icons/UpRightArrowIcon";
import CircularProgress from "../ui/CircularProgress";

const PlanningSummary = () => {
    return (
        <CircularProgress
            percentage={75}
            size={140}
            label="219 clientes"
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
