const items = ["Flask", "Python", "RAG Systems", "TypeScript", "LangChain", "OpenAI", "REST APIs", "WebSockets", "SQLite", "Hugging Face"];

export const Marquee = () => {
  return (
    <section className="border-y border-border bg-ink text-cream py-8 overflow-hidden">
      <div className="flex marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center font-display text-3xl md:text-5xl px-8">
            <span className={i % 3 === 1 ? "italic font-light text-ember" : "font-medium"}>{item}</span>
            <span className="mx-8 w-2 h-2 rounded-full bg-cream/30" />
          </span>
        ))}
      </div>
    </section>
  );
};
