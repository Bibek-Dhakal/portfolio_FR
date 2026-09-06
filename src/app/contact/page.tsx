import type {Metadata} from "next";
import {contactCopy, links, mailto} from "@/lib/site-config";
import {ArrowUpRight, Calendar, FileText, Mail} from "lucide-react";
import {Linkedin} from "@/components/icons";

export const metadata: Metadata = {
    title: "Contact — Bibek Dhakal",
};

const actions = [
    {
        label: "Email me",
        detail: links.email,
        href: mailto,
        icon: Mail,
    },
    {
        label: "Book time",
        detail: "30 minutes, no prep needed",
        href: links.booking,
        external: true,
        icon: Calendar,
    },
    {
        label: "LinkedIn",
        detail: "Connect or message directly",
        href: links.linkedin,
        external: true,
        icon: Linkedin,
    },
    {
        label: "CV",
        detail: "Download the full resume",
        href: links.cv,
        external: true,
        icon: FileText,
    },
];

export default function ContactPage() {
    return (
        <div className="mx-auto max-w-4xl px-6 py-20 animate-fade-in-up">
            <div className="mb-16 text-center">
                <h1 className="font-heading text-3xl font-bold tracking-tight text-text-main sm:text-4xl">
                    {contactCopy.heading}
                </h1>
                <p className="mx-auto mt-4 max-w-lg font-body text-lg leading-relaxed text-text-muted">
                    {contactCopy.body}
                </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
                {actions.map((action) => {
                    const Icon = action.icon;
                    return (
                        <a
                            key={action.label}
                            href={action.href}
                            target={action.external ? "_blank" : undefined}
                            rel={action.external ? "noreferrer" : undefined}
                            className="group relative flex items-start gap-5 rounded-2xl border border-border bg-surface/30 p-6 transition-all hover:-translate-y-1 hover:border-accent hover:bg-surface/60 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                        >
                            <div
                                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-bg text-text-main transition-colors group-hover:border-accent/50 group-hover:text-accent">
                                <Icon size={20}/>
                            </div>
                            <div className="flex-1">
                                <h2 className="font-heading text-lg font-semibold text-text-main transition-colors group-hover:text-accent">
                                    {action.label}
                                </h2>
                                <p className="mt-1 font-body text-sm text-text-muted">
                                    {action.detail}
                                </p>
                            </div>
                            <ArrowUpRight
                                size={20}
                                className="absolute right-6 top-6 text-border transition-colors group-hover:text-accent"
                            />
                        </a>
                    );
                })}
            </div>
        </div>
    );
}
