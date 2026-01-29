import Image from "next/image";

export function ProjectCard({
    title,
    description,
    background = "#2B5CEA",
    icon,
    href,
}: {
    title: string;
    description: string;
    background?: string;
    icon: string;
    href: string;
}) {
    return (
        <a
            className="group relative z-0 flex flex-col gap-2 rounded-2xl transition-all sm:gap-4"
            href={href}
            rel="noreferrer"
            target="_blank"
        >
            <span
                className="inline-flex size-10 items-center justify-center rounded-lg bg-gray-800"
                style={{ backgroundColor: background }}
            >
                <Image alt={title} height={20} src={icon} width={20} />
            </span>
            <div className="flex flex-col gap-1">
                <h3 className="font-bold text-gray-900 text-xl md:text-2xl dark:text-gray-200">
                    {title}
                </h3>
                <p className="text-foreground text-xs sm:text-sm md:text-base">{description}</p>
            </div>
            <span className="absolute -inset-4 -z-10 rounded-2xl bg-gray-100 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-gray-900" />
        </a>
    );
}
