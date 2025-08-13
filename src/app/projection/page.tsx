"use client";

import PatrimonyCard from "@/components/projection/PatrimonyCard";
import PlanningSection from "@/components/projection/PlanningSection";
import TimelineChart from "@/components/projection/TimelineChart";
import DisplayClientMoney from "@/components/ui/DisplayClientMoney";
import PageContainer from "@/components/ui/PageContainer";
import SearchableCombobox from "@/components/ui/SearchableCombobox";
import { useState } from "react";

export default function Projection() {
    const [value, setValue] = useState<string | null>("");

    return (
        <PageContainer>
            <div className="size-full py-16 pl-24 pr-20 flex flex-col gap-10">
                <SearchableCombobox
                    value={value}
                    onValueChange={(value) => {
                        setValue(value);
                    }}
                />
                <div className="flex">
                    <DisplayClientMoney
                        label="Patrimônio Líquido Total"
                        walletBalance={2679930.0}
                        valorization={52.37}
                    />
                    <TimelineChart />
                </div>

                <PatrimonyCard />
                <PlanningSection />
            </div>
        </PageContainer>
    );
}
