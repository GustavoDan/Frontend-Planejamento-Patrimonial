import { cn } from "@/lib/utils";
import { forwardRef, HTMLAttributes } from "react";
import { ThreeDotsIcon } from "../icons/ThreeDotsIcon";

interface ContainerWithTitleProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    separateTitleFromContent?: boolean;
}

const ContainerWithTitle = forwardRef<HTMLDivElement, ContainerWithTitleProps>(
    (
        {
            title,
            separateTitleFromContent = true,
            className,
            children,
            ...rest
        }: ContainerWithTitleProps,
        ref
    ) => {
        return (
            <div
                ref={ref}
                className="bg-[#1B1B1B] rounded-[2rem] h-fit"
                {...rest}
            >
                <div
                    className={cn(
                        "text-[#DADADA] border-b text-[1.375rem] font-semibold text-nowrap",
                        "h-[4.125rem] min-w-[25rem] flex justify-between items-center gap-10 py-5 px-9",
                        separateTitleFromContent && "border-b-[#444444]"
                    )}
                >
                    {title}
                    <ThreeDotsIcon />
                </div>
                <div className={cn("text-[#949494]", className)}>
                    {children}
                </div>
            </div>
        );
    }
);

ContainerWithTitle.displayName = "ContainerWithTitle";

export default ContainerWithTitle;
