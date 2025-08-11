import TextInput from "../TextInput";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginData, loginSchema } from "@/schemas/auth.schema";
import { useLoginMutation } from "@/hooks/useAuthMutations";
import { useCallback, useEffect, useMemo } from "react";

interface LoginFormProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const LoginForm = ({ isOpen, setIsOpen }: LoginFormProps) => {
    const form = useForm<LoginData>({
        resolver: zodResolver(loginSchema),
    });

    const loginMutation = useLoginMutation({
        onSuccess: () => {
            setIsOpen(false);
        },
    });

    const handleLogin = useCallback(
        (data: LoginData) => {
            loginMutation.mutate(data);
        },
        [loginMutation]
    );

    const getErrorMessage = useCallback(() => {
        if (!loginMutation.isError) {
            return null;
        }

        const error = loginMutation.error;

        if (error.response?.data?.message) {
            return error.response.data.message;
        }

        if (error.request) {
            return "Não foi possível conectar ao servidor. Verifique sua conexão ou tente novamente mais tarde.";
        }

        return "Ocorreu um erro inesperado. Por favor, tente novamente.";
    }, [loginMutation.isError, loginMutation.error]);

    const errorMessage = useMemo(() => getErrorMessage(), [getErrorMessage]);

    useEffect(() => {
        form.reset();
    }, [isOpen, form]);

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleLogin)}
                className="flex flex-col items-center justify-center gap-3 w-full"
            >
                {errorMessage && (
                    <p className="text-destructive text-md">{errorMessage}</p>
                )}
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="space-y-1.5 w-2/3">
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <TextInput
                                    placeholder="Digite o seu email"
                                    type="email"
                                    autoComplete="email"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem className="space-y-1.5 w-2/3">
                            <FormLabel>Senha</FormLabel>
                            <FormControl>
                                <TextInput
                                    placeholder="Digite a sua senha"
                                    type="password"
                                    autoComplete="current-password"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" disabled={loginMutation.isPending}>
                    {loginMutation.isPending ? "Logando..." : "Logar"}
                </Button>
            </form>
        </Form>
    );
};

export default LoginForm;
