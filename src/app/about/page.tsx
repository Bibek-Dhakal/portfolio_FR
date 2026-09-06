import type {Metadata} from "next";
import Image from "next/image";
import {about} from "@/lib/site-config";
import {Box, Check, Terminal} from "lucide-react";

export const metadata: Metadata = {
    title: "About — Bibek Dhakal",
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
                    <p className="mt-4 max-w-xl font-body text-lg leading-relaxed text-text-muted">
                        {about.credentials.scope}
                    </p>
                    <div
                        className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 font-heading text-sm font-semibold text-text-main">
                        <span className="h-2 w-2 rounded-full bg-accent animate-pulse"/>
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

            <div className="mt-16 grid gap-12 border-t border-border pt-16 md:grid-cols-2">
                <div className="space-y-12">
                    <h2 className="flex items-center gap-2 font-heading text-xl font-bold text-text-main">
                        <Terminal className="text-accent"/> Philosophy
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
                        <ul className="flex flex-wrap gap-3">
                            {about.toolkit.map((tool) => (
                                <li
                                    key={tool}
                                    className="flex items-center gap-2 rounded-lg border border-border bg-bg px-3 py-2 font-heading text-sm text-text-main"
                                >
                                    <Check size={14} className="text-accent"/>
                                    {tool}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
