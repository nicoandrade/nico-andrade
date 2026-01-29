import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { MainProjects } from "@/components/main-projects";
import { OldProjects } from "@/components/old-projects";
import { Things } from "@/components/things";

export default function Home() {
    return (
        <div className="mx-auto flex max-w-5xl flex-col gap-12 px-4 sm:gap-20 sm:px-6 lg:gap-24 lg:px-8 xl:gap-30">
            <Header />
            <Hero />
            <MainProjects />
            <OldProjects />
            <Things />
            <Footer />
        </div>
    );
}
