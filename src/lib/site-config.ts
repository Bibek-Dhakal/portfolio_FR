/**
 * Site content config.
 *
 * Every string, link, and case study on the site lives here. Add a new case
 * study, change a link, or update copy by editing this file only — no need
 * to touch page components.
 */

export const links = {
    linkedin: "https://www.linkedin.com/in/bibek-dhakal-771ba5334/",
    github: "https://github.com/Bibek-Dhakal",
    email: "imbibek8366@gmail.com",
    booking: "https://cal.com/bibek-dhakal-kw306d",
    // Set NEXT_PUBLIC_CV_URL in .env.local (see .env.example). Falls back to
    // "#" so the build never breaks if it's unset, but the link should always
    // be filled in before shipping.
    cv: process.env.NEXT_PUBLIC_CV_URL || "#",
};

export const mailto = `mailto:${links.email}?subject=${encodeURIComponent(
    "Let's talk"
)}`;

export const nav = [
    {label: "Work", href: "/work"},
    {label: "About", href: "/about"},
    {label: "Contact", href: "/contact"},
];

export const site = {
    name: "Bibek Dhakal",
    role: "AI / Machine Learning Engineer",
    claim:
        "I build decision-support ML systems that turn messy production data into prioritized human action.",
    heroSupport:
        "I design evaluations that reflect real business decisions, prevent data leakage, and compare every model against a meaningful human baseline — then document what didn't work as plainly as what did.",
};

export const about = {
    philosophy: [
        {
            title: "Baseline before model",
            body: "Every model I ship has to beat a transparent, human-readable baseline on data it has never seen. If it can't, the baseline ships instead. That rule caught a depth-3 decision tree quietly overfitting on my own capstone.",
        },
        {
            title: "Leakage is the default bug",
            body: "Splits are drawn before any feature engineering touches the data, not after. Most inflated model results I've seen trace back to information leaking from the future or from the test set, not to a weak algorithm.",
        },
        {
            title: "Write down what failed",
            body: "A results writeup that only lists wins isn't reviewable. I keep the failed configurations next to the ones that worked, with the numbers, so the reasoning can be checked by someone else.",
        },
    ],
    toolkit: [
        "Python",
        "Scikit-learn",
        "XGBoost",
        "Pandas",
        "PyTorch",
        "Docker",
    ],
    credentials: {
        title: "AI / Machine Learning Engineer",
        scope:
            "Currently building decision-support ML systems as part of the FlyRank AI Fluency internship — evaluation design, leakage-proof pipelines, and production-facing tooling.",
    },
};

export type CaseStudy = {
    slug: string;
    title: string;
    status: "live" | "in-progress";
    problem: string;
    approach: string;
    result: string;
    tradeoff?: { label: string; body: string };
    nextTime: string;
    image?: { src: string; alt: string; caption: string };
    repoUrl?: string;
};

export const caseStudies: CaseStudy[] = [
    {
        slug: "flyrank-ctr-scoring",
        title: "FlyRank CTR Opportunity Scoring",
        status: "live",
        problem:
            "Human review teams couldn't manually sift through 70 million rows of search data to find which pages needed metadata fixes. A flat if/then rule looked tempting, but CTR varies non-linearly by content type and competition level even at the same ranking position.",
        approach:
            "I framed it as decision support, not full automation: a proxy label for pages significantly below the historical CTR median for their position tier and content type, filtered to a minimum of 100 impressions to cut low-volume noise. I chose decision trees because reviewers needed interpretable reason codes, not a black box, and tested tree depth against a hand-written baseline rule under a strict train/test split.",
        result:
            "The baseline rule won. It held Precision@20 of 0.750 and Precision@50 of 0.660 on unseen data, beating every tree configuration I tried. A depth-3 tree with an added \"smarter\" feature tied the baseline at 0.660 but lost the human-readable reason codes for no gain — so it doesn't count as a win.",
        tradeoff: {
            label: "The result I didn't expect",
            body: "The depth-3 tree — deeper, with an extra feature — performed the worst of every configuration tested on unseen data. More complexity was pure overfitting here, not signal. The simple baseline stayed the reigning champion.",
        },
        nextTime:
            "Shift earlier to time-series momentum features — a page's week-over-week CTR velocity is a stronger signal than a flat 90-day average — and build time-aware validation splits from the start to rule out future leakage entirely.",
        image: {
            src: "/images/ml-eval-output.jpeg",
            alt: "Terminal output comparing Precision@20 and Precision@50 across five experiment configurations, hand rule vs. decision tree",
            caption:
                "Five experiment configurations, evaluated on held-out data. The baseline hand rule beats every tree variant.",
        },
    },
    {
        slug: "second-case-study",
        title: "Second case study",
        status: "in-progress",
        problem:
            "A second, independent proof of the same rigor — different problem, same baseline-first standard.",
        approach: "",
        result: "",
        nextTime: "",
    },
];

export const contactCopy = {
    heading: "Get in touch",
    body: "The fastest way to reach me is email. If you'd rather talk first, book time directly.",
};
