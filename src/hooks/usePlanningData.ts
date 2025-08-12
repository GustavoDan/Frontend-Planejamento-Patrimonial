import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";

type Client = { id: string; [key: string]: unknown };
type AlignmentData = {
    alignmentPercentage: number;
    category: "green" | "yellow-light" | "yellow-dark" | "red";
};

type AlignmentDistributionData = {
    green: { count: number; percentage: number };
    "yellow-light": { count: number; percentage: number };
    "yellow-dark": { count: number; percentage: number };
    red: { count: number; percentage: number };
    totalClients: number;
};

async function fetchAllClients(): Promise<Client[]> {
    let allClients: Client[] = [];
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

            if (page >= meta.pageCount) {
                hasMorePages = false;
            } else {
                page++;
            }
        } catch (error) {
            console.error("Falha ao buscar página de clientes:", page, error);
            hasMorePages = false;
        }
    }
    return allClients;
}

async function fetchAndCalculateDistribution(): Promise<AlignmentDistributionData> {
    const clients = await fetchAllClients();

    if (clients.length === 0) {
        return {
            green: { count: 0, percentage: 0 },
            "yellow-light": { count: 0, percentage: 0 },
            "yellow-dark": { count: 0, percentage: 0 },
            red: { count: 0, percentage: 0 },
            totalClients: 0,
        };
    }

    const alignmentPromises = clients.map((client) =>
        api
            .get(`/clients/${client.id}/alignment`)
            .then((res) => res.data as AlignmentData)
            .catch(() => null)
    );

    const alignmentResults = await Promise.all(alignmentPromises);

    const categoryCounts = {
        green: 0,
        "yellow-light": 0,
        "yellow-dark": 0,
        red: 0,
    };

    let plannableClientsCount = 0;

    for (const result of alignmentResults) {
        if (result) {
            categoryCounts[result.category]++;
            plannableClientsCount++;
        }
    }

    const totalClients = clients.length;

    const calculatePercentage = (count: number) => {
        if (plannableClientsCount === 0) {
            return 0;
        }
        return parseFloat(((count / plannableClientsCount) * 100).toFixed(2));
    };

    return {
        green: {
            count: categoryCounts.green,
            percentage: calculatePercentage(categoryCounts.green),
        },
        "yellow-light": {
            count: categoryCounts["yellow-light"],
            percentage: calculatePercentage(categoryCounts["yellow-light"]),
        },
        "yellow-dark": {
            count: categoryCounts["yellow-dark"],
            percentage: calculatePercentage(categoryCounts["yellow-dark"]),
        },
        red: {
            count: categoryCounts.red,
            percentage: calculatePercentage(categoryCounts.red),
        },
        totalClients,
    };
}

export function useAlignmentDistribution() {
    return useQuery({
        queryKey: ["alignment-distribution-frontend"],
        queryFn: fetchAndCalculateDistribution,
    });
}
