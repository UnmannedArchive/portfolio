export type ProjectDetail = {
  title: string;
  tagline: string;
  problem: string;
  role: string;
  stack: string[];
  architecture: string;
  outcomes: string[];
  image: string;
};

export const projectDetails: Record<string, ProjectDetail> = {
  lattice: {
    title: "Lattice",
    tagline: "AI-powered pharmaceutical patent analytics",
    problem:
      "R&D and IP teams spend heavily on chemical patent search and prior-art analysis. Existing workflows are slow, siloed, and weak on similarity and generative exploration across large compound libraries.",
    role:
      "Co-founder owning go-to-market, financial modeling, and technical direction alongside model choices (LSTM/VLM) and embedding ~3M compounds for search and generative chemistry; enterprise traction with four biopharma design partners.",
    stack: [
      "Python",
      "LLM / VLM",
      "Vector search",
      "REST APIs",
      "Financial modeling",
    ],
    architecture:
      "Compound ingestion → embedding models (LSTM/VLM) → vector index for similarity and generative workflows → APIs and product surfaces for partner pilots; layered with unit economics and revenue hypotheses for Dorm Room Fund diligence.",
    outcomes: [
      "Pitched to VC judges and 200+ attendees; LavaLab Best Product and Judges’ Choice; $200K valuation milestone with Dorm Room Fund.",
      "Four biopharma design partners via enterprise outreach.",
      "Targeting a large IP-intelligence market with clear wedge in chemical patent analytics.",
    ],
    image: "/images/projects/lattice.svg",
  },
  "quant-research": {
    title: "BlackGen Quant Stack",
    tagline: "Signals, ensembles, and committee-ready recommendations",
    problem:
      "Student investment groups need reproducible research pipelines—from alternative data and fundamentals to portfolio construction—without relying on ad hoc spreadsheets.",
    role:
      "Portfolio analyst building proprietary Python pipelines: gradient boosting + LSTM ensembles, NLP sentiment on earnings and news, DCFs and comps, and mean-variance optimization for committee presentations.",
    stack: ["Python", "Pandas", "ML ensembles", "LSTM", "NLP", "Excel"],
    architecture:
      "Data ingest (prices, transcripts, news) → feature store → ensemble models for alpha signals → optimization layer → memo and deck outputs for investment committee.",
    outcomes: [
      "Cross-sector equity work in technology and healthcare with DCF and comparable-company frameworks.",
      "Systematic signals and portfolio construction narratives presented to BlackGen leadership.",
    ],
    image: "/images/orgs/blackgen.png",
  },
  "behavioral-lab": {
    title: "Behavioral Lab Research & ML",
    tagline: "Large-N studies, LLM parsers, RLHF evaluation",
    problem:
      "Behavioral lab researchers need faster turnaround on cleaning, coding, and summarizing large surveys while improving LLM behavior on quantitative and finance-adjacent reasoning.",
    role:
      "AI research assistant: SPSS/R/Python pipelines, regression and ANOVA, custom GPT-based parser for extraction and classification, and RLHF-style evaluation of model outputs on multi-turn tasks.",
    stack: ["R", "Python", "SPSS", "GPT", "RLHF evaluation"],
    architecture:
      "Raw survey/experiment data → cleaning → statistical modeling → LLM parser for structured extraction → human-in-the-loop review and RLHF feedback loops.",
    outcomes: [
      "Parser cut manual analysis by 3+ hours on 1,000+ observation datasets.",
      "Clearer gains in model accuracy on finance-flavored reasoning benchmarks.",
    ],
    image: "/images/orgs/marshall-behavioral-lab.png",
  },
  "grant-intel": {
    title: "NHF Grant Intelligence",
    tagline: "180 Degrees Consulting · NLP grant scoring",
    problem:
      "National Health Foundation needed to prioritize dozens of national funding opportunities by expected value and strategic fit—without purely manual spreadsheet review.",
    role:
      "Senior consultant: designed NLP classification over 20+ funding sources, structured scoring criteria, and ranking aligned to buyside-style research habits.",
    stack: ["LLM-assisted research", "NLP", "Python", "Structured criteria"],
    architecture:
      "Source ingestion → NLP tagging and classification → scoring rubric → ranked shortlist with rationale for leadership.",
    outcomes: [
      "Actionable ranked pipeline for capital allocation conversations.",
      "Analogous to portfolio construction: diversifying bets across mission alignment and financial fit.",
    ],
    image: "/images/orgs/180dc.png",
  },
};

export function getProjectSlugs() {
  return Object.keys(projectDetails);
}
