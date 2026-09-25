/**
 * Site content config.
 *
 * Every string, link, and project on the site lives here. Edit this file
 * to change the copy; page components only render it.
 */

export const links = {
    linkedin: "https://www.linkedin.com/in/bibek-dhakal-771ba5334/",
    github: "https://github.com/Bibek-Dhakal",
    email: "imbibek8366@gmail.com",
    booking: "https://cal.com/bibek-dhakal-kw306d",
    kaggle: "https://www.kaggle.com/bibekdhakal8366",
    pypi: "https://pypi.org/project/lexibyte/",
    lunarLanderModelCard: "https://huggingface.co/imbibek8366/ppo-LunarLander-v2",
    // Put your PDF in /public (e.g., /public/bibek-dhakal-cv.pdf) and set
    // NEXT_PUBLIC_CV_URL=/bibek-dhakal-cv.pdf in .env.local and on Vercel.
    cv: process.env.NEXT_PUBLIC_CV_URL || "#",
};

export const mailto = `mailto:${links.email}?subject=${encodeURIComponent(
    "Let's talk"
)}`;

export const nav = [
    {label: "Work", href: "/work"},
    {label: "Experience", href: "/experience"},
    {label: "About", href: "/about"},
    {label: "Contact", href: "/contact"},
];

export const site = {
    name: "Bibek Dhakal",
    role: "Associate AI / Machine Learning Engineer",
    location: "Kathmandu, Nepal",
    availability: "Available immediately · Full-time",
    headline: {
        lead: "I build machine-learning systems, from the model to the service around it, and ",
        highlight: "test them before I trust them",
        tail: ".",
    },
    claim:
        "Entry-level ML engineer who builds machine-learning systems from model to service and tests them before trusting them.",
    heroSupport:
        "I have a software engineering background and I work across evaluation-first modelling, ML services (APIs, containers, CI), and LLM fundamentals. Each project on this site says what it shows and what it doesn't.",
};

/** Numbers that appear elsewhere on the site, each backed by a project below. */
export const stats = [
    {value: "0.94 → 0.64", label: "Precision@50 once whole clients were held out (FlyRank capstone)"},
    {value: ">90%", label: "Test coverage strictly enforced in CI for the TabTrace ML pipeline"},
    {value: "0", label: "Boilerplate Python code required to serve a new model via ModelGate"},
    {value: "0.85", label: "5-fold CV ROC-AUC, churn model (logistic regression beat tree ensembles)"},
    {value: "PyPI", label: "LexiByte: BPE tokenizer built from scratch and published"},
];

/** Capability areas. Each claim must be backed by the evidence links. */
export type Pillar = {
    title: string;
    summary: string;
    points: string[];
    evidence: { label: string; url: string }[];
};

export const pillars: Pillar[] = [
    {
        title: "Applied ML & evaluation",
        summary:
            "Framing a problem, choosing an honest validation design, and comparing against simple baselines.",
        points: [
            "TabTrace: Reproducible pipeline that halts on data leakage, registers feature rationale in code, and evaluates via stratified cross-validation.",
            "FlyRank capstone: client-holdout split, baseline rule vs. Logistic Regression vs. Random Forest, and two deliberately planted leaks to test the validation.",
            "Churn model: 5-fold stratified CV; logistic regression (0.8501 ROC-AUC) beat Random Forest and LightGBM.",
            "Phishing detector: XGBoost with Platt-scaled probabilities and soft-voting fusion across two feature sources.",
        ],
        evidence: [
            {label: "TabTrace repo", url: "https://github.com/Bibek-Dhakal/tabtrace"},
            {label: "FlyRank paper", url: "https://bibek-dhakal.github.io/applied-search-intelligence/"},
            {label: "Churn repo", url: "https://github.com/Bibek-Dhakal/customer-churn-risk-intelligence"},
        ],
    },
    {
        title: "ML services & MLOps",
        summary:
            "Turning a model into something that runs, is validated at its edges, and can be released repeatably.",
        points: [
            "ModelGate: Containerized FastAPI inference service featuring dynamic URL model loading, strict JSON schema validation, and error shielding.",
            "Churn pipeline: Pandera and Pydantic data contracts, MLflow experiment tracking, Skops serialization, Dockerized FastAPI service.",
            "CI/CD with GitHub Actions, Pytest, Ruff, and Release Please across TabTrace, ModelGate, and Churn projects.",
            "FastAPI with Docker or Docker Compose across the churn, phishing, and Forge-LM projects.",
        ],
        evidence: [
            {label: "ModelGate repo", url: "https://github.com/Bibek-Dhakal/modelgate"},
            {label: "TabTrace repo", url: "https://github.com/Bibek-Dhakal/tabtrace"},
            {label: "Churn repo", url: "https://github.com/Bibek-Dhakal/customer-churn-risk-intelligence"},
        ],
    },
    {
        title: "LLM & inference fundamentals",
        summary:
            "Learning-scale implementations that show how the pieces work, plus a lightweight RAG agent.",
        points: [
            "LexiByte: BPE tokenizer written from scratch and published on PyPI.",
            "NanoTransformer and Forge-LM: GPT-2-style decoder in PyTorch, ~28M parameters trained on TinyStories, exported to INT8 ONNX and served on CPU.",
            "Aegis: ReAct-style RAG agent using FAISS and INT8 ONNX inference, designed for limited memory.",
        ],
        evidence: [
            {label: "LexiByte (PyPI)", url: links.pypi},
            {label: "NanoTransformer", url: "https://github.com/bibek-dhakal/nanotransformer"},
            {label: "Aegis", url: "https://github.com/bibek-dhakal/aegis-api"},
        ],
    },
    {
        title: "Software engineering",
        summary:
            "Internships and contract jobs (2023–2025) building the apps and backends for various projects.",
        points: [
            "AcademiaOS MVP: FastAPI and Celery backend, Next.js frontend, HTTP-only cookie auth and RBAC.",
            "Flutter, React, and Next.js work across several companies, including support for a Google Play Store launch.",
        ],
        evidence: [{label: "Experience", url: "/experience"}],
    },
];

export const lookingFor = {
    roles: [
        "Associate ML Engineer",
        "Junior ML Engineer",
        "AI Engineer",
        "Entry-Level ML Engineer",
    ],
    interests:
        "Teams working on LLM applications, ML systems, inference optimization, intelligent backend services, and ML/data pipelines. Also open to MLOps / ML platform roles suited to an early-career engineer with hands-on Docker, FastAPI, and model-serving experience.",
    background:
        "Before moving into ML I worked as a software engineer (Flutter, React, Next.js, FastAPI) through internships and contracts from 2023 to 2025, so I'm comfortable shipping the backend and app code around a model, not only the notebook.",
};

export const about = {
    philosophy: [
        {
            title: "Baseline before model",
            body: "I write down a simple, transparent rule or linear model first, then make the fancier model earn its place. In both my churn project and TabTrace pipeline, logistic regression beat the tree ensembles. In my FlyRank capstone the hand-written rule scored 0.260 Precision@50 on unseen clients, slightly below chance (0.286), which made the model's 0.640 a real result.",
        },
        {
            title: "Suspect the split first",
            body: "A convenient split flatters a model. My capstone's random split scored 0.940 Precision@50; holding out whole clients gave 0.640. I split by group, keep label components out of the features, and build tools like TabTrace that enforce deterministic, saved splits with strict leakage checks.",
        },
        {
            title: "Build the whole path",
            body: "A model is only useful if something can call it, and reproducible if its pipeline is tested. I unit-test preprocessing logic (TabTrace), validate data at the edges (ModelGate, Pandera), track experiments, containerize the service, and automate tests and releases.",
        },
        {
            title: "Say what it isn't",
            body: "Each project states its limits: observational data, learning-scale training, a proxy label. Someone else can then judge what the work does and doesn't show.",
        },
    ],
    intro:
        "I'm an entry-level AI / ML engineer with a software engineering background. My evidence is a ML internship, an ML apprenticeship, several projects with public code, and earlier software work. I'm not claiming years of production ML ownership. I'm looking for a team where I can contribute to real systems and grow over the long term.",
    currently:
        "Available immediately. My degree exams and internship are finished, and new projects go on GitHub.",
    toolkit: [
        {
            group: "Languages",
            items: ["Python", "TypeScript", "SQL", "C#", "Dart"],
        },
        {
            group: "ML & AI",
            items: [
                "PyTorch",
                "TensorFlow",
                "Scikit-learn",
                "XGBoost",
                "NumPy",
                "Pandas",
                "OpenCV",
                "Hugging Face",
            ],
        },
        {
            group: "LLM & inference",
            items: [
                "Transformers",
                "BPE tokenization",
                "RAG / FAISS",
                "ONNX Runtime",
                "INT8 quantization",
                "FlashAttention",
            ],
        },
        {
            group: "Data",
            items: ["DuckDB", "BigQuery", "PostgreSQL", "Redis"],
        },
        {
            group: "Backend & MLOps",
            items: [
                "FastAPI",
                "Docker",
                "Celery",
                "MLflow",
                "Pandera / Pydantic",
                "GitHub Actions",
                "WebSockets",
            ],
        },
        {
            group: "Apps",
            items: ["React", "Next.js", "Tailwind CSS", "Streamlit", "Flutter"],
        },
    ],
    credentials: {
        title: "Associate AI / Machine Learning Engineer",
        scope:
            "ML internship at FlyRank AI (Jul–Sep 2026), ML apprenticeship at Skill Shikshya, and earlier software engineering roles. Based in Kathmandu, Nepal.",
    },
};

/* ------------------------------ Case studies ------------------------------ */

export type CaseStudy = {
    slug: string;
    title: string;
    summary: string;
    problem: string;
    approach: string;
    result: string;
    resultsTable?: {
        caption: string;
        columns: string[];
        rows: string[][];
        highlightRow?: number;
    };
    tradeoff?: { label: string; body: string };
    limitations?: string[];
    guardrails?: string[];
    nextTime: string;
    stack: string[];
    image?: { src: string; alt: string; caption: string };
    repoUrl?: string;
    paperUrl?: string;
};

export const caseStudies: CaseStudy[] = [
    {
        slug: "flyrank-ctr-scoring",
        title: "FlyRank CTR Opportunity Scoring",
        summary:
            "Ranks pages whose CTR falls well below their position-and-content-type peers, so a reviewer sees the likeliest problems first. Includes a deliberate leakage audit and stated limits.",
        problem:
            "A content reviewer with time for about 50 pages per cycle needs an ordered queue, not 500 unranked candidates. Rankings don't reliably predict clicks: CTR falls unevenly across ranking positions and content types, so a single fixed rule is too rigid.",
        approach:
            "I framed it as ranking via binary classification. A page counts as an anomaly if its CTR is below half the median of pages in the same position tier and content type. The model uses five features knowable before review (impressions, average position, content age, word count, engagement rate); I excluded ctr and clicks because ctr is the numerator of the label. I wrote a transparent baseline rule before any model training, then compared Logistic Regression and Random Forest on the same client-holdout split (75/25 by client, seed 42). I used DuckDB on the ~78.8M-row warehouse to verify grain, availability and scale, then modelled on the 30k-row starter slice (22,006 pages with 100+ impressions, 30 clients). Finally I combined model scores with the rule into six reason-coded action archetypes, including a do-not-act group.",
        result:
            "On 4,610 held-out rows from 8 unseen clients, the Random Forest reached Precision@50 of 0.640 and Precision@20 of 0.850. My hand-written rule scored 0.260 at Precision@50, about chance level (0.286) on unseen clients. A naive random split had reported 0.940 because 26 of 30 clients (87%) appeared in both train and test. I also planted two leaks on purpose to check that the validation harness catches them: reintroducing trend_pct raised in-sample accuracy from 0.6445 to 0.9999 in the warehouse contract stage, and reintroducing ctr raised Precision@50 from 0.640 to 0.980. Both were removed before any reported result.",
        resultsTable: {
            caption:
                "Same held-out test set for every row: 4,610 rows, 8 clients unseen in training, 28.6% positive rate.",
            columns: ["Method", "Precision@20", "Precision@50"],
            rows: [
                ["Random chance", "0.286", "0.286"],
                ["Hand-written rule", "0.350", "0.260"],
                ["Logistic Regression", "0.550", "0.480"],
                ["Random Forest (final)", "0.850", "0.640"],
            ],
            highlightRow: 3,
        },
        tradeoff: {
            label: "The illusion of 94% accuracy",
            body: "A naive split looked almost perfect (0.940). The gap to the honest 0.640 is the size of the illusion: the model was partly memorizing client-specific CTR levels instead of learning a pattern that carries to a new client. Reporting the lower number was the most valuable lesson of the project.",
        },
        limitations: [
            "The label is a proxy (CTR below peer median), not proof that a page's metadata is broken. About 1 in 3 of the top-50 flags is not a real anomaly.",
            "Observational data: nothing here shows that rewriting a title or meta description recovers clicks.",
            "All 3 false positives in the top-20 sat near the 100–250 impression floor, where CTR estimates are noisiest.",
            "One dataset, one time slice, 8 test clients. 0.640 describes this data and label definition, not a guarantee elsewhere.",
        ],
        guardrails: [
            "Never auto-publish a rewritten title or meta description from a model score alone.",
            "Never treat a high-confidence tier as proof that a rewrite will recover clicks.",
            "Never act on a page below the 100-impression visibility floor.",
            "Never bulk-refresh content purely by age; the freshness evidence was mixed.",
            "Re-check Precision@50 against 0.640 when new data arrives; a drop below roughly 0.50 pauses the queue.",
        ],
        nextTime:
            "Add an impression threshold that scales with the volatility of each position tier to filter out small-sample false positives, and validate the label with a controlled before/after test on real metadata edits.",
        stack: ["Python", "DuckDB", "Scikit-learn", "Random Forest", "Pandas"],
        image: {
            src: "/images/others/capstone_feature_importance.png",
            alt: "Bar chart showing Random Forest Feature Importances, led by impressions_90d and engagement_rate",
            caption:
                "Feature importance is spread across five features (impressions 37%, engagement 25%, position 24%, word count 8%, age 6%), which argues against a hidden leak.",
        },
        repoUrl: "https://github.com/Bibek-Dhakal/applied-search-intelligence/",
        paperUrl: "https://bibek-dhakal.github.io/applied-search-intelligence/",
    },
    {
        slug: "customer-churn-risk-intelligence",
        title: "Customer Churn Risk Intelligence",
        summary:
            "Production-style churn pipeline: validated data contracts, tracked experiments, a Dockerized FastAPI service, and CI/CD, returning business-readable risk tiers.",
        problem:
            "Predicting churn in a notebook isn't enough. Marketing needs actionable risk tiers rather than raw binary flags, and engineering needs a reproducible, containerized pipeline that doesn't silently fail when upstream schemas change.",
        approach:
            "I enforced declarative data contracts with Pandera (training) and Pydantic (inference). After feature engineering, I compared a linear baseline against tree ensembles using 5-fold stratified CV, tracking experiments, metrics, and parameters in MLflow.",
        result:
            "Logistic Regression won with a mean CV ROC-AUC of 0.8501, ahead of Random Forest and LightGBM. I serialized it with Skops and served it from a Dockerized FastAPI service that maps probabilities to four business risk tiers. GitHub Actions, Pytest, Ruff, and Release Please handle testing and versioned releases.",
        tradeoff: {
            label: "Security vs. convenience (Skops over pickle)",
            body: "Python `pickle` and `joblib` files can execute arbitrary code if tampered with. I traded the convenience of standard serialization for Skops, which restricts what can be loaded at inference time.",
        },
        nextTime:
            "Add SHAP-based explanations to the API response, and put drift monitoring (e.g. Evidently) in the serving container to compare live payloads against the training baseline.",
        stack: [
            "Python",
            "Scikit-learn",
            "LightGBM",
            "MLflow",
            "Pandera",
            "Pydantic",
            "FastAPI",
            "Docker",
            "GitHub Actions",
        ],
        image: {
            src: "/images/others/churn-model-comparison.png",
            alt: "Bar chart comparing Cross-Validated ROC-AUC across Logistic Regression, Random Forest, and LightGBM",
            caption:
                "Cross-validated ROC-AUC by model. The linear baseline outperformed the tree ensembles for probability-based risk ranking.",
        },
        repoUrl: "https://github.com/Bibek-Dhakal/customer-churn-risk-intelligence",
    },
];

/* ------------------------------ More projects ----------------------------- */

export type Project = {
    slug: string;
    title: string;
    tagline: string;
    highlights: string[];
    stack: string[];
    scope?: string;
    links: { label: string; url: string }[];
};

export const projects: Project[] = [
    {
        slug: "tabtrace",
        title: "TabTrace",
        tagline: "Reproducible tabular ML pipeline enforcing justified feature engineering and cross-validated evaluation.",
        highlights: [
            "Rejects 'notebook-only' ML: every stage from ingestion to feature engineering is a pure, unit-tested function.",
            "Enforces declarative feature justifications via a custom registry decorator; the pipeline halts if a rationale is missing.",
            "Uses deterministic, saved train/val/test splits with explicit leakage checks to ensure honest evaluation.",
            "Compares a Logistic Regression baseline against a grid-searched Random Forest using 5-fold cross-validation.",
            "Automated CI/CD gating merges with Pytest (>90% coverage enforced), Ruff formatting, and Release Please semantic versioning.",
        ],
        stack: ["Python", "Scikit-learn", "Pandas", "Pytest", "GitHub Actions"],
        links: [{label: "Code", url: "https://github.com/Bibek-Dhakal/tabtrace"}],
    },
    {
        slug: "modelgate",
        title: "ModelGate",
        tagline: "Production-ready, containerized machine learning inference API with zero boilerplate.",
        highlights: [
            "Dynamic artifact loading: instantly serves Scikit-Learn/Joblib models from local paths or direct HTTP URLs via environment variables.",
            "Strict JSON Schema boundary validation that dynamically blocks malformed payloads from ever reaching the inference engine.",
            "Robust 'Error Shielding' overrides default exception handlers to prevent raw Python stack traces from leaking to clients, returning safe 422/500 JSON.",
            "Fully Docker-native, rigorously tested with Pytest, and enforced by GitHub Actions (Ruff linting, Release Please versioning)."
        ],
        stack: ["FastAPI", "Docker", "Python", "Pytest", "Scikit-learn", "GitHub Actions"],
        links: [{label: "Code", url: "https://github.com/Bibek-Dhakal/modelgate"}],
    },
    {
        slug: "aegis-omnisearch-agent",
        title: "Aegis Omnisearch Agent",
        tagline: "Lightweight RAG agent for resource-constrained deployments.",
        highlights: [
            "Custom ReAct-style reason-and-act loop using the Gemini API for tool selection and grounded answers.",
            "Local retrieval with FAISS and INT8 ONNX Runtime for CPU inference.",
            "PDF processing designed around limited memory: page-by-page streaming and micro-batched indexing.",
            "GitHub Webhook mechanism for updating the indexed knowledge during deployment.",
        ],
        stack: ["Python", "Gemini API", "FAISS", "ONNX Runtime", "FastAPI"],
        links: [{label: "Code", url: "https://github.com/bibek-dhakal/aegis-api"}],
    },
    {
        slug: "lexibyte",
        title: "LexiByte",
        tagline: "Byte-Pair Encoding tokenizer implemented from scratch, published on PyPI.",
        highlights: [
            "GPT-style regex pre-tokenization with Unicode-aware patterns for words, numbers, and punctuation.",
            "Frequency dictionary built during BPE training to avoid unnecessary merge checks.",
            "Memoization to avoid repeated tokenization work at inference.",
            "UTF-8 byte-level fallback so there are no out-of-vocabulary failures.",
        ],
        stack: ["Python", "BPE", "PyPI"],
        links: [
            {label: "Code", url: "https://github.com/bibek-dhakal/lexibyte"},
            {label: "PyPI", url: links.pypi},
        ],
    },
    {
        slug: "forge-lm-nanotransformer",
        title: "NanoTransformer & Forge-LM",
        tagline:
            "Transformer implementation, training, and lightweight inference, end to end.",
        highlights: [
            "NanoTransformer: GPT-2-style decoder written with PyTorch primitives, using my own LexiByte tokenizer, with experiments in FlashAttention and bfloat16 mixed precision.",
            "Forge-LM: scaled to ~28M parameters and trained on TinyStories, using gradient accumulation to fit in ~6 GB VRAM.",
            "Exported to ONNX with INT8 dynamic quantization, served through a FastAPI + NumPy inference service in Docker, and tested in low-memory environments.",
        ],
        stack: ["PyTorch", "ONNX", "INT8 quantization", "FastAPI", "Docker"],
        scope:
            "A learning project on a small dataset. It demonstrates the path from architecture to training to lightweight serving, not state-of-the-art generation quality.",
        links: [
            {label: "Forge-LM", url: "https://github.com/bibek-dhakal/forge-lm"},
            {label: "NanoTransformer", url: "https://github.com/bibek-dhakal/nanotransformer"},
        ],
    },
    {
        slug: "multimodal-phishing-detection",
        title: "Multimodal Phishing Detection Platform",
        tagline: "Phishing detection combining URL structure with linguistic signals.",
        highlights: [
            "Combined structured URL features (ISCX dataset) with linguistic features (PhiUSIIL dataset).",
            "Soft-voting fusion across models; XGBoost with Platt scaling via CalibratedClassifierCV for calibrated probabilities.",
            "Exposed through FastAPI with an interactive Streamlit evaluation UI, run with Docker Compose.",
        ],
        stack: ["XGBoost", "Scikit-learn", "FastAPI", "Streamlit", "Docker Compose"],
        links: [
            {
                label: "Code",
                url: "https://github.com/bibek-dhakal/multimodal-phishing-detection-platform",
            },
        ],
    },
    {
        slug: "zeroprop-engine",
        title: "ZeroProp Engine & Live Dashboard",
        tagline: "Neural network built without a DL framework, with real-time training visualization.",
        highlights: [
            "Dense layers, ReLU, and Softmax cross-entropy implemented with NumPy matrix operations, including forward pass, loss, and backpropagation.",
            "FastAPI WebSockets stream training metrics to a React + HTML5 Canvas dashboard showing epoch, loss, and accuracy live.",
        ],
        stack: ["NumPy", "FastAPI", "WebSockets", "React", "Canvas"],
        scope: "Built to understand the mechanics, not as a replacement for PyTorch.",
        links: [{label: "Code", url: "https://github.com/Bibek-Dhakal/zero-prop-api/"}],
    },
    {
        slug: "lunar-lander-agent",
        title: "LunarLander-v2 Agent",
        tagline: "Reinforcement-learning agent trained with PPO.",
        highlights: [
            "Trained an agent to land a lunar module on its pad using Proximal Policy Optimization.",
        ],
        stack: ["Reinforcement learning", "PPO", "Python"],
        scope: "A standard RL benchmark environment, done as a learning exercise.",
        links: links.lunarLanderModelCard
            ? [{label: "Model card (Hugging Face)", url: links.lunarLanderModelCard}]
            : [],
    },
];

/* ------------------------------- Experience ------------------------------- */

export type Role = {
    company: string;
    title: string;
    period: string;
    kind: string;
    bullets: string[];
    href?: string;
};

export const experience: { group: string; roles: Role[] }[] = [
    {
        group: "Machine Learning & AI",
        roles: [
            {
                company: "FlyRank AI",
                title: "AI / ML Engineering Intern",
                period: "Jul 2026 – Sep 2026",
                kind: "Internship",
                href: "https://internship.flyrank.ai/verify/FR-D11-20CBF-CC2BF?first_name=Bibek",
                bullets: [
                    "Built a CTR Opportunity Scoring capstone: a decision-support model that ranks pages for SEO metadata review.",
                    "Used DuckDB to query the ~78.8M-row Hugging Face warehouse (Parquet) without loading it into RAM, verifying grain and scale; modelled on a 30k-row anonymized starter slice.",
                    "Compared a hand-written baseline, Logistic Regression, and Random Forest on a client-holdout split: Random Forest reached Precision@50 of 0.640 vs 0.260 for the rule.",
                    "Demonstrated client-overlap leakage (naive split 0.940 vs honest 0.640) and planted two deliberate leaks (trend_pct, ctr) to check the validation harness.",
                    "Turned scores into six reason-coded action archetypes with human-review requirements and an explicit list of what should never be automated.",
                    "Wrote and published the research paper, and completed Anthropic Academy courses on AI fluency and Claude API usage.",
                ],
            },
        ],
    },
    {
        group: "Training & Apprenticeships",
        roles: [
            {
                company: "Skill Shikshya",
                title: "Data Science & ML Apprentice",
                period: "Apr 2026 – Jun 2026",
                kind: "Apprenticeship",
                bullets: [
                    "Worked through ML mathematics, vector computation, classical ML, and deep-learning fundamentals with hands-on projects.",
                    "Built and served ML applications with FastAPI and containerized them with Docker.",
                    "Completed and defended the final project in July 2026.",
                ],
            },
        ],
    },
    {
        group: "Software Engineering (alongside my degree)",
        roles: [
            {
                company: "Walkers Hive IT Professionals",
                title: "Full-Stack Engineer Intern",
                period: "Oct 2025 – Dec 2025",
                kind: "Mandatory academic internship",
                bullets: [
                    "Independently designed and implemented the architecture of the AcademiaOS MVP.",
                    "Built backend services with FastAPI and Celery and a Next.js frontend.",
                    "Implemented HTTP-only cookie authentication and role-based access control (RBAC); used Docker in development and deployment.",
                ],
            },
            {
                company: "Nextwave Technology",
                title: "Software Engineer",
                period: "Apr 2025 – Jul 2025",
                kind: "Contract",
                bullets: [
                    "Shipped features, bug fixes, and a UI revamp, and supported the Google Play Store launch of the Academia mobile app.",
                    "Maintained existing Flutter codebases and migrated corporate websites to Next.js.",
                ],
            },
            {
                company: "Walkers Hive IT Professionals",
                title: "Software Engineer",
                period: "Nov 2024 – Apr 2025",
                kind: "Contract",
                bullets: [
                    "Built an e-commerce admin panel with React, MUI, and Redux-Saga.",
                    "Developed Next.js frontends integrated with existing PHP backends.",
                ],
            },
            {
                company: "CodSoft",
                title: "Android Development Intern",
                period: "Dec 2023 – Jan 2024",
                kind: "Internship",
                bullets: [
                    "Built Flutter apps with Firebase Authentication, local persistence, and BLoC state management.",
                ],
            },
        ],
    },
];

export const education = {
    degree: "Bachelor of Computer Application (BCA)",
    school: "Nihareeka College of Management and Information Technology",
    university: "Tribhuvan University, Nepal",
    period: "Completed final semester coursework and examination in August 2026",
    note: "No remaining academic obligations, so I'm available for full-time work immediately.",
};

export const certifications: {
    group: string;
    items: { name: string; issuer: string; href?: string }[];
}[] = [
    {
        group: "Internship & Diploma",
        items: [
            {
                name: "Machine Learning Internship Certificate",
                issuer: "FlyRank AI",
                href: "https://internship.flyrank.ai/verify/FR-D11-20CBF-CC2BF?first_name=Bibek",
            },
            {
                name: "Data Science & ML Diploma",
                issuer: "Skill Shikshya",
                href: "https://skillshikshya.com/verify-certificates/DSAMLDC260023",
            },
        ],
    },
    {
        group: "Anthropic Academy",
        items: [
            {
                name: "Claude Code in Action",
                issuer: "Anthropic Academy",
                href: "https://verify.skilljar.com/c/ho48cm8wcsa9",
            },
            {
                name: "Building with the Claude API",
                issuer: "Anthropic Academy",
                href: "https://verify.skilljar.com/c/hg695uod5bb8",
            },
            {
                name: "MCP Advanced Topics",
                issuer: "Anthropic Academy",
                href: "https://verify.skilljar.com/c/bf7vbtdiv8ti",
            },
            {
                name: "Claude on Amazon Bedrock",
                issuer: "Anthropic Academy",
                href: "https://verify.skilljar.com/c/gesgzvi2zhk5",
            },
            {
                name: "Claude on Google Cloud",
                issuer: "Anthropic Academy",
                href: "https://verify.skilljar.com/c/umhhhrba6gkf",
            },
        ],
    },
    {
        group: "Kaggle",
        items: [
            {name: "Pandas", issuer: "Kaggle", href: "https://www.kaggle.com/bibekdhakal8366"},
            {name: "Feature Engineering", issuer: "Kaggle", href: "https://www.kaggle.com/bibekdhakal8366"},
            {name: "Intro to Machine Learning", issuer: "Kaggle", href: "https://www.kaggle.com/bibekdhakal8366"},
            {name: "Intermediate Machine Learning", issuer: "Kaggle", href: "https://www.kaggle.com/bibekdhakal8366"},
        ],
    },
];

export const contactCopy = {
    heading: "Get in touch",
    body: "I'm available immediately for full-time roles. The fastest way to reach me is the form below. If you'd rather talk first, book a short call.",
};
