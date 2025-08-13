"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useCallback, useState } from "react";

export function FilterTabs() {
    const [activeTab, setActiveTab] = useState("category");

    const handleValueChange = useCallback(
        (newValue: string) => {
            if (newValue) {
                setActiveTab(newValue);
            }
        },
        [setActiveTab]
    );

    return (
        <ToggleGroup
            type="single"
            className="gap-x-2 select-none"
            value={activeTab}
            onValueChange={handleValueChange}
        >
            <ToggleGroupItem
                value="category"
                aria-label="Filtrar por Categoria"
                className="rounded-full data-[state=on]:bg-neutral-200 data-[state=on]:text-black bg-neutral-700 text-neutral-400 hover:bg-neutral-600 disabled:!pointer-events-auto disabled:cursor-not-allowed"
            >
                Categoria
            </ToggleGroupItem>
            <ToggleGroupItem
                disabled
                value="index"
                aria-label="Filtrar por Indexador"
                className="rounded-full data-[state=on]:bg-neutral-200 data-[state=on]:text-black bg-neutral-700 text-neutral-400 hover:bg-neutral-600 disabled:!pointer-events-auto disabled:cursor-not-allowed"
            >
                Indexador
            </ToggleGroupItem>
            <ToggleGroupItem
                disabled
                value="custody"
                aria-label="Filtrar por Custódia"
                className="rounded-full data-[state=on]:bg-neutral-200 data-[state=on]:text-black bg-neutral-700 text-neutral-400 hover:bg-neutral-600 disabled:!pointer-events-auto disabled:cursor-not-allowed"
            >
                Custódia
            </ToggleGroupItem>
        </ToggleGroup>
    );
}
