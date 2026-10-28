import { useState } from "react";
import Icon from "./Icon";
import { navItems, githubProfile, linkedinProfile, resumeUrl } from "../data/site";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
<header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[#07101f]/82 backdrop-blur-xl">
        <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#home" className="group flex items-center gap-3" aria-label="Yousef Sabbagh home">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-blue-400/25 bg-blue-500/10 text-xs font-black text-blue-200 transition group-hover:border-blue-300/50 group-hover:bg-blue-500/20">
              YS
            </span>
            <span className="text-sm font-semibold tracking-tight text-white sm:text-base">Yousef Sabbagh</span>
          </a>

          <div className="hidden items-center gap-7 text-sm text-slate-400 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a href={githubProfile} target="_blank" rel="noreferrer" className="icon-button" aria-label="GitHub profile">
              <Icon name="github" />
            </a>
            <a href={linkedinProfile} target="_blank" rel="noreferrer" className="icon-button" aria-label="LinkedIn profile">
              <Icon name="linkedin" />
            </a>
            <a href={resumeUrl} download className="button-secondary">Download CV</a>
            <a href="#contact" className="button-primary ml-1">
              Let&apos;s talk
              <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>

          <button
            type="button"
            className="icon-button lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <Icon name={menuOpen ? "x" : "menu"} />
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/8 bg-[#07101f] px-5 py-5 lg:hidden">
            <div className="mx-auto grid max-w-7xl gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <a href={resumeUrl} download onClick={() => setMenuOpen(false)} className="button-secondary mt-3 justify-center">Download CV</a>
            </div>
          </div>
        )}
      </header>
  );
}
