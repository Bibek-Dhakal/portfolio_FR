import type {Metadata} from "next";
import {IBM_Plex_Sans, IBM_Plex_Serif} from "next/font/google";
import Link from "next/link";
import "./globals.css";
import {links, mailto, nav, site} from "@/lib/site-config";
import {FileText, Mail} from "lucide-react";
import {Github, Linkedin} from "@/components/icons";

const plexSans = IBM_Plex_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
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

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${plexSans.variable} ${plexSerif.variable} h-full scroll-smooth`}
              data-scroll-behavior="smooth">
        <body
            className="min-h-full flex flex-col font-body bg-bg text-text-main antialiased selection:bg-accent selection:text-bg">
        <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-xl">
            <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
                <Link href="/" className="group flex items-center gap-3" aria-label="Home">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        className="h-9 w-9 transition-transform duration-300 group-hover:scale-105"
                    >
                        <rect width="256" height="256" rx="48" fill="#18181b" stroke="#10b981" strokeWidth="16"/>
                        <text x="128" y="148" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="bold"
                              fontSize="96" textAnchor="middle" dominantBaseline="middle" letterSpacing="-2">
                            <tspan fill="#10b981">[</tspan>
                            <tspan fill="#fafafa">BD</tspan>
                            <tspan fill="#10b981">]</tspan>
                        </text>
                    </svg>
                    <span
                        className="hidden font-heading text-[15px] font-bold tracking-widest text-text-main transition-colors group-hover:text-accent sm:block">
                BIBEK DHAKAL
              </span>
                </Link>

                <nav className="hidden sm:flex gap-8 font-heading text-sm font-medium">
                    {nav.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-text-muted transition-colors hover:text-accent"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <nav className="flex sm:hidden gap-4 font-heading text-sm font-medium">
                    {nav.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-text-muted transition-colors hover:text-accent"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-border bg-surface/30">
            <div
                className="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="font-heading text-base font-semibold text-text-main">{site.name}</p>
                    <p className="mt-1 font-body text-sm text-text-muted">{site.role}</p>
                    <p className="mt-4 font-mono text-xs text-text-muted/60">
                        &copy; {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>
                <div className="flex gap-4">
                    <a href={links.linkedin} target="_blank" rel="noreferrer"
                       className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-text-muted transition-colors hover:border-accent hover:text-accent"
                       aria-label="LinkedIn">
                        <Linkedin size={18}/>
                    </a>
                    <a href={links.github} target="_blank" rel="noreferrer"
                       className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-text-muted transition-colors hover:border-accent hover:text-accent"
                       aria-label="GitHub">
                        <Github size={18}/>
                    </a>
                    <a href={links.cv} target="_blank" rel="noreferrer"
                       className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-text-muted transition-colors hover:border-accent hover:text-accent"
                       aria-label="CV">
                        <FileText size={18}/>
                    </a>
                    <a href={mailto}
                       className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-text-muted transition-colors hover:border-accent hover:text-accent"
                       aria-label="Email">
                        <Mail size={18}/>
                    </a>
                </div>
            </div>
        </footer>
        </body>
        </html>
    );
}
