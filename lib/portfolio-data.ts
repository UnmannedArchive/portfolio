export const educationPrograms: {
  school: string;
  college?: string;
  location: string;
  degree: string;
  detail: string;
  end: string;
  gpa?: { value: string; scale: string; note: string };
}[] = [
  {
    school: "University of Southern California",
    college: "Marshall School of Business",
    location: "Los Angeles, California",
    degree:
      "B.S. in Business Administration, AI minor; M.S. in Finance (PDP)",
    detail:
      "Progressive degree program — AI minor alongside graduate finance coursework.",
    end: "Expected graduation: December 2027",
    gpa: {
      value: "3.7",
      scale: "4.00",
      note: "Cumulative GPA.",
    },
  },
  {
    school: "Community College",
    location: "California",
    degree: "A.A. in Anthropology",
    detail:
      "Foundation in cultural and biological anthropology — transferred to USC.",
    end: "Completed",
  },
];

export const relevantCoursework = [
  "Machine learning & applied AI",
  "Quantitative methods & econometrics",
  "Corporate finance & valuation",
  "Investments & portfolio theory",
  "Financial modeling (Excel / Python)",
  "Data science for business",
];

export type Award = {
  title: string;
  issuer: string;
  year: string;
  detail: string;
  logo?: string;
  /** Optional prize line (e.g. cash award) — triggers featured callout UI */
  prizeLabel?: string;
};

export const awards: Award[] = [
  {
    title: "LavaLab Best Product Winner",
    issuer: "USC LavaLab",
    year: "—",
    detail:
      "Top product among USC’s flagship student incubator cohorts — presented Lattice live to judges and 200+ attendees, reflecting the strongest venture narrative and in-room prototype traction.",
    logo: "/images/orgs/lavalab.png",
    prizeLabel: "$1,000 awarded",
  },
  {
    title: "USC Merit & Dean Scholar (3×)",
    issuer: "University of Southern California",
    year: "—",
    detail:
      "Renewed merit-based and Dean’s scholarship support — typically reflects sustained academic performance and contribution within Marshall.",
  },
  {
    title: "UCI HTCC Presenter",
    issuer: "UC Irvine — Honors Transfer Council of California",
    year: "—",
    detail:
      "Honors transfer showcase: selected to present research or academic work to the HTCC community — competitive slot for strong community-college-to-university pathways.",
  },
  {
    title: "Grismer Scholar",
    issuer: "USC Marshall",
    year: "—",
    detail:
      "Marshall Scholar designation for high-achieving undergraduates, often tied to leadership, academics, and school citizenship.",
  },
];

export type ExperienceItem = {
  period: string;
  role: string;
  org: string;
  location: string;
  /** Short plain-language hook before dense résumé bullets */
  summaryPlain: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    period: "May 2025 – August 2025",
    role: "Wealth Management Intern",
    org: "Mariner",
    location: "New York, New York",
    summaryPlain:
      "I spent the summer on a wealth team overseeing billions in client assets—helping advisors explain portfolios, tax trade-offs, and new opportunities to real clients, not just classroom cases.",
    bullets: [
      "Conducted multi-asset research across equities and fixed income using Bloomberg Terminal and Morningstar Direct, deploying GPT and VLM-based tooling for quantitative screening and risk-factor decomposition across 100+ portfolios, contributing to allocation strategies that realized $500K+ in capital gains.",
      "Collaborated with the investment team to engineer tax-loss harvesting and rebalancing workflows across $3B+ AUM, optimizing after-tax risk-adjusted returns through data-driven portfolio construction and compliance-aware execution.",
    ],
  },
  {
    period: "September 2024 – Present",
    role: "Co-founder",
    org: "Lattice",
    location: "Los Angeles, California",
    summaryPlain:
      "I’m building Lattice with classmates and partners: an AI layer on top of pharma patent and compound data so R&D teams move faster from idea → IP. I split time between pitching, modeling the business, and shipping models.",
    bullets: [
      "Co-founded Lattice, an AI-powered pharmaceutical patent analytics platform targeting a $14B IP intelligence market; led go-to-market strategy, financial modeling, and capital allocation as co-founder while pitching to VC judges and 200+ attendees, securing a $200K valuation from Dorm Room Fund.",
      "Deployed LSTM and VLM architectures to embed ~3M chemical compounds as vectors for similarity search and generative chemistry; secured four biopharmaceutical design partners through enterprise outreach and built unit economics and revenue models to validate commercial viability.",
    ],
  },
  {
    period: "December 2024 – Present",
    role: "AI Research Assistant",
    org: "USC Marshall Behavioral Lab",
    location: "Los Angeles, California",
    summaryPlain:
      "I help professors and Ph.D. students go from messy experiment data to publishable insights—and I experiment with how LLMs can speed up the coding of survey responses without losing rigor.",
    bullets: [
      "Cleaned, transformed, and analyzed large-scale datasets (N > 1,000) using R, Python, and SPSS — multivariate regression, ANOVA, and predictive modeling for behavioral patterns — while evaluating LLM outputs on multi-turn reasoning tasks for RLHF to improve model accuracy on quantitative and finance-adjacent problems.",
      "Engineered a custom GPT-based LLM parser to automate extraction, variable classification, and summary generation, cutting manual analysis by 3+ hours on datasets exceeding 1,000 observations.",
    ],
  },
];

export const leadership: ExperienceItem[] = [
  {
    period: "August 2024 – Present",
    role: "Technical Product Manager & Co-founder — Lattice",
    org: "LavaLab USC",
    location: "Los Angeles, California",
    summaryPlain:
      "LavaLab is where Lattice graduated from idea to demo nights—think weekly builds, sharp critiques, and a room full of people who’ve raised real funding before.",
    bullets: [
      "Accepted into LavaLab, USC’s product incubator (28 students per semester), whose alumni have raised significant VC funding; led cross-functional teams through a YC-style curriculum to build and pitch AI ventures to top firms.",
      "Architected full-stack AI infrastructure for Lattice — LLM/VLM training, vector embeddings for ~3M chemical compounds, and REST APIs — earning LavaLab Best Product and Judges’ Choice Awards.",
    ],
  },
  {
    period: "August 2023 – Present",
    role: "Portfolio Analyst",
    org: "BlackGen Capital USC",
    location: "Los Angeles, California",
    summaryPlain:
      "BlackGen is where I turned weekend quant projects into committee-ready memos—building models I’d actually trust with (play) money on the line.",
    bullets: [
      "Engineered a proprietary Python quantitative trading system with ensemble ML (gradient boosting and LSTM) and NLP sentiment on earnings calls and news to generate alpha signals across equities and fixed income.",
      "Conducted cross-sector equity research (technology and healthcare) with DCF and comparable-company models in Python and Excel; applied factor-based portfolio construction and mean-variance optimization for recommendations to BlackGen’s investment committee.",
    ],
  },
  {
    period: "January 2024 – Present",
    role: "Senior Advisor & Consultant",
    org: "180 Degrees Consulting at USC",
    location: "Los Angeles, California",
    summaryPlain:
      "180 is hyper-selective consulting for nonprofits—I lead work that feels like mini–due diligence: find the best use of scarce capital, document it, and present to clients who matter.",
    bullets: [
      "Selected into 180 Degrees Consulting (~sub-3% acceptance); used AI-powered research and quantitative screening to evaluate investment-grade funding opportunities, synthesizing financial, demographic, and mission-alignment signals via LLM-assisted analysis for capital allocation.",
      "Built an AI-driven grant scoring model for the National Health Foundation — NLP classification across 20+ national funding sources to rank opportunities by expected value and strategic fit, mirroring buyside research and portfolio construction workflows.",
    ],
  },
];

export type ProjectCard = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
};

export const projects: ProjectCard[] = [
  {
    slug: "lattice",
    title: "Lattice",
    description:
      "Pharmaceutical patent analytics for a $14B IP intelligence market — go-to-market, Dorm Room Fund milestone ($200K valuation), LSTM/VLM embeddings over ~3M compounds, and four biopharma design partners.",
    tags: ["AI/ML", "Patents", "Venture"],
    image: "/images/projects/lattice.svg",
  },
  {
    slug: "quant-research",
    title: "BlackGen Quant Stack",
    description:
      "Python ensemble ML (boosting + LSTM), NLP sentiment on earnings and news, and optimization-driven recommendations presented to an investment committee.",
    tags: ["Python", "Quant", "Research"],
    image: "/images/orgs/blackgen.png",
  },
  {
    slug: "behavioral-lab",
    title: "Behavioral Lab Research & ML",
    description:
      "Large-N behavioral analysis in R/Python/SPSS plus GPT parsers and RLHF evaluation loops for finance-adjacent reasoning tasks.",
    tags: ["LLM", "RLHF", "Research"],
    image: "/images/orgs/marshall-behavioral-lab.png",
  },
  {
    slug: "grant-intel",
    title: "NHF Grant Intelligence",
    description:
      "180 Degrees Consulting engagement: NLP-driven grant opportunity scoring across 20+ national sources for the National Health Foundation.",
    tags: ["NLP", "Social impact", "Consulting"],
    image: "/images/orgs/180dc.png",
  },
];

export const skillGroups = {
  languagesFrameworks: ["Python", "R", "Java", "C++", "C#", "SQL"],
  dataMl: [
    "Snowflake",
    "AWS",
    "Generative AI",
    "Tableau",
    "GitHub",
    "Machine Learning (coursework)",
  ],
  financePlatforms: [
    "Bloomberg",
    "FactSet",
    "Morningstar",
    "Orion",
    "Fidelity",
    "Charles Schwab",
    "eMoney",
    "CAIS",
  ],
  productDesign: ["Figma", "Amplitude", "Mixpanel", "Segment", "Salesforce"],
  collaboration: ["Notion", "Slack", "Jira"],
} as const;

/** Highlight depth for a subset of tools */
export const skillProficiency: {
  name: string;
  level: "day-to-day" | "advanced" | "proficient";
}[] = [
  { name: "Python", level: "day-to-day" },
  { name: "SQL", level: "advanced" },
  { name: "Bloomberg", level: "advanced" },
  { name: "R", level: "proficient" },
  { name: "Excel / Financial Modeling", level: "day-to-day" },
];

export const organizations = [
  "LavaLab",
  "180 Degrees Consulting",
  "Marshall Behavioral Lab",
  "Trojan Investment Society",
  "BlackGen Capital",
];

export const humanLanguages = [
  "English (native)",
  "Spanish (working proficiency)",
  "French (working proficiency)",
];

export const interests: { label: string; href?: string; hint?: string }[] = [
  {
    label: "Y2K-era music",
    href: "https://open.spotify.com/",
    hint: "Playlist rabbit holes",
  },
  {
    label: "Tottenham Hotspur",
    href: "https://www.tottenhamhotspur.com/",
  },
  { label: "Anime" },
  { label: "World War II history" },
  { label: "Zoology" },
  { label: "Watches" },
  { label: "Pickup basketball" },
];
