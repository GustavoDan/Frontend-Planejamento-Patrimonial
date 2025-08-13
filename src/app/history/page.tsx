"use client";

import HistoryContainer from "@/components/history/HistoryContainer";
import ViewSimulationButton from "@/components/history/ViewSimulationButton";
import { ThreeDotsIcon } from "@/components/icons/ThreeDotsIcon";
import { Button } from "@/components/ui/button";
import PageContainer from "@/components/ui/PageContainer";
import PaginationControls from "@/components/ui/PaginationControls";
import SearchableCombobox from "@/components/ui/SearchableCombobox";
import { cn } from "@/lib/utils";
import { formatCurrency } from "@/utils/string";
import { useState } from "react";

const gradientVariants = {
    blue: { start: "#4F399A", end: "#3F9FFF" },
    yellow: { start: "#9A8A39", end: "#C5DB54" },
    lightGray: { start: "#989898", end: "#E7E8E9" },
};

const mockSimulation = [
    {
        date: "01/02/25",
        patrimony: 4132500,
        retirementAge: "68",
        version: "1",
    },
    {
        date: "04/05/25",
        patrimony: 3587420,
        retirementAge: "68",
        version: "2",
    },
];
const gridLayout =
    "grid grid-cols-[1fr_1.5fr_1.5fr_0.5fr_1fr] gap-x-4 items-center";

export default function History() {
    const [value, setValue] = useState<string | null>("");
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <PageContainer>
            <div className="size-full py-16 pl-24 pr-20 flex flex-col gap-10">
                <SearchableCombobox
                    value={value}
                    onValueChange={(value) => {
                        setValue(value);
                    }}
                />
                <div className="flex justify-between items-center pt-20 pl-6 pb-6 text-[#DADADA] text-2xl border-b border-b-[#444444]">
                    <span>Histórico de simulações</span>
                    <div className="pr-9">
                        <ThreeDotsIcon />
                    </div>
                </div>
                <HistoryContainer
                    title="Plano original"
                    circleGradientColors={gradientVariants.blue}
                >
                    <div>
                        <div
                            className={cn(
                                gridLayout,
                                "text-base text-[#919191] text-nowrap"
                            )}
                        >
                            <div>Data</div>
                            <div>Patrimônio final</div>
                            <div>Data de Aposentadoria</div>
                            <div>Versão</div>
                            <div></div>
                        </div>

                        <div className="flex flex-col gap-y-2">
                            {mockSimulation.map((item) => (
                                <div
                                    key={item.version}
                                    className={cn(
                                        gridLayout,
                                        "h-16 text-base font-medium text-[#C9C9C9] items-center"
                                    )}
                                >
                                    <span>{item.date}</span>
                                    <span>
                                        {formatCurrency(item.patrimony)}
                                    </span>
                                    <span>{item.retirementAge}</span>
                                    <span>{item.version}</span>
                                    <div className="flex justify-end">
                                        <ViewSimulationButton />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </HistoryContainer>
                <HistoryContainer
                    title="Adiantar aposentadoria 3 anos"
                    circleGradientColors={gradientVariants.yellow}
                />
                <HistoryContainer
                    title="Aposentadoria na praia"
                    circleGradientColors={gradientVariants.lightGray}
                />
                <PaginationControls
                    currentPage={currentPage}
                    totalPages={10}
                    onPageChange={(newPage) => {
                        setCurrentPage(newPage);
                    }}
                />
            </div>
        </PageContainer>
    );
}
