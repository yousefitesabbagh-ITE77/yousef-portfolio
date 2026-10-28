import Icon from "./Icon";
import { emailComposeLink, emailAddress, linkedinProfile } from "../data/site";

export default function Contact() {

  return (
<section id="contact" className="section-shell border-t border-white/8">
        <div className="contact-panel">
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-[90px]" />
          <div className="absolute -bottom-28 left-16 h-64 w-64 rounded-full bg-cyan-400/10 blur-[90px]" />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
            <div>
              <p className="section-label">Contact</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Let&apos;s build software that solves a real problem.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                I&apos;m open to Software Engineer and Full-Stack Developer opportunities, meaningful product collaborations, and conversations about building complete web applications.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:items-end">
              <a href={emailComposeLink} target="_blank" rel="noreferrer" className="button-primary w-full justify-center px-6 py-4 sm:w-auto">
                <Icon name="mail" className="h-5 w-5" />
                Send me an email
              </a>
              <a href={linkedinProfile} target="_blank" rel="noreferrer" className="button-secondary w-full justify-center px-6 py-4 sm:w-auto">
                <Icon name="linkedin" className="h-5 w-5" />
                Connect on LinkedIn
              </a>
              <p className="mt-2 break-all text-sm text-slate-500">{emailAddress}</p>
            </div>
          </div>
        </div>
      </section>
  );
}
