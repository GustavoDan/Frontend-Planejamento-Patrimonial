import { Button } from "@/components/ui/button";
import { AddIcon } from "../icons/AddIcon";

const AddButton = () => {
    return (
        <Button
            variant="secondary"
            size="icon"
            className="rounded-full bg-[#2E2E2E] border border-[#414141]"
        >
            <AddIcon />
            <span className="sr-only">Adicionar</span>
        </Button>
    );
};

export default AddButton;
