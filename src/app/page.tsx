import AlignmentSummary from "@/components/home/AlignmentSummary";
import InsuranceSummary from "@/components/home/InsuranceSummary";
import PaginatedTable from "@/components/home/PaginatedTable";
import PlanningSummary from "@/components/home/PlanningSummary";
import ContainerWithTitle from "@/components/ui/ContainerWithTitle";
import PageContainer from "@/components/ui/PageContainer";

export default function Home() {
    return (
        <PageContainer>
            <div className="flex gap-6 h-full p-24">
                <div className="flex flex-col gap-6">
                    <div className="flex gap-6">
                        <ContainerWithTitle title="Alinhamento com planejamento">
                            <AlignmentSummary />
                        </ContainerWithTitle>
                        <ContainerWithTitle
                            title="Clientes com planejamento"
                            className="p-10"
                        >
                            <PlanningSummary />
                        </ContainerWithTitle>
                    </div>
                    <ContainerWithTitle
                        title="Atualização do planejamento"
                        separateTitleFromContent={false}
                    >
                        <PaginatedTable />
                    </ContainerWithTitle>
                </div>
                <ContainerWithTitle
                    title="Perfis com seguro pelo total"
                    className="p-8"
                >
                    <InsuranceSummary />
                </ContainerWithTitle>
            </div>
        </PageContainer>
    );
}
