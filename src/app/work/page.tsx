import type {Metadata} from "next";
import Image from "next/image";
import {caseStudies, links, projects} from "@/lib/site-config";
import {
    AlertTriangle,
    Beaker,
    CheckCircle2,
    ChevronRight,
    ExternalLink,
    FileText,
    ShieldAlert,
    XCircle,
} from "lucide-react";
import {Github} from "@/components/icons";

export const metadata: Metadata = {
    title: "Work — Bibek Dhakal",
    description:
        "Case studies and projects in applied ML: leakage-safe evaluation, MLOps pipelines, LLM inference, and from-scratch implementations.",
};

function StackChips({items}: { items: string[] }) {
    return (
        <ul className="flex flex-wrap gap-2">
            {items.map((t) => (
                <li
                    key={t}
                    className="rounded border border-border bg-bg px-2 py-0.5 font-heading text-xs text-text-muted"
                >
                    {t}
                </li>
            ))}
        </ul>
    );
}

export default function WorkPage() {
    return (
        <div className="mx-auto max-w-4xl px-6 py-20 animate-fade-in-up">
            <div className="mb-16">
                <h1 className="font-heading text-3xl font-bold tracking-tight text-text-main sm:text-4xl">
                    Work &amp; Case Studies
                </h1>
                <p className="mt-4 max-w-2xl font-body text-lg text-text-muted">
                    Each case study covers the problem, what I actually decided, and the result, including the
                    results I didn&#39;t expect. Smaller projects follow below.
                </p>
            </div>

            <div className="flex flex-col gap-16">
                {caseStudies.map((study) => (
                    <article
                        key={study.slug}
                        className="group relative overflow-hidden rounded-2xl border border-border bg-surface/40 transition-colors hover:border-accent/40"
                    >
                        <div className="h-1 w-full bg-gradient-to-r from-accent/50 to-transparent"/>

                        <div className="p-8 sm:p-10">
                            <div
                                className="mb-4 inline-flex items-center gap-2 rounded border border-border bg-bg px-2.5 py-1 font-heading text-xs font-semibold uppercase tracking-widest text-accent">
                                <CheckCircle2 size={12}/>
                                Case Study
                            </div>

                            <h2 className="font-heading text-2xl font-bold text-text-main sm:text-3xl">
                                {study.title}
                            </h2>
                            <div className="mt-4">
                                <StackChips items={study.stack}/>
                            </div>

                            <div className="mt-10 grid gap-10 md:grid-cols-12">
                                <div className="space-y-8 md:col-span-7">
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

                                        {study.resultsTable && (
                                            <div className="mt-5">
                                                <div className="overflow-x-auto rounded-xl border border-border">
                                                    <table className="w-full text-left font-heading text-sm">
                                                        <thead
                                                            className="bg-surface/60 text-xs uppercase tracking-wider text-text-muted">
                                                        <tr>
                                                            {study.resultsTable.columns.map((c) => (
                                                                <th key={c} className="px-4 py-2.5 font-semibold">
                                                                    {c}
                                                                </th>
                                                            ))}
                                                        </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-border">
                                                        {study.resultsTable.rows.map((row, i) => (
                                                            <tr
                                                                key={row[0]}
                                                                className={
                                                                    i === study.resultsTable?.highlightRow
                                                                        ? "bg-accent/10 text-text-main"
                                                                        : "text-text-muted"
                                                                }
                                                            >
                                                                {row.map((cell, j) => (
                                                                    <td
                                                                        key={j}
                                                                        className={`px-4 py-2.5 ${
                                                                            i === study.resultsTable?.highlightRow
                                                                                ? "font-semibold"
                                                                                : ""
                                                                        }`}
                                                                    >
                                                                        {cell}
                                                                    </td>
                                                                ))}
                                                            </tr>
                                                        ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <p className="mt-2 font-body text-xs text-text-muted">
                                                    {study.resultsTable.caption}
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    {study.limitations && (
                                        <div>
                                            <h3 className="flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wider text-text-main">
                                                <ShieldAlert size={16} className="text-accent"/>
                                                Known limitations
                                            </h3>
                                            <ul className="mt-3 space-y-2">
                                                {study.limitations.map((l) => (
                                                    <li
                                                        key={l}
                                                        className="relative pl-4 font-body text-sm leading-relaxed text-text-muted"
                                                    >
                                                        <span
                                                            className="absolute left-0 top-2 h-1 w-1 rounded-full bg-accent"/>
                                                        {l}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {study.guardrails && (
                                        <div>
                                            <h3 className="flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wider text-text-main">
                                                <XCircle size={16} className="text-accent"/>
                                                Guardrails
                                            </h3>
                                            <ul className="mt-3 space-y-2">
                                                {study.guardrails.map((g) => (
                                                    <li
                                                        key={g}
                                                        className="relative pl-4 font-body text-sm leading-relaxed text-text-muted"
                                                    >
                                                        <span
                                                            className="absolute left-0 top-2 h-1 w-1 rounded-full bg-accent"/>
                                                        {g}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    <div>
                                        <h3 className="flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wider text-text-main">
                                            <ChevronRight size={16} className="text-accent"/>
                                            Next time
                                        </h3>
                                        <p className="mt-3 font-body text-base leading-relaxed text-text-muted">
                                            {study.nextTime}
                                        </p>
                                    </div>

                                    {(study.paperUrl || study.repoUrl) && (
                                        <div className="flex flex-wrap gap-4 pt-4">
                                            {study.paperUrl && (
                                                <a
                                                    href={study.paperUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 font-heading text-sm font-semibold text-bg transition-all hover:bg-accent/90"
                                                >
                                                    <FileText size={16}/> Read Research Paper
                                                </a>
                                            )}
                                            {study.repoUrl && (
                                                <a
                                                    href={study.repoUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 rounded-lg border border-border bg-bg px-5 py-2.5 font-heading text-sm font-medium text-text-main transition-colors hover:border-accent hover:text-accent"
                                                >
                                                    <Github size={16}/> View Codebase
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-8 md:col-span-5">
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
                                        <div className="rounded-xl border border-accent/30 bg-accent/10 p-5">
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
            </div>

            {/* More projects */}
            <div className="mt-24">
                <h2 className="font-heading text-2xl font-bold text-text-main">More projects</h2>
                <p className="mt-3 max-w-2xl font-body text-base text-text-muted">
                    Systems and from-scratch implementations. Where a project is a learning exercise, I say so.
                </p>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                    {projects.map((p) => (
                        <article
                            key={p.slug}
                            className="flex flex-col rounded-2xl border border-border bg-surface/30 p-6 transition-colors hover:border-accent/40"
                        >
                            <h3 className="font-heading text-lg font-semibold text-text-main">{p.title}</h3>
                            <p className="mt-1 font-body text-sm text-text-muted">{p.tagline}</p>

                            <ul className="mt-4 flex-1 space-y-2">
                                {p.highlights.map((h) => (
                                    <li key={h}
                                        className="relative pl-4 font-body text-sm leading-relaxed text-text-muted">
                                        <span className="absolute left-0 top-2 h-1 w-1 rounded-full bg-accent"/>
                                        {h}
                                    </li>
                                ))}
                            </ul>

                            {p.scope && (
                                <p className="mt-4 rounded-lg border border-border bg-bg p-3 font-body text-xs leading-relaxed text-text-muted">
                                    <span className="font-heading font-semibold text-text-main">Scope: </span>
                                    {p.scope}
                                </p>
                            )}

                            <div className="mt-4">
                                <StackChips items={p.stack}/>
                            </div>

                            {p.links.length > 0 && (
                                <div className="mt-5 flex flex-wrap gap-3">
                                    {p.links.map((l) => (
                                        <a
                                            key={l.url}
                                            href={l.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 font-heading text-sm font-medium text-accent transition-colors hover:text-text-main"
                                        >
                                            <ExternalLink size={14}/> {l.label}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </article>
                    ))}
                </div>
            </div>

            <div
                className="mt-16 flex flex-col gap-4 rounded-xl border border-border bg-surface/30 p-6 sm:flex-row sm:items-center sm:justify-between sm:px-10">
                <p className="font-body text-base text-text-muted">All code is public on GitHub.</p>
                <a
                    href={links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-bg px-4 py-2 font-heading text-sm font-medium text-text-main transition-colors hover:border-accent hover:text-accent"
                >
                    <Github size={16}/> View Profile
                </a>
            </div>
        </div>
    );
}
