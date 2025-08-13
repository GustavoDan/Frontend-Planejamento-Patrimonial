import { AllocationComparison } from "./indicators/AllocationComparison";
import ContributionTarget from "./indicators/ContributionTarget";
import Goals from "./indicators/Goals";
import KPIAllocation from "./indicators/KPIAllocation";
import LiquidityKPI from "./indicators/LiquidityKPI";
import Patrimony from "./indicators/Patrimony";
import PerformanceTarget from "./indicators/PerformanceTarget";
import Pgbl from "./indicators/Pgbl";

const IndicatorsSection = () => {
    return (
        <div className="flex flex-col gap-5 size-full">
            <span className="text-md font-inter text-[#7B7B7B]">
                Indicadores
            </span>
            <div className="flex gap-4 size-full ">
                <div className="flex flex-col gap-4 h-full">
                    <div className="flex gap-4">
                        <Goals />
                        <Pgbl />
                    </div>
                    <AllocationComparison />
                    <Patrimony />
                </div>
                <div className="flex flex-col gap-3">
                    <ContributionTarget />
                    <PerformanceTarget />
                    <KPIAllocation />
                </div>
                <LiquidityKPI />
            </div>
        </div>
    );
};
export default IndicatorsSection;
