import Image from "next/image";

export default function ProjectCard({
    title,
    description,
    background = "#2B5CEA",
    icon,
    href,
}) {
    return (
        <a
            href={href}
            rel="noopener"
            target="_blank"
            className="p-5 md:p-8 rounded-2xl bg-gradient-to-tl from-gray-800 to-gray-700 lg:aspect-square text-gray-400 border border-transparent border-opacity-0 hover:border-gray-700 hover:border-opacity-50 hover:shadow-xl hover:from-gray-900 hover:to-gray-800 transition-all"
        >
            <span
                className="inline-flex items-center justify-center w-14 h-14 bg-gray-800 rounded-lg mb-5"
                style={{ backgroundColor: background }}
            >
                <Image src={icon} width={30} height={30} alt={title} />
            </span>

            <h4 className="text-xl md:text-2xl font-bold text-gray-200 mb-2 md:mb-3">
                {title}
            </h4>
            <p className="text-sm md:text-base">{description}</p>
        </a>
    );
}
