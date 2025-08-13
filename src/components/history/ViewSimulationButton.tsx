"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const mockClientId = "1";
const mockSimulationId = "1";

const ViewSimulationButton = () => {
    const router = useRouter();
    return (
        <Button
            className="text-[#B4B4B4] bg-[#363636] rounded-[2.5rem] hover:bg-zinc-800 hover:text-zinc-400"
            onPointerUp={() =>
                router.push(
                    `/projection?clientId=${mockClientId}&simulationId=${mockSimulationId}`
                )
            }
        >
            Ver no gráfico
        </Button>
    );
};

export default ViewSimulationButton;
