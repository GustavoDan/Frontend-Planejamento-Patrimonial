import { GraphLineIcon } from "@/components/icons/GraphLineIcon";
import { PalmTreeIcon } from "@/components/icons/PalmTreeIcon";
import GlowingCircle from "@/components/ui/GlowingCircle";

const blueCircle = { start: "#3D4A94", end: "#67AEFA" };

const Goals = () => {
    return (
        <div className="bg-[#1B1B1B] rounded-[2rem] flex flex-col gap-2 font-workSans text-base text-[#D9D9D9] py-4 px-3 w-full font-bold text-nowrap">
            <div className="flex justify-between items-center w-full bg-[#262626] rounded-[2rem] p-2">
                <div className="flex items-center gap-2">
                    <GlowingCircle size={28} gradientColors={blueCircle}>
                        <PalmTreeIcon />
                    </GlowingCircle>
                    Aposentadoria
                </div>
                <span>63 anos</span>
            </div>
            <div className="flex justify-between items-center w-full bg-[#262626] rounded-[2rem] p-2">
                <div className="flex items-center gap-2">
                    <GlowingCircle size={28} gradientColors={blueCircle}>
                        $
                    </GlowingCircle>
                    Renda desejada/mês
                </div>
                <span>R$20.000</span>
            </div>
            <div className="flex justify-between items-center w-full bg-[#262626] rounded-[2rem] p-2 gap-3">
                <div className="flex items-center gap-2">
                    <GlowingCircle size={28} gradientColors={blueCircle}>
                        <GraphLineIcon />
                    </GlowingCircle>
                    Target rendimento
                </div>
                <span>IPCA + 3,18%</span>
            </div>
        </div>
    );
};

export default Goals;
