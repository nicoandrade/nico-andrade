import Image from "next/image";
import { cn } from "@/lib/utils";

export function ThingCard({
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
                "group flex items-center gap-3 rounded-lg bg-background p-1 transition-all hover:bg-(--bg-color)",
                className
            )}
            href={href}
            rel="noreferrer"
            style={{ "--bg-color": color } as React.CSSProperties}
            target="_blank"
        >
            <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-md bg-(--bg-color) md:size-8">
                <span className="relative size-3 md:size-4">
                    <Image alt={title} fill src={icon} />
                </span>
            </span>
            <h4 className="truncate font-bold text-primary text-sm group-hover:text-white md:text-base lg:text-base">
                {title}
            </h4>
        </a>
    );
}
