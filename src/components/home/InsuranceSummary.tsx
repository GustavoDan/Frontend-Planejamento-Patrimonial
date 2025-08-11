import CircularProgress from "../ui/CircularProgress";
import InsuranceContainer from "./InsuranceContainer";

const InsuranceSummary = () => {
    return (
        <div className="flex flex-col gap-7">
            <InsuranceContainer>
                <CircularProgress
                    percentage={60}
                    showEmptyTrail={false}
                    gradientColors={{
                        start: "#6EE7B7",
                        end: "#60A5FA",
                    }}
                    label="Com filho"
                />
            </InsuranceContainer>

            <InsuranceContainer>
                <CircularProgress
                    percentage={50}
                    showEmptyTrail={false}
                    gradientColors={{
                        start: "#6EE7B7",
                        end: "#60A5FA",
                    }}
                    label="Solteiro"
                />
            </InsuranceContainer>

            <InsuranceContainer>
                <CircularProgress
                    percentage={40}
                    showEmptyTrail={false}
                    gradientColors={{
                        start: "#6EE7B7",
                        end: "#60A5FA",
                    }}
                    label="Com dependentes"
                />
            </InsuranceContainer>
        </div>
    );
};
export default InsuranceSummary;
