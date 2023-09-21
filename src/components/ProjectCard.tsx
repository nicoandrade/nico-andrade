import Image from "next/image";

export default function ProjectCard({
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
            href={href}
            rel="noreferrer"
            target="_blank"
            className="rounded-2xl border border-transparent border-opacity-0 bg-gradient-to-tl from-gray-800 to-gray-700 p-5 text-gray-400 transition-all hover:border-gray-700 hover:border-opacity-50 hover:from-gray-900 hover:to-gray-800 hover:shadow-xl md:p-8 lg:aspect-square"
        >
            <span
                className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-gray-800"
                style={{ backgroundColor: background }}
            >
                <Image src={icon} width={30} height={30} alt={title} />
            </span>

            <h3 className="mb-2 text-xl font-bold text-gray-200 md:mb-3 md:text-2xl">{title}</h3>
            <p className="text-sm md:text-base">{description}</p>
        </a>
    );
}
