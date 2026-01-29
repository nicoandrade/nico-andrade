import type * as React from "react";
import { siteConfig } from "@/config/site";

function Logo({ className, ...props }: React.ComponentProps<"svg">) {
    return (
        <svg
            className={className}
            fill="none"
            viewBox="0 0 135 150"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <title>{siteConfig.name}</title>
            <path
                clipRule="evenodd"
                d="M59.2865 2.07375C64.0757 -0.691225 69.9763 -0.691273 74.7654 2.07375L126.312 31.8344C131.101 34.5995 134.052 39.7095 134.052 45.2394V104.761C134.052 110.291 131.101 115.401 126.312 118.166L74.7654 147.926C69.9763 150.691 64.0756 150.691 59.2865 147.926L7.73946 118.166C2.95035 115.401 0.000109205 110.291 0 104.761V45.2394C0 39.7093 2.95033 34.5994 7.73946 31.8344L59.2865 2.07375ZM43.5889 101.83H55.8995V69.8706L58.9771 74.1313L78.6261 101.83H90.463V48.1699H78.1524L78.231 80.6031L74.5225 75.394L55.4258 48.1699H43.5889V101.83Z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    );
}

export { Logo };
