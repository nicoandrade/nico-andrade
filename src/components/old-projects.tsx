import { OldProjectCard } from "@/components/old-project-card";
import { SectionTitle } from "@/components/section-title";

export function OldProjects() {
    return (
        <div className="flex flex-col gap-8">
            <SectionTitle title="Old Projects" />
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-10 lg:gap-16">
                <OldProjectCard
                    color="#2B5CEA"
                    href="https://tipybit.com"
                    icon="/images/projects/tipybit.svg"
                    title="tipybit"
                />
                <OldProjectCard
                    color="#4E60D5"
                    href="https://github.com/nicoandrade/warwordly"
                    icon="/images/projects/warwordly.svg"
                    title="WarWordly"
                />
                <OldProjectCard
                    color="#000000"
                    href="https://www.instagram.com/dolawz"
                    icon="/images/projects/dolawz.svg"
                    title="Dolawz"
                />
                <OldProjectCard
                    color="#3193FE"
                    href="https://www.instagram.com/getbirlab"
                    icon="/images/projects/birlab.svg"
                    title="Birlab"
                />
            </div>
        </div>
    );
}
