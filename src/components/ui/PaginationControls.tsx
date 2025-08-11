import React, { useCallback } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { RigthArrowIcon } from "../icons/RigthArrowIcon";
import { LeftArrowIcon } from "../icons/LeftArrowIcon";

interface PaginationControlsProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (newPage: number) => void;
    className?: string;
}

const PaginationControls = ({
    currentPage,
    totalPages,
    onPageChange,
    className,
}: PaginationControlsProps) => {
    const handlePrevPage = useCallback(() => {
        onPageChange(Math.max(currentPage - 1, 1));
    }, [onPageChange, currentPage]);

    const handleNextPage = useCallback(() => {
        onPageChange(Math.min(currentPage + 1, totalPages));
    }, [onPageChange, currentPage, totalPages]);

    if (totalPages <= 1) {
        return null;
    }

    return (
        <div
            className={cn(
                "flex items-center justify-center gap-x-4",
                className
            )}
        >
            <Button
                variant="outline"
                size="icon"
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="bg-[#2E2E2E] rounded-full border border-[#414141]"
            >
                <LeftArrowIcon />
                <span className="sr-only">Página anterior</span>
            </Button>

            <span className="text-base text-[#777777]">
                Página {currentPage} de {totalPages}
            </span>

            <Button
                variant="outline"
                size="icon"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="bg-[#2E2E2E] rounded-full border border-[#414141]"
            >
                <RigthArrowIcon />
                <span className="sr-only">Próxima página</span>
            </Button>
        </div>
    );
};

export default PaginationControls;
