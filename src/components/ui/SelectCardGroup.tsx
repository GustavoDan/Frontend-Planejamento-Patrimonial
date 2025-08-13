import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ThreeDotsIcon } from "../icons/ThreeDotsIcon";
import { PlanColors } from "../projection/PlanningSection";

export interface SelectCardOption {
    value: string;
    label: string;
    borderColor: string;
    radioColor: string;
    ringColor: string;
    hasMenu?: boolean;
}

interface SelectCardGroupProps {
    options: SelectCardOption[];
    value: string;
    onValueChange: (value: PlanColors) => void;
    className?: string;
}

const SelectGroup = ({
    options,
    value,
    onValueChange,
    className,
}: SelectCardGroupProps) => {
    return (
        <RadioGroup
            value={value}
            onValueChange={onValueChange}
            className={cn("flex items-center gap-4 select-none", className)}
        >
            {options.map((option) => (
                <div key={option.value}>
                    <Label
                        htmlFor={option.value}
                        className={cn(
                            "group flex cursor-pointer items-center justify-between gap-4 rounded-[1rem] border-2 bg-[#1B1B1B] p-3 transition-all",
                            option.borderColor
                        )}
                    >
                        <RadioGroupItem
                            value={option.value}
                            id={option.value}
                            className={cn(
                                "h-5 w-5 border-2 border-[#1B1B1B] text-transparent bg-[#2F2F2F] ring-2 ring-[#2F2F2F]",
                                option.radioColor,
                                option.ringColor
                            )}
                        />
                        <span className="font-medium text-[#D9D9D9] group-data-[state=checked]:text-white">
                            {option.label}
                        </span>
                        {option.hasMenu && (
                            <ThreeDotsIcon
                                width={15}
                                color="#D9D9D9"
                                className="rotate-90"
                            />
                        )}
                    </Label>
                </div>
            ))}
        </RadioGroup>
    );
};

export default SelectGroup;
