export function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
    return (
        <div className="flex flex-col gap-2">
            <h2 className="font-bold text-2xl text-gray-800 md:text-3xl dark:text-gray-300">
                {title}
            </h2>
            {subtitle && <p className="text-base md:text-lg">{subtitle}</p>}
        </div>
    );
}
