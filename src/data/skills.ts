import type { SkillGroup } from "../types";

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Engineering",
    icon: "code",
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
    icon: "server",
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
    icon: "database",
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
    icon: "layers",
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
  {
    title: "Product",
    icon: "sparkles",
    description: "Understanding the problem, defining the first useful version, and mapping the experience before building.",
    skills: ["Customer discovery", "MVP scoping", "User flows", "Market research"],
  },
];

