import Link from "next/link";

import Logo from "./Logo";

import { GithubIcon } from "./Icons";

export default function Footer() {
    return (
        <footer className="mt-28">
            <div className={`flex items-center justify-between mb-3`}>
                <div className="mt-0 order-1">
                    <div className="text-left text-xs text-gray-400 flex items-center">
                        <Link href="/">
                            <a
                                aria-label="Nico Andrade"
                                className="text-white opacity-30 hover:opacity-100"
                            >
                                <Logo className="h-9 w-auto" />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <div className="py-3 border-t border-gray-800 flex justify-between sm:items-center">
                    <div className="flex justify-center space-x-6 sm:order-2 text-sm">
                        <span>2022</span>
                        <span>Nico Andrade</span>
                    </div>
                    <div className="sm:order-2 flex items-center text-sm">
                        This site is available on{" "}
                        <a
                            href=""
                            rel="noopener"
                            target="_blank"
                            className="hover:text-white"
                        >
                            <GithubIcon className="w-5 h-5 ml-2 mb-px" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
