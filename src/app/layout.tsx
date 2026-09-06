import type {Metadata} from "next";
import {IBM_Plex_Sans, IBM_Plex_Serif} from "next/font/google";
import Link from "next/link";
import "./globals.css";
import {links, mailto, nav, site} from "@/lib/site-config";

const plexSans = IBM_Plex_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-plex-sans",
});

const plexSerif = IBM_Plex_Serif({
    subsets: ["latin"],
    weight: ["400", "500"],
    variable: "--font-plex-serif",
});

export const metadata: Metadata = {
    title: `${site.name} — ${site.role}`,
    description: site.claim,
};

export default function RootLayout({children}: LayoutProps<"/">) {
    return (
        <html
            lang="en"
            className={`${plexSans.variable} ${plexSerif.variable} h-full`}
        >
        <body className="min-h-full flex flex-col font-body text-ink bg-paper antialiased">
        <header className="border-b border-main/15">
            <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
                <Link
                    href="/"
                    className="font-heading text-[15px] font-semibold tracking-tight text-main"
                >
                    [ BD ]
                </Link>
                <nav className="flex gap-6 font-heading text-[15px]">
                    {nav.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-ink/80 transition-colors hover:text-main"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-main/15">
            <div
                className="mx-auto flex max-w-3xl flex-col gap-3 px-6 py-8 text-[14px] text-ink/70 sm:flex-row sm:items-center sm:justify-between">
                <p>&copy; {new Date().getFullYear()} {site.name}</p>
                <div className="flex flex-wrap gap-x-5 gap-y-2">
                    <a
                        href={links.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-main"
                    >
                        LinkedIn
                    </a>
                    <a
                        href={links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-main"
                    >
                        GitHub
                    </a>
                    <a
                        href={links.cv}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-main"
                    >
                        CV
                    </a>
                    <a href={mailto} className="hover:text-main">
                        Email
                    </a>
                </div>
            </div>
        </footer>
        </body>
        </html>
    );
}
