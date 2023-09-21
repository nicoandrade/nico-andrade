import Image from "next/image";

export default function ThingCard({
    title,
    background = "#2B5CEA",
    icon,
    href,
}: {
    title: string;
    background?: string;
    icon: string;
    href: string;
}) {
    return (
        <a
            href={href}
            rel="noreferrer"
            target="_blank"
            className={`rounded-xl bg-gray-800 p-2 text-gray-400 hover:bg-[${background}] flex items-center transition-all hover:shadow-xl`}
        >
            <span
                className="mr-3 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-800 md:h-11 md:w-11"
                style={{ backgroundColor: background }}
            >
                <span className="relative h-4 w-4 md:h-6 md:w-6">
                    <Image src={icon} fill alt={title} />
                </span>
            </span>

            <h4 className="truncate text-sm font-bold text-gray-200 md:text-base lg:text-lg">
                {title}
            </h4>
        </a>
    );
}
