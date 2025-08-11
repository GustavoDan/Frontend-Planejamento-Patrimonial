"use client";

import { AUTH_TOKEN_LS } from "@/app/constants";
import {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
    useCallback,
    useMemo,
} from "react";

interface AuthContextType {
    token: string | null;
    login: (token: string) => void;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const storedToken = localStorage.getItem(AUTH_TOKEN_LS);
        if (storedToken) {
            setToken(storedToken);
        }
    }, [setToken]);

    const login = useCallback(
        (newToken: string) => {
            setToken(newToken);
            localStorage.setItem(AUTH_TOKEN_LS, newToken);
        },
        [setToken]
    );

    const logout = useCallback(() => {
        setToken(null);
        localStorage.removeItem(AUTH_TOKEN_LS);
    }, [setToken]);

    const isAuthenticated = useMemo(() => !!token, [token]);

    return (
        <AuthContext.Provider value={{ token, login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
