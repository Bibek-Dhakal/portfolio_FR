"use client";

import React, {useState} from "react";
import {AlertCircle, CheckCircle2} from "lucide-react";

export function ContactForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        // Validation
        const email = formData.get("email") as string;
        const message = formData.get("message") as string;
        if (!email || !message) {
            setStatus("error");
            setErrorMessage("Please fill in all required fields.");
            return;
        }

        // Securely pull the key from the environment
        const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
        if (!accessKey) {
            setStatus("error");
            setErrorMessage("Form configuration error: Access key is missing. Please contact the administrator.");
            return;
        }

        setStatus("submitting");
        formData.append("access_key", accessKey);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();

            if (res.ok && data.success) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
                setErrorMessage(data.message || "Something went wrong. Please try again.");
            }
        } catch (err) {
            setStatus("error");
            setErrorMessage("Failed to send message. Check your network connection.");
        }
    }

    if (status === "success") {
        return (
            <div className="rounded-2xl border border-accent/20 bg-accent/5 p-8 text-center animate-fade-in-up">
                <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-accent"/>
                <h3 className="font-heading text-xl font-semibold text-text-main">Message sent!</h3>
                <p className="mt-2 font-body text-text-muted">Thanks for reaching out. I will get back to you
                    shortly.</p>
                <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-sm font-semibold text-accent transition-colors hover:text-accent/80 hover:underline"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit}
              className="flex flex-col gap-5 rounded-2xl border border-border bg-surface/30 p-6 sm:p-8">
            <div className="mb-2">
                <h2 className="font-heading text-xl font-bold text-text-main">Send a message</h2>
                <p className="mt-1 font-body text-sm text-text-muted">Fill out the form below and it will route directly
                    to my inbox.</p>
            </div>

            {status === "error" && (
                <div className="flex items-center gap-2 rounded-lg bg-red-500/10 p-3 text-sm text-red-500">
                    <AlertCircle size={16} className="shrink-0"/>
                    <span>{errorMessage}</span>
                </div>
            )}

            <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="font-heading text-sm font-medium text-text-main">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="rounded-lg border border-border bg-bg px-4 py-2.5 font-body text-text-main transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    placeholder="Jane Doe"
                />
            </div>

            <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="font-heading text-sm font-medium text-text-main">Email <span
                    className="text-accent">*</span></label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="rounded-lg border border-border bg-bg px-4 py-2.5 font-body text-text-main transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    placeholder="jane@example.com"
                />
            </div>

            <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="font-heading text-sm font-medium text-text-main">Message <span
                    className="text-accent">*</span></label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="resize-y rounded-lg border border-border bg-bg px-4 py-2.5 font-body text-text-main transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    placeholder="What's on your mind?"
                ></textarea>
            </div>

            <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-2 flex w-full items-center justify-center rounded-lg bg-accent px-6 py-3 font-heading text-sm font-semibold text-bg transition-all hover:bg-accent/90 disabled:opacity-70"
            >
                {status === "submitting" ? "Sending..." : "Send Message"}
            </button>
        </form>
    );
}
