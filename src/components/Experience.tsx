import { experience } from "../data/experience";
import CountUp from "./CountUp";

export default function Experience() {

  return (
<section id="experience" className="section-shell border-t border-white/8">
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <p className="section-label">Experience</p>
            <h2 className="section-title">From problem discovery to a working product.</h2>
            <p className="mt-5 max-w-xl leading-8 text-slate-400">
              My practical experience combines software delivery with understanding the business workflow the system must support.
            </p>
          </div>

          <article className="experience-card">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-blue-300">{experience.company}</p>
                <h3 className="mt-2 text-2xl font-bold text-white">{experience.role}</h3>
                <p className="mt-1 text-sm text-slate-500">{experience.program}</p>
              </div>
              <span className="status-pill w-fit">{experience.period}</span>
            </div>
            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {experience.stats.map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-white/8 bg-[#0a1426] p-5">
                  <p className="stat-value"><CountUp value={value} /></p>
                  <p className="mt-2 text-xs leading-5 text-slate-500"><CountUp value={label} /></p>
                </div>
              ))}
            </div>
            <ul className="mt-7 space-y-3">
              {experience.points.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-slate-400">
                  <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-blue-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
  );
}
