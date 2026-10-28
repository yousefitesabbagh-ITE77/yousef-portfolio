import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import Icon from "./Icon";
import profileImage from "../assets/profile.webp";
import { whatsappLink, resumeUrl } from "../data/site";

const headline = "Full-Stack Developer building real-world web products from idea to implementation.";

export default function Hero() {
  const reduced = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useSpring(mouseX, { stiffness: 30, damping: 25 });
  const y = useSpring(mouseY, { stiffness: 30, damping: 25 });

  return (
    <section id="home" className="hero" ref={heroRef}
      onPointerMove={(event) => {
        if (reduced || !matchMedia("(min-width: 1024px) and (hover: hover) and (pointer: fine)").matches) return;
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set((event.clientX - rect.left - rect.width / 2) * .035);
        mouseY.set((event.clientY - rect.top - rect.height / 2) * .035);
      }}
      onPointerLeave={() => { mouseX.set(0); mouseY.set(0); }}
    >
      <div className="hero-grid" />
      <motion.div className="hero-orbs" style={reduced ? undefined : { x, y }} aria-hidden="true">
        <motion.div className="hero-orb" animate={reduced ? {} : { x: [0, 30, 0], y: [0, 20, 0] }} transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="hero-orb" animate={reduced ? {} : { x: [0, -25, 0], y: [0, 30, 0] }} transition={{ duration: 23, repeat: Infinity, ease: "easeInOut" }} />
      </motion.div>
      <div className="hero-inner">
        <div>
          <motion.p className="hero-kicker" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .7 }}>
            <span className="availability-dot" /> Available for freelance projects &amp; full-stack roles
          </motion.p>
          <h1 aria-label={headline}>
            {headline.split(" ").map((word, index) => (
              <span key={`${word}-${index}`} aria-hidden="true">
                <motion.span className={`hero-word ${index < 2 ? "hero-word-blue" : ""}`}
                  initial={{ opacity: 0, y: reduced ? 0 : 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: .65, delay: reduced ? 0 : .15 + index * .055, ease: [.2,.65,.3,1] }}>
                  {word}
                  {!reduced && <motion.span className="word-ghost" initial={{ opacity: .8 }} animate={{ opacity: 0 }} transition={{ duration: .7, delay: .15 + index * .055 }}>{word}</motion.span>}
                </motion.span>{" "}
              </span>
            ))}
          </h1>
          <motion.div initial={{ opacity: 0, y: reduced ? 0 : 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: reduced ? 0 : .65 }}>
            <p className="hero-description">I build complete web applications — frontend, backend and database — with React, TypeScript, Laravel and SQL. From a rough idea to a working product.</p>
            <div className="hero-actions">
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="button-primary">Start a project <Icon name="arrow" className="h-3.5 w-3.5" /></a>
              <a href="#projects" className="button-secondary">View my work <Icon name="arrow" className="h-3.5 w-3.5 rotate-90" /></a>
              <a href={resumeUrl} download className="button-secondary">Download CV</a>
            </div>
            <dl className="hero-capabilities">
              {[["Frontend", "React · TypeScript"], ["Backend", "PHP · Laravel"], ["Data", "SQL · MariaDB"], ["Delivery", "Idea to product"]].map(([label, value]) => (
                <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
              ))}
            </dl>
          </motion.div>
        </div>
        <motion.div className="portrait-wrap" initial={{ opacity: 0, y: reduced ? 0 : 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, delay: reduced ? 0 : .3 }}>
          <div className="portrait-label"><span>YOUSEF SABBAGH</span><span>ENGINEER / BUILDER</span></div>
          <div className="portrait-frame">
            <div className="portrait-border" aria-hidden="true" />
            <div className="portrait-inside">
              <img src={profileImage} alt="Yousef Sabbagh" className="portrait-image" width={480} height={570} loading="eager" fetchPriority="high" />
              <div className="portrait-caption">
                <div><p>Full-Stack Developer</p><p>Damascus, Syria · Remote-ready</p></div>
                <Icon name="code" className="h-5 w-5 text-[#86a9e8]" />
              </div>
            </div>
          </div>
          <span className="portrait-corner" aria-hidden="true" />
        </motion.div>
      </div>
      <div className="hero-bottom"><span>Frontend to database. One connected product.</span><a href="#projects">Selected work <Icon name="arrow" className="h-3 w-3 rotate-90" /></a></div>
    </section>
  );
}
