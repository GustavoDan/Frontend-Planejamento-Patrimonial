import { formatCurrency, splitCurrency } from "@/utils/string";
import GlowingCircle from "../ui/GlowingCircle";

interface AssetContainerProps {
    assetClass: string;
    balance: number;
    valorizationPercentage?: number;
    variant?: "purple" | "orange";
}

const AssetContainer = ({
    assetClass,
    balance,
    valorizationPercentage,
    variant = "orange",
}: AssetContainerProps) => {
    const balanceParts = splitCurrency(formatCurrency(balance));

    return (
        <div className="flex items-center gap-3.5 border border-[#4B4B4B] rounded-[1.25rem] p-6 py-3.5 w-80 h-24">
            <GlowingCircle
                gradientColors={{
                    start: variant === "orange" ? "#8E5411" : "#4F399A",
                    end: variant === "orange" ? "#FFA53F" : "#BF3FFF",
                }}
            >
                {assetClass.charAt(0).toUpperCase()}
            </GlowingCircle>
            <div className="font-workSans text-[#757575] flex flex-col">
                <span className="text-lg">{assetClass}</span>
                <span className="text-xl text-nowrap">
                    {balanceParts.currency}{" "}
                    <span className="text-white">{balanceParts.value}</span>
                    {balanceParts.cents}
                </span>
            </div>
            {valorizationPercentage ? (
                <span className="text-[#68AAF1] text-base self-end">
                    +{valorizationPercentage}%
                </span>
            ) : (
                <span className="text-[#68AAF1] text-base self-end">
                    &nbsp;
                </span>
            )}
        </div>
    );
};

export default AssetContainer;
