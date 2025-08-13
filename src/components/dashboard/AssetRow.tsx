import AddButton from "../ui/AddButton";
import AssetContainer from "./AssetContainer";
import { AssetClasses } from "./DisplayAssetsClasses";

interface AssetRowProps {
    title: string;
    data: AssetClasses[];
    variant?: "purple" | "orange";
}

const AssetRow = ({ title, data, variant = "orange" }: AssetRowProps) => {
    return (
        <div className="flex flex-col gap-1.5">
            <div className="text-xl font-bold font-inter">{title}</div>

            <div className="flex gap-4 items-center">
                {data.map((assetClass, index) => {
                    return (
                        <AssetContainer
                            key={index}
                            assetClass={assetClass.name}
                            balance={assetClass.value}
                            valorizationPercentage={
                                assetClass.valorizationPercentage
                            }
                            variant={variant}
                        />
                    );
                })}

                <AddButton />
            </div>
        </div>
    );
};

export default AssetRow;
