import { useCallback } from "react";
import { Button } from "../ui/button";

interface ConfirmLogoutProps {
    setIsOpen: (isOpen: boolean) => void;
    logout: () => void;
}

const ConfirmLogout = ({ setIsOpen, logout }: ConfirmLogoutProps) => {
    const handleYes = useCallback(() => {
        setIsOpen(false);
        logout();
    }, [setIsOpen, logout]);

    const handleNo = useCallback(() => {
        setIsOpen(false);
    }, [setIsOpen]);

    return (
        <div className="flex flex-col gap-3">
            <div className="text-lg">Você quer deslogar?</div>
            <div className="flex gap-2">
                <Button
                    size="lg"
                    className="text-white bg-green-800 hover:bg-green-900"
                    onPointerUp={handleYes}
                >
                    Sim
                </Button>
                <Button variant="destructive" size="lg" onPointerUp={handleNo}>
                    Não
                </Button>
            </div>
        </div>
    );
};

export default ConfirmLogout;
