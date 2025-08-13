import DisplayAssetsClasses from "@/components/dashboard/DisplayAssetsClasses";
import DisplayClientMoney from "@/components/dashboard/DisplayClientMoney";
import IndicatorsSection from "@/components/dashboard/IndicatorsSection";
import PageContainer from "@/components/ui/PageContainer";
import SearchableCombobox from "@/components/ui/SearchableCombobox";

export default function Dashboard() {
    return (
        <PageContainer>
            <div className="size-full py-16 pl-24 pr-20 flex flex-col gap-6">
                <SearchableCombobox />
                <DisplayClientMoney walletBalance={879930} />
                <DisplayAssetsClasses />
                <IndicatorsSection />
            </div>
        </PageContainer>
    );
}
