import { ProjectCard } from "@/components/project-card";
import { SectionTitle } from "@/components/section-title";

export function MainProjects() {
    return (
        <div className="flex flex-col gap-8">
            <SectionTitle title="Projects" />
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 md:gap-10 lg:gap-16">
                <ProjectCard
                    background="#0069A8"
                    description="Build apps with your AI coding agent. Skip the repetitive setup."
                    href="https://dinvolt.com"
                    icon="/images/projects/dinvolt.svg"
                    title="Dinvolt"
                />
                <ProjectCard
                    background="#000000"
                    description="The complete database to find dupes for your favorite perfumes."
                    href="https://dufume.com"
                    icon="/images/projects/dufume.svg"
                    title="Dufume"
                />
                <ProjectCard
                    background="#D08700"
                    description="Share files instantly using your own S3-compatible storage."
                    href="https://s3nding.nicoandrade.com"
                    icon="/images/projects/s3nding.svg"
                    title="S3nding"
                />
                <ProjectCard
                    background="#F8532D"
                    description="All the news and information from Argentina in a single page."
                    href="https://qpaso.ar"
                    icon="/images/projects/qpaso.svg"
                    title="qpasó"
                />
                <ProjectCard
                    background="#4A90E2"
                    description="Platform to pay for tickets and subscriptions to soccer teams."
                    href="https://sedelab.com"
                    icon="/images/projects/sedelab.svg"
                    title="Sedelab"
                />
                <ProjectCard
                    background="#000000"
                    description="WordPress shop for premium and free themes."
                    href="https://quemalabs.com"
                    icon="/images/projects/quemalabs.svg"
                    title="Quema Labs"
                />
                <ProjectCard
                    background="#AD4253"
                    description="Free, private image optimizer for macOS. Just drag and drop."
                    href="https://resim.nicoandrade.com/"
                    icon="/images/projects/resim-optimizer.svg"
                    title="Resim"
                />
            </div>
        </div>
    );
}
