import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { formatCurrency, formatSignedNumber } from "@/utils/string";

interface TimelineNodeProps {
    value: number;
    valorization?: number;
    year: string;
    age: string;
    tag?: string;
    isFirst?: boolean;
    children: ReactNode;
}

const TimelineNode = ({
    value,
    valorization,
    year,
    age,
    tag,
    isFirst = false,
    children,
}: TimelineNodeProps) => {
    return (
        <div className="relative flex flex-1 flex-col justify-between font-workSans">
            <div className="flex items-baseline gap-2">
                <span className="pl-3 text-xl text-white">
                    {formatCurrency(value)}
                </span>
                {valorization && (
                    <span className="text-lg text-[#68AAF1]">
                        {formatSignedNumber(valorization)}
                    </span>
                )}
            </div>

            <div
                className={cn(
                    "relative w-full py-2 pb-4 flex flex-1 items-center gap-3"
                )}
            >
                <div className="h-[400%] border-r border-r-[#444444]" />
                <div
                    className={cn(
                        "absolute bottom-0 h-px  border-b-2 border-b-[#444444] border-dashed w-[105%]",
                        isFirst && "border-solid"
                    )}
                />
                <div className="w-full">{children}</div>
            </div>

            <div className="flex flex-col pl-3 pt-6">
                <div className="flex items-baseline gap-2 text-[#797979] text-base">
                    <span>{year}</span>
                    {tag && (
                        <div className="text-base text-[#5880EF] bg-[#5384EB]/20 rounded-[0.25rem] px-1">
                            {tag}
                        </div>
                    )}
                </div>
                <span
                    className={cn(
                        "text-lg text-white",
                        tag && "text-[#68AAF1]"
                    )}
                >
                    {age}
                </span>
            </div>
        </div>
    );
};

export default TimelineNode;
