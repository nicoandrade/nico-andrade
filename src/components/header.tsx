import Link from "next/link";
import { Logo } from "@/components/logo";
import { siteConfig } from "@/config/site";

export function Header() {
    return (
        <div className="my-4 flex w-full justify-center">
            <Link
                aria-label={siteConfig.name}
                className="rounded-full text-primary opacity-30 outline-none ring-offset-4 ring-offset-background hover:opacity-100 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                href="/"
            >
                <Logo className="size-9" />
            </Link>
        </div>
    );
}
