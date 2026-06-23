import { motion } from "framer-motion";

type Project = {
  n: string;
  difficulty: "EASY" | "EASY-MED" | "MEDIUM" | "MED-HARD";
  title: string;
  tagline: string;
  why: string;
  requirements: string[];
  notes: string[];
  role: string;
  stack: string[];
  year: string;
  href?: string;
};

const projects: Project[] = [
  {
    n: "01",
    difficulty: "MED-HARD",
    year: "2025",
    title: "ResolveAI",
    tagline: "A multi-user AI support platform with a per-user RAG pipeline.",
    why:
      "Started as a weekend chatbot, kept growing. Each user signs in, uploads their own PDFs, and gets answers grounded in those documents instead of whatever the model felt like saying that day.",
    requirements: [
      "FastAPI backend with bcrypt auth, per-user sessions, and a SQLite store for chat history.",
      "RAG pipeline over user-uploaded PDFs using FastEmbed for embeddings and FAISS for retrieval.",
      "Groq's Llama 3.3 for generation, with the retrieved chunks passed in as context.",
      "Small analytics view showing conversation counts and whether the AI service is reachable.",
    ],
    notes: [
      "First deploy on Render kept getting OOM-killed — PyTorch alone ate the 512 MB free tier.",
      "Swapped PyTorch out for FastEmbed and the whole thing fits, with query latency under ~3s end-to-end.",
    ],
    role: "Designed the schema, wrote the API, did the deploy, fought the memory limits.",
    stack: ["Python", "FastAPI", "LangChain", "FAISS", "FastEmbed", "Groq", "SQLite"],
  },
  {
    n: "02",
    difficulty: "MEDIUM",
    year: "2025",
    title: "AI Scam Detection",
    tagline: "A rule-based classifier for suspicious messages, with reasons attached.",
    why:
      "I wanted something I could send to my parents that didn't just say \"scam: yes/no\" but actually pointed at the line that looked off. Models are great, but for this a transparent rule engine made more sense.",
    requirements: [
      "25+ pattern checks across urgency phrasing, money asks, suspicious keywords, and URL shape.",
      "Google OAuth, OTP-based password recovery, hashed passwords, signed sessions.",
      "Per-user history in SQLite so people can look back at what they checked and what flagged.",
      "A risk score with a short written explanation of why the message scored the way it did.",
    ],
    notes: [
      "Hit roughly 85% on the test cases I put together — small dataset, but consistent.",
      "Deployed on Render with all credentials living in env vars, not the repo.",
    ],
    role: "Solo build — auth, detection rules, dashboard, deploy.",
    stack: ["Python", "Flask", "SQLite", "Google OAuth"],
  },
  {
    n: "03",
    difficulty: "EASY-MED",
    year: "2024 — 2025",
    title: "Quiz-Master",
    tagline: "A role-based quiz platform, submitted for IIT Madras evaluation.",
    why:
      "Coursework project that got picked up in a two-stage review by IITM proctors. It's not flashy — it's a Flask app with admin and student dashboards — but it taught me how much of \"building software\" is actually boring schema work.",
    requirements: [
      "Admin and user roles, with separate dashboards and permissions for each.",
      "Full CRUD across subjects, chapters, questions, and quizzes — roughly 40 endpoints.",
      "Timed quiz flow with automatic scoring and per-user attempt history.",
      "Normalized 6-table SQLite schema, server-rendered with Jinja2.",
    ],
    notes: [
      "Selected through a two-stage evaluation by academic proctors at IIT Madras.",
      "Currently extending it with an admin analytics view.",
    ],
    role: "Built solo, start to finish.",
    stack: ["Python", "Flask", "SQLite", "Jinja2"],
  },
];

const Dots = ({ n }: { n: number }) => (
  <span className="inline-flex gap-1 align-middle">
    {Array.from({ length: 4 }).map((_, i) => (
      <span
        key={i}
        className={`w-2 h-2 rounded-full border border-foreground ${i < n ? "bg-foreground" : ""}`}
      />
    ))}
  </span>
);

const diffToDots = (d: Project["difficulty"]) =>
  ({ EASY: 1, "EASY-MED": 2, MEDIUM: 3, "MED-HARD": 4 }[d]);

export const Work = () => {
  return (
    <section id="work" className="py-24 md:py-32 container">
      <div className="grid grid-cols-12 gap-6 border-t rule pt-4 label text-muted-foreground mb-16">
        <span className="col-span-6">02 — Selected Work</span>
        <span className="col-span-6 text-right">{projects.length} projects · all live on Render</span>
      </div>

      <div className="space-y-24 md:space-y-32">
        {projects.map((p) => (
          <motion.article
            key={p.n}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <div className="flex items-center justify-between label">
              <div className="flex items-center gap-4">
                <span className="text-foreground">PROJECT {p.n}</span>
                <Dots n={diffToDots(p.difficulty)} />
              </div>
              <span>{p.difficulty}</span>
            </div>

            <h3 className="font-display text-4xl md:text-6xl tracking-tight mt-6 text-balance">
              {p.title}
            </h3>
            <p className="font-display italic text-xl md:text-2xl text-muted-foreground mt-3">
              {p.tagline}
            </p>

            <hr className="rule border-t mt-10" />

            <div className="mt-8">
              <p className="label mb-3">Why I built it</p>
              <p className="text-foreground/85 leading-relaxed max-w-3xl">{p.why}</p>
            </div>

            <hr className="border-border mt-10" />

            <div className="mt-8">
              <p className="label mb-4">What's actually in it</p>
              <ol className="space-y-3">
                {p.requirements.map((r, i) => (
                  <li key={i} className="flex gap-4 text-foreground/85 leading-relaxed">
                    <span className="font-mono text-xs num text-muted-foreground pt-1 w-6 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{r}</span>
                  </li>
                ))}
              </ol>
            </div>

            <hr className="border-border mt-10" />

            <div className="mt-8 grid md:grid-cols-2 gap-8">
              <div>
                <p className="label mb-4">Notes from building it</p>
                <ul className="space-y-3 text-foreground/85 leading-relaxed">
                  {p.notes.map((s) => (
                    <li key={s} className="flex gap-3">
                      <span className="text-muted-foreground">—</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="label mb-4">My role</p>
                <p className="text-muted-foreground italic font-display text-lg leading-relaxed">
                  {p.role}
                </p>
              </div>
            </div>

            <hr className="border-border mt-10" />

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 label">
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                <span className="text-muted-foreground">Stack —</span>
                {p.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
              <span className="text-muted-foreground">{p.year}</span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};
