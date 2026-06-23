import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section id="top" className="min-h-screen flex flex-col justify-between pt-28 pb-10">
      <div className="container">
        {/* Top meta strip */}
        <div className="grid grid-cols-12 gap-6 label text-muted-foreground border-t rule pt-4">
          <span className="col-span-6 md:col-span-3">Pranay Gupta</span>
          <span className="hidden md:block md:col-span-3">Amritsar, IN</span>
          <span className="hidden md:block md:col-span-3">B.Tech ECE · BS Data Science, IITM</span>
          <span className="col-span-6 md:col-span-3 text-right md:text-left">
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent))]" />
              Looking for 2026 internships
            </span>
          </span>
        </div>

        {/* Headline */}
        <div className="mt-20 md:mt-28">
          <p className="label mb-8">Portfolio — last updated June 2026</p>
          <h1 className="font-display leading-[0.95] tracking-tight text-balance text-[14vw] md:text-[8.5rem]">
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="block"
            >
              Backend developer,
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12 }}
              className="block italic text-foreground/80"
            >
              mostly Python &amp; FastAPI.
            </motion.span>
          </h1>
        </div>

        {/* Sub-row */}
        <div className="mt-16 grid grid-cols-12 gap-6 border-t rule pt-6">
          <div className="col-span-12 md:col-span-5 label">
            <span className="text-foreground/40 num mr-2">01</span>About
          </div>
          <p className="col-span-12 md:col-span-7 text-base md:text-lg leading-relaxed text-foreground/85 max-w-2xl">
            I build small things end-to-end — auth, database, API, a usable UI on top —
            and then actually put them on the internet. Three of them are live on Render right now.
          </p>
        </div>
      </div>

      {/* Footer cue */}
      <div className="container mt-16 grid grid-cols-12 gap-6 label text-muted-foreground border-t rule pt-4">
        <span className="col-span-6">↓ Selected work below</span>
        <span className="col-span-6 text-right">5 sections · 3 projects</span>
      </div>
    </section>
  );
};
