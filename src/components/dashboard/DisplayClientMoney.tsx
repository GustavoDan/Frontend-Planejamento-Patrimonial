import { formatCurrency, splitCurrency } from "@/utils/string";

interface DisplayClientMoneyProps {
    walletBalance: number;
}

const DisplayClientMoney = ({ walletBalance }: DisplayClientMoneyProps) => {
    const balanceParts = splitCurrency(formatCurrency(walletBalance));

    return (
        <div className="flex flex-col font-workSans pt-5 pl-5">
            <span className="text-md font-inter">Total Alocado</span>
            <span className="text-4xl font-semibold text-[#757575]">
                {balanceParts.currency}{" "}
                <span className="text-white">{balanceParts.value}</span>
                {balanceParts.cents}
                <span className="text-[#68AAF1] text-lg">+12,37%</span>
            </span>
        </div>
    );
};
export default DisplayClientMoney;
