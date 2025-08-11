import { z } from "zod";

export const loginSchema = z.object({
    email: z.email("Por favor, insira um e-mail válido."),
    password: z.string().min(8, "A senha deve ter pelo menos 8 caracteres."),
});

export type LoginData = z.infer<typeof loginSchema>;
