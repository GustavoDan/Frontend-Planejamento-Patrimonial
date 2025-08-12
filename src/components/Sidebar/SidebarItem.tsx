"use client";

import { forwardRef, HTMLAttributes, ReactNode } from "react";
import { ChevronDownIcon } from "../icons/ChevronDownIcon";
import { ChevronUpIcon } from "../icons/ChevronUpIcon";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface SidebarItemProps extends HTMLAttributes<HTMLDivElement> {
    icon: ReactNode;
    label: string;
    enabled?: boolean;
    collapsibleItemType?: "none" | "down" | "up";
    href?: string;
}

const SidebarItem = forwardRef<HTMLDivElement, SidebarItemProps>(
    (
        {
            icon,
            label,
            enabled = true,
            collapsibleItemType = "none",
            className,
            href,
            ...rest
        }: SidebarItemProps,
        ref
    ) => {
        const pathname = usePathname();
        const isActive = pathname === href;

        return (
            <div
                ref={ref}
                className={cn(
                    "flex flex-row items-center justify-start gap-2",
                    "px-6 py-3.5 w-60 h-14 rounded-[2.94rem]",
                    enabled && "hover:bg-[#303030]/50 transition-colors",
                    !enabled && "cursor-not-allowed opacity-50",
                    isActive && "bg-[#303030]/50",
                    className
                )}
                {...rest}
            >
                <div>{icon}</div>
                <div className="font-medium text-xl leading-[1.875rem] text-left flex-1">
                    {label}
                </div>
                <div className="w-4">
                    {collapsibleItemType === "up" && <ChevronUpIcon />}
                    {collapsibleItemType === "down" && <ChevronDownIcon />}
                </div>
            </div>
        );
    }
);

SidebarItem.displayName = "SidebarItem";

export default SidebarItem;
