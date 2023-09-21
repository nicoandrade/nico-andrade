import {
    DribbbleIcon,
    EmailIcon,
    GithubIcon,
    InstagramIcon,
    SpotifyIcon,
    TwitterIcon,
} from "@/components/Icons";

export default function SocialIcons() {
    return (
        <div className="flex flex-wrap justify-between space-x-0 sm:justify-start sm:space-x-7">
            <SocialLink href="https://instagram.com/nicoandrade" />
            <SocialLink href="https://twitter.com/nicoandrade" />
            <SocialLink href="https://github.com/nicoandrade" />
            <SocialLink href="https://dribbble.com/NicoAndrade" />
            <SocialLink href="https://open.spotify.com/user/elquemero" />
            <SocialLink href="mailto:hi@nicoandrade.com" />
        </div>
    );
}

const SocialLink = ({ href }: { href: string }) => (
    <a
        href={href}
        rel="noreferrer"
        target="_blank"
        className="group rounded-full p-3 text-gray-600 transition-colors hover:bg-gray-700 hover:text-white"
        aria-label={href}
    >
        {(() => {
            if (href.includes("instagram")) return <InstagramIcon className="h-8 w-8" />;
            if (href.includes("twitter")) return <TwitterIcon className="h-8 w-8" />;
            if (href.includes("dribbble")) return <DribbbleIcon className="h-8 w-8" />;
            if (href.includes("mailto")) return <EmailIcon className="h-8 w-8" />;
            if (href.includes("github")) return <GithubIcon className="h-8 w-8" />;
            if (href.includes("spotify")) return <SpotifyIcon className="h-8 w-8" />;
        })()}
    </a>
);
