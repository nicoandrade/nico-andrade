import { Catamaran } from "next/font/google";
import Script from "next/script";

import { env } from "@/env.mjs";
import "@/styles/globals.css";
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
            <body className={twMerge("font-sans", catamaran.variable)}>{children}</body>
            <Script
                defer
                src="https://unpkg.com/@tinybirdco/flock.js"
                data-host="https://api.us-east.tinybird.co"
                data-token={env.NEXT_PUBLIC_TINY_BIRD_TOKEN}
                // @ts-ignore: Unreachable code error
                tb_domain={env.NEXT_PUBLIC_SITE_URL}
            />
        </html>
    );
}
