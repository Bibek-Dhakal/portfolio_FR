import Image from "next/image";
import Link from "next/link";
import {links, site} from "@/lib/site-config";
import {ArrowRight} from "lucide-react";
import {Github} from "@/components/icons";

export default function Home() {
    return (
        <>
            <section className="relative isolate flex min-h-[75vh] items-center overflow-hidden border-b border-border">
                {/* Background texture with blend mode */}
                <div className="absolute inset-0 opacity-20 mix-blend-screen">
                    <Image
                        src="/images/hero-texture.png"
                        alt=""
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-bg/80 to-bg"/>

                {/* Decorative glowing blob */}
                <div
                    className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]"/>

                <div className="relative mx-auto w-full max-w-4xl px-6 py-24">
                    <div className="animate-fade-in-up" style={{animationDelay: '0ms'}}>
                        <div
                            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-3 py-1.5 font-heading text-xs font-semibold uppercase tracking-widest text-accent backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span
                    className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
              </span>
                            Available for roles
                        </div>
                    </div>

                    <h1 className="animate-fade-in-up font-heading text-4xl font-bold leading-[1.15] tracking-tight text-text-main sm:text-5xl md:text-6xl"
                        style={{animationDelay: '100ms'}}>
                        I build decision-support ML systems that turn messy production data into <span
                        className="text-glow text-accent">prioritized human action</span>.
                    </h1>

                    <p className="animate-fade-in-up mt-6 max-w-2xl font-body text-lg leading-relaxed text-text-muted sm:text-xl"
                       style={{animationDelay: '200ms'}}>
                        {site.heroSupport}
                    </p>

                    <div className="animate-fade-in-up mt-10 flex flex-wrap gap-4" style={{animationDelay: '300ms'}}>
                        <Link
                            href="/work"
                            className="group flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-heading text-sm font-semibold text-bg transition-all hover:bg-accent/90 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                        >
                            Read the case study
                            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1"/>
                        </Link>
                        <a
                            href={links.github}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 rounded-lg border border-border bg-surface/50 px-6 py-3 font-heading text-sm font-medium text-text-main transition-colors hover:border-accent hover:bg-surface backdrop-blur-sm"
                        >
                            <Github size={16}/>
                            View GitHub
                        </a>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-4xl px-6 py-24">
                <div className="animate-fade-in-up" style={{animationDelay: '400ms'}}>
                    <div
                        className="mb-4 flex items-center gap-3 font-heading text-xs font-semibold uppercase tracking-widest text-accent">
                        <span className="h-px w-8 bg-accent"/>
                        {site.role}
                    </div>
                    <p className="max-w-3xl font-body text-xl leading-relaxed text-text-main sm:text-2xl">
                        I work through 70-million-row production datasets, catch data
                        leakage before it inflates a result, and hold every model to a
                        human baseline before it ships. The FlyRank case study below walks
                        through one of those calls in full — including the one that lost.
                    </p>
                    <div className="mt-8">
                        <Link href="/work"
                              className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-accent transition-colors hover:text-text-main">
                            Explore my work <ArrowRight size={16}/>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
