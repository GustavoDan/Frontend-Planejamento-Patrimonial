"use client";

import { useInsuranceStatsByProfile } from "@/hooks/useInsuranceStats";
import CircularProgress from "../ui/CircularProgress";
import InsuranceContainer from "./InsuranceContainer";

const InsuranceSummary = () => {
    const { data, isError } = useInsuranceStatsByProfile();

    if (isError || !data) {
        return (
            <div className="flex items-center justify-center text-destructive text-center py-80">
                Erro ao carregar dados.
            </div>
        );
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
