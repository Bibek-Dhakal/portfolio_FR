import type {Metadata} from "next";
import {contactCopy, links, mailto} from "@/lib/site-config";

export const metadata: Metadata = {
    title: "Contact — Bibek Dhakal",
};

const actions = [
    {
        label: "Email me",
        detail: links.email,
        href: mailto,
    },
    {
        label: "Book time",
        detail: "30 minutes, no prep needed",
        href: links.booking,
        external: true,
    },
    {
        label: "LinkedIn",
        detail: "Connect or message directly",
        href: links.linkedin,
        external: true,
    },
    {
        label: "CV",
        detail: "Download the full resume",
        href: links.cv,
        external: true,
    },
];

export default function ContactPage() {
    return (
        <div className="mx-auto max-w-3xl px-6 py-20">
            <h1 className="font-heading text-[28px] font-semibold text-main">
                {contactCopy.heading}
            </h1>
            <p className="mt-3 max-w-md font-body text-[17px] leading-relaxed">
                {contactCopy.body}
            </p>

            <div className="mt-14 flex flex-col divide-y divide-main/15 border-y border-main/15">
                {actions.map((action) => (
                    <a
                        key={action.label}
                        href={action.href}
                        target={action.external ? "_blank" : undefined}
                        rel={action.external ? "noreferrer" : undefined}
                        className="group flex items-center justify-between py-6 transition-colors hover:text-main"
                    >
                        <div>
                            <p className="font-heading text-[18px] font-medium">
                                {action.label}
                            </p>
                            <p className="mt-1 font-body text-[15px] text-ink/60 group-hover:text-main/70">
                                {action.detail}
                            </p>
                        </div>
                        <span aria-hidden className="font-heading text-[20px]">
              &#8599;
            </span>
                    </a>
                ))}
            </div>
        </div>
    );
}
