"use client";

import { useState } from "react";
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
import ProfileContainer from "../ProfileContainer";

const Sidebar = () => {
    const [openSections, setOpenSections] = useState<Record<string, boolean>>(
        {}
    );

    const toggleSection = (section: string) => {
        setOpenSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    return (
        <div className="w-80 h-screen px-12 pt-14 pb-7 border-[#444444] border-r flex flex-col items-center justify-center gap-14 select-none">
            <AnkaLogo />

            <div className="flex-1 gap-2.5">
                <SidebarCollapsibleItem
                    icon={<ClientsIcon />}
                    label="Clientes"
                    isOpen={openSections.clientes}
                    onToggle={() => {
                        toggleSection("clientes");
                        console.log("teste");
                    }}
                >
                    <SidebarItem icon={<DashboardIcon />} label="Dashboard" />
                    <SidebarItem icon={<ProjectionIcon />} label="Projeção" />
                    <SidebarItem icon={<HistoryIcon />} label="Histórico" />
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
                    isOpen={openSections.consolidacao}
                    onToggle={() => toggleSection("consolidacao")}
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
                    isOpen={openSections.captacao}
                    onToggle={() => toggleSection("captacao")}
                    enabled={false}
                />

                <SidebarCollapsibleItem
                    icon={<FinanceIcon />}
                    label="Financeiro"
                    isOpen={openSections.financeiro}
                    onToggle={() => toggleSection("financeiro")}
                    enabled={false}
                />
            </div>

            <ProfileContainer />
        </div>
    );
};

export default Sidebar;
