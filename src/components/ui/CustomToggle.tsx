"use client";

import { useCallback, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface CustomToggleProps {
    labelLeft: string;
    labelRight: string;
    onToggle?: (isRight: boolean) => void;
    defaultChecked?: boolean;
}

const CustomToggle = ({
    labelLeft,
    labelRight,
    onToggle,
    defaultChecked = false,
}: CustomToggleProps) => {
    const [isChecked, setIsChecked] = useState(defaultChecked);

    const handleCheckedChange = useCallback(
        (checked: boolean) => {
            setIsChecked(checked);
            if (onToggle) {
                onToggle(checked);
            }
        },
        [setIsChecked, onToggle]
    );

    return (
        <div className="flex items-center space-x-2">
            <Label
                htmlFor="custom-toggle"
                className={cn(
                    "text-sm font-medium transition-colors",
                    !isChecked ? "text-neutral-200" : "text-neutral-500"
                )}
            >
                {labelLeft}
            </Label>

            <Switch
                id="custom-toggle"
                checked={isChecked}
                onCheckedChange={handleCheckedChange}
            />

            <Label
                htmlFor="custom-toggle"
                className={cn(
                    "text-sm font-medium transition-colors",
                    isChecked ? "text-neutral-200" : "text-neutral-500"
                )}
            >
                {labelRight}
            </Label>
        </div>
    );
};

export default CustomToggle;
