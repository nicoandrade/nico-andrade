import { Dribble } from "@/components/icons/dribbble";
import { Email } from "@/components/icons/email";
import { GitHub } from "@/components/icons/github";
import { Instagram } from "@/components/icons/instagram";
import { Spotify } from "@/components/icons/spotify";
import { X } from "@/components/icons/x";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

function getIcon(url: string) {
    if (url.includes("x.com")) {
        return <X />;
    }
    if (url.includes("github.com")) {
        return <GitHub />;
    }
    if (url.includes("dribbble.com")) {
        return <Dribble />;
    }
    if (url.includes("instagram.com")) {
        return <Instagram />;
    }
    if (url.includes("spotify.com")) {
        return <Spotify />;
    }
    if (url.includes("mailto:")) {
        return <Email />;
    }
    return null;
}

export function SocialIcons() {
    const links = Object.values(siteConfig.links);

    return (
        <div className="flex flex-wrap justify-between space-x-0 *:rounded-full *:text-gray-400 sm:justify-start sm:space-x-7 dark:*:text-gray-600 [&_a]:hover:text-gray-700 dark:[&_a]:hover:text-gray-300">
            {links.map((url) => (
                <Button asChild key={url} size="icon-2xl" variant="ghost">
                    <a
                        aria-label={url}
                        data-s-event={`Social: ${url.split("://")[1]}`}
                        href={url}
                        rel="noreferrer"
                        target="_blank"
                    >
                        {getIcon(url)}
                    </a>
                </Button>
            ))}
        </div>
    );
}
