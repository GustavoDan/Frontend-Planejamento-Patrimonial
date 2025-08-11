import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { LoginData } from "@/schemas/auth.schema";
import { useAuth } from "@/contexts/AuthContext";
import { AxiosError } from "axios";

type LoginResponse = {
    token: string;
};

async function loginUser(credentials: LoginData): Promise<LoginResponse> {
    const response = await api.post("/sessions", credentials);
    return response.data;
}

interface Options {
    onSuccess?: () => void;
}

type LoginError = {
    message: string;
};

export function useLoginMutation({ onSuccess }: Options = {}) {
    const auth = useAuth();
    const queryClient = useQueryClient();

    return useMutation<LoginResponse, AxiosError<LoginError>, LoginData>({
        mutationFn: loginUser,
        onSuccess: (data) => {
            auth.login(data.token);

            queryClient.invalidateQueries({ queryKey: ["user-profile"] });

            onSuccess?.();
        },
    });
}
