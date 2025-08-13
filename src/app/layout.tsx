import type { Metadata } from "next";
import { QueryProvider } from "@/components/providers/QueryProvider";
import { Work_Sans, Inter } from "next/font/google";
import { AuthProvider } from "@/contexts/AuthContext";
import "./globals.css";
import { SidebarProvider } from "@/contexts/SidebarContext";

const workSans = Work_Sans({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-work-sans",
    weight: ["400", "500", "600", "700"],
});

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "MFO",
    description: "Gerenciador de finanças",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`dark ${inter.variable} ${workSans.variable}`}
        >
            <body className="antialiased min-h-screen w-screen overflow-x-hidden">
                <QueryProvider>
                    <AuthProvider>
                        <SidebarProvider>{children}</SidebarProvider>
                    </AuthProvider>
                </QueryProvider>
            </body>
        </html>
    );
}
