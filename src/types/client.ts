export type ClientWallet = {
    totalValue: string;
    updatedAt: string;
} | null;

export type ClientSummary = {
    id: string;
    name: string;
    email: string;
    dateOfBirth: string;
    isActive: string;
    familyProfile: string;
    createdAt: string;
    updatedAt: string;
    wallet: ClientWallet;
};

export type PaginatedClientsResponse = {
    clients: ClientSummary[];
    meta: {
        total: number;
        page: number;
        pageSize: number;
        pageCount: number;
    };
};

export type ClientStats = {
    totalClients: number;
    clientsWithPlan: number;
    percentageWithPlan: number;
};
