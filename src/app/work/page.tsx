import type {Metadata} from "next";
import Image from "next/image";
import {caseStudies, links} from "@/lib/site-config";

export const metadata: Metadata = {
    title: "Work — Bibek Dhakal",
};

export default function WorkPage() {
    const live = caseStudies.filter((c) => c.status === "live");
    const upcoming = caseStudies.filter((c) => c.status === "in-progress");

    return (
        <div className="mx-auto max-w-3xl px-6 py-20">
            <h1 className="font-heading text-[28px] font-semibold text-main">
                Work
            </h1>
            <p className="mt-3 max-w-xl font-body text-[17px] leading-relaxed">
                Each case study covers the problem, what I actually decided, and the
                result — including the results I didn&#39;t expect.
            </p>

            <div className="mt-16 flex flex-col gap-20">
                {live.map((study) => (
                    <article key={study.slug}>
                        <h2 className="font-heading text-[22px] font-semibold">
                            {study.title}
                        </h2>

                        <h3 className="mt-8 font-heading text-[13px] font-medium uppercase text-main/80">
                            The problem
                        </h3>
                        <p className="mt-2 font-body text-[17px] leading-relaxed">
                            {study.problem}
                        </p>

                        <h3 className="mt-8 font-heading text-[13px] font-medium uppercase text-main/80">
                            What I did
                        </h3>
                        <p className="mt-2 font-body text-[17px] leading-relaxed">
                            {study.approach}
                        </p>

                        <h3 className="mt-8 font-heading text-[13px] font-medium uppercase text-main/80">
                            What came of it
                        </h3>
                        <p className="mt-2 font-body text-[17px] leading-relaxed">
                            {study.result}
                        </p>

                        {study.image && (
                            <figure className="mt-8">
                                <div className="relative aspect-[8/3] w-full overflow-hidden border border-main/15">
                                    <Image
                                        src={study.image.src}
                                        alt={study.image.alt}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <figcaption className="mt-2 font-body text-[14px] text-ink/60">
                                    {study.image.caption}
                                </figcaption>
                            </figure>
                        )}

                        {study.tradeoff && (
                            <div className="mt-8 border-l-2 border-accent pl-5">
                                <p className="font-heading text-[13px] font-medium uppercase text-accent">
                                    {study.tradeoff.label}
                                </p>
                                <p className="mt-2 font-body text-[17px] leading-relaxed">
                                    {study.tradeoff.body}
                                </p>
                            </div>
                        )}

                        <h3 className="mt-8 font-heading text-[13px] font-medium uppercase text-main/80">
                            Next time
                        </h3>
                        <p className="mt-2 font-body text-[17px] leading-relaxed">
                            {study.nextTime}
                        </p>
                    </article>
                ))}

                {upcoming.map((study) => (
                    <article
                        key={study.slug}
                        className="border border-dashed border-main/25 px-6 py-8"
                    >
                        <h2 className="font-heading text-[18px] font-semibold text-ink/70">
                            {study.title}
                        </h2>
                        <p className="mt-2 font-body text-[16px] leading-relaxed text-ink/60">
                            {study.problem} In progress — landing here as it&#39;s finished.
                        </p>
                    </article>
                ))}
            </div>

            <p className="mt-16 font-body text-[16px] text-ink/70">
                More work, in progress, on{" "}
                <a
                    href={links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-main underline underline-offset-4"
                >
                    GitHub
                </a>
                .
            </p>
        </div>
    );
}
