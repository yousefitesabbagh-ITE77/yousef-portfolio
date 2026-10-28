import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import Icon from "./Icon";
import useDesktopMotion from "../hooks/useDesktopMotion";
import type { Project } from "../types";

function ProjectActions({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-2">
      {project.liveDemo && <a href={project.liveDemo} target="_blank" rel="noreferrer" className="button-primary">Live demo <Icon name="external" className="h-3.5 w-3.5" /></a>}
      {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="button-secondary"><Icon name="github" className="h-3.5 w-3.5" />View code</a>}
      {project.videoDemo && <a href={project.videoDemo} target="_blank" rel="noreferrer" className="button-quiet">Video demo <Icon name="external" className="h-3.5 w-3.5" /></a>}
    </div>
  );
}

function ProjectVisual({ project, onOpenGallery }: { project: Project; onOpenGallery: (images: string[], title: string) => void }) {
  const [screen, setScreen] = useState(0);
  const [failed, setFailed] = useState(false);
  const [retry, setRetry] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: .15 });
  const desktopMotion = useDesktopMotion();
  const reduced = useReducedMotion();
  const rotateXTarget = useMotionValue(0);
  const rotateYTarget = useMotionValue(0);
  const rotateX = useSpring(rotateXTarget, { stiffness: 130, damping: 25 });
  const rotateY = useSpring(rotateYTarget, { stiffness: 130, damping: 25 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const parallax = useTransform(scrollYProgress, [0,1], [-10,10]);
  const galleryLength = project.gallery?.length ?? 1;
  const images = project.gallery ?? (project.image ? [project.image] : []);
  const address = project.liveDemo ? new URL(project.liveDemo).hostname : `Local preview / ${project.title.toLowerCase().replaceAll(" ", "-")}`;

  useEffect(() => {
    if (galleryLength < 2 || !inView || reduced) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setScreen((current) => (current + 1) % galleryLength);
    }, 4000);
    return () => clearInterval(timer);
  }, [galleryLength, inView, reduced]);

  if (!project.image) return null;
  const inner = <>
    <div className="window-bar" aria-hidden="true">
      <div className="window-dots"><span className="window-dot" /><span className="window-dot" /><span className="window-dot" /></div>
      <span className="window-url">{address}</span>
      <span className="window-expand">↗</span>
    </div>
    <div className="screenshot-stage">
      {failed ? <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center">
        <p className="text-sm text-[#aabbd3]">This preview couldn&apos;t load.</p><span className="text-xs text-[#7193ca]">{project.gallery ? "Open the gallery to try another screen." : "Use the retry control below to reload the preview."}</span>
      </div> : images.map((image, index) => <motion.img key={`${image}-${retry}`} src={image} alt={index === screen ? `${project.title} interface` : ""} aria-hidden={index !== screen}
        loading="lazy" decoding="async" width={1440} height={960} className="project-screenshot"
        initial={false} animate={{ opacity: screen === index ? 1 : 0 }} transition={{ duration: reduced ? .25 : .8 }}
        style={{ y: desktopMotion ? parallax : 0 }} onError={() => { if (index === screen) setFailed(true); }} />)}
      {project.gallery && <span className="screen-count">View {project.gallery.length} screens <span className="ml-2 text-[#6c92d0]">{String(screen + 1).padStart(2,"0")} / {String(galleryLength).padStart(2,"0")}</span></span>}
    </div>
  </>;

  return <div ref={ref} style={{ perspective: 1100 }}>
    <motion.div style={desktopMotion ? { rotateX, rotateY } : undefined}
      onPointerMove={(event) => {
        if (!desktopMotion) return;
        const rect = event.currentTarget.getBoundingClientRect();
        rotateXTarget.set(Math.max(-4, Math.min(4, -(event.clientY - rect.top - rect.height / 2) / rect.height * 8)));
        rotateYTarget.set(Math.max(-4, Math.min(4, (event.clientX - rect.left - rect.width / 2) / rect.width * 8)));
      }}
      onPointerLeave={() => { rotateXTarget.set(0); rotateYTarget.set(0); }}
    >
      {project.gallery ? <button type="button" className="project-window" aria-label={`Open ${project.title} image gallery`} onClick={() => onOpenGallery(project.gallery!, project.title)}>{inner}</button> : <div className="project-window">{inner}</div>}
    </motion.div>
    {failed && <button type="button" className="button-secondary mt-3" onClick={() => { setFailed(false); setRetry((count) => count + 1); }}>Retry preview</button>}
  </div>;
}

export default function ProjectCard({ project, index, onOpenGallery }: { project: Project; index: number; onOpenGallery: (images: string[], title: string) => void }) {
  return (
    <article className="featured-project">
      <div className={`project-layout ${index % 2 === 1 ? "reverse" : ""}`}>
        <div className="project-visual"><ProjectVisual project={project} onOpenGallery={onOpenGallery} /></div>
        <div className="project-copy">
          <div className="project-meta"><span className="project-number">0{index + 1}</span><span className="project-eyebrow">{project.eyebrow}</span>{project.status && <span className="status-pill">{project.status}</span>}</div>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-summary">{project.summary}</p>
          <ul className="project-points">{project.points.map((point) => <li key={point}><span>{point}</span></li>)}</ul>
          <div className="mt-5 flex flex-wrap gap-1.5">{project.tech.map((tech) => <span key={tech} className="tech-pill">{tech}</span>)}</div>
          <div className="mt-6"><ProjectActions project={project} /></div>
        </div>
      </div>
    </article>
  );
}
