import CircularProgress from "@/components/ui/CircularProgress";
import LabeledProgress from "@/components/ui/LabeledProgress";

const allocationMockData = [
    { label: "Caixa", value: 22 },
    { label: "Renda Fixa", value: 60 },
    { label: "Previdência", value: 13 },
    { label: "Fundo de Inv.", value: 89 },
    { label: "Alternativos", value: 77 },
];

export const AllocationComparison = () => {
    return (
        <div className="bg-[#1B1B1B] rounded-[2rem] py-4 px-8 flex flex-col gap-4">
            <div className="flex justify-between">
                <span className="text-xl text-[#D9D9D9]">
                    Comparação de Alocações
                </span>
                <span className="text-base text-[#A9A9A9]">
                    Perfil: Conservador
                </span>
            </div>

            <div className="flex gap-5 pl-3 pb-12">
                <CircularProgress
                    percentage={18}
                    size={186}
                    gradientColors={{ start: "#FF8B2C", end: "#F52626" }}
                    showPercentage={false}
                >
                    <span className="text-[2.5rem] text-[#F74027]">18%</span>
                </CircularProgress>

                <div>
                    {allocationMockData.map((item) => (
                        <LabeledProgress
                            key={item.label}
                            label={item.label}
                            value={item.value}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
