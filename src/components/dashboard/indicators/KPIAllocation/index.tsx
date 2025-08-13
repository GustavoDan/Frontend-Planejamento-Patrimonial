import { FilterTabs } from "./FilterTabs";
import { AllocationBar } from "@/components/ui/AllocationBar";

const allocationMockData = [
    { label: "Caixa", value: 14, variant: "success" as const },
    { label: "Renda Fixa", value: 20, variant: "warning" as const },
    { label: "Previdência", value: 45, variant: "danger" as const },
    {
        label: "Fundo de Investimentos",
        value: 21,
        variant: "critical" as const,
    },
];

const KPIAllocation = () => {
    return (
        <div className="flex flex-col gap-5 rounded-[2rem] py-6 px-8 bg-[#1B1B1B]">
            <span className="text-[#D9D9D9] text-xl">KPI Alocação</span>
            <FilterTabs />
            <div className="flex flex-col gap-y-3">
                {allocationMockData.map((item) => (
                    <AllocationBar
                        key={item.label}
                        label={item.label}
                        value={item.value}
                        variant={item.variant}
                    />
                ))}
            </div>
        </div>
    );
};

export default KPIAllocation;
