"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import Sidebar from "../Sidebar/Sidebar";

interface PageContainerProps {
    className?: string;
    children: ReactNode;
}

const PageContainer = ({ className, children }: PageContainerProps) => {
    const { isAuthenticated } = useAuth();

    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <main
                className={cn(
                    "flex flex-col items-center justify-center w-full",
                    className
                )}
            >
                {isAuthenticated ? (
                    children
                ) : (
                    <div className="text-destructive text-7xl">
                        Faça login para usar o site
                    </div>
                )}
            </main>
        </div>
    );
};
export default PageContainer;
