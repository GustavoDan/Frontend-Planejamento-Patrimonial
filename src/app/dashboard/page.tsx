"use client";

import DisplayAssetsClasses from "@/components/dashboard/DisplayAssetsClasses";
import DisplayClientMoney from "@/components/ui/DisplayClientMoney";
import IndicatorsSection from "@/components/dashboard/IndicatorsSection";
import PageContainer from "@/components/ui/PageContainer";
import SearchableCombobox from "@/components/ui/SearchableCombobox";
import { useState } from "react";

export default function Dashboard() {
    const [value, setValue] = useState<string | null>("");

    return (
        <PageContainer>
            <div className="size-full py-16 pl-24 pr-20 flex flex-col gap-6">
                <SearchableCombobox
                    value={value}
                    onValueChange={(value) => {
                        setValue(value);
                    }}
                />
                <DisplayClientMoney
                    label="Total Alocado"
                    walletBalance={879930}
                    valorization={12.37}
                />
                <DisplayAssetsClasses />
                <IndicatorsSection />
            </div>
        </PageContainer>
    );
}
