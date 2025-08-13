"use client";

import { useCallback, useState } from "react";
import SelectGroup, { SelectCardOption } from "../ui/SelectCardGroup";
import SectionButton from "./SectionButton";
import AssetInfoCard, { InfoCardData } from "./AssetInfoCard";
import FinancialTimeline from "./FinancialTimeline";

export type PlanColors = keyof typeof colors;
export type sectionTypes = "finance" | "real estate";

const colors = {
    originalPlan: "#67AEFA",
    currentSituation: "#48F7A1",
    realized: "#F7B748",
};

const planOptions: SelectCardOption[] = [
    {
        value: "originalPlan",
        label: "Plano Original",
        borderColor: `border-[${colors.originalPlan}]`,
        radioColor: `data-[state=checked]:bg-[${colors.originalPlan}]`,
        ringColor: `data-[state=checked]:ring-[${colors.originalPlan}]`,
        hasMenu: true,
    },
    {
        value: "currentSituation",
        label: "Situação atual 05/2025",
        borderColor: `border-[${colors.currentSituation}]`,
        radioColor: `data-[state=checked]:bg-[${colors.currentSituation}]`,
        ringColor: `data-[state=checked]:ring-[${colors.currentSituation}]`,
    },
    {
        value: "realized",
        label: "Realizado",
        borderColor: `border-[${colors.realized}]`,
        radioColor: `data-[state=checked]:bg-[${colors.realized}]`,
        ringColor: `data-[state=checked]:ring-[${colors.realized}]`,
    },
];

export const movementMockData: Record<sectionTypes, InfoCardData[]> = {
    finance: [
        {
            id: "venda-auto",
            title: "Venda de automóvel",
            details: ["09/07/23 - 22/07/23", "Frequência: Única", "Crédito"],
            amount: 220000,
            type: "INCOME",
        },
        {
            id: "custo-filho",
            title: "Custo do filho",
            details: [
                "09/07/23 - 22/07/43",
                "Frequência: Mensal",
                "Dependente",
            ],
            amount: 1500,
            type: "OUTCOME",
        },
        {
            id: "comissao",
            title: "Comissão",
            details: ["09/07/23 - 22/07/23", "Frequência: Annual", "Crédito"],
            amount: 500000,
            type: "INCOME",
        },
        {
            id: "compra-imovel",
            title: "Compra de Imóvel",
            details: [
                "09/07/23 - 22/07/23",
                "Frequência: Única",
                "Imobilizado",
            ],
            amount: 1500000,
            type: "OUTCOME",
        },
    ],
    "real estate": [
        {
            id: "compra-imovel",
            title: "Compra de Imóvel",
            details: [
                "09/07/23 - 22/07/23",
                "Frequência: Única",
                "Imobilizado",
            ],
            amount: 1500000,
            type: "OUTCOME",
        },
    ],
};

const insuranceMockData: InfoCardData[] = [
    {
        id: "seguro-vida",
        title: "Seguro de Vida Familiar",
        details: ["Seguro de Vida", "Duração: 15 anos", "Prêmio: R$ 120/mês"],
        amount: 500000,
        type: "INSURANCE",
    },
    {
        id: "seguro-invalidez",
        title: "Seguro de Invalidez",
        details: [
            "Seguro de Invalidez",
            "Duração: 5 anos",
            "Prêmio: R$ 300/mês",
        ],
        amount: 100000,
        type: "INSURANCE",
    },
];

const PlanningSection = () => {
    const [selectedPlan, setSelectedPlan] =
        useState<PlanColors>("originalPlan");
    const [selectedSection, setSelectedSection] =
        useState<sectionTypes>("finance");

    const handleSectionClick = useCallback(
        (section: sectionTypes) => {
            setSelectedSection(section);
        },
        [setSelectedSection]
    );

    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col justify-center items-center">
                <SelectGroup
                    options={planOptions}
                    value={selectedPlan}
                    onValueChange={setSelectedPlan}
                />
            </div>
            <span style={{ color: colors[selectedPlan] }} className="text-xl">
                Timeline
            </span>
            <FinancialTimeline />

            <div className="flex flex-col gap-8">
                <div className="flex justify-between">
                    <span
                        style={{ color: colors[selectedPlan] }}
                        className="text-xl"
                    >
                        Movimentações
                    </span>
                    <div className="flex gap-2 text-xl font-workSans">
                        <SectionButton
                            handleSectionClick={handleSectionClick}
                            selectedSection={selectedSection}
                            buttonSection="finance"
                            label="Financeiras"
                        />
                        <SectionButton
                            handleSectionClick={handleSectionClick}
                            selectedSection={selectedSection}
                            buttonSection="real estate"
                            label="Imobilizadas"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {movementMockData[selectedSection].map((card) => (
                        <AssetInfoCard
                            key={card.id}
                            data={card}
                            borderColor={colors[selectedPlan]}
                        />
                    ))}
                </div>
                <span
                    style={{ color: colors[selectedPlan] }}
                    className="text-xl"
                >
                    Seguros
                </span>
                <div className="grid grid-cols-2 gap-4">
                    {insuranceMockData.map((card) => (
                        <AssetInfoCard
                            key={card.id}
                            data={card}
                            borderColor={colors[selectedPlan]}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PlanningSection;
