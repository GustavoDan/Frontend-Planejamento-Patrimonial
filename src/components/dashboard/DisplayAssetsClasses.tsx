import { Button } from "../ui/button";
import AssetRow from "./AssetRow";

const mockData = {
    finance: [
        { name: "Fundo DI", value: 79930, valorizationPercentage: 45.67 },
        { name: "Fundo XXX", value: 359930, valorizationPercentage: 23.89 },
        { name: "BTC", value: 212879, valorizationPercentage: 78.12 },
    ],
    realEstate: [
        {
            name: "Casa de Praia",
            value: 2500000,
        },
        {
            name: "Apartamento SP",
            value: 1200000,
        },
    ],
};
export interface AssetClasses {
    name: string;
    value: number;
    valorizationPercentage?: number;
}

const DisplayAssetsClasses = () => {
    return (
        <div className="w-full h-96 bg-[#1B1B1B] rounded-[2rem] py-6 px-8 font-workSans text-lg text-[#7B7B7B] flex flex-col gap-5">
            <div className="flex justify-between">
                <span>
                    Data da Alocação:{" "}
                    <span className="text-white">08/05/2025</span>
                </span>
                <Button
                    size="lg"
                    className="rounded-[2.5rem] font-workSans font-bold text-lg text-[#4A4A4A]"
                >
                    Atualizar
                </Button>
            </div>
            <AssetRow title="Financeiras" data={mockData.finance}></AssetRow>
            <AssetRow
                title="Imobilizadas"
                data={mockData.realEstate}
                variant="purple"
            ></AssetRow>
        </div>
    );
};
export default DisplayAssetsClasses;
