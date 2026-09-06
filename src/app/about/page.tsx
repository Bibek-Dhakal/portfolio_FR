import type { Metadata } from "next";
import Image from "next/image";
import { about } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About — Bibek Dhakal",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <div className="flex flex-col-reverse items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-heading text-[28px] font-semibold text-main">
            About
          </h1>
          <p className="mt-3 max-w-md font-body text-[17px] leading-relaxed">
            {about.credentials.scope}
          </p>
        </div>
        <Image
          src="/images/bio-photo.png"
          alt="Bibek Dhakal"
          width={112}
          height={112}
          className="h-28 w-28 flex-none rounded-full object-cover grayscale"
        />
      </div>

      <div className="mt-10 border-t border-main/15 pt-6">
        <p className="font-heading text-[13px] font-medium uppercase text-main/80">
          Current role
        </p>
        <p className="mt-2 font-body text-[17px]">
          {about.credentials.title}
        </p>
      </div>

      <div className="mt-16 flex flex-col gap-10">
        {about.philosophy.map((item) => (
          <div key={item.title}>
            <h2 className="font-heading text-[19px] font-semibold">
              {item.title}
            </h2>
            <p className="mt-2 max-w-xl font-body text-[17px] leading-relaxed">
              {item.body}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 border-t border-main/15 pt-8">
        <p className="font-heading text-[13px] font-medium uppercase text-main/80">
          Toolkit
        </p>
        <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 font-body text-[16px]">
          {about.toolkit.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}