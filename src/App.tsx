import profileImage from "./assets/profile.webp";
import sportivoImage from "./assets/projects/sportivo.webp";
import teacherOrganizerImage from "./assets/projects/teacher-organizer.webp";

type Project = {
  title: string;
  category: string;
  description: string;
  points: string[];
  tech: string[];
  github: string;
  image?: string;
  liveDemo?: string;
  videoDemo?: string;
  status?: "in-progress";
};

type Service = {
  title: string;
  description: string;
};

const emailAddress = "yousef.ite.sabbagh@gmail.com";
const phoneNumber = "+963 984 454 517";
const phoneHref = "tel:+963984454517";
const emailComposeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`;

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "REST APIs",
  "Git",
  "GitHub",
  "Vite",
  "PWA",
  "Responsive Design",
];

const projects: Project[] = [
  {
    title: "Teacher Organizer",
    category: "Offline-First PWA",
    description:
      "A practical web app for teachers to manage students, sessions, tasks, and notes with an offline-first workflow.",
    points: [
      "Implemented local data persistence using IndexedDB and Dexie.",
      "Added JSON backup and restore to keep user data safer and portable.",
      "Built a clean dashboard to help teachers track upcoming sessions and tasks.",
    ],
    tech: ["React", "TypeScript", "IndexedDB", "Dexie", "PWA"],
    github: "https://github.com/yousefitesabbagh-ITE77/teacher-organizer",
    liveDemo: "https://teacher-organizer.netlify.app/",
    videoDemo: "https://www.youtube.com/watch?v=PFxrEzov8Sc",
    image: teacherOrganizerImage,
  },
  {
    title: "Sportivo",
    category: "Sports E-Commerce Frontend",
    description:
      "A polished sports e-commerce storefront built with HTML, CSS, and Vanilla JavaScript, focused on product browsing, shopping flows, and responsive UI.",
    points: [
      "Built a product catalog with search, filters, sorting, and active filter chips.",
      "Created product details, wishlist, cart, checkout, order confirmation, orders history, and tracking pages.",
      "Used browser storage to persist cart, wishlist, account state, recently viewed products, and order data.",
    ],
    tech: ["HTML5", "CSS3", "Vanilla JavaScript", "ES Modules", "Local Storage"],
    github:
      "https://github.com/yousefitesabbagh-ITE77/Sportivo-e-commerce-website-for-sports",
    liveDemo: "https://sportivo-ecommerce.netlify.app/",
    image: sportivoImage,
  },
  {
    title: "TopBid",
    category: "Auction Platform Frontend",
    description:
      "A collaborative auction platform frontend currently in development, focused on real API integration, authentication flows, auction creation, profile pages, and user-related features.",
    points: [
      "Developed pages using React, TypeScript, and Tailwind CSS.",
      "Worked on real frontend-backend integration with REST APIs.",
      "Built practical user flows for authentication, auctions, and profile-related features.",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
    github: "https://github.com/yousefitesabbagh-ITE77/TopBid-frontend",
    status: "in-progress",
  },
];

const services: Service[] = [
  {
    title: "Landing Pages",
    description:
      "Building clean, responsive landing pages for personal brands, services, products, and small businesses.",
  },
  {
    title: "Frontend Interfaces",
    description:
      "Creating modern React interfaces with reusable components and organized project structure.",
  },
  {
    title: "Responsive Fixes",
    description:
      "Improving layouts across mobile, tablet, and desktop screens for a smoother user experience.",
  },
  {
    title: "API Integration",
    description:
      "Connecting frontend interfaces with REST APIs, forms, dynamic data, and real project flows.",
  },
];

function App() {
  return (
    <main className="min-h-screen bg-[#0b1220] text-[#f5f7fb]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1220]/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between gap-4">
            <a
              href="#home"
              className="text-lg font-semibold tracking-tight text-white transition hover:text-[#dec8d5]"
            >
              Yousef Sabbagh
            </a>

            <a
              href={emailComposeLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#b38aa3] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 md:hidden"
            >
              Hire Me
            </a>
          </div>

          <div className="flex items-center gap-4 overflow-x-auto whitespace-nowrap text-sm text-slate-300 md:gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href={emailComposeLink}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-[#b38aa3] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 md:inline-flex"
          >
            Hire Me
          </a>
        </nav>
      </header>

      <section
        id="home"
        className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-24"
      >
        <div>
          <p className="inline-flex rounded-full border border-[#b38aa3]/40 bg-[#b38aa3]/10 px-4 py-2 text-sm font-medium text-[#dec8d5]">
            Frontend Developer · React · TypeScript
          </p>

          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            I build clean, responsive, and real-world frontend applications.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I’m a frontend developer and Information Technology Engineering
            student focused on building practical web experiences. I enjoy
            turning ideas into clean interfaces, responsive layouts, and real
            project flows using React, TypeScript, and modern web tools.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="rounded-full bg-[#b38aa3] px-6 py-3 text-center font-semibold text-white transition hover:opacity-90"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/15 px-6 py-3 text-center font-semibold text-white transition hover:border-[#b38aa3] hover:text-[#dec8d5]"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl">
            <img
              src={profileImage}
              alt="Yousef Sabbagh"
              className="h-[380px] w-full rounded-[1.5rem] object-cover object-center sm:h-[480px]"
            />
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#dec8d5]">
              About
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              A frontend developer focused on usable, real-world interfaces.
            </h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="leading-8 text-slate-300">
              My current focus is frontend development with React and
              TypeScript. I care about responsive design, clean component
              structure, form handling, and API-based workflows. I’m building my
              portfolio around practical projects that reflect how I actually
              work, learn, and solve frontend problems.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-[#111a2c] p-4">
                <p className="text-2xl font-bold text-white">3+</p>
                <p className="mt-1 text-sm text-slate-400">Projects</p>
              </div>

              <div className="rounded-2xl bg-[#111a2c] p-4">
                <p className="text-2xl font-bold text-white">React</p>
                <p className="mt-1 text-sm text-slate-400">
                  Main frontend stack
                </p>
              </div>

              <div className="rounded-2xl bg-[#111a2c] p-4">
                <p className="text-2xl font-bold text-white">
                  Arabic / English
                </p>
                <p className="mt-1 text-sm text-slate-400">Communication</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-5 py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#dec8d5]">
          Skills
        </p>

        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
          Technologies I work with
        </h2>

        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-5 py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#dec8d5]">
          Services
        </p>

        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
          What I can help with
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-[#b38aa3]/50"
            >
              <h3 className="text-xl font-semibold text-white">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-5 py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#dec8d5]">
          Projects
        </p>

        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
          Selected Work
        </h2>

        <div className="mt-8 grid gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition hover:border-[#b38aa3]/50"
            >
              <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="border-b border-white/10 bg-[#111a2c] p-4 lg:border-b-0 lg:border-r">
                  {project.image ? (
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b1220]">
                      <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        loading="lazy"
                        className="h-72 w-full object-cover object-top transition duration-500 hover:scale-[1.03]"
                      />
                    </div>
                  ) : (
                    <div className="relative flex h-72 overflow-hidden rounded-2xl border border-[#b38aa3]/30 bg-gradient-to-br from-[#111a2c] via-[#1c2437] to-[#3d2d3a] p-6">
                      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#b38aa3]/20 blur-2xl" />
                      <div className="absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-[#e8d6df]/10 blur-2xl" />

                      <div className="relative z-10 flex h-full w-full flex-col justify-between">
                        <div className="flex items-center justify-between">
                          <span className="rounded-full border border-[#e8d6df]/30 bg-[#e8d6df]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#e8d6df]">
                            In Progress
                          </span>

                          <span className="rounded-full bg-[#0b1220]/70 px-3 py-1 text-xs text-slate-300">
                            React + API
                          </span>
                        </div>

                        <div>
                          <p className="text-sm font-medium text-[#dec8d5]">
                            Live Demo
                          </p>
                          <h3 className="mt-2 text-4xl font-bold text-white">
                            Coming Soon
                          </h3>
                          <p className="mt-3 max-w-sm text-sm leading-6 text-slate-300">
                            TopBid will be added as a live project when the core
                            auction experience is ready.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6 md:p-8">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <p className="text-sm font-semibold text-[#dec8d5]">
                          {project.category}
                        </p>

                        {project.status === "in-progress" && (
                          <span className="rounded-full border border-[#b38aa3]/40 bg-[#b38aa3]/10 px-3 py-1 text-xs font-semibold text-[#dec8d5]">
                            Coming Soon
                          </span>
                        )}
                      </div>

                      <h3 className="mt-2 text-2xl font-bold text-white">
                        {project.title}
                      </h3>

                      <p className="mt-3 max-w-3xl leading-7 text-slate-300">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3 md:justify-end">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-[#b38aa3] hover:text-[#dec8d5]"
                      >
                        GitHub
                      </a>

                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full bg-[#e8d6df] px-4 py-2 text-sm font-semibold text-[#1b2435] transition hover:opacity-90"
                        >
                          Live Demo
                        </a>
                      )}

                      {project.videoDemo && (
                        <a
                          href={project.videoDemo}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full border border-[#e8d6df]/40 px-4 py-2 text-sm font-semibold text-[#e8d6df] transition hover:bg-[#e8d6df] hover:text-[#1b2435]"
                        >
                          Video Demo
                        </a>
                      )}
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2 text-sm text-slate-400">
                    {project.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#b38aa3]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-[#111a2c] px-3 py-1 text-xs text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-5 py-16 pb-24">
        <div className="rounded-[2rem] border border-white/10 bg-[#121b2e] p-8 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#dec8d5]">
            Contact
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Let’s work together.
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-300">
            I’m open to frontend opportunities, freelance work, and
            collaborations on React-based projects. If you need help with a
            responsive page, UI improvements, or frontend development, feel free
            to reach out.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <a
              href={emailComposeLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-[#b38aa3]/60 hover:bg-white/[0.06]"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#dec8d5]">
                Email
              </span>
              <span className="mt-2 block break-all text-lg font-semibold text-white">
                {emailAddress}
              </span>
              <span className="mt-2 block text-sm text-slate-400">
                Click to open Gmail compose
              </span>
            </a>

            <a
              href={phoneHref}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-[#b38aa3]/60 hover:bg-white/[0.06]"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#dec8d5]">
                Phone
              </span>
              <span className="mt-2 block text-lg font-semibold text-white">
                {phoneNumber}
              </span>
              <span className="mt-2 block text-sm text-slate-400">
                Click to call from supported devices
              </span>
            </a>
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <a
              href={emailComposeLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#b38aa3] px-6 py-3 text-center font-semibold text-white transition hover:opacity-90"
            >
              Send Email
            </a>

            <a
              href={phoneHref}
              className="rounded-full border border-white/15 px-6 py-3 text-center font-semibold text-white transition hover:border-[#b38aa3] hover:text-[#dec8d5]"
            >
              Call Me
            </a>

            <a
              href="https://github.com/yousefitesabbagh-ITE77"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-6 py-3 text-center font-semibold text-white transition hover:border-[#b38aa3] hover:text-[#dec8d5]"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/yousef-sabbagh-a97ba1363"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-6 py-3 text-center font-semibold text-white transition hover:border-[#b38aa3] hover:text-[#dec8d5]"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-6 text-center text-sm text-slate-500">
        © 2026 Yousef Sabbagh. Built with React, TypeScript, and Tailwind CSS.
      </footer>
    </main>
  );
}

export default App;
