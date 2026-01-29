import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: true,
    async rewrites() {
        return [
            {
                source: "/stonks.js",
                destination: "https://assets.onedollarstats.com/stonks.js",
            },
        ];
    },
};

export default nextConfig;
