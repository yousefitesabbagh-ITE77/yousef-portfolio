import { useEffect, useState, type ReactNode } from "react";
import profileImage from "./assets/profile.webp";
import sportivoImage from "./assets/projects/sportivo.webp";
import teacherOrganizerImage from "./assets/projects/teacher-organizer.webp";
import teamflowLogin from "./assets/projects/teamflow/01-login.webp";
import teamflowDashboard from "./assets/projects/teamflow/02-dashboard.webp";
import teamflowProjects from "./assets/projects/teamflow/03-projects.webp";
import teamflowProjectDetails from "./assets/projects/teamflow/04-project-details-members.webp";
import teamflowTasks from "./assets/projects/teamflow/05-tasks-and-filters.webp";
import teamflowTaskDetails from "./assets/projects/teamflow/06-task-details.webp";
import mawadLanding from "./assets/projects/mawad/landing.webp";
import mawadLandingDetails from "./assets/projects/mawad/landing-details.webp";
import mawadSignup from "./assets/projects/mawad/signup.webp";
import mawadSignin from "./assets/projects/mawad/signin.webp";
import mawadSupplierInvitations from "./assets/projects/mawad/supplier-invitations.webp";
import mawadSupplierProfile from "./assets/projects/mawad/supplier-profile.webp";
import mawadBuyerRequests from "./assets/projects/mawad/buyer-requests.webp";
import mawadNewRequest from "./assets/projects/mawad/new-request.webp";

type Project = {
  title: string;
  eyebrow: string;
  summary: string;
  points: string[];
  tech: string[];
  github?: string;
  liveDemo?: string;
  videoDemo?: string;
  image?: string;
  gallery?: string[];
  status?: string;
};

type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

type IconName =
  | "arrow"
  | "code"
  | "database"
  | "external"
  | "github"
  | "layers"
  | "linkedin"
  | "mail"
  | "menu"
  | "server"
  | "sparkles"
  | "x";

const emailAddress = "yousef.ite.sabbagh@gmail.com";
const emailComposeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`;
const githubProfile = "https://github.com/yousefitesabbagh-ITE77";
const linkedinProfile = "https://www.linkedin.com/in/yousef-sabbagh-a97ba1363";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const featuredProjects: Project[] = [
  {
    title: "TeamFlow",
    eyebrow: "Full-Stack Project Management Platform",
    summary:
      "A complete project and task management application for organizing teams, members, assignments, priorities, statuses, due dates, and project progress through one connected system.",
    points: [
      "Designed a Laravel REST API with structured resources, form requests, and relational data models.",
      "Implemented secure Sanctum authentication, protected routes, and owner/member authorization rules.",
      "Built a responsive React dashboard with search, filtering, form validation, loading states, and clear error handling.",
    ],
    tech: [
      "React",
      "Laravel",
      "JavaScript",
      "Tailwind CSS",
      "MariaDB",
      "Laravel Sanctum",
    ],
    github: "https://github.com/yousefitesabbagh-ITE77/teamflow",
    image: teamflowDashboard,
    gallery: [
      teamflowDashboard,
      teamflowProjects,
      teamflowProjectDetails,
      teamflowTasks,
      teamflowTaskDetails,
      teamflowLogin,
    ],
  },
  {
    title: "Mawad",
    eyebrow: "B2B Construction Procurement Platform",
    summary:
      "A role-based procurement platform that helps contractors submit material requests, receive private quotations from matched suppliers, and compare complete offers in one place.",
    points: [
      "Created separate contractor and supplier experiences with role-based dashboards and procurement workflows.",
      "Built multi-step material requests, supplier matching, RFQ invitations, quotation status tracking, and supplier profiles.",
      "Added AI-assisted request creation and plain-language quote insights to simplify complex procurement decisions.",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Supabase", "REST APIs"],
    image: mawadLanding,
    gallery: [
      mawadLanding,
      mawadBuyerRequests,
      mawadNewRequest,
      mawadSupplierInvitations,
      mawadSupplierProfile,
      mawadSignup,
      mawadSignin,
      mawadLandingDetails,
    ],
    status: "Working MVP",
  },
  {
    title: "Teacher Organizer",
    eyebrow: "Offline-First Teacher Management PWA",
    summary:
      "An installable application for managing students, sessions, tasks, notes, and schedules while keeping the core workflow available without an internet connection.",
    points: [
      "Implemented offline-first local data persistence with IndexedDB and Dexie.",
      "Added JSON backup and restore so users can move and recover their data.",
      "Designed an upcoming-session dashboard and practical daily management workflows.",
    ],
    tech: ["React", "TypeScript", "IndexedDB", "Dexie", "PWA"],
    github: "https://github.com/yousefitesabbagh-ITE77/teacher-organizer",
    liveDemo: "https://teacher-organizer.netlify.app/",
    videoDemo: "https://www.youtube.com/watch?v=PFxrEzov8Sc",
    image: teacherOrganizerImage,
  },
  {
    title: "Sportivo",
    eyebrow: "Sports E-Commerce Experience",
    summary:
      "A responsive sports storefront that covers the customer journey from product discovery and filtering to cart, checkout, order history, and delivery tracking.",
    points: [
      "Built search, filtering, sorting, active filter chips, wishlist, and recently viewed products.",
      "Developed product details, cart, validated checkout, confirmation, order history, and tracking pages.",
      "Persisted shopping and account state in browser storage across the multi-page experience.",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "ES Modules", "Local Storage"],
    github:
      "https://github.com/yousefitesabbagh-ITE77/Sportivo-e-commerce-website-for-sports",
    liveDemo: "https://sportivo-ecommerce.netlify.app/",
    image: sportivoImage,
  },
];

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Engineering",
    description:
      "Responsive, maintainable interfaces built around reusable components and complete user flows.",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "React Router",
      "Axios",
      "Vite",
      "PWA",
    ],
  },
  {
    title: "Backend Engineering",
    description:
      "Structured server-side applications, business rules, secure access, and clean API contracts.",
    skills: [
      "PHP",
      "Laravel",
      "REST APIs",
      "Laravel Sanctum",
      "Eloquent ORM",
      "Authentication",
      "Authorization",
      "OOP",
    ],
  },
  {
    title: "Data & Persistence",
    description:
      "Relational database design and local-first storage selected to fit each product workflow.",
    skills: [
      "SQL",
      "MariaDB",
      "SQLite",
      "Supabase",
      "IndexedDB",
      "Dexie",
      "Database Relationships",
    ],
  },
  {
    title: "Engineering Workflow",
    description:
      "Practical tools for building, integrating, documenting, and delivering web applications.",
    skills: [
      "Git",
      "GitHub",
      "Composer",
      "npm",
      "Postman",
      "XAMPP",
      "PowerShell",
      "VS Code",
    ],
  },
];

function Icon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  const common = {
    className,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  const paths: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    code: (
      <>
        <path d="m8 9-4 3 4 3" />
        <path d="m16 9 4 3-4 3" />
        <path d="m14 5-4 14" />
      </>
    ),
    database: (
      <>
        <ellipse cx="12" cy="5" rx="7" ry="3" />
        <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
        <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
      </>
    ),
    external: (
      <>
        <path d="M14 4h6v6" />
        <path d="M10 14 20 4" />
        <path d="M20 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4" />
      </>
    ),
    github: (
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.4 4 5 5 0 0 0 19.3.5S18.2.1 15 2a13.4 13.4 0 0 0-7 0C4.8.1 3.7.5 3.7.5A5 5 0 0 0 3.6 4a5.4 5.4 0 0 0-1.4 3.7c0 5.3 3.5 6.5 6.8 7A4.8 4.8 0 0 0 8 18v4" />
    ),
    layers: (
      <>
        <path d="m12 2 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5" />
        <path d="m3 17 9 5 9-5" />
      </>
    ),
    linkedin: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
        <path d="M2 9h4v12H2z" />
        <path d="M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      </>
    ),
    mail: (
      <>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </>
    ),
    server: (
      <>
        <rect width="20" height="8" x="2" y="2" rx="2" />
        <rect width="20" height="8" x="2" y="14" rx="2" />
        <path d="M6 6h.01" />
        <path d="M6 18h.01" />
      </>
    ),
    sparkles: (
      <>
        <path d="m12 3-1.1 3.1L8 7.2l2.9 1.1L12 11.5l1.1-3.2L16 7.2l-2.9-1.1L12 3Z" />
        <path d="m5 13-.8 2.2L2 16l2.2.8L5 19l.8-2.2L8 16l-2.2-.8L5 13Z" />
        <path d="m18 13-1 2.8-2.8 1 2.8 1L18 21l1-3.2 3-1-3-1L18 13Z" />
      </>
    ),
    x: (
      <>
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </>
    ),
  };

  return <svg {...common}>{paths[name]}</svg>;
}

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

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [gallery, setGallery] = useState<{ images: string[]; title: string; index: number } | null>(null);

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
    <main className="min-h-screen overflow-hidden bg-[#07101f] text-[#edf4ff]">
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
            </div>
          </div>
        )}
      </header>

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

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#projects" className="button-primary justify-center px-6 py-3.5">
                Explore my work
                <Icon name="arrow" className="h-4 w-4" />
              </a>
              <a href={githubProfile} target="_blank" rel="noreferrer" className="button-secondary justify-center px-6 py-3.5">
                <Icon name="github" className="h-4 w-4" />
                GitHub profile
              </a>
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
            <article key={project.title} className="featured-project">
              <div className={`grid gap-8 xl:grid-cols-2 xl:items-center ${index % 2 === 1 ? "" : ""}`}>
                <div className={index % 2 === 1 ? "xl:order-2" : ""}>
                  <ProjectVisual project={project} onOpenGallery={openGallery} />
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
          ))}
        </div>
      </section>

      <section id="expertise" className="section-shell border-t border-white/8 bg-white/[0.012]">
        <div className="section-heading">
          <div>
            <p className="section-label">Technical expertise</p>
            <h2 className="section-title">Strong across the complete application stack.</h2>
          </div>
          <p className="section-description">
            I work across browser interfaces, server-side application logic, API contracts, authentication, authorization, and data persistence—not as isolated layers, but as one connected product.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, index) => {
            const icons: IconName[] = ["code", "server", "database", "layers"];
            return (
              <article key={group.title} className="expertise-card">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-300/20 bg-blue-500/10 text-blue-200">
                  <Icon name={icons[index]} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-white">{group.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">{group.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => <span key={skill} className="tech-pill">{skill}</span>)}
                </div>
              </article>
            );
          })}
        </div>
      </section>

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
                <p className="text-sm font-semibold text-blue-300">Devista Levant</p>
                <h3 className="mt-2 text-2xl font-bold text-white">Technology Intern</h3>
                <p className="mt-1 text-sm text-slate-500">Practical Technology Internship Program</p>
              </div>
              <span className="status-pill w-fit">Jun 2026 — Jul 2026</span>
            </div>
            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {[
                ["5", "interns selected from 130+ applicants"],
                ["MVP", "delivered from requirements to Demo Day"],
                ["2 roles", "contractor and supplier product flows"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-white/8 bg-[#0a1426] p-5">
                  <p className="text-2xl font-black text-white">{value}</p>
                  <p className="mt-2 text-xs leading-5 text-slate-500">{label}</p>
                </div>
              ))}
            </div>
            <ul className="mt-7 space-y-3">
              {[
                "Researched the construction procurement problem and translated findings into a focused product scope.",
                "Defined Mawad's requirements, contractor and supplier journeys, role permissions, and core procurement workflow.",
                "Built and refined the working MVP, then presented the product and business concept to mentors and judges during Demo Day.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-slate-400">
                  <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-blue-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section id="about" className="section-shell border-t border-white/8 bg-white/[0.012]">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className="section-label">About me</p>
            <h2 className="section-title">I turn requirements into structured, maintainable software.</h2>
          </div>
          <div>
            <p className="text-lg leading-9 text-slate-300">
              I&apos;m Yousef Sabbagh, a Full-Stack Developer and Information Technology Engineering student. My work covers responsive frontend interfaces, backend systems, REST APIs, authentication, authorization, and relational databases.
            </p>
            <p className="mt-5 leading-8 text-slate-400">
              I enjoy understanding how a product should work, shaping its data and business rules, and then building the complete experience—from the first screen to the database behind it. I&apos;m currently pursuing Software Engineer and Full-Stack Developer opportunities where I can contribute to real production systems.
            </p>
            <div className="mt-8 rounded-2xl border border-white/8 bg-[#0a1426] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Education</p>
              <p className="mt-3 font-semibold text-white">B.Sc. in Information Technology Engineering</p>
              <p className="mt-1 text-sm text-slate-400">University of Damascus · 2024 — Expected 2029</p>
            </div>
          </div>
        </div>
      </section>

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

      <footer className="border-t border-white/8 px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-3">
          <p>© 2026 Yousef Sabbagh. Full-Stack Developer.</p>
          <div className="flex items-center gap-5">
            <a href={githubProfile} target="_blank" rel="noreferrer" className="transition hover:text-white">GitHub</a>
            <a href={linkedinProfile} target="_blank" rel="noreferrer" className="transition hover:text-white">LinkedIn</a>
            <a href={emailComposeLink} target="_blank" rel="noreferrer" className="transition hover:text-white">Email</a>
          </div>
        </div>
      </footer>

      {gallery && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-3 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={`${gallery.title} gallery`}>
          <button type="button" className="absolute right-4 top-4 z-10 icon-button bg-black/40" onClick={() => setGallery(null)} aria-label="Close gallery">
            <Icon name="x" />
          </button>
          <button
            type="button"
            className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white transition hover:bg-white/10 sm:left-6"
            onClick={() => setGallery((current) => current ? { ...current, index: (current.index - 1 + current.images.length) % current.images.length } : current)}
            aria-label="Previous image"
          >
            <span className="rotate-180"><Icon name="arrow" /></span>
          </button>
          <div className="mx-auto w-full max-w-7xl">
            <img src={gallery.images[gallery.index]} alt={`${gallery.title} screen ${gallery.index + 1}`} className="mx-auto max-h-[82vh] w-auto max-w-full rounded-xl border border-white/10 object-contain shadow-2xl" />
            <div className="mt-4 flex items-center justify-center gap-3 text-xs text-slate-400">
              <span>{gallery.title}</span>
              <span className="text-slate-700">•</span>
              <span>{gallery.index + 1} / {gallery.images.length}</span>
            </div>
          </div>
          <button
            type="button"
            className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white transition hover:bg-white/10 sm:right-6"
            onClick={() => setGallery((current) => current ? { ...current, index: (current.index + 1) % current.images.length } : current)}
            aria-label="Next image"
          >
            <Icon name="arrow" />
          </button>
        </div>
      )}
    </main>
  );
}

export default App;
