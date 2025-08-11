import type { Metadata } from "next";
import { QueryProvider } from "@/components/providers/QueryProvider";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-work-sans",
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
        <html lang="en" className={`dark ${workSans.variable}`}>
            <body className="antialiased">
                <QueryProvider>{children}</QueryProvider>
            </body>
        </html>
    );
}
