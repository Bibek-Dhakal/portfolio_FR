import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site-config";

export default function Home() {
  return (
    <>
      <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden">
        <Image
          src="/images/hero-texture.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0b1420]/55" />
        <div className="relative mx-auto max-w-3xl px-6 py-24 text-paper">
          <h1 className="font-heading text-[34px] font-semibold leading-tight sm:text-[42px]">
            {site.claim}
          </h1>
          <p className="mt-6 max-w-xl font-body text-[18px] leading-relaxed text-paper/85">
            {site.heroSupport}
          </p>
          <Link
            href="/work"
            className="mt-10 inline-block border border-paper/70 px-6 py-3 font-heading text-[15px] font-medium text-paper transition-colors hover:bg-paper hover:text-main"
          >
            Read the case study
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20">
        <p className="font-heading text-[13px] font-medium text-main">
          {site.role}
        </p>
        <p className="mt-3 max-w-xl font-body text-[17px] leading-relaxed">
          I work through 70-million-row production datasets, catch data
          leakage before it inflates a result, and hold every model to a
          human baseline before it ships. The FlyRank case study below walks
          through one of those calls in full — including the one that lost.
        </p>
      </section>
    </>
  );
}