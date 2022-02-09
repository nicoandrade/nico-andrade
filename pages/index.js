import Image from "next/image";
import Link from "next/link";

import Logo from "components/Logo";
import SocialIcons from "components/SocialIcons";
import Tagline from "components/Tagline";
import SectionTitle from "components/SectionTitle";
import Footer from "components/Footer";

import ProjectCard from "components/ProjectCard";
import ThingCard from "components/ThingCard";

import photo from "public/photo.png";

export default function Home() {
    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
            <div className="w-full flex justify-center my-6">
                <Link href="/">
                    <a className="text-gray-600 hover:text-white transition-colors">
                        <Logo className="w-9 h-9" />
                    </a>
                </Link>
            </div>
            <div className="mt-28">
                <Image src={photo} alt="Nico Andrade" width={90} height={90} />
                <div>
                    <Tagline />
                    <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-16 leading-tight cursor-default">
                        Nico Andrade
                    </h1>
                </div>
                <SocialIcons />
            </div>

            <div className="mt-36">
                <SectionTitle title="Projects" />

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-7 lg:gap-9">
                    <ProjectCard
                        title="tipybit"
                        description="Receive donations and sell products in Bitcoins."
                        background="#2B5CEA"
                        icon="/images/projects/tipybit.svg"
                        href="https://tipybit.com"
                    />
                    <ProjectCard
                        title="Sedelab"
                        description="Platform to pay for tickets and subscriptions to soccer teams."
                        background="#4A90E2"
                        icon="/images/projects/sedelab.svg"
                        href="https://sedelab.com"
                    />
                    <ProjectCard
                        title="WarWordly"
                        description="1v1 multiplayer word guessing game."
                        background="#4E60D5"
                        icon="/images/projects/warwordly.svg"
                        href="https://warwordly.com"
                    />
                    <ProjectCard
                        title="Quema Labs"
                        description="WordPress shop for premium and free themes."
                        background="#000000"
                        icon="/images/projects/quemalabs.svg"
                        href="https://quemalabs.com"
                    />
                    <ProjectCard
                        title="Pickerist"
                        description="Instagram giveaways by selecting a random comment."
                        background="#5A649C"
                        icon="/images/projects/pickerist.svg"
                        href="https://pickerist.com"
                    />
                    <ProjectCard
                        title="Dolawz"
                        description="Streetwear clothing brand."
                        background="#000000"
                        icon="/images/projects/dolawz.svg"
                        href="https://dolawz.com"
                    />
                    <ProjectCard
                        title="Resim"
                        description="Mac App for resizing image with just drag & drop."
                        background="#138DD6"
                        icon="/images/projects/resim.svg"
                        href="https://nicoandrade.github.io/resim/"
                    />
                    <ProjectCard
                        title="Birlab"
                        description="SaaS solution for micro craft beer producers."
                        background="#3193FE"
                        icon="/images/projects/birlab.svg"
                        href="https://birlab.com"
                    />
                    <ProjectCard
                        title="Birtap"
                        description="An app to help user choose the right beer from a bar."
                        background="#EF7623"
                        icon="/images/projects/birtap.svg"
                        href="https://birtap.com"
                    />
                    <ProjectCard
                        title="Dolapp"
                        description="Mac App that shows the price between USD/ARS."
                        background="#20B490"
                        icon="/images/projects/dolapp.svg"
                        href="https://nicoandrade.github.io/dolapp/"
                    />
                </div>
            </div>

            <div className="mt-36">
                <SectionTitle title="Things" subtitle="Things I really like" />

                {/* Hack to generate custom classes */}
                <span className="hidden hover:bg-[#000000] hover:bg-[#38BDF8] hover:bg-[#0065A9] hover:bg-[#24B47E] hover:bg-[#6A01DA] hover:bg-[#0969D9] hover:bg-[#2C2C2C] hover:bg-[#DD4C4F] hover:bg-[#1D1D1D] hover:bg-[#FF6161] hover:bg-[#363B45] hover:bg-[#0572EC] hover:bg-[#1771EF] hover:bg-[#0073AA] hover:bg-[#22BC66] hover:bg-[#4354C7] hover:bg-[#40A6EB] hover:bg-[#705F30] hover:bg-[#705F30] hover:bg-[#8D733F]" />

                <h4 className="border-b border-gray-800 text-lg font-bold text-gray-400 pb-3 mb-4">
                    Development
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-4 mb-10">
                    <ThingCard
                        title="Next.js"
                        background="#000000"
                        icon="/images/things/nextjs.svg"
                        href="https://nextjs.org/"
                    />
                    <ThingCard
                        title="Tailwind CSS"
                        background="#38BDF8"
                        icon="/images/things/tailwindcss.svg"
                        href="https://tailwindcss.com/"
                    />
                    <ThingCard
                        title="VS Code"
                        background="#0065A9"
                        icon="/images/things/vscode.svg"
                        href="https://code.visualstudio.com/"
                    />
                    <ThingCard
                        title="Hyper"
                        background="#000000"
                        icon="/images/things/hyper.svg"
                        href="https://hyper.is/"
                    />
                    <ThingCard
                        title="Supabase"
                        background="#24B47E"
                        icon="/images/things/supabase.svg"
                        href="https://supabase.com/"
                    />
                    <ThingCard
                        title="Vercel"
                        background="#000000"
                        icon="/images/things/vercel.svg"
                        href="https://vercel.com/"
                    />
                    <ThingCard
                        title="Insomnia"
                        background="#6A01DA"
                        icon="/images/things/insomnia.svg"
                        href="https://insomnia.rest/"
                    />
                    <ThingCard
                        title="GitHub"
                        background="#0969D9"
                        icon="/images/things/github.svg"
                        href="https://github.com/"
                    />
                </div>

                <h4 className="border-b border-gray-800 text-lg font-bold text-gray-400 pb-3 mb-4">
                    Apps
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-4 mb-10">
                    <ThingCard
                        title="Figma"
                        background="#2C2C2C"
                        icon="/images/things/figma.svg"
                        href="https://figma.com/"
                    />

                    <ThingCard
                        title="Bear"
                        background="#DD4C4F"
                        icon="/images/things/bear.svg"
                        href="https://bear.app/"
                    />
                    <ThingCard
                        title="TablePlus"
                        background="#1D1D1D"
                        icon="/images/things/tableplus.png"
                        href="https://tableplus.com/"
                    />
                    <ThingCard
                        title="Raycast"
                        background="#FF6161"
                        icon="/images/things/raycast.svg"
                        href="https://www.raycast.com/"
                    />
                    <ThingCard
                        title="ColorSnapper"
                        background="#1D1D1D"
                        icon="/images/things/colorsnapper.png"
                        href="https://colorsnapper.com/"
                    />
                    <ThingCard
                        title="CleanShot X"
                        background="#363B45"
                        icon="/images/things/cleanshotx.png"
                        href="https://cleanshot.com/"
                    />
                    <ThingCard
                        title="1Password"
                        background="#0572EC"
                        icon="/images/things/1password.png"
                        href="https://1password.com/"
                    />
                    <ThingCard
                        title="Magnet"
                        background="#1771EF"
                        icon="/images/things/magnet.png"
                        href="https://magnet.crowdcafe.com/"
                    />
                    <ThingCard
                        title="Espanso"
                        background="#1D1D1D"
                        icon="/images/things/espanso.png"
                        href="https://espanso.org/"
                    />
                </div>

                <h4 className="border-b border-gray-800 text-lg font-bold text-gray-400 pb-3 mb-4">
                    Services
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-4 mb-10">
                    <ThingCard
                        title="WordPress"
                        background="#0073AA"
                        icon="/images/things/wordpress.svg"
                        href="https://wordpress.org/"
                    />
                    <ThingCard
                        title="Healthchecks"
                        background="#22BC66"
                        icon="/images/things/healthchecks.svg"
                        href="https://healthchecks.io/"
                    />
                    <ThingCard
                        title="Plausible"
                        background="#4354C7"
                        icon="/images/things/plausible.svg"
                        href="https://plausible.io/"
                    />
                    <ThingCard
                        title="Pushover"
                        background="#40A6EB"
                        icon="/images/things/pushover.png"
                        href="https://pushover.net/"
                    />
                </div>

                <h4 className="border-b border-gray-800 text-lg font-bold text-gray-400 pb-3 mb-4">
                    Games
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-4 mb-10">
                    <ThingCard
                        title="Warzone"
                        background="#705F30"
                        icon="/images/things/warzone.svg"
                        href="https://www.callofduty.com/content/atvi/callofduty/warzone/web/"
                    />
                    <ThingCard
                        title="Commandos"
                        background="#705F30"
                        icon="/images/things/commandos.png"
                        href="https://en.wikipedia.org/wiki/Commandos:_Behind_Enemy_Lines"
                    />
                    <ThingCard
                        title="Age of Empires II"
                        background="#8D733F"
                        icon="/images/things/ageofempires.png"
                        href=""
                    />
                </div>
            </div>

            <Footer />
        </div>
    );
}
