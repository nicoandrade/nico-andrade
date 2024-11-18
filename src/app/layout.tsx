import { Catamaran } from "next/font/google";

import { env } from "@/env.mjs";
import "@/styles/globals.css";
import PlausibleProvider from "next-plausible";
import { twMerge } from "tailwind-merge";

const catamaran = Catamaran({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata = {
    title: "Nico Andrade",
    description: "Design + Code",
    twitter: {
        handle: "@nicoandrade",
        site: "@nicoandrade",
        cardType: "summary_large_image",
    },
    metadataBase: new URL("https://nicoandrade.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={twMerge("font-sans", catamaran.variable)}>
                <PlausibleProvider domain={env.NEXT_PUBLIC_SITE_URL.replace("https://", "")}>
                    {children}
                </PlausibleProvider>
                <script
                    defer
                    data-site-id="nicoandrade.com"
                    src="https://assets.onedollarstats.com/tracker.js"
                />
            </body>
        </html>
    );
}
