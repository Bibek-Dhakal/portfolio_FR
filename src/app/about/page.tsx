import type {Metadata} from "next";
import Image from "next/image";
import Link from "next/link";
import {about, lookingFor, pillars} from "@/lib/site-config";
import {Box, ExternalLink, Layers, Terminal} from "lucide-react";
import NameAndRole from "@/components/name-and-role";

export const metadata: Metadata = {
    title: "About — Bibek Dhakal",
    description:
        "Entry-level AI / ML engineer with a software engineering background: evaluation-first modelling, ML services, LLM fundamentals.",
};

export default function AboutPage() {
    return (
        <div className="mx-auto max-w-4xl px-6 py-20 animate-fade-in-up">
            <div
                className="mb-16 flex flex-col-reverse items-start gap-10 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex-1">
                    <h1 className="font-heading text-3xl font-bold tracking-tight text-text-main sm:text-4xl">
                        About Me
                    </h1>
                    <div className="mt-4 flex flex-wrap gap-2">
                        <NameAndRole hideRole/>
                    </div>
                    <p className="mt-4 max-w-xl font-body text-lg leading-relaxed text-text-muted">
                        {about.intro}
                    </p>
                    <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-text-muted">
                        {about.credentials.scope}
                    </p>
                    <div
                        className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 font-heading text-sm font-semibold text-text-main">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-accent"/>
                        {about.credentials.title}
                    </div>
                </div>

                <div className="relative h-32 w-32 flex-none sm:h-40 sm:w-40">
                    <div className="absolute inset-0 -m-2 rounded-full border border-border bg-surface"/>
                    <div className="absolute inset-0 -m-1 rounded-full border border-accent/30"/>
                    <Image
                        src="/images/bio-photo.png"
                        alt="Bibek Dhakal"
                        width={160}
                        height={160}
                        priority
                        className="relative h-full w-full rounded-full object-cover grayscale transition-all hover:grayscale-0"
                    />
                </div>
            </div>

            {/* What I work on */}
            <section className="border-t border-border pt-16">
                <h2 className="mb-8 flex items-center gap-2 font-heading text-xl font-bold text-text-main">
                    <Layers className="text-accent"/> What I work on
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                    {pillars.map((p) => (
                        <div key={p.title} className="rounded-2xl border border-border bg-surface/30 p-6">
                            <h3 className="font-heading text-lg font-semibold text-text-main">{p.title}</h3>
                            <p className="mt-2 font-body text-sm leading-relaxed text-text-muted">{p.summary}</p>
                            <ul className="mt-4 space-y-2">
                                {p.points.map((pt) => (
                                    <li key={pt}
                                        className="relative pl-4 font-body text-sm leading-relaxed text-text-muted">
                                        <span className="absolute left-0 top-2 h-1 w-1 rounded-full bg-accent"/>
                                        {pt}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                                {p.evidence.map((e) =>
                                    e.url.startsWith("/") ? (
                                        <Link
                                            key={e.url}
                                            href={e.url}
                                            className="inline-flex items-center gap-1.5 font-heading text-xs font-medium text-accent transition-colors hover:text-text-main"
                                        >
                                            {e.label}
                                        </Link>
                                    ) : (
                                        <a
                                            key={e.url}
                                            href={e.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 font-heading text-xs font-medium text-accent transition-colors hover:text-text-main"
                                        >
                                            <ExternalLink size={12}/> {e.label}
                                        </a>
                                    )
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div className="mt-16 grid gap-12 border-t border-border pt-16 md:grid-cols-2">
                <div>
                    <h2 className="mb-8 flex items-center gap-2 font-heading text-xl font-bold text-text-main">
                        <Terminal className="text-accent"/> How I work
                    </h2>
                    <div className="flex flex-col gap-8">
                        {about.philosophy.map((item) => (
                            <div key={item.title} className="relative pl-6">
                                <span className="absolute left-0 top-1.5 h-1.5 w-1.5 rounded-full bg-accent"/>
                                <h3 className="font-heading text-lg font-semibold text-text-main">
                                    {item.title}
                                </h3>
                                <p className="mt-2 font-body text-base leading-relaxed text-text-muted">
                                    {item.body}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <div className="rounded-2xl border border-border bg-surface/30 p-8">
                        <h2 className="mb-6 flex items-center gap-2 font-heading text-xl font-bold text-text-main">
                            <Box className="text-accent"/> Toolkit
                        </h2>
                        <div className="space-y-5">
                            {about.toolkit.map((g) => (
                                <div key={g.group}>
                                    <h3 className="font-heading text-xs font-semibold uppercase tracking-wider text-text-muted">
                                        {g.group}
                                    </h3>
                                    <ul className="mt-2 flex flex-wrap gap-2">
                                        {g.items.map((tool) => (
                                            <li
                                                key={tool}
                                                className="rounded-lg border border-border bg-bg px-2.5 py-1 font-heading text-xs text-text-main"
                                            >
                                                {tool}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-16 rounded-2xl border border-border bg-surface/30 p-8">
                <h2 className="font-heading text-xl font-bold text-text-main">Background &amp; availability</h2>
                <p className="mt-3 font-body text-base leading-relaxed text-text-muted">
                    {lookingFor.background}
                </p>
                <p className="mt-3 font-body text-base leading-relaxed text-text-muted">{about.currently}</p>
            </div>
        </div>
    );
}
