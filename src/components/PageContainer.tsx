import { ReactNode } from "react";
import Sidebar from "./Sidebar/Sidebar";
import { cn } from "@/lib/utils";

interface PageContainerProps {
    className?: string;
    children: ReactNode;
}

const PageContainer = ({ className, children }: PageContainerProps) => {
    return (
        <div className="flex size-full">
            <Sidebar />
            <main
                className={cn(
                    "flex flex-col items-center justify-center",
                    className
                )}
            >
                {children}
            </main>
        </div>
    );
};
export default PageContainer;
