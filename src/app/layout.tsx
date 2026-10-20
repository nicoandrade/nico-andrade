import type { Metadata } from "next";
import { Catamaran } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/config/site";

const catamaran = Catamaran({
    subsets: ["latin"],
    variable: "--font-catamaran",
});

export const metadata: Metadata = {
    description: siteConfig.shortDescription,
    icons: {
        icon: [
            {
                media: "(prefers-color-scheme: light)",
                type: "image/png",
                url: "/favicon-light.png",
            },
            {
                media: "(prefers-color-scheme: dark)",
                type: "image/png",
                url: "/favicon-dark.png",
            },
        ],
    },
    metadataBase: new URL(siteConfig.url),
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    twitter: {
        card: "summary_large_image",
        creator: siteConfig.links.x,
        site: siteConfig.links.x,
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
