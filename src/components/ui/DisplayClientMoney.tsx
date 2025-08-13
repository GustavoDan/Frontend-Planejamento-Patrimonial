"use client";

import {
    formatCurrency,
    formatSignedNumber,
    splitCurrency,
} from "@/utils/string";
import { useMemo } from "react";

interface DisplayClientMoneyProps {
    label: string;
    walletBalance: number;
    valorization: number;
}

const DisplayClientMoney = ({
    label,
    walletBalance,
    valorization,
}: DisplayClientMoneyProps) => {
    const balanceParts = useMemo(
        () => splitCurrency(formatCurrency(walletBalance)),
        [walletBalance]
    );

    return (
        <div className="flex flex-col font-workSans pt-5 pl-5">
            <span className="text-md font-inter">{label}</span>
            <span className="text-4xl font-semibold text-[#757575] text-nowrap">
                {balanceParts.currency}{" "}
                <span className="text-white">{balanceParts.value}</span>
                {balanceParts.cents}
                <span className="text-[#68AAF1] text-lg">
                    {formatSignedNumber(valorization)}%
                </span>
            </span>
        </div>
    );
};
export default DisplayClientMoney;
