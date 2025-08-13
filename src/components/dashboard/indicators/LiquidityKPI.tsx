import CustomToggle from "@/components/ui/CustomToggle";

const chartMockData = [
    { year: 0, value: 120000 },
    { year: 1, value: 25000 },
    { year: 2, value: 65000 },
    { year: 3, value: 230000 },
    { year: 4, value: 105000 },
    { year: 5, value: 30000 },
    { year: 6, value: 480000 },
    { year: 7, value: 45000 },
    { year: 8, value: 210000 },
    { year: 9, value: 320000 },
];

const yAxisMockLabels = ["0", "50K", "100K", "250K", "500K"];

const LiquidityKPI = () => {
    const maxValue = 500000;

    return (
        <div className="flex flex-col gap-5 rounded-[2rem] w-full py-4 px-8 bg-[#1B1B1B]">
            <span className="text-[#D9D9D9] text-xl">
                KPI Liquidez carteira
            </span>
            <div className="flex justify-end">
                <CustomToggle labelLeft="Esperado" labelRight="Emergência" />
            </div>

            <div className="flex size-full gap-x-4 select-none">
                <div className="flex h-[92%] flex-col justify-between text-right text-xs text-[#888888]">
                    {yAxisMockLabels.reverse().map((label) => (
                        <span key={label}>{label}</span>
                    ))}
                </div>

                <div className="flex size-full flex-col justify-between">
                    <div
                        className="relative grid h-full w-full grid-cols-10 items-end gap-x-2"
                        style={{
                            backgroundImage:
                                "repeating-linear-gradient(to bottom, transparent, transparent 24.7%, #4A4A4A 25%)",
                            backgroundSize: "100% 25%",
                        }}
                    >
                        {chartMockData.map((data) => (
                            <div
                                key={data.year}
                                className="group relative flex h-full w-full items-end"
                            >
                                <div
                                    className="w-[20%] rounded-t-full bg-gradient-to-t from-cyan-500 to-sky-400 transition-all duration-300"
                                    style={{
                                        height: `${
                                            (data.value / maxValue) * 100
                                        }%`,
                                        filter: "drop-shadow(0 0 6px rgba(77, 192, 248, 0.7))",
                                    }}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="relative mt-2 -ml-4 grid w-full grid-cols-10 text-center text-xs text-[#888888] text-nowrap">
                        <span className="absolute -left-12">anos</span>
                        {chartMockData.map((data) => (
                            <span key={data.year}>
                                {data.year === 0 ? `${data.year}` : data.year}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default LiquidityKPI;
