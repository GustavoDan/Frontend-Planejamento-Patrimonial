"use client";

import { ReactNode } from "react";
import Sidebar from "./Sidebar/Sidebar";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";

interface PageContainerProps {
    className?: string;
    children: ReactNode;
}

const PageContainer = ({ className, children }: PageContainerProps) => {
    const { isAuthenticated } = useAuth();

    return (
        <div className="flex size-full">
            <Sidebar />
            <main
                className={cn(
                    "flex flex-col items-center justify-center",
                    className
                )}
            >
                {isAuthenticated ? (
                    children
                ) : (
                    <div className="flex items-center justify-center size-full text-center text-destructive text-9xl">
                        Faça login para usar o site
                    </div>
                )}
            </main>
        </div>
    );
};
export default PageContainer;
