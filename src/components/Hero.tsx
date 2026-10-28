import Icon from "./Icon";
import profileImage from "../assets/profile.webp";
import { githubProfile, resumeUrl } from "../data/site";

export default function Hero() {

  return (
<section id="home" className="relative isolate pt-18">
        <div className="hero-grid absolute inset-0 -z-20" />
        <div className="absolute left-1/2 top-24 -z-10 h-[35rem] w-[35rem] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[130px]" />
        <div className="absolute right-[-12rem] top-24 -z-10 h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-[120px]" />

        <div className="mx-auto grid min-h-[calc(100vh-4.5rem)] max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.18fr_.82fr] lg:px-8 lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-400/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,.8)]" />
              Open to software engineering roles
            </div>

            <h1 className="mt-7 max-w-5xl text-5xl font-black leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl xl:text-[5.35rem]">
              Full-Stack Developer building real-world web products from idea to implementation.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              I build complete applications across frontend, backend, and databases using React, TypeScript, PHP, Laravel, REST APIs, and SQL.
            </p>

            <div className="mt-9 flex flex-col flex-wrap gap-3 sm:flex-row sm:items-center">
              <a href="#projects" className="button-primary justify-center px-6 py-3.5">
                Explore my work
                <Icon name="arrow" className="h-4 w-4" />
              </a>
              <a href={githubProfile} target="_blank" rel="noreferrer" className="button-secondary justify-center px-6 py-3.5">
                <Icon name="github" className="h-4 w-4" />
                GitHub profile
              </a>
              <a href={resumeUrl} download className="button-secondary justify-center px-6 py-3.5">Download CV</a>
            </div>

            <div className="mt-11 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ["Frontend", "React · TypeScript"],
                ["Backend", "PHP · Laravel"],
                ["Data", "SQL · MariaDB"],
                ["Delivery", "Idea to product"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/8 bg-white/[0.025] p-4 backdrop-blur">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">{label}</p>
                  <p className="mt-2 text-sm font-semibold text-slate-200">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[28rem] lg:mr-0">
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-blue-500/20 via-transparent to-cyan-300/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-3 shadow-2xl shadow-black/40">
              <img
                src={profileImage}
                alt="Yousef Sabbagh"
                className="h-[31rem] w-full rounded-[1.45rem] object-cover object-center"
              />
              <div className="absolute inset-x-7 bottom-7 rounded-2xl border border-white/10 bg-[#07101f]/88 p-4 backdrop-blur-xl">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-white">Software Engineer</p>
                    <p className="mt-1 text-xs text-slate-400">Damascus, Syria · Remote-ready</p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/15 text-blue-200">
                    <Icon name="code" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
