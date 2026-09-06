import type {Metadata} from "next";
import Image from "next/image";
import {caseStudies, links} from "@/lib/site-config";
import {AlertTriangle, Beaker, CheckCircle2, ChevronRight, Code2, XCircle} from "lucide-react";
import {Github} from "@/components/icons";

export const metadata: Metadata = {
    title: "Work — Bibek Dhakal",
};

export default function WorkPage() {
    const live = caseStudies.filter((c) => c.status === "live");
    const upcoming = caseStudies.filter((c) => c.status === "in-progress");

    return (
        <div className="mx-auto max-w-4xl px-6 py-20 animate-fade-in-up">
            <div className="mb-16">
                <h1 className="font-heading text-3xl font-bold tracking-tight text-text-main sm:text-4xl">
                    Work &amp; Case Studies
                </h1>
                <p className="mt-4 max-w-2xl font-body text-lg text-text-muted">
                    Each case study covers the problem, what I actually decided, and the
                    result — including the results I didn&#39;t expect.
                </p>
            </div>

            <div className="flex flex-col gap-16">
                {live.map((study) => (
                    <article
                        key={study.slug}
                        className="group relative overflow-hidden rounded-2xl border border-border bg-surface/40 transition-colors hover:border-accent/40"
                    >
                        {/* Top accent bar */}
                        <div className="h-1 w-full bg-gradient-to-r from-accent/50 to-transparent"/>

                        <div className="p-8 sm:p-10">
                            <div
                                className="mb-4 inline-flex items-center gap-2 rounded border border-border bg-bg px-2.5 py-1 font-heading text-xs font-semibold uppercase tracking-widest text-accent">
                                <CheckCircle2 size={12}/>
                                Live Case Study
                            </div>

                            <h2 className="font-heading text-2xl font-bold text-text-main sm:text-3xl">
                                {study.title}
                            </h2>

                            <div className="mt-10 grid gap-10 md:grid-cols-12">
                                <div className="md:col-span-7 space-y-8">
                                    <div>
                                        <h3 className="flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wider text-text-main">
                                            <AlertTriangle size={16} className="text-accent"/>
                                            The Problem
                                        </h3>
                                        <p className="mt-3 font-body text-base leading-relaxed text-text-muted">
                                            {study.problem}
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wider text-text-main">
                                            <Beaker size={16} className="text-accent"/>
                                            What I did
                                        </h3>
                                        <p className="mt-3 font-body text-base leading-relaxed text-text-muted">
                                            {study.approach}
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wider text-text-main">
                                            <CheckCircle2 size={16} className="text-accent"/>
                                            What came of it
                                        </h3>
                                        <p className="mt-3 font-body text-base leading-relaxed text-text-muted">
                                            {study.result}
                                        </p>
                                    </div>

                                    {study.nextTime && (
                                        <div>
                                            <h3 className="flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wider text-text-main">
                                                <ChevronRight size={16} className="text-accent"/>
                                                Next time
                                            </h3>
                                            <p className="mt-3 font-body text-base leading-relaxed text-text-muted">
                                                {study.nextTime}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                <div className="md:col-span-5 space-y-8">
                                    {study.image && (
                                        <figure className="overflow-hidden rounded-xl border border-border bg-bg">
                                            <div className="relative aspect-[4/3] w-full">
                                                <Image
                                                    src={study.image.src}
                                                    alt={study.image.alt}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, 400px"
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            </div>
                                            <figcaption
                                                className="border-t border-border bg-surface/50 p-3 font-body text-xs text-text-muted">
                                                {study.image.caption}
                                            </figcaption>
                                        </figure>
                                    )}

                                    {study.tradeoff && (
                                        <div className="rounded-xl border border-accent/20 bg-accent/5 p-5">
                                            <h3 className="flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wider text-accent">
                                                <XCircle size={14}/>
                                                {study.tradeoff.label}
                                            </h3>
                                            <p className="mt-2 font-body text-sm leading-relaxed text-text-muted">
                                                {study.tradeoff.body}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </article>
                ))}

                {upcoming.map((study) => (
                    <article
                        key={study.slug}
                        className="rounded-2xl border border-dashed border-border bg-surface/20 p-8 sm:p-10"
                    >
                        <div
                            className="mb-4 inline-flex items-center gap-2 rounded border border-border bg-surface px-2.5 py-1 font-heading text-xs font-semibold uppercase tracking-widest text-text-muted">
                            <Code2 size={12}/>
                            In Progress
                        </div>
                        <h2 className="font-heading text-xl font-bold text-text-main/80 sm:text-2xl">
                            {study.title}
                        </h2>
                        <p className="mt-3 font-body text-base leading-relaxed text-text-muted">
                            {study.problem}
                        </p>
                    </article>
                ))}
            </div>

            <div
                className="mt-16 flex items-center justify-between rounded-xl border border-border bg-surface/30 p-6 sm:px-10">
                <p className="font-body text-base text-text-muted">
                    More work, in progress, on GitHub.
                </p>
                <a
                    href={links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-bg px-4 py-2 font-heading text-sm font-medium text-text-main border border-border transition-colors hover:border-accent hover:text-accent"
                >
                    <Github size={16}/> View Profile
                </a>
            </div>
        </div>
    );
}
