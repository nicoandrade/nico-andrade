export default function SectionTitle({ title, subtitle }) {
    return (
        <div className="mb-7">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-300">
                {title}
            </h2>
            {subtitle && (
                <p className="mt-2 text-base md:text-lg">{subtitle}</p>
            )}
        </div>
    );
}
