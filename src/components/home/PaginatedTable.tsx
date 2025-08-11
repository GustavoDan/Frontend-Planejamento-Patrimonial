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

const clientsData = [
    {
        id: 1,
        name: "Matheus Lima",
        avatar: "/avatars/matheus.png",
        patrimony: 45678910,
        status: "+ 6 meses",
        statusVariant: "danger",
    },
    {
        id: 2,
        name: "Emerson da Rocha",
        avatar: "/avatars/emerson.png",
        patrimony: 12345678,
        status: "+ 6 meses",
        statusVariant: "danger",
    },
    {
        id: 3,
        name: "Gisele Bulhões",
        avatar: "/avatars/gisele.png",
        patrimony: 89012345,
        status: "+ 3 meses",
        statusVariant: "warning",
    },
    {
        id: 4,
        name: "Carmen Ferreira",
        avatar: "/avatars/carmen.png",
        patrimony: 56789012,
        status: "- 3 meses",
        statusVariant: "success",
    },
    {
        id: 5,
        name: "Carmen Ferreira",
        avatar: "/avatars/carmen.png",
        patrimony: 56789012,
        status: "- 3 meses",
        statusVariant: "success",
    },
    {
        id: 6,
        name: "Carmen Ferreira",
        avatar: "/avatars/carmen.png",
        patrimony: 56789012,
        status: "- 3 meses",
        statusVariant: "success",
    },
    {
        id: 7,
        name: "Carmen Ferreira",
        avatar: "/avatars/carmen.png",
        patrimony: 56789012,
        status: "- 3 meses",
        statusVariant: "success",
    },
    {
        id: 8,
        name: "Carmen Ferreira",
        avatar: "/avatars/carmen.png",
        patrimony: 56789012,
        status: "- 3 meses",
        statusVariant: "success",
    },
    {
        id: 9,
        name: "Carmen Ferreira",
        avatar: "/avatars/carmen.png",
        patrimony: 56789012,
        status: "- 3 meses",
        statusVariant: "success",
    },
    {
        id: 10,
        name: "Carmen Ferreira",
        avatar: "/avatars/carmen.png",
        patrimony: 56789012,
        status: "- 3 meses",
        statusVariant: "success",
    },
];

const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(value / 100);
};

const PaginatedTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;
    const totalPages = useMemo(
        () => Math.ceil(clientsData.length / itemsPerPage),
        [itemsPerPage]
    );

    const currentTableData = useMemo(
        () =>
            clientsData.slice(
                (currentPage - 1) * itemsPerPage,
                currentPage * itemsPerPage
            ),
        [currentPage, itemsPerPage]
    );

    const handlePageChange = useCallback(
        (newPage: number) => {
            setCurrentPage(newPage);
        },
        [setCurrentPage]
    );

    const emptyRowsCount = useMemo(
        () => itemsPerPage - currentTableData.length,
        [itemsPerPage, currentTableData.length]
    );
    const placeholders = useMemo(
        () => Array.from({ length: emptyRowsCount }),
        [emptyRowsCount]
    );

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
                    {currentTableData.map((client) => (
                        <TableRow
                            key={client.id}
                            className="border-b-[#292929] hover:bg-[#292929]/50"
                        >
                            <TableCell className="flex items-center gap-x-3 pl-10 text-[#DADADA] text-xl">
                                <Avatar className="select-none">
                                    <AvatarFallback>
                                        {client.name.charAt(0)}
                                    </AvatarFallback>
                                </Avatar>
                                {client.name}
                            </TableCell>
                            <TableCell className="text-[#DADADA] text-xl">
                                {formatCurrency(client.patrimony)}
                            </TableCell>
                            <TableCell>
                                <Badge variant={client.statusVariant as any}>
                                    {client.status}
                                </Badge>
                            </TableCell>
                            <TableCell className="flex items-end justify-end pr-8">
                                <ThreeDotsIcon />
                            </TableCell>
                        </TableRow>
                    ))}
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
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </>
    );
};

export default PaginatedTable;
