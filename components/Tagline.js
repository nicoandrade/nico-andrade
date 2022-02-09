export default function Tagline() {
    return (
        <h2 className="text-2xl md:text-3xl font-bold text-gray-500 my-6 inline-flex items-center group cursor-default">
            Design{" "}
            <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mx-2 group-hover:rotate-45 group-hover:text-white transition-transform"
                aria-label="+"
            >
                <path d="M3.1156 0.218033L15 11.9347L11.8909 15L0.00648402 3.28328L3.1156 0.218033Z" />
                <path d="M0 11.7167L11.8844 -6.55315e-06L14.9935 3.06524L3.10912 14.7819L0 11.7167Z" />
            </svg>{" "}
            Code
        </h2>
    );
}
