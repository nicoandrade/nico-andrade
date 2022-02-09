import {
    InstagramIcon,
    TwitterIcon,
    DribbbleIcon,
    EmailIcon,
    GithubIcon,
    SpotifyIcon,
} from "/components/Icons";

export default function SocialIcons() {
    return (
        <div className="flex flex-wrap justify-between sm:justify-start space-x-0 sm:space-x-7">
            <SocialLink href="https://instagram.com/nicoandrade" />
            <SocialLink href="https://twitter.com/nicoandrade" />
            <SocialLink href="https://github.com/nicoandrade" />
            <SocialLink href="https://dribbble.com/NicoAndrade" />
            <SocialLink href="https://open.spotify.com/user/elquemero" />
            <SocialLink href="mailto:hi@nicoandrade.com" />
        </div>
    );
}

const SocialLink = ({ href }) => (
    <a
        href={href}
        rel="noreferrer"
        target="_blank"
        className="text-gray-600 hover:bg-gray-700 hover:text-white p-3 rounded-full transition-colors group"
        aria-label={href}
    >
        {(() => {
            if (href.includes("instagram"))
                return <InstagramIcon className="w-8 h-8" />;
            if (href.includes("twitter"))
                return <TwitterIcon className="w-8 h-8" />;
            if (href.includes("dribbble"))
                return <DribbbleIcon className="w-8 h-8" />;
            if (href.includes("mailto"))
                return <EmailIcon className="w-8 h-8" />;
            if (href.includes("github"))
                return <GithubIcon className="w-8 h-8" />;
            if (href.includes("spotify"))
                return <SpotifyIcon className="w-8 h-8" />;
        })()}
    </a>
);
