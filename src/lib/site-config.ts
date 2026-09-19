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
    paperUrl?: string;
};

export const caseStudies: CaseStudy[] = [
    {
        slug: "flyrank-ctr-scoring",
        title: "FlyRank CTR Opportunity Scoring",
        status: "live",
        problem:
            "SEO reviewers have limited capacity and can't manually sift through ~79 million rows of search performance data to find metadata opportunities. A simple rule is too rigid because CTR collapses non-linearly across different ranking tiers and content types.",
        approach:
            "I queried a 79M-row production warehouse using DuckDB to handle out-of-core data, then trained a Random Forest on a curated 30k-row slice. I framed this as a decision-support ranking task: identifying pages underperforming their exact peer group's median CTR, and mapping the model's probability scores into a reason-coded 'Action Playbook' for human reviewers.",
        result:
            "The model caught a massive data leakage trap. A naive random split initially yielded an inflated 94% Precision@50 because 87% of clients overlapped between train and test sets. By implementing a strict client-grouped holdout split, I uncovered the honest precision of 0.640. This true signal still vastly outperformed the hand-written baseline rule (0.260) and random chance (0.286).",
        tradeoff: {
            label: "The illusion of 94% accuracy",
            body: "It was tempting to look at a 94% metric and celebrate. Realizing the model was just memorizing client baselines instead of generalizable SEO patterns—and actively tearing my own result down to a 64% honest score—was the most valuable engineering lesson of the project.",
        },
        nextTime:
            "The model still struggles with thin-volume noise (pages near the 100-impression floor). Next time, I would introduce a dynamic impression threshold that scales based on the volatility of the specific position tier to filter out small-sample false positives.",
        image: {
            src: "/images/others/capstone_feature_importance.png",
            alt: "Bar chart showing Random Forest Feature Importances, led by impressions_90d and engagement_rate",
            caption:
                "Feature importances from the un-leaked Random Forest. The spread is believable, confirming no single 'leaky' feature is dominating the decision.",
        },
        repoUrl: "https://github.com/Bibek-Dhakal/applied-search-intelligence/",
        paperUrl: "https://bibek-dhakal.github.io/applied-search-intelligence/"
    },
    {
        slug: "customer-churn-risk-intelligence",
        title: "Customer Churn Risk Intelligence",
        status: "live",
        problem:
            "Predicting customer churn in a static Jupyter notebook isn't enough. Marketing teams need actionable risk tiers rather than raw binary flags, and engineering needs a secure, reproducible, containerized pipeline that won't silently fail in production due to upstream schema changes.",
        approach:
            "I engineered an enterprise-grade MLOps pipeline. I enforced strict declarative data contracts using Pandera (training) and Pydantic (inference). After feature engineering, I evaluated a linear baseline against tree ensembles using 5-fold stratified CV, tracking all experiments, metrics, and parameters automatically via an MLflow registry.",
        result:
            "Logistic Regression won with a Mean CV ROC-AUC of 0.8501. I serialized the winning model securely using Skops, then wrapped it in a Dockerized FastAPI microservice. The API translates raw probabilities into four actionable business risk tiers, governed by a modern CI/CD workflow (GitHub Actions, Pytest, Ruff) that tests and releases updates automatically.",
        tradeoff: {
            label: "Security vs. Convenience (Skops over Pickle)",
            body: "Standard Python `pickle` and `joblib` files are vulnerable to arbitrary code execution if intercepted. I deliberately traded the convenience of standard serialization for `Skops`, enforcing strict type-checking during API inference to adhere to enterprise security standards.",
        },
        nextTime:
            "Extract Logistic Regression coefficients to provide clear explainability (SHAP values) in the FastAPI response. I also plan to integrate Evidently AI into the serving container to continuously monitor real-time payloads against the training baseline to detect data drift.",
        image: {
            src: "/images/others/churn-model-comparison.png",
            alt: "Bar chart comparing Cross-Validated ROC-AUC across Logistic Regression, Random Forest, and LightGBM",
            caption:
                "Cross-Validated ROC-AUC by Model. The linear baseline outperformed the tree ensembles for probability-based risk ranking.",
        },
        repoUrl: "https://github.com/Bibek-Dhakal/customer-churn-risk-intelligence",
    },
];

export const contactCopy = {
    heading: "Get in touch",
    body: "The fastest way to reach me is using the form below. If you'd rather talk first, feel free to book a time.",
};
