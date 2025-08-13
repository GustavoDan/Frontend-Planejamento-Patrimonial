import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { ClientSummary } from "@/types/client";

async function fetchAllClients(): Promise<ClientSummary[]> {
    let allClients: ClientSummary[] = [];
    let page = 1;
    const pageSize = 100;
    let hasMorePages = true;

    while (hasMorePages) {
        try {
            const response = await api.get(
                `/clients?page=${page}&pageSize=${pageSize}`
            );
            const { clients, meta } = response.data;
            allClients = [...allClients, ...clients];
            hasMorePages = page < meta.pageCount;
            page++;
        } catch (error) {
            console.error("Falha ao buscar página de clientes:", page, error);
            hasMorePages = false;
        }
    }
    return allClients;
}

export function useAllClients() {
    return useQuery({
        queryKey: ["all-clients"],
        queryFn: fetchAllClients,
        staleTime: 1000 * 60 * 5,
    });
}
