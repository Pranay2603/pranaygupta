import { useEffect, useState } from "react";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur border-b border-border" : ""
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        <a href="#top" className="label">
          Pranay Gupta <span className="text-muted-foreground">/ Portfolio ’26</span>
        </a>

        <nav className="hidden md:flex items-center gap-7 label">
          {links.map((l, i) => (
            <a key={l.href} href={l.href} className="hover:text-foreground text-muted-foreground transition-colors">
              <span className="num text-foreground/40 mr-1.5">{String(i + 1).padStart(2, "0")}</span>
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="label hidden sm:inline-flex items-center gap-2 hover:text-foreground">
          <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent))]" />
          Available
        </a>
      </div>
    </header>
  );
};
