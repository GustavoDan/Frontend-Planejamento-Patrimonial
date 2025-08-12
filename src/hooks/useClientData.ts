"use client";

import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { PaginatedClientsResponse } from "@/types/client";

async function fetchClients(
    page: number,
    pageSize: number
): Promise<PaginatedClientsResponse> {
    const response = await api.get("/clients", {
        params: { page, pageSize },
    });
    return response.data;
}

export function useClients(page: number, pageSize: number = 4) {
    return useQuery({
        queryKey: ["clients", page, pageSize],
        queryFn: () => fetchClients(page, pageSize),
        placeholderData: (previousData) => previousData,
    });
}
