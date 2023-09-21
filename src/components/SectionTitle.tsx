export default function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
    return (
        <div className="mb-7">
            <h2 className="text-3xl font-bold text-gray-300 md:text-4xl">{title}</h2>
            {subtitle && <p className="mt-2 text-base md:text-lg">{subtitle}</p>}
        </div>
    );
}
