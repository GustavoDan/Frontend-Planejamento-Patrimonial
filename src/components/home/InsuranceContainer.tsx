import { ReactNode } from "react";

interface InsuranceContainerProps {
    children: ReactNode;
}

const InsuranceContainer = ({ children }: InsuranceContainerProps) => {
    return (
        <div className="h-48 bg-[#262626] rounded-[2rem] flex items-center p-8">
            {children}
        </div>
    );
};
export default InsuranceContainer;
