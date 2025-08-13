"use client";

import { ClientsIcon } from "../icons/ClientsIcon";
import { ProspectsIcon } from "../icons/ProspectsIcon";
import { ConsolidationIcon } from "../icons/ConsolidationIcon";
import { CRMIcon } from "../icons/CRMIcon";
import { CapitalizationIcon } from "../icons/CapitalizationIcon";
import { FinanceIcon } from "../icons/FinanceIcon";
import SidebarCollapsibleItem from "./SidebarCollapsibleItem";
import SidebarItem from "./SidebarItem";
import { DashboardIcon } from "../icons/DashboardIcon";
import { ProjectionIcon } from "../icons/ProjectionIcon";
import { HistoryIcon } from "../icons/HistoryIcon";
import AnkaLogo from "../AnkaLogo";
import ProfileModal from "../Profile/ProfileModal";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useSidebar } from "@/contexts/SidebarContext";

const Sidebar = () => {
    const router = useRouter();
    const { isAuthenticated } = useAuth();
    const { openSections, toggleSection } = useSidebar();

    return (
        <div className="min-w-80 min-h-screen px-12 pt-14 pb-7 border-[#444444] border-r flex flex-col items-center justify-center gap-14 select-none">
            <div className="fixed top-14">
                <AnkaLogo />
            </div>

            <div className="flex-1 gap-2.5 font-workSans fixed top-40">
                <SidebarCollapsibleItem
                    icon={<ClientsIcon />}
                    label="Clientes"
                    isOpen={openSections.clients}
                    onToggle={() => {
                        toggleSection("clients");
                    }}
                    enabled={isAuthenticated}
                >
                    <SidebarItem
                        icon={<DashboardIcon />}
                        label="Dashboard"
                        onPointerUp={() => router.push("/dashboard")}
                        href="/dashboard"
                    />
                    <SidebarItem
                        icon={<ProjectionIcon />}
                        label="Projeção"
                        href="/projection"
                    />
                    <SidebarItem
                        icon={<HistoryIcon />}
                        label="Histórico"
                        href="/history"
                    />
                </SidebarCollapsibleItem>

                <SidebarCollapsibleItem
                    icon={<ProspectsIcon />}
                    label="Prospects"
                    isOpen={openSections.prospects}
                    onToggle={() => toggleSection("prospects")}
                    enabled={false}
                />

                <SidebarCollapsibleItem
                    icon={<ConsolidationIcon />}
                    label="Consolidação"
                    isOpen={openSections.consolidation}
                    onToggle={() => toggleSection("consolidation")}
                    enabled={false}
                />

                <SidebarCollapsibleItem
                    icon={<CRMIcon />}
                    label="CRM"
                    isOpen={openSections.crm}
                    onToggle={() => toggleSection("crm")}
                    enabled={false}
                />

                <SidebarCollapsibleItem
                    icon={<CapitalizationIcon />}
                    label="Captação"
                    isOpen={openSections.capitalization}
                    onToggle={() => toggleSection("capitalization")}
                    enabled={false}
                />

                <SidebarCollapsibleItem
                    icon={<FinanceIcon />}
                    label="Financeiro"
                    isOpen={openSections.finance}
                    onToggle={() => toggleSection("finance")}
                    enabled={false}
                />
            </div>

            <ProfileModal />
        </div>
    );
};

export default Sidebar;
