

export default function About() {

  return (
<section id="about" className="section-shell border-t border-white/8 bg-white/[0.012]">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className="section-label">About me</p>
            <h2 className="section-title">I turn requirements into structured, maintainable software.</h2>
          </div>
          <div>
            <p className="text-lg leading-9 text-slate-300">
              I&apos;m Yousef Sabbagh, a Full-Stack Developer and Information Technology Engineering student. My work covers responsive frontend interfaces, backend systems, REST APIs, authentication, authorization, and relational databases.
            </p>
            <p className="mt-5 leading-8 text-slate-400">
              I enjoy understanding how a product should work, shaping its data and business rules, and then building the complete experience—from the first screen to the database behind it. I&apos;m currently pursuing Software Engineer and Full-Stack Developer opportunities where I can contribute to real production systems.
            </p>
            <div className="mt-8 rounded-2xl border border-white/8 bg-[#0a1426] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Education</p>
              <p className="mt-3 font-semibold text-white">B.Sc. in Information Technology Engineering</p>
              <p className="mt-1 text-sm text-slate-400">University of Damascus · 2024 — Expected 2029</p>
            </div>
          </div>
        </div>
      </section>
  );
}
