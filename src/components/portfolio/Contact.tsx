import { ArrowUpRight } from "lucide-react";

const channels = [
  { k: "Email", label: "pranaygupta585@gmail.com", href: "mailto:pranaygupta585@gmail.com" },
  { k: "Phone", label: "+91 90561 29686", href: "tel:+919056129686" },
  { k: "LinkedIn", label: "in/pranay-gupta", href: "https://www.linkedin.com/in/pranay-gupta-11aab4293/" },
  { k: "GitHub", label: "github.com/Pranay2603", href: "https://github.com/Pranay2603" },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 container">
      <div className="grid grid-cols-12 gap-6 border-t rule pt-4 label text-muted-foreground mb-16">
        <span className="col-span-6">05 — Contact</span>
        <span className="col-span-6 text-right">I usually reply within a day</span>
      </div>

      <h2 className="font-display text-5xl md:text-8xl tracking-tight leading-[0.95] text-balance max-w-5xl">
        Want to work on something
        <em className="italic"> together?</em>
      </h2>

      <div className="mt-16 grid md:grid-cols-12 gap-10">
        <p className="md:col-span-5 text-foreground/85 leading-relaxed">
          I'm looking for a summer 2026 internship in backend or AI engineering. Open to freelance work
          too, especially anything around FastAPI, Flask, or small RAG setups. Email is the fastest way to
          reach me.
        </p>

        <ul className="md:col-span-6 md:col-start-7">
          {channels.map((c) => (
            <li key={c.k}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group grid grid-cols-12 gap-4 items-center py-5 border-t border-border last:border-b transition-colors hover:text-[hsl(var(--accent))]"
              >
                <span className="col-span-3 label text-muted-foreground group-hover:text-[hsl(var(--accent))]">
                  {c.k}
                </span>
                <span className="col-span-8 font-display text-xl md:text-2xl break-all">{c.label}</span>
                <ArrowUpRight className="col-span-1 w-4 h-4 justify-self-end opacity-40 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-24 grid grid-cols-12 gap-6 border-t rule pt-4 label text-muted-foreground">
        <span className="col-span-4">© 2026 Pranay Gupta</span>
        <span className="col-span-4 text-center hidden md:block">Built solo · Amritsar</span>
        <span className="col-span-8 md:col-span-4 text-right">v1.0</span>
      </div>
    </section>
  );
};
