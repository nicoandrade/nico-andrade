import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: true,
    async rewrites() {
        return [
            {
                destination: "https://assets.onedollarstats.com/stonks.js",
                source: "/stonks.js",
            },
        ];
    },
};

export default nextConfig;
