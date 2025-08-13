import { cn } from "@/lib/utils";
import { formatCurrency } from "@/utils/string";
import { DownArrowIcon } from "../icons/DownArrowIcon";

export type TransactionType = "INCOME" | "OUTCOME";

export interface InfoCardData {
    id: string;
    title: string;
    details: string[];
    amount: number;
    type: TransactionType | "INSURANCE";
}

interface InfoCardProps {
    data: InfoCardData;
    borderColor: string;
}

const getTextColorClass = (type: string) => {
    return type === "INCOME"
        ? "text-[#408E37]"
        : type == "OUTCOME"
        ? "text-[#C65353]"
        : "text-[#A034FF]";
};

const AssetInfoCard = ({ data, borderColor }: InfoCardProps) => {
    return (
        <div
            style={{ borderColor: borderColor }}
            className="w-full rounded-[1rem] border-2 bg-[#1D1F1E] py-6 pl-12 pr-5 text-[#919191] font-workSans"
        >
            <div className="flex justify-between items-start">
                <div className="flex flex-col gap-2">
                    <span className="text-xl text-[#C9C9C9]">{data.title}</span>
                    <div className="text-base font-bold">
                        {data.details.map((detail, index) => (
                            <p key={index}>{detail}</p>
                        ))}
                    </div>
                </div>

                <div
                    className={cn(
                        "flex items-center gap-3 font-bold text-nowrap justify-self-end self-end text-lg",
                        getTextColorClass(data.type)
                    )}
                >
                    {data.type === "INCOME" && (
                        <DownArrowIcon className="rotate-180" color="#408E37" />
                    )}
                    {data.type === "OUTCOME" && <DownArrowIcon />}
                    <span>{formatCurrency(data.amount, true)}</span>
                </div>
            </div>
        </div>
    );
};

export default AssetInfoCard;
