import PatrimonyChart, { DataPoint, LineConfig } from "./PatrimonyChart";

const mockChartData: DataPoint[] = [
    {
        name: "Ano 0",
        Original: 1000000,
        Atual: 1000000,
        Realizado: 1000000,
    },
    {
        name: "Ano 5",
        Original: 2500000,
        Atual: 1750000,
        Realizado: 1750000,
    },
    {
        name: "Ano 10",
        Original: 3100000,
        Atual: 2600000,
        Realizado: 2600000,
    },
    {
        name: "Ano 15",
        Original: 3300000,
        Atual: 2800000,
        Realizado: null,
    },
    {
        name: "Ano 20",
        Original: 3300000,
        Atual: 2750000,
        Realizado: null,
    },
    {
        name: "Ano 25",
        Original: 3000000,
        Atual: 2400000,
        Realizado: null,
    },
    {
        name: "Ano 30",
        Original: 2300000,
        Atual: 1800000,
        Realizado: null,
    },
    {
        name: "Ano 35",
        Original: 1700000,
        Atual: 1000000,
        Realizado: null,
    },
];

const lineConfigs: LineConfig[] = [
    {
        dataKey: "Original",
        stroke: "#60A5FA",
        glowColor: "#60A5FA",
        isDashed: true,
    },
    {
        dataKey: "Atual",
        stroke: "#4ADE80",
        glowColor: "#4ADE80",
        isDashed: true,
    },
    {
        dataKey: "Realizado",
        stroke: "#FBBF24",
        glowColor: "#FBBF24",
        hasDots: true,
    },
];

const PatrimonyCard = () => {
    return (
        <div className="flex flex-col gap-5 rounded-[2rem] py-4 px-8 bg-[#1B1B1B]">
            <div className="flex items-center justify-between mb-6">
                <span className="text-[#D9D9D9] text-xl">
                    Projeção Patrimonial
                </span>

                <div className="flex gap-4 text-base text-[#DADADA] select-none">
                    <span className="hover:text-white cursor-pointer">
                        Ver com detalhes
                    </span>
                    <span className="hover:text-white cursor-pointer">
                        Ver como Tabela
                    </span>
                </div>
            </div>
            <PatrimonyChart
                data={mockChartData}
                lines={lineConfigs}
                yAxisDomain={[0, 3500000]}
            />
        </div>
    );
};
export default PatrimonyCard;
