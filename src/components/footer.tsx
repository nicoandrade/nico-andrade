import Link from "next/link";

import { GitHub } from "@/components/icons/github";
import { Logo } from "@/components/logo";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function Footer() {
    return (
        <footer className="flex flex-col gap-4">
            <div className={"flex items-center justify-between"}>
                <div className="order-1 mt-0">
                    <div className="flex items-center text-left text-gray-400 text-xs">
                        <Link
                            aria-label={siteConfig.name}
                            className="rounded-full text-primary opacity-30 outline-none ring-offset-4 ring-offset-background hover:opacity-100 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                            href="/"
                        >
                            <Logo className="size-9" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-between gap-3 border-muted border-t py-3 text-gray-500 sm:flex-row dark:text-gray-500">
                <div className="flex w-full justify-between space-x-6 text-sm sm:order-2 sm:w-auto sm:justify-start">
                    <span>{new Date().getFullYear()}</span>
                    <span>{siteConfig.name}</span>
                </div>
                <div className="flex w-full items-center justify-between gap-2 text-sm sm:order-2 sm:w-auto sm:justify-end">
                    <ModeToggle />
                    <Button asChild size="sm" variant="ghost">
                        <Link
                            data-s-event="GitHub repository click"
                            href={siteConfig.repository}
                            rel="noreferrer"
                            target="_blank"
                        >
                            <span className="-mb-1 leading-none">This site is available on</span>{" "}
                            <GitHub className="size-5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </footer>
    );
}
