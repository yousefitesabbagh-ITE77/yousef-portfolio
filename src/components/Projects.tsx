import { Fragment, useState } from "react";
import { featuredProjects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import GalleryModal from "./GalleryModal";
import type { Gallery } from "../types";

export default function Projects() {
  const [gallery, setGallery] = useState<Gallery | null>(null);

  const openGallery = (images: string[], title: string) => {
    setGallery({ images, title, index: 0 });
  };


  return (
<>
<section id="projects" className="section-shell border-t border-white/8">
        <div className="section-heading">
          <div>
            <p className="section-label">Selected work</p>
            <h2 className="section-title">Products built around real workflows.</h2>
          </div>
          <p className="section-description">
            Each project starts from a real user problem: what I learned from customers, what I chose to build first, and how I shipped it.
          </p>
        </div>

        <div className="project-list">
          {featuredProjects.map((project, index) => (
            <Fragment key={project.title}>
              {project.title === "Buildak" && <p className="project-journey-intro">From an internship MVP to a startup-competition finalist.</p>}
              {project.title === "Mawad" && <div className="project-evolution"><span className="project-evolution-line" aria-hidden="true" /><span>Evolved after customer discovery</span></div>}
              <ProjectCard project={project} index={index} onOpenGallery={openGallery} />
            </Fragment>
          ))}
        </div>
      </section>
{gallery && <GalleryModal gallery={gallery} setGallery={setGallery} />}
</>
  );
}
