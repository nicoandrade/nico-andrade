import Link from "next/link";

import { GithubIcon } from "@/components/Icons";
import Logo from "@/components/Logo";

export default function Footer() {
    return (
        <footer className="mt-28">
            <div className={`mb-3 flex items-center justify-between`}>
                <div className="order-1 mt-0">
                    <div className="flex items-center text-left text-xs text-gray-400">
                        <Link
                            href="/"
                            aria-label="Nico Andrade"
                            className="text-white opacity-30 hover:opacity-100"
                        >
                            <Logo className="h-9 w-auto" />
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex justify-between border-t border-gray-800 py-3 sm:items-center">
                    <div className="flex justify-center space-x-6 text-sm sm:order-2">
                        <span>2022</span>
                        <span>Nico Andrade</span>
                    </div>
                    <div className="flex items-center text-sm sm:order-2">
                        This site is available on{" "}
                        <a
                            href="https://github.com/nicoandrade/nico-andrade"
                            rel="noreferrer"
                            target="_blank"
                            className="hover:text-white"
                            aria-label="GitHub"
                        >
                            <GithubIcon className="mb-px ml-2 h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
