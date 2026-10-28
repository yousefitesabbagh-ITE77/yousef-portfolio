import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useReducedMotion } from "motion/react";
import Icon from "./Icon";
import { navItems, githubProfile, linkedinProfile, resumeUrl } from "../data/site";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const { scrollYProgress } = useScroll();
  const reduced = useReducedMotion();

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    const visible = new Map<string, number>();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) visible.set(entry.target.id, entry.boundingClientRect.top);
        else visible.delete(entry.target.id);
      });
      const closest = [...visible.entries()].sort((a,b) => Math.abs(a[1]) - Math.abs(b[1]))[0];
      if (closest) setActive(`#${closest[0]}`);
    }, { rootMargin: "-15% 0px -50% 0px", threshold: 0 });
    document.querySelectorAll("section[id]").forEach((section) => observer.observe(section));
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    };
    document.addEventListener("keydown", close);
    const resize = () => { if (innerWidth >= 1024) setMenuOpen(false); };
    window.addEventListener("resize", resize);
    return () => { window.removeEventListener("scroll", update); observer.disconnect(); document.removeEventListener("keydown", close); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <>
      <a href="#home" className="skip-link">Skip to content</a>
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} aria-hidden="true" />
      <header className={`site-header ${scrolled || menuOpen ? "is-scrolled" : ""}`}>
        <nav className="header-inner" aria-label="Main navigation">
          <a href="#home" className="brand" aria-label="Yousef Sabbagh home" onClick={() => setMenuOpen(false)}>
            <span className="brand-mark">YS</span><span className="brand-name">Yousef Sabbagh<span className="text-[#6195ff]">.</span></span>
          </a>
          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => <a key={item.href} href={item.href} className="nav-link" aria-current={active === item.href ? "location" : undefined}>{item.label}</a>)}
          </div>
          <div className="hidden items-center gap-2 lg:flex">
            <a href={githubProfile} target="_blank" rel="noreferrer" className="icon-button" aria-label="GitHub profile"><Icon name="github" className="h-3.5 w-3.5" /></a>
            <a href={linkedinProfile} target="_blank" rel="noreferrer" className="icon-button" aria-label="LinkedIn profile"><Icon name="linkedin" className="h-3.5 w-3.5" /></a>
            <a href={resumeUrl} download className="button-secondary">Download CV</a>
            <a href="#contact" className="button-primary">Let&apos;s talk <Icon name="arrow" className="h-3.5 w-3.5" /></a>
          </div>
          <button id="menu-toggle" type="button" className="icon-button lg:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation menu" aria-expanded={menuOpen} aria-controls="mobile-navigation">
            <Icon name={menuOpen ? "x" : "menu"} />
          </button>
        </nav>
        <AnimatePresence>
          {menuOpen && <motion.div id="mobile-navigation" className="mobile-menu lg:hidden" initial={{ opacity: 0, y: reduced ? 0 : -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: .2 }}>
            {navItems.map((item) => <a key={item.href} href={item.href} className="nav-link" aria-current={active === item.href ? "location" : undefined} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
            <a href={resumeUrl} download onClick={() => setMenuOpen(false)} className="button-secondary mt-3 justify-center">Download CV</a>
          </motion.div>}
        </AnimatePresence>
      </header>
    </>
  );
}
