"use client";

import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { useAuth } from "@/contexts/AuthContext";

export type UserProfile = {
    id: string;
    email: string;
    role: "ADVISOR" | "VIEWER";
    clientId?: string;
};

async function fetchUserProfile(): Promise<UserProfile> {
    const response = await api.get("/me");
    return response.data;
}

export function useUser() {
    const { isAuthenticated } = useAuth();

    return useQuery({
        queryKey: ["user-profile"],
        queryFn: fetchUserProfile,
        enabled: isAuthenticated,
        staleTime: 1000 * 60 * 5,
    });
}
