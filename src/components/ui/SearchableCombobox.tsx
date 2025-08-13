"use client";

import { cn } from "@/lib/utils";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { ChevronDownIcon } from "../icons/ChevronDownIcon";

const mockData = [
    { value: "matheus-silveira", label: "Matheus Silveira" },
    { value: "pedro-magalhaes", label: "Pedro Magalhães" },
    { value: "larissa-alves", label: "Larissa Alves" },
    { value: "fernando-coelho", label: "Fernando Coelho" },
    { value: "debora-matto", label: "Débora Matto" },
    { value: "next.js", label: "Next.js" },
    { value: "sveltekit", label: "SvelteKit" },
    { value: "nuxt.js", label: "Nuxt.js" },
    { value: "remix", label: "Remix" },
    { value: "astro", label: "Astro" },
];

const SearchableCombobox = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState("");

    const selectedLabel = mockData.find((data) => data.value === value)?.label;

    return (
        <Popover open={isOpen}>
            <PopoverTrigger asChild className="select-none">
                <div className="w-80">
                    <Command>
                        <div className="relative">
                            <CommandInput
                                placeholder="Digite um nome"
                                onBlur={() => {
                                    setIsOpen(false);
                                }}
                                value={isOpen ? undefined : selectedLabel}
                                onFocus={() => setIsOpen(true)}
                                className={cn(
                                    "w-80 rounded-[2rem] font-workSans text-2xl placeholder:text-[#919191]",
                                    "border-2 border-[#C9C9C9] bg-[#101010] text-white hover:bg-neutral-800",
                                    "flex justify-between items-center absolute right-0 z-10 p-[1.125rem]"
                                )}
                            />
                            <ChevronDownIcon
                                color="#C9C9C9"
                                className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 shrink-0 opacity-50"
                            />
                        </div>

                        <PopoverContent
                            className="w-80 pl-4 border-2 border-[#C9C9C9] bg-[#101010] text-white z-1 -mt-[1.625rem] pt-12 rounded-[2rem] overflow-hidden"
                            onOpenAutoFocus={(e) => e.preventDefault()}
                        >
                            <CommandList>
                                <CommandEmpty className="text-2xl font-workSans">
                                    Nenhum nome encontrado.
                                </CommandEmpty>
                                <ScrollArea className="h-48">
                                    <CommandGroup>
                                        {mockData.map((data) => (
                                            <CommandItem
                                                key={data.value}
                                                value={data.value}
                                                onSelect={(currentValue) => {
                                                    setValue(
                                                        currentValue === value
                                                            ? ""
                                                            : currentValue
                                                    );
                                                    setIsOpen(false);
                                                }}
                                                className="text-2xl font-workSans text-white"
                                            >
                                                {data.label}
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                </ScrollArea>
                            </CommandList>
                        </PopoverContent>
                    </Command>
                </div>
            </PopoverTrigger>
        </Popover>
    );
};

export default SearchableCombobox;
