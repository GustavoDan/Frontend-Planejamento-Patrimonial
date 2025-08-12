"use client";

import {
    createContext,
    useContext,
    useState,
    ReactNode,
    useCallback,
} from "react";

interface SidebarContextType {
    openSections: Record<string, boolean>;
    toggleSection: (section: string) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: ReactNode }) {
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({
        clients: true,
    });

    const toggleSection = useCallback((section: string) => {
        setOpenSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    }, []);

    return (
        <SidebarContext.Provider value={{ openSections, toggleSection }}>
            {children}
        </SidebarContext.Provider>
    );
}

export function useSidebar() {
    const context = useContext(SidebarContext);
    if (context === undefined) {
        throw new Error("useSidebar must be used within a SidebarProvider");
    }
    return context;
}
