import type {Metadata} from "next";
import {Award, Briefcase, ExternalLink, GraduationCap} from "lucide-react";
import {certifications, education, experience, links} from "@/lib/site-config";

export const metadata: Metadata = {
    title: "Experience — Bibek Dhakal",
    description:
        "Experience, education, and verifiable certifications: ML internship, ML apprenticeship, and software engineering roles.",
};

export default function ExperiencePage() {
    return (
        <div className="mx-auto max-w-4xl px-6 py-20 animate-fade-in-up">
            <h1 className="font-heading text-3xl font-bold tracking-tight text-text-main sm:text-4xl">
                Experience
            </h1>
            <p className="mt-4 max-w-2xl font-body text-lg text-text-muted">
                A three-month ML internship, an ML apprenticeship, and software engineering work that came
                before them. Credentials link to their public verification pages.
            </p>

            <div className="mt-16 space-y-16">
                {experience.map((group) => (
                    <section key={group.group}>
                        <h2 className="mb-8 flex items-center gap-2 font-heading text-xl font-bold text-text-main">
                            <Briefcase className="text-accent" size={20}/> {group.group}
                        </h2>
                        <div className="space-y-8 border-l border-border pl-6">
                            {group.roles.map((r) => (
                                <div key={r.company + r.period} className="relative">
                                    <span
                                        className="absolute -left-[29px] top-2 h-2 w-2 rounded-full bg-accent"/>
                                    <div
                                        className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                                        <h3 className="font-heading text-lg font-semibold text-text-main">
                                            {r.title}{" "}
                                            <span className="font-normal text-text-muted">· {r.company}</span>
                                        </h3>
                                        <p className="font-mono text-xs text-text-muted">{r.period}</p>
                                    </div>
                                    <p className="mt-1 font-heading text-xs font-semibold uppercase tracking-wider text-accent">
                                        {r.kind}
                                    </p>
                                    <ul className="mt-3 space-y-2">
                                        {r.bullets.map((b) => (
                                            <li key={b}
                                                className="font-body text-sm leading-relaxed text-text-muted">
                                                {b}
                                            </li>
                                        ))}
                                    </ul>
                                    {r.href && (
                                        <a
                                            href={r.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-3 inline-flex items-center gap-1.5 font-heading text-sm font-medium text-accent transition-colors hover:text-text-main"
                                        >
                                            <ExternalLink size={14}/> Verify credential
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                ))}

                <section>
                    <h2 className="mb-6 flex items-center gap-2 font-heading text-xl font-bold text-text-main">
                        <GraduationCap className="text-accent" size={20}/> Education
                    </h2>
                    <div className="rounded-2xl border border-border bg-surface/30 p-6">
                        <h3 className="font-heading text-lg font-semibold text-text-main">{education.degree}</h3>
                        <p className="mt-1 font-body text-sm text-text-muted">
                            {education.school} · {education.university} · {education.period}
                        </p>
                        <p className="mt-3 font-body text-sm leading-relaxed text-text-muted">{education.note}</p>
                    </div>
                </section>

                <section>
                    <h2 className="mb-6 flex items-center gap-2 font-heading text-xl font-bold text-text-main">
                        <Award className="text-accent" size={20}/> Certifications
                    </h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        {certifications.map((g) => (
                            <div key={g.group} className="rounded-2xl border border-border bg-surface/30 p-6">
                                <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-text-main">
                                    {g.group}
                                </h3>
                                <ul className="mt-4 space-y-3">
                                    {g.items.map((c) => (
                                        <li key={c.name} className="font-body text-sm text-text-muted">
                                            {c.href ? (
                                                <a
                                                    href={c.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-text-main transition-colors hover:text-accent"
                                                >
                                                    {c.name}
                                                </a>
                                            ) : (
                                                <span className="text-text-main">{c.name}</span>
                                            )}
                                            <span> · {c.issuer}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <p className="mt-4 font-body text-xs text-text-muted">
                        Kaggle certificates are listed on my{" "}
                        <a href={links.kaggle} target="_blank" rel="noopener noreferrer"
                           className="text-accent hover:underline">
                            Kaggle profile
                        </a>
                        .
                    </p>
                </section>
            </div>
        </div>
    );
}
