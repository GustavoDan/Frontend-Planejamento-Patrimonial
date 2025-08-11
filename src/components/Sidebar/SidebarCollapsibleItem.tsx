import { ReactNode } from "react";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "../ui/collapsible";
import SidebarItem from "./SidebarItem";

interface SidebarCollapsibleItemProps {
    icon: ReactNode;
    label: string;
    enabled?: boolean;
    isOpen?: boolean;
    onToggle?: () => void;
    className?: string;
    children?: ReactNode;
}

const SidebarCollapsibleItem = ({
    icon,
    label,
    enabled = true,
    isOpen = false,
    onToggle,
    className,
    children,
}: SidebarCollapsibleItemProps) => {
    return (
        <Collapsible
            open={isOpen}
            onOpenChange={enabled ? onToggle : () => {}}
            disabled={!enabled}
        >
            <CollapsibleTrigger asChild>
                <SidebarItem
                    icon={icon}
                    label={label}
                    className={className}
                    collapsibleItemType={isOpen ? "up" : "down"}
                    enabled={enabled}
                />
            </CollapsibleTrigger>
            {children && (
                <CollapsibleContent>
                    <div className="translate-x-6">{children}</div>
                </CollapsibleContent>
            )}
        </Collapsible>
    );
};

export default SidebarCollapsibleItem;
