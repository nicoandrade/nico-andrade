import type { Metadata } from "next";
import { Catamaran } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/config/site";

const catamaran = Catamaran({
    variable: "--font-catamaran",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.shortDescription,
    twitter: {
        site: siteConfig.links.x,
        creator: siteConfig.links.x,
        card: "summary_large_image",
    },
    metadataBase: new URL(siteConfig.url),
    icons: {
        icon: [
            {
                url: "/favicon-light.png",
                media: "(prefers-color-scheme: light)",
                type: "image/png",
            },
            {
                url: "/favicon-dark.png",
                media: "(prefers-color-scheme: dark)",
                type: "image/png",
            },
        ],
    },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="en" suppressHydrationWarning>
            <Script data-debug={siteConfig.url.replace("https://", "")} defer src="/stonks.js" />
            <body className={`${catamaran.variable} antialiased`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    disableTransitionOnChange
                    enableSystem
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
