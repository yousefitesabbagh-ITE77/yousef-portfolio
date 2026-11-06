

export default function About() {

  return (
<section id="about" className="section-shell border-t border-white/8 bg-white/[0.012]">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className="section-label">About me</p>
            <h2 className="section-title">I start with the user&apos;s problem, then build the product.</h2>
          </div>
          <div>
            <p className="text-lg leading-9 text-slate-300">
              I&apos;m Yousef Sabbagh, an Information Technology Engineering student who works where product and engineering meet. I talk to the people who will use a product, decide what the first version must do, and write it down clearly enough to build.
            </p>
            <p className="mt-5 leading-8 text-slate-400">
              Because I can build it myself (React, TypeScript, Laravel and SQL), my requirements stay realistic and I can ship a working MVP to test with real users. I&apos;m looking for product internships and roles, and I still take on selected freelance MVP projects.
            </p>
            <p className="mt-5 text-sm leading-8 text-slate-400">Languages: Arabic (native), English (C1).</p>
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
