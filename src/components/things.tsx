import { SectionTitle } from "@/components/section-title";
import { ThingCard } from "@/components/thing-card";

export function Things() {
    return (
        <div className="flex flex-col gap-10">
            <SectionTitle title="Things that I like" />
            <div className="flex flex-col gap-5">
                <h3 className="border-muted border-b pb-3 font-bold text-lg">Development</h3>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 xl:grid-cols-5">
                    <ThingCard
                        color="#000000"
                        href="https://nextjs.org/"
                        icon="/images/things/nextjs.svg"
                        title="Next.js"
                    />
                    <ThingCard
                        color="#38BDF8"
                        href="https://tailwindcss.com/"
                        icon="/images/things/tailwindcss.svg"
                        title="Tailwind CSS"
                    />
                    <ThingCard
                        color="#1B1913"
                        href="https://cursor.com/"
                        icon="/images/things/cursor.svg"
                        title="Cursor"
                    />
                    <ThingCard
                        color="#3551F3"
                        href="https://ghostty.org/"
                        icon="/images/things/ghostty.svg"
                        title="Ghostty"
                    />
                    <ThingCard
                        color="#23765F"
                        href="https://turso.tech/"
                        icon="/images/things/turso.svg"
                        title="Turso"
                    />
                    <ThingCard
                        color="#000000"
                        href="https://vercel.com/"
                        icon="/images/things/vercel.svg"
                        title="Vercel"
                    />
                    <ThingCard
                        color="#E89B2F"
                        href="https://www.usebruno.com/"
                        icon="/images/things/bruno.svg"
                        title="Bruno"
                    />
                    <ThingCard
                        color="#0969D9"
                        href="https://github.com/"
                        icon="/images/things/github.svg"
                        title="GitHub"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <h3 className="border-muted border-b pb-3 font-bold text-lg">Apps</h3>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 xl:grid-cols-5">
                    <ThingCard
                        color="#2C2C2C"
                        href="https://figma.com/"
                        icon="/images/things/figma.svg"
                        title="Figma"
                    />

                    <ThingCard
                        color="#DD4C4F"
                        href="https://bear.app/"
                        icon="/images/things/bear.svg"
                        title="Bear"
                    />
                    <ThingCard
                        color="#1D1D1D"
                        href="https://tableplus.com/"
                        icon="/images/things/tableplus.png"
                        title="TablePlus"
                    />
                    <ThingCard
                        color="#FF6161"
                        href="https://www.raycast.com/"
                        icon="/images/things/raycast.svg"
                        title="Raycast"
                    />
                    <ThingCard
                        color="#EC456C"
                        href="https://colorslurp.com/"
                        icon="/images/things/colorslurp.svg"
                        title="ColorSlurp"
                    />
                    <ThingCard
                        color="#363B45"
                        href="https://cleanshot.com/"
                        icon="/images/things/cleanshotx.png"
                        title="CleanShot X"
                    />
                    <ThingCard
                        color="#1771EF"
                        href="https://magnet.crowdcafe.com/"
                        icon="/images/things/magnet.png"
                        title="Magnet"
                    />
                    <ThingCard
                        color="#6AA2FB"
                        href="https://culturedcode.com/things/"
                        icon="/images/things/things.webp"
                        title="Things"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <h3 className="border-muted border-b pb-3 font-bold text-lg">Services</h3>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 xl:grid-cols-5">
                    <ThingCard
                        color="#0073AA"
                        href="https://wordpress.org/"
                        icon="/images/things/wordpress.svg"
                        title="WordPress"
                    />
                    <ThingCard
                        color="#22BC66"
                        href="https://healthchecks.io/"
                        icon="/images/things/healthchecks.svg"
                        title="Healthchecks"
                    />
                    <ThingCard
                        color="#141924"
                        href="https://onedollarstats.com/"
                        icon="/images/things/onedollarstats.svg"
                        title="One Dollar Stats"
                    />
                    <ThingCard
                        color="#40A6EB"
                        href="https://pushover.net/"
                        icon="/images/things/pushover.png"
                        title="Pushover"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <h3 className="border-muted border-b pb-3 font-bold text-lg">Games</h3>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 xl:grid-cols-5">
                    <ThingCard
                        color="#705F30"
                        href="https://www.callofduty.com/content/atvi/callofduty/warzone/web/"
                        icon="/images/things/warzone.svg"
                        title="Warzone"
                    />
                    <ThingCard
                        color="#705F30"
                        href="https://en.wikipedia.org/wiki/Commandos:_Behind_Enemy_Lines"
                        icon="/images/things/commandos.png"
                        title="Commandos"
                    />
                    <ThingCard
                        color="#8D733F"
                        href="https://www.ageofempires.com/games/aoeiide/"
                        icon="/images/things/ageofempires.png"
                        title="Age of Empires II"
                    />
                </div>
            </div>
        </div>
    );
}
