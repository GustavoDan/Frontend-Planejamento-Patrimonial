import TimelineBar from "./TimelineBar";

interface TimelinePoint {
    year: number;
    label?: string | React.ReactNode;
    value?: string;
}

interface YearMark {
    year: number;
    age: number;
}

const startYear = 2025;
const endYear = 2060;
const totalYears = endYear - startYear;

const salaryData: TimelinePoint[] = [
    { year: 2025, label: "CLT: R$ 15.000" },
    {
        year: 2030,
        label: (
            <>
                CLT: R$ 15.000
                <br />
                Autônomo: R$ 5.000
            </>
        ),
    },
    { year: 2037, label: "Autônomo: R$ 35.000" },
    { year: 2045, label: "Aposentadoria" },
];

const costOfLivingData: TimelinePoint[] = [
    { year: 2025, value: "R$ 8.000" },
    { year: 2032, value: "R$ 12.000" },
    { year: 2040, value: "R$ 20.000" },
    { year: 2045, value: "R$ 10.000" },
    { year: 2050, value: "R$ 15.000" },
];

const yearMarks: YearMark[] = [
    { year: 2025, age: 45 },
    { year: 2030, age: 50 },
    { year: 2035, age: 55 },
    { year: 2040, age: 60 },
    { year: 2045, age: 65 },
    { year: 2050, age: 70 },
    { year: 2055, age: 75 },
    { year: 2060, age: 80 },
];

export const calculatePosition = (year: number) => {
    return ((year - startYear) / totalYears) * 100;
};

const FinancialTimeline = () => {
    return (
        <div className="relative text-white p-8 font-workSans w-full">
            <span className="absolute -left-9 text-[#00C900]">Salário</span>
            <span className="absolute -left-9 top-[5.75rem] text-white">
                Ano
            </span>
            <span className="absolute -left-9 top-[7.375rem] text-white">
                Idade
            </span>
            <span className="absolute -left-[5.375rem] top-48 text-[#FF5151]">
                Custo de vida
            </span>

            <div className="pb-10">
                <TimelineBar startYear={startYear} totalYears={totalYears}>
                    {salaryData.map((point) => (
                        <div
                            key={`salary-${point.year}`}
                            className="absolute -top-2 -translate-x-2"
                            style={{
                                left: `${calculatePosition(point.year)}%`,
                            }}
                        >
                            <div className="relative flex flex-col items-center">
                                <div className="absolute -top-12 text-center text-sm text-[#00C900] whitespace-nowrap">
                                    {point.label}
                                </div>
                                <div className="w-4 h-4 bg-[#00C900] rounded-full"></div>
                            </div>
                        </div>
                    ))}
                </TimelineBar>
            </div>
            <div className="relative w-full text-center mb-10">
                {yearMarks.map((mark) => (
                    <div
                        key={`year-${mark.year}`}
                        className="absolute -top-4"
                        style={{
                            left: `${calculatePosition(mark.year)}%`,
                            transform: "translateX(-50%)",
                        }}
                    >
                        <p className="text-lg font-bold text-gray-300">
                            {mark.year}
                        </p>
                        <p className="text-md text-gray-400">{mark.age}</p>
                    </div>
                ))}
            </div>

            <div className="mt-24">
                <TimelineBar startYear={startYear} totalYears={totalYears}>
                    {costOfLivingData.map((point) => (
                        <div
                            key={`cost-${point.year}`}
                            className="absolute -top-2 -translate-x-2"
                            style={{
                                left: `${calculatePosition(point.year)}%`,
                            }}
                        >
                            <div className="relative flex flex-col items-center">
                                <div className="w-4 h-4 bg-[#FF5151] rounded-full"></div>
                                <div className="absolute top-6 text-center text-lg text-[#FF5151] font-semibold whitespace-nowrap">
                                    {point.value}
                                </div>
                            </div>
                        </div>
                    ))}
                </TimelineBar>
            </div>
        </div>
    );
};

export default FinancialTimeline;
