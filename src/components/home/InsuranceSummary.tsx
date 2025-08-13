"use client";

import { useInsuranceStatsByProfile } from "@/hooks/useInsuranceStats";
import CircularProgress from "../ui/CircularProgress";
import InsuranceContainer from "./InsuranceContainer";
import Loading from "../ui/Loading";
import Error from "../ui/Error";

const InsuranceSummary = () => {
    const { data, isLoading, isError } = useInsuranceStatsByProfile();

    if (isLoading) {
        return <Loading />;
    }

    if (isError || !data) {
        return <Error />;
    }

    return (
        <div className="flex flex-col gap-7">
            <InsuranceContainer>
                <CircularProgress
                    percentage={data.withChild.percentage}
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
                    percentage={data.single.percentage}
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
                    percentage={data.withDependents.percentage}
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
