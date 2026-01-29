import Link from "next/link";
import profileimage from "@/assets/images/profile.jpg";
import { Logo } from "@/components/logo";
import { SocialIcons } from "@/components/social-icons";
import { Tagline } from "@/components/tagline";
import { siteConfig } from "@/config/site";

export function Hero() {
    return (
        <div className="flex flex-col gap-8">
            <Link className="group relative size-24 sm:size-30" href="/">
                <div
                    className="mask-contain mask-[url(/hexagon.svg)] mask-center mask-no-repeat relative size-full overflow-hidden bg-center bg-cover bg-no-repeat"
                    style={{
                        backgroundImage: `url(${profileimage.src})`,
                    }}
                />
                <Logo className="absolute top-1/2 left-1/2 size-full -translate-x-1/2 -translate-y-1/2 scale-105 text-background opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <svg
                    aria-hidden="true"
                    className="absolute top-1/2 left-1/2 size-full -translate-x-1/2 -translate-y-1/2 scale-120 text-muted transition-colors duration-300 group-hover:text-primary"
                    fill="none"
                    viewBox="0 0 96 106"
                >
                    <path
                        d="M42.6162 2.92773C45.9482 1.02404 50.0518 1.02404 53.3838 2.92773L89.1045 23.3369C92.4381 25.2415 94.4999 28.7668 94.5 32.5908V73.4092C94.4999 77.2332 92.4381 80.7585 89.1045 82.6631L53.3838 103.072C50.0518 104.976 45.9482 104.976 42.6162 103.072L6.89551 82.6631C3.56189 80.7585 1.50011 77.2332 1.5 73.4092V32.5908C1.50011 28.7668 3.56189 25.2415 6.89551 23.3369L42.6162 2.92773Z"
                        stroke="currentColor"
                        strokeWidth="3"
                    />
                </svg>
            </Link>
            <div className="flex flex-col gap-4">
                <Tagline />
                <h1 className="cursor-default font-extrabold text-5xl text-primary leading-tight md:text-8xl">
                    {siteConfig.name}
                </h1>
                <p className="max-w-2xl font-semibold text-base text-gray-500 sm:text-lg lg:text-xl xl:text-2xl dark:text-gray-500">
                    {siteConfig.description}
                </p>
            </div>
            <SocialIcons />
        </div>
    );
}
