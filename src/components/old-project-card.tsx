import Image from "next/image";
import { cn } from "@/lib/utils";

export function OldProjectCard({
    title,
    color = "#2B5CEA",
    icon,
    href,
    className,
}: {
    title: string;
    color?: string;
    icon: string;
    href: string;
    className?: string;
}) {
    return (
        <a
            className={cn(
                "group flex items-center gap-3 rounded-xl bg-background p-1 transition-all hover:bg-(--bg-color)",
                className
            )}
            href={href}
            rel="noreferrer"
            style={{ "--bg-color": color } as React.CSSProperties}
            target="_blank"
        >
            <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-(--bg-color) md:size-10">
                <span className="relative size-4 md:size-5">
                    <Image alt={title} fill src={icon} />
                </span>
            </span>

            <h4 className="truncate font-bold text-primary text-sm group-hover:text-white md:text-base lg:text-lg">
                {title}
            </h4>
        </a>
    );
}
