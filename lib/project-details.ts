export type ProjectDetail = {
  title: string;
  tagline: string;
  problem: string;
  role: string;
  stack: string[];
  architecture: string;
  outcomes: string[];
  image: string;
  /** Optional live deployment — shown as a "View live demo" button */
  liveUrl?: string;
  /** Optional public source link — shown as a "View source" button */
  repo?: string;
};

export const projectDetails: Record<string, ProjectDetail> = {
  "jarvis-life-os": {
    title: "JARVIS Life OS",
    tagline: "A gamified, sci-fi HUD operating system for your life",
    problem:
      "Habit and productivity apps are easy to abandon — they feel like chores, not progress. JARVIS Life OS reframes self-improvement as a game: every area of your life is a pillar you level up, with the feedback loops (XP, streaks, combos) that make games genuinely sticky.",
    role:
      "Solo build of the whole product — the JARVIS HUD interface, the XP/leveling and streak-multiplier economy, the smart priority queue, the character-class system, and an optional Supabase persistence layer (it runs fully in demo mode with no backend).",
    stack: [
      "Next.js 16",
      "TypeScript",
      "Zustand",
      "Supabase",
      "Framer Motion",
      "Tailwind CSS",
    ],
    architecture:
      "Six life pillars (Mind, Body, Work, Wealth, Spirit, Social) each carry XP, level, and streak state in Zustand. A priority engine ranks daily quests by urgency, streak risk, pillar balance, energy, and difficulty flow; completing them awards XP with streak multipliers, multi-pillar combo bonuses, and perfect-day rewards, and your dominant pillar evolves your character class. Supabase backs persistence and auth when configured; otherwise everything runs client-side in demo mode.",
    outcomes: [
      "Playable end to end with sample data out of the box — no backend required.",
      "A complete game economy: difficulty-tiered XP, streak multipliers up to 2.0×, multi-pillar combo and perfect-day bonuses, and a radar chart for life balance.",
      "Deployed live on Vercel.",
    ],
    image: "/images/projects/jarvis.svg",
    liveUrl: "https://jarvis-life-os-theta.vercel.app",
    repo: "https://github.com/UnmannedArchive/jarvis-life-os",
  },
  signspeak: {
    title: "SignSpeak",
    tagline: "Real-time ASL word recognition — skeleton in, English out",
    problem:
      "Full ASL translation — connected signing, with grammar carried by facial expression and the space around the signer — is an open research problem. SignSpeak deliberately does the part that genuinely works well: isolated, word-level recognition, in real time from a plain webcam, and stays honest about that scope.",
    role:
      "Solo build, end to end: the MediaPipe landmark pipeline, the bidirectional LSTM classifier, landmark-space data augmentation, the WLASL download/training tooling, and the OpenCV live demo — plus a Claude layer that turns recognized glosses into fluent English.",
    stack: ["Python", "PyTorch", "MediaPipe", "OpenCV", "Claude API"],
    architecture:
      "The core trick: never feed pixels to the model. Every frame — recorded WLASL clip or live webcam — is reduced to a normalized skeleton of hand and upper-body landmarks, which strips away signer appearance, background, and resolution, so a model trained on WLASL can recognize you. Pipeline: webcam / WLASL video → MediaPipe Holistic → normalized skeleton → bidirectional LSTM (temporal mean-pooling) → word → optional Claude pass for fluent English.",
    outcomes: [
      "44.1% held-out test accuracy across 18 signs — ~8× the 5.6% random baseline; landmark-space augmentation plus the bidirectional model lifted it from 35.3%.",
      "Runs immediately: a pre-trained model ships in the repo, and the demo falls back to an offline word-join when no Claude key is set.",
      "Scoped as a strong proof-of-concept; the clearest next win is simply more clips per gloss to close the WLASL→webcam domain gap.",
    ],
    image: "/images/projects/signspeak.svg",
    repo: "https://github.com/UnmannedArchive/signspeak",
  },
  clearread: {
    title: "ClearRead",
    tagline: "An accessible, AI-powered article reader",
    problem:
      "Dense articles are a barrier for a lot of readers — dyslexia, ADHD, low vision, or just limited time. ClearRead puts several proven accessibility aids and an AI summary behind one simple reader, so the same article can meet readers where they are.",
    role:
      "Solo build, shipped as a single self-contained HTML/CSS/JS file with no build step: the reader UI, the reading modes, the Claude summarization call, and the text-to-speech integration.",
    stack: ["JavaScript", "HTML / CSS", "Claude API", "Web Speech API"],
    architecture:
      "Paste a URL or text and the article is normalized into a clean reader view. A Claude (claude-sonnet-4-6) call produces the summary; the browser's SpeechSynthesis API drives text-to-speech; and the reading aids — dyslexia-friendly fonts, bionic reading (bolded word stems), and adjustable speed-reading — are layered as toggleable view transforms. Everything runs client-side in one file.",
    outcomes: [
      "Multiple accessibility modes in one place: AI summaries, dyslexia-friendly type, bionic reading, speed reading, and text-to-speech.",
      "Zero-dependency, single-file app — trivial to host or share.",
    ],
    image: "/images/projects/clearread.svg",
    repo: "https://github.com/UnmannedArchive/clearread",
  },
};

export function getProjectSlugs() {
  return Object.keys(projectDetails);
}
