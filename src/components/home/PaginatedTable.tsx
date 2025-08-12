"use client";

import React, { useCallback, useMemo, useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import PaginationControls from "../ui/PaginationControls";
import { ThreeDotsIcon } from "../icons/ThreeDotsIcon";
import { useClients } from "@/hooks/useClientData";
import { getUpdateStatus } from "@/lib/dateUtils";
import { formatCurrency, getInitials } from "@/utils/string";

const ITEMS_PER_PAGE = 4;

const PaginatedTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { data, isError } = useClients(currentPage, 4);

    const handlePageChange = useCallback(
        (newPage: number) => {
            setCurrentPage(newPage);
        },
        [setCurrentPage]
    );

    const emptyRowsCount = useMemo(() => {
        if (!data) {
            return 0;
        }
        const count = ITEMS_PER_PAGE - data.clients.length;
        return Math.max(0, count);
    }, [data]);

    const placeholders = useMemo(
        () => Array.from({ length: emptyRowsCount }),
        [emptyRowsCount]
    );

    if (isError || !data) {
        return (
            <div className="flex items-center justify-center text-destructive text-center py-[11.5rem]">
                Erro ao carregar dados.
            </div>
        );
    }
    return (
        <>
            <Table>
                <TableHeader className="bg-[#262626]">
                    <TableRow className="hover:bg-transparent">
                        <TableHead className="w-[40%] text-[#7F7F7F] text-lg text-nowrap pl-24">
                            Nome
                        </TableHead>
                        <TableHead className="w-[30%] text-[#7F7F7F] text-lg text-nowrap">
                            Patrimônio
                        </TableHead>
                        <TableHead className="w-[20%] text-[#7F7F7F] text-lg text-nowrap">
                            Última atualização
                        </TableHead>
                        <TableHead className="w-[10%]"></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.clients.map((client) => {
                        const status = getUpdateStatus(
                            client.wallet?.updatedAt
                        );

                        return (
                            <TableRow
                                key={client.id}
                                className="border-b-[#292929] hover:bg-[#292929]/50"
                            >
                                <TableCell className="flex items-center gap-x-3 pl-10 text-[#DADADA] text-xl">
                                    <Avatar className="select-none">
                                        <AvatarFallback className="text-sm">
                                            {getInitials(client.name)}
                                        </AvatarFallback>
                                    </Avatar>
                                    {client.name}
                                </TableCell>
                                <TableCell className="text-[#DADADA] text-xl">
                                    {client.wallet
                                        ? formatCurrency(
                                              parseFloat(
                                                  client.wallet.totalValue
                                              )
                                          )
                                        : "N/A"}
                                </TableCell>
                                <TableCell>
                                    {status ? (
                                        <Badge variant={status.color}>
                                            {status.text}
                                        </Badge>
                                    ) : (
                                        <span className="text-lg text-muted-foreground">
                                            Nunca
                                        </span>
                                    )}
                                </TableCell>
                                <TableCell className="flex items-end justify-end pr-8">
                                    <ThreeDotsIcon />
                                </TableCell>
                            </TableRow>
                        );
                    })}
                    {placeholders.map((_, index) => (
                        <TableRow
                            key={`placeholder-${index}`}
                            className="border-b-neutral-800"
                        >
                            <TableCell className="py-[1.625rem]">
                                &nbsp;
                            </TableCell>
                            <TableCell>&nbsp;</TableCell>
                            <TableCell>&nbsp;</TableCell>
                            <TableCell>&nbsp;</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <div className="flex items-center justify-center gap-x-4 border-t border-t-[#292929] py-5">
                <PaginationControls
                    currentPage={currentPage}
                    totalPages={data?.meta.pageCount}
                    onPageChange={handlePageChange}
                />
            </div>
        </>
    );
};

export default PaginatedTable;
