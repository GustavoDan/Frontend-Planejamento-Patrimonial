"use client";

import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { ClientSummary } from "@/types/client";

type InsuranceStats = {
    total: number;
    withInsurance: number;
    percentage: number;
};

type InsuranceDistribution = {
    withChild: InsuranceStats;
    single: InsuranceStats;
    withDependents: InsuranceStats;
};

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

function categorizeClient(
    client: ClientSummary
): "with-child" | "single" | "other" {
    if (
        !client.familyProfile ||
        !Array.isArray(client.familyProfile) ||
        client.familyProfile.length === 0
    ) {
        return "single";
    }
    const hasChild = client.familyProfile.some(
        (member) => member?.relationship === "CHILD"
    );
    return hasChild ? "with-child" : "single";
}

async function fetchAndCalculateInsuranceStats(): Promise<InsuranceDistribution> {
    const clients = await fetchAllClients();

    const insuranceCheckPromises = clients.map((client) =>
        api
            .get(`/clients/${client.id}/insurances?pageSize=1`)
            .then((res) => res.data.insurances.length > 0)
            .catch(() => false)
    );
    const hasInsuranceFlags = await Promise.all(insuranceCheckPromises);
    const clientsWithInsurance = new Set(
        clients.filter((_, index) => hasInsuranceFlags[index]).map((c) => c.id)
    );

    const profileCounts = {
        "with-child": { total: 0, withInsurance: 0 },
        single: { total: 0, withInsurance: 0 },
    };

    for (const client of clients) {
        const category = categorizeClient(client);
        if (category !== "other") {
            profileCounts[category].total++;
            if (clientsWithInsurance.has(client.id)) {
                profileCounts[category].withInsurance++;
            }
        }
    }

    const calculateStats = (
        category: "with-child" | "single"
    ): InsuranceStats => {
        const total = profileCounts[category].total;
        const withInsurance = profileCounts[category].withInsurance;
        const percentage = total > 0 ? (withInsurance / total) * 100 : 0;
        return { total, withInsurance, percentage };
    };

    const withChildStats = calculateStats("with-child");

    return {
        withChild: withChildStats,
        single: calculateStats("single"),
        withDependents: withChildStats,
    };
}

export function useInsuranceStatsByProfile() {
    return useQuery({
        queryKey: ["insurance-stats-by-profile"],
        queryFn: fetchAndCalculateInsuranceStats,
    });
}
