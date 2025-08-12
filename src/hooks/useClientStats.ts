"use client";

import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { ClientStats } from "@/types/client";

async function fetchClientStats(): Promise<ClientStats> {
    const response = await api.get("/clients/stats");
    return response.data;
}

export function useClientStats() {
    return useQuery({
        queryKey: ["client-stats"],
        queryFn: fetchClientStats,
    });
}
