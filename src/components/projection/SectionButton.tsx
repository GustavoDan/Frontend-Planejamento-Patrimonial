import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { sectionTypes } from "./PlanningSection";

interface SectionButtonProps {
    handleSectionClick: (section: sectionTypes) => void;
    selectedSection: sectionTypes;
    buttonSection: sectionTypes;
    label: string;
}

const SectionButton = ({
    handleSectionClick,
    buttonSection,
    selectedSection,
    label,
}: SectionButtonProps) => {
    return (
        <Button
            onPointerUp={() => handleSectionClick(buttonSection)}
            className={cn(
                "rounded-[3rem] select-none",
                selectedSection === buttonSection
                    ? "bg-[#EBEBEB] text-[#444444] hover:bg-zinc-400 hover:text-zinc-700"
                    : "bg-[#1F1F1F] text-[#707070] hover:bg-zinc-900 hover:text-zinc-300"
            )}
        >
            {label}
        </Button>
    );
};

export default SectionButton;
