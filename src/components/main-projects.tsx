import { ProjectCard } from "@/components/project-card";
import { SectionTitle } from "@/components/section-title";

export function MainProjects() {
    return (
        <div className="flex flex-col gap-8">
            <SectionTitle title="Projects" />
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 md:gap-10 lg:gap-16">
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
                    background="#5A649C"
                    description="Instagram giveaways by selecting a random comment."
                    href="https://pickerist.com"
                    icon="/images/projects/pickerist.svg"
                    title="Pickerist"
                />
                <ProjectCard
                    background="#138DD6"
                    description="Mac App for resizing image with just drag & drop."
                    href="https://nicoandrade.github.io/resim/"
                    icon="/images/projects/resim.svg"
                    title="Resim"
                />
                <ProjectCard
                    background="#EF7623"
                    description="An app to help user choose the right beer from a bar."
                    href="https://birtap.com"
                    icon="/images/projects/birtap.svg"
                    title="Birtap"
                />
                <ProjectCard
                    background="#20B490"
                    description="Mac App that shows the price between USD/ARS."
                    href="https://nicoandrade.github.io/dolapp/"
                    icon="/images/projects/dolapp.svg"
                    title="Dolapp"
                />
            </div>
        </div>
    );
}
