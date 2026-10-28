import { useEffect, useState } from "react";
import { featuredProjects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import GalleryModal from "./GalleryModal";
import type { Gallery } from "../types";

export default function Projects() {
  const [gallery, setGallery] = useState<Gallery | null>(null);

  useEffect(() => {
    if (!gallery) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setGallery(null);
      if (event.key === "ArrowRight") {
        setGallery((current) =>
          current
            ? { ...current, index: (current.index + 1) % current.images.length }
            : current,
        );
      }
      if (event.key === "ArrowLeft") {
        setGallery((current) =>
          current
            ? {
                ...current,
                index: (current.index - 1 + current.images.length) % current.images.length,
              }
            : current,
        );
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [gallery]);

  const openGallery = (images: string[], title: string) => {
    setGallery({ images, title, index: 0 });
  };


  return (
<>
<section id="projects" className="section-shell border-t border-white/8">
        <div className="section-heading">
          <div>
            <p className="section-label">Selected engineering work</p>
            <h2 className="section-title">Products built around real workflows.</h2>
          </div>
          <p className="section-description">
            Each project demonstrates a different part of full-stack engineering: server-side business logic, API design, relational data, frontend architecture, offline storage, or complete product flows.
          </p>
        </div>

        <div className="mt-14 space-y-9">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} onOpenGallery={openGallery} />
          ))}
        </div>
      </section>
{gallery && <GalleryModal gallery={gallery} setGallery={setGallery} />}
</>
  );
}
