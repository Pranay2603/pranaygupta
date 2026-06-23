const groups = [
  { label: "Languages", items: ["Python", "TypeScript", "JavaScript", "HTML", "CSS"] },
  { label: "Backend", items: ["FastAPI", "Flask", "Jinja2", "REST APIs", "Auth"] },
  { label: "AI / RAG", items: ["LangChain", "Groq API", "FAISS", "FastEmbed", "Hugging Face", "ChromaDB"] },
  { label: "Data", items: ["SQLite", "BCrypt", "Vector embeddings"] },
  { label: "Tooling", items: ["Git", "GitHub", "Render"] },
];

const education = [
  {
    school: "Indian Institute of Technology, Madras",
    degree: "BS in Data Science, Minor in Programming (Online)",
    note: "May 2023 — May 2027",
  },
  {
    school: "Guru Nanak Dev University, Amritsar",
    degree: "B.Tech in Electronics & Computer Engineering",
    note: "July 2023 — July 2027",
  },
];

export const Stack = () => {
  return (
    <section id="stack" className="py-24 md:py-32 container">
      <div className="grid grid-cols-12 gap-6 border-t rule pt-4 label text-muted-foreground mb-16">
        <span className="col-span-6">04 — Stack &amp; Education</span>
        <span className="col-span-6 text-right">What I've actually used, not what I've read about</span>
      </div>

      <div>
        {groups.map((g) => (
          <div
            key={g.label}
            className="grid grid-cols-12 gap-6 py-6 border-t border-border last:border-b items-baseline"
          >
            <div className="col-span-12 md:col-span-3 label">{g.label}</div>
            <div className="col-span-12 md:col-span-9 font-display text-2xl md:text-3xl leading-snug">
              {g.items.map((it, i) => (
                <span key={it}>
                  {it}
                  {i < g.items.length - 1 && (
                    <span className="text-muted-foreground/50 mx-3">/</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 grid grid-cols-12 gap-6 border-t rule pt-4 label text-muted-foreground mb-10">
        <span className="col-span-6">Education</span>
        <span className="col-span-6 text-right">Both in progress</span>
      </div>
      <div className="grid md:grid-cols-2 gap-10">
        {education.map((e) => (
          <div key={e.school} className="border-t border-border pt-6">
            <p className="label text-muted-foreground mb-3">Degree</p>
            <h3 className="font-display text-2xl md:text-3xl leading-tight">{e.school}</h3>
            <p className="text-foreground/85 mt-2">{e.degree}</p>
            <p className="label text-muted-foreground mt-4">{e.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
