import Image from "next/image";
import Link from "next/link";
import {caseStudies, experience, links, lookingFor, pillars, site, stats,} from "@/lib/site-config";
import {ArrowRight, ExternalLink, FileText, MapPin} from "lucide-react";
import {Github} from "@/components/icons";

export default function Home() {
    const recent = experience.flatMap((g) => g.roles).slice(0, 3);

    return (
        <>
            <section className="relative isolate flex min-h-[75vh] items-center overflow-hidden border-b border-border">
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
                <div
                    className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]"/>

                <div className="relative mx-auto w-full max-w-4xl px-6 py-24">
                    <div className="animate-fade-in-up" style={{animationDelay: "0ms"}}>
                        <div className="mb-6 flex flex-wrap items-center gap-3">
                            <div
                                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-3 py-1.5 font-heading text-xs font-semibold uppercase tracking-widest text-accent backdrop-blur-sm">
                                <span className="relative flex h-2 w-2">
                                    <span
                                        className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
                                </span>
                                {site.availability}
                            </div>
                            <div
                                className="inline-flex items-center gap-1.5 font-heading text-xs font-medium text-text-muted">
                                <MapPin size={14}/> {site.location}
                            </div>
                        </div>
                    </div>

                    <h1 className="animate-fade-in-up font-heading text-4xl font-bold leading-[1.15] tracking-tight text-text-main sm:text-5xl md:text-6xl"
                        style={{animationDelay: "100ms"}}>
                        {site.headline.lead}
                        <span className="text-glow text-accent">{site.headline.highlight}</span>
                        {site.headline.tail}
                    </h1>

                    <p className="animate-fade-in-up mt-6 max-w-2xl font-body text-lg leading-relaxed text-text-muted sm:text-xl"
                       style={{animationDelay: "200ms"}}>
                        {site.heroSupport}
                    </p>

                    <div className="animate-fade-in-up mt-10 flex flex-wrap gap-4" style={{animationDelay: "300ms"}}>
                        <Link
                            href="/work"
                            className="group flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-heading text-sm font-semibold text-bg transition-all hover:bg-accent/90 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                        >
                            See my work
                            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1"/>
                        </Link>
                        {links.cv && links.cv !== "#" && (
                            <a
                                href={links.cv}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 rounded-lg border border-border bg-surface/50 px-6 py-3 font-heading text-sm font-medium text-text-main backdrop-blur-sm transition-colors hover:border-accent hover:bg-surface"
                            >
                                <FileText size={16}/>
                                Download CV
                            </a>
                        )}
                        <a
                            href={links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-lg border border-border bg-surface/50 px-6 py-3 font-heading text-sm font-medium text-text-main backdrop-blur-sm transition-colors hover:border-accent hover:bg-surface"
                        >
                            <Github size={16}/>
                            GitHub
                        </a>
                    </div>
                </div>
            </section>

            {/* Proof strip */}
            <section className="border-b border-border bg-surface/20">
                <div className="mx-auto grid max-w-4xl grid-cols-2 gap-px px-6 py-10 md:grid-cols-4 md:gap-6">
                    {stats.map((s) => (
                        <div key={s.label} className="py-2">
                            <p className="font-heading text-2xl font-bold text-accent sm:text-3xl">{s.value}</p>
                            <p className="mt-2 font-body text-sm leading-snug text-text-muted">{s.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* What I work on */}
            <section className="mx-auto max-w-4xl px-6 py-24">
                <div
                    className="mb-4 flex items-center gap-3 font-heading text-xs font-semibold uppercase tracking-widest text-accent">
                    <span className="h-px w-8 bg-accent"/>
                    What I work on
                </div>
                <p className="max-w-3xl font-body text-xl leading-relaxed text-text-main sm:text-2xl">
                    Four areas, each backed by code or a write-up you can open.
                </p>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                    {pillars.map((p) => (
                        <div
                            key={p.title}
                            className="flex flex-col rounded-2xl border border-border bg-surface/30 p-6 transition-colors hover:border-accent/40"
                        >
                            <h2 className="font-heading text-lg font-semibold text-text-main">{p.title}</h2>
                            <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-text-muted">
                                {p.summary}
                            </p>
                            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                                {p.evidence.map((e) => {
                                    const internal = e.url.startsWith("/");
                                    const cls =
                                        "inline-flex items-center gap-1.5 font-heading text-xs font-medium text-accent transition-colors hover:text-text-main";
                                    return internal ? (
                                        <Link key={e.url} href={e.url} className={cls}>
                                            <ArrowRight size={12}/> {e.label}
                                        </Link>
                                    ) : (
                                        <a
                                            key={e.url}
                                            href={e.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={cls}
                                        >
                                            <ExternalLink size={12}/> {e.label}
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Featured case studies */}
            <section className="border-y border-border bg-surface/20">
                <div className="mx-auto max-w-4xl px-6 py-24">
                    <div
                        className="mb-4 flex items-center gap-3 font-heading text-xs font-semibold uppercase tracking-widest text-accent">
                        <span className="h-px w-8 bg-accent"/>
                        Featured case studies
                    </div>
                    <p className="max-w-3xl font-body text-lg leading-relaxed text-text-muted">
                        Longer write-ups covering the problem, what I decided, the numbers, and the limits.
                    </p>

                    <div className="mt-10 grid gap-6 md:grid-cols-2">
                        {caseStudies.slice(0, 4).map((c) => (
                            <Link
                                key={c.slug}
                                href="/work"
                                className="group flex flex-col rounded-2xl border border-border bg-surface/30 p-6 transition-all hover:-translate-y-1 hover:border-accent/50 hover:bg-surface/60"
                            >
                                <h3 className="font-heading text-lg font-semibold text-text-main transition-colors group-hover:text-accent">
                                    {c.title}
                                </h3>
                                <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-text-muted">
                                    {c.summary}
                                </p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {c.stack.slice(0, 4).map((t) => (
                                        <span
                                            key={t}
                                            className="rounded border border-border bg-bg px-2 py-0.5 font-heading text-xs text-text-muted"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-8">
                        <Link href="/work"
                              className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-accent transition-colors hover:text-text-main">
                            See all projects <ArrowRight size={16}/>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Experience snapshot */}
            <section className="mx-auto max-w-4xl px-6 py-20">
                <h2 className="font-heading text-2xl font-bold text-text-main">Recent experience</h2>
                <ul className="mt-8 divide-y divide-border">
                    {recent.map((r) => (
                        <li key={r.company + r.period}
                            className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between">
                            <p className="font-heading text-base font-semibold text-text-main">
                                {r.title} <span className="font-normal text-text-muted">· {r.company}</span>
                            </p>
                            <p className="font-mono text-xs text-text-muted">{r.period}</p>
                        </li>
                    ))}
                </ul>
                <Link href="/experience"
                      className="mt-6 inline-flex items-center gap-2 font-heading text-sm font-semibold text-accent transition-colors hover:text-text-main">
                    Full experience &amp; certifications <ArrowRight size={16}/>
                </Link>
            </section>

            {/* Looking for */}
            <section className="border-t border-border bg-surface/20">
                <div className="mx-auto max-w-4xl px-6 py-24">
                    <h2 className="font-heading text-2xl font-bold text-text-main">What I&#39;m looking for</h2>
                    <ul className="mt-6 flex flex-wrap gap-3">
                        {lookingFor.roles.map((r) => (
                            <li key={r}
                                className="rounded-lg border border-border bg-surface px-3 py-2 font-heading text-sm text-text-main">
                                {r}
                            </li>
                        ))}
                    </ul>
                    <p className="mt-6 max-w-3xl font-body text-base leading-relaxed text-text-muted">
                        {lookingFor.interests}
                    </p>
                    <p className="mt-4 max-w-3xl font-body text-base leading-relaxed text-text-muted">
                        {lookingFor.background}
                    </p>
                    <Link
                        href="/contact"
                        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-heading text-sm font-semibold text-bg transition-all hover:bg-accent/90"
                    >
                        Get in touch <ArrowRight size={16}/>
                    </Link>
                </div>
            </section>
        </>
    );
}
