import Image from "next/image";

export default function ThingCard({
    title,
    background = "#2B5CEA",
    icon,
    href,
}) {
    return (
        <a
            href={href}
            rel="noreferrer"
            target="_blank"
            className={`p-2 rounded-xl text-gray-400 bg-gray-800 hover:bg-[${background}] hover:shadow-xl transition-all flex items-center`}
        >
            <span
                className="inline-flex items-center justify-center w-8 h-8 md:w-11 md:h-11 bg-gray-800 rounded-lg mr-3 shrink-0"
                style={{ backgroundColor: background }}
            >
                <span className="relative w-4 h-4 md:w-6 md:h-6">
                    <Image
                        src={icon}
                        layout="fill"
                        objectFit="contain"
                        alt={title}
                    />
                </span>
            </span>

            <h5 className="text-sm md:text-base lg:text-lg font-bold text-gray-200 truncate">
                {title}
            </h5>
        </a>
    );
}
