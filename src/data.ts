/**
 * Site content — this is the only file you need to edit to update the portfolio.
 *
 * Add a project:   append an object to `projects`
 * Add experience:  append an object to `experience`
 * Add a fun fact:  append an object to `funFacts`
 *
 * UI components map over these arrays. They never hardcode personal data.
 */

import portrait from "./assets/hot2.jpg";
import reclarifAI from "./assets/reclarifAI.jpg";
import socialStock from "./assets/stock.png";
import liftScope from "./assets/liftscope.jpg";

export type SocialLink = {
  id: string;
  label: string;
  href: string;
};

export type SkillGroup = {
  id: string;
  category: string;
  items: string[];
};

export type Experience = {
  id: string;
  org: string;
  role: string;
  location?: string;
  period?: string;
  summary: string;
  highlights: string[];
  tags: string[];
};

export type Project = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  image?: string;
  featured?: boolean;
};

export type FunFact = {
  id: string;
  kicker: string;
  text: string;
};

export const profile = {
  name: "David Oprea",
  role: "Computer Science student",
  school: "Purdue University",
  location: "West Lafayette, IN",
  headline:
    "I like making software, making sense of data, and getting things actually deployed.",
  intro:
    "Purdue CS, with a soft spot for data science, data engineering, and enough Docker and cloud to get a project out the door. When a problem looks like a puzzle, I will sit with it until it clicks.",
  currently: [
    "solving a good puzzle",
    "cleaning a messy dataset",
    "containerizing something in Docker",
    "shipping something people can use",
    "adding five pounds to the bench",
    "hanging out with Belle and Tiger",
    "hunting down fried chicken",
    "training a model that actually converges",
    "debugging something that worked yesterday",
    "getting a project out of localhost",
  ],
  portrait,
  resumeUrl: "/Resume.pdf",
  resumeFilename: "David-Oprea-Resume.pdf",
};

export const socials: SocialLink[] = [
  { id: "github", label: "GitHub", href: "https://github.com/DavidOprea" },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/david-oprea/" },
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/davidoprea1" },
];

export const nav = [
  { id: "home", label: "home", href: "#home" },
  { id: "experience", label: "experience", href: "#experience" },
  { id: "projects", label: "projects", href: "#projects" },
  { id: "facts", label: "fun-facts", href: "#facts" },
];

export const skills: SkillGroup[] = [
  {
    id: "languages",
    category: "Languages",
    items: ["C++", "Python", "Java", "TypeScript"],
  },
  {
    id: "fullstack",
    category: "Full Stack",
    items: ["React", "React Native", "Expo", "Next.js", "Flask", "FastAPI"],
  },
  {
    id: "data",
    category: "Data & ML",
    items: ["Pandas", "NumPy", "PostgreSQL", "PyTorch", "fastai"],
  },
  {
    id: "cloud",
    category: "Cloud & Infra",
    items: ["Docker", "Git", "Linux", "REST APIs", "System Design"],
  },
  {
    id: "puzzles",
    category: "Puzzles",
    items: ["Data Structures", "Algorithms", "USACO Platinum"],
  },
];

export const experience: Experience[] = [
  {
    id: "five-below",
    org: "Five Below",
    role: "IT / AI Intern",
    location: "AI Center of Excellence",
    period: "June 2026 – Aug 2026",
    summary:
      "I helped Five Below actually adopt AI — not as a slide deck, as tools about 3,000 people could open on a Monday.",
    highlights: [
      "Designed and shipped a company-wide prompt library with four tool-specific playbooks (Glean, Copilot, Cursor, Claude), deployed on FiveTogether for ~3,000 employees.",
      "Researched infrastructure for the AI Center of Excellence so evaluations could run company-wide, not just in a corner of IT.",
    ],
    tags: ["Prompt Engineering", "Claude", "Glean", "Copilot", "Cursor"],
  },
  {
    id: "mascotgo",
    org: "MascotGO",
    role: "Software Engineering Intern · Student in Residence",
    period: "Dec 2025 – June 2026",
    summary:
      "I built the sports-identity data that MascotGO's recommendations actually run on — production matching, not a spreadsheet with hope in it.",
    highlights: [
      "Engineered a sports identity database covering 1,000+ schools with 13 custom fields each, hitting ~99% accuracy on college-to-mascot matching in production.",
      "Implemented fuzzy matching and SQL validation pipelines so all 1,000+ records stayed production-grade for college matching and recommendations.",
    ],
    tags: ["PostgreSQL", "Data Engineering", "Fuzzy Matching", "Production Data"],
  },
  {
    id: "purdue-stack",
    org: "Purdue Stack",
    role: "Full Stack Developer",
    location: "Wigly",
    period: "Sept 2025 – Dec 2025",
    summary:
      "I helped build Wigly, a research platform that lets Purdue geologists actually see seismic data instead of drowning in files.",
    highlights: [
      "Built a seismic analysis platform in Electron, React, and Flask, used by 10+ Purdue geology researchers across 4M+ events.",
      "Wired Plotly and D3.js for interactive visualization, with import for CSV, miniSEED, HDF5, and XML, plus plot export for papers.",
    ],
    tags: ["Electron", "React", "Flask", "Plotly", "D3.js"],
  },
  {
    id: "boiler-quant",
    org: "Boiler Quant",
    role: "Quantitative Analyst",
    period: "Sept 2025 – Present",
    summary:
      "I worked on the market plumbing for a social stock exchange — liquidity, the order book, and making sure the money actually lands.",
    highlights: [
      "Engineered a liquidity rewards system, an order book, and Stripe-backed deposits, with market mechanics designed to keep market makers in the game.",
    ],
    tags: ["Stripe", "Order Book", "Marketplace Design"],
  },
  {
    id: "ml-purdue",
    org: "ML@Purdue",
    role: "Machine Learning Researcher · VGC-RL",
    period: "Sept 2025 – Present",
    summary:
      "I treated competitive Pokémon like a real sequential decision problem — enormous state space, partial information, and no room for sloppy gradients.",
    highlights: [
      "Architected a Deep RL agent for Pokémon VGC (Gen 9) with a spatio-temporal transformer, PPO, and fictitious self-play — 98.2% vs random, 76.2% vs a heuristic baseline, a 938-point jump over the prior semester.",
      "Built a high-throughput policy model and behavior cloning so the agent actually kept state, trained faster, and converged.",
    ],
    tags: ["Deep RL", "PPO", "PyTorch", "Transformers"],
  },
];

export const projects: Project[] = [
  {
    id: "liftscope",
    name: "LiftScope",
    tagline: "Point the camera at a gym machine. Get the name, the how-to, and a log.",
    description:
      "A React Native + Expo app that identifies gym equipment in real time — on-device TensorFlow Lite for speed, with a PyTorch cloud fallback when you need the extra accuracy. After the scan you get tutorials, muscle groups, and a workout log that syncs to Postgres. The classifier is trained with PyTorch and fastai, and it is tuned for Purdue gyms, because similar machines from different brands will happily lie to a generic model.",
    tags: ["React Native", "Expo", "PyTorch", "fastai", "TensorFlow Lite", "FastAPI", "PostgreSQL"],
    github: "https://github.com/DavidOprea/LiftScope",
    image: liftScope,
    featured: true,
  },
  {
    id: "reclarifai",
    name: "ReclarifAI",
    tagline: "A matching game that refuses to let you cheat with your eyes.",
    description:
      "Most matching games quietly become a shape-recognition contest — you memorize the blob of text, not the idea. ReclarifAI uses AI to rewrite every card while keeping the meaning intact, so the only way to win is to actually learn the material. Built to make studying honest again.",
    tags: ["AI", "Education", "React", "Product"],
    github: "https://github.com/DavidOprea/ReclairifAI",
    image: reclarifAI,
  },
  {
    id: "social-stock",
    name: "Social Stock Exchange",
    tagline: "Real-time trading, with a social graph attached.",
    description:
      "A full-stack social trading platform in Next.js: live market data, portfolio management, friend graphs, community stock calls, and WebSocket updates that actually feel live. TypeScript, Tailwind, and Supabase on the backend — finance mechanics plus the messy human layer that makes markets interesting.",
    tags: ["Next.js", "TypeScript", "WebSockets", "Supabase", "Tailwind"],
    github: "https://github.com/monishmuralicharan/SocialStockExchange",
    image: socialStock,
  },
  {
    id: "wigly",
    name: "Wigly",
    tagline: "Seismic data, visualized instead of endured.",
    description:
      "A research desktop app for seismic analysis — Electron, React, and Flask on the outside, 4M+ events on the inside. Interactive Plotly and D3.js plots, import for CSV, miniSEED, HDF5, and XML, and export that is actually usable in a paper. Built with Purdue Stack for geology researchers who should not have to stare at raw waveforms for a living.",
    tags: ["Electron", "React", "Flask", "Plotly", "D3.js"],
    github: "https://github.com/Purdue-Stack/proj-seismic-data-visualization",
  },
  {
    id: "vgc-rl",
    name: "Pokémon VGC RL Agent",
    tagline: "Deep RL that learns to play the long game.",
    description:
      "A PyTorch agent for competitive Pokémon VGC (Gen 9). Spatio-temporal transformer, PPO, and fictitious self-play — 98.2% vs random, 76.2% vs a heuristic baseline, and a 938-point jump over the prior semester. Plus a high-throughput policy and behavior cloning so training speed and state retention are not a wish.",
    tags: ["PyTorch", "PPO", "Deep RL", "Transformers"],
    github: "https://github.com/akkshay0107/vgc-rl",
  },
];

export const funFacts: FunFact[] = [
  {
    id: "food",
    kicker: "fuel",
    text: "My favorite food is fried chicken. That's the whole review. Undefeated.",
  },
  {
    id: "cats",
    kicker: "pets",
    text: "I have two cats, Belle and Tiger. They keep me company and help me relax at home.",
  },
  {
    id: "gym",
    kicker: "training",
    text: "I can bench about 145 pounds for 8 reps. (I will improve. This is on the record.)",
  },
  {
    id: "beach",
    kicker: "pet peeves",
    text: "I hate getting sand all over me at the beach — especially in my shoes.",
  },
];
