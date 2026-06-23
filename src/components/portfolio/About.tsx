export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 container">
      <div className="grid grid-cols-12 gap-6 border-t rule pt-4 label text-muted-foreground mb-16">
        <span className="col-span-6">03 — About</span>
        <span className="col-span-6 text-right">Short version</span>
      </div>

      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <h2 className="font-display text-4xl md:text-5xl tracking-tight leading-[1.05] text-balance">
            Undergrad. Two degrees in parallel.
            <em className="italic"> Most days I'm in a terminal.</em>
          </h2>
        </div>

        <div className="md:col-span-6 md:col-start-7 space-y-6 text-foreground/85 leading-relaxed">
          <p>
            I'm Pranay, based in Amritsar. I'm doing a <strong className="font-medium">B.Tech in
            Electronics &amp; Computer Engineering</strong> at Guru Nanak Dev University and an online{" "}
            <strong className="font-medium">BS in Data Science</strong> at IIT Madras at the same time.
            Both end in 2027.
          </p>
          <p>
            Most of what I work on is backend in Python — FastAPI, Flask, SQLite, a bit of LangChain when
            a project actually needs retrieval. I like the parts that don't make for a good screenshot:
            auth flows, schema design, figuring out why something works locally but dies on a 512 MB
            Render instance.
          </p>
          <p>
            Over the summer I interned remotely with <strong className="font-medium">Nobel Navigators</strong>{" "}
            as a backend web dev intern. I ran a few sessions on Python and Flask for the other interns,
            and worked on three small team projects — mostly backend and debugging.
          </p>
          <p>
            Outside of that, the three projects below are mine. They're all live, all built solo, and the
            code is on GitHub if you want to look.
          </p>

          <dl className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
            {[
              { k: "03", v: "Projects deployed on Render" },
              { k: "02", v: "Degrees, in parallel" },
              { k: "1", v: "Backend internship, remote" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-3xl md:text-4xl num">{s.k}</dt>
                <dd className="label text-muted-foreground mt-2">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};
