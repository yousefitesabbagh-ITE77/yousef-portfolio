import Icon from "./Icon";
import type { Project } from "../types";

function ProjectActions({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-3">
      {project.liveDemo && (
        <a
          href={project.liveDemo}
          target="_blank"
          rel="noreferrer"
          className="button-primary"
        >
          Live demo
          <Icon name="external" className="h-4 w-4" />
        </a>
      )}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="button-secondary"
        >
          <Icon name="github" className="h-4 w-4" />
          View code
        </a>
      )}
      {project.videoDemo && (
        <a
          href={project.videoDemo}
          target="_blank"
          rel="noreferrer"
          className="button-quiet"
        >
          Video demo
          <Icon name="external" className="h-4 w-4" />
        </a>
      )}
    </div>
  );
}

function ProjectVisual({ project, onOpenGallery }: { project: Project; onOpenGallery: (images: string[], title: string) => void }) {
  if (project.image) {
    return (
      <button
        type="button"
        className="project-window group block w-full overflow-hidden text-left"
        onClick={() => project.gallery && onOpenGallery(project.gallery, project.title)}
        aria-label={project.gallery ? `Open ${project.title} image gallery` : `${project.title} preview`}
        disabled={!project.gallery}
      >
        <img
          src={project.image}
          alt={`${project.title} interface`}
          loading="lazy"
          className="h-72 w-full object-cover object-top transition duration-700 group-hover:scale-[1.02] sm:h-80"
        />
        {project.gallery && (
          <span className="absolute bottom-4 right-4 rounded-full border border-white/15 bg-[#07101f]/85 px-4 py-2 text-xs font-semibold text-white backdrop-blur">
            View {project.gallery.length} screens
          </span>
        )}
      </button>
    );
  }

  return null;
}


export default function ProjectCard({ project, index, onOpenGallery }: { project: Project; index: number; onOpenGallery: (images: string[], title: string) => void }) {
return (
<article className="featured-project">
              <div className={`grid gap-8 xl:grid-cols-2 xl:items-center ${index % 2 === 1 ? "" : ""}`}>
                <div className={index % 2 === 1 ? "xl:order-2" : ""}>
                  <ProjectVisual project={project} onOpenGallery={onOpenGallery} />
                </div>
                <div className={`p-1 sm:p-3 ${index % 2 === 1 ? "xl:order-1" : ""}`}>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="project-number">0{index + 1}</span>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">{project.eyebrow}</span>
                    {project.status && <span className="status-pill">{project.status}</span>}
                  </div>
                  <h3 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl">{project.title}</h3>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">{project.summary}</p>

                  <ul className="mt-6 space-y-3">
                    {project.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-6 text-slate-400">
                        <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-cyan-300" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-pill">{tech}</span>
                    ))}
                  </div>

                  <div className="mt-8">
                    <ProjectActions project={project} />
                  </div>
                </div>
              </div>
            </article>
);
}
