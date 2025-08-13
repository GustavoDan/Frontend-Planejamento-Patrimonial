import {
    BarSegment,
    StackedProgressBar,
} from "@/components/ui/StackedProgressBar";

const chartMockData: BarSegment[] = [
    {
        id: "patrimonio",
        label: "Patrimônio atual",
        value: 21,
        color: "cyan",
        type: "solid",
    },
    {
        id: "realizado",
        label: "Realizado",
        value: 4,
        color: "green",
        type: "dashed",
    },
    {
        id: "meta",
        label: "Meta do ano",
        value: 32,
        color: "yellow",
        type: "solid",
    },
];

const Patrimony = () => {
    return (
        <div className="flex flex-col gap-5 rounded-[2rem] py-[1.813rem] px-8 bg-[#1B1B1B]">
            <span className="text-[#D9D9D9] text-xl">
                Patrimônio - Visão geral
            </span>
            <StackedProgressBar data={chartMockData} />
        </div>
    );
};

export default Patrimony;
