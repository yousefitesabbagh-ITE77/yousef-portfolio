import sportivoImage from "../assets/projects/sportivo.webp";
import teacherOrganizerImage from "../assets/projects/teacher-organizer.webp";
import teamflowLogin from "../assets/projects/teamflow/01-login.webp";
import teamflowDashboard from "../assets/projects/teamflow/02-dashboard.webp";
import teamflowProjects from "../assets/projects/teamflow/03-projects.webp";
import teamflowProjectDetails from "../assets/projects/teamflow/04-project-details-members.webp";
import teamflowTasks from "../assets/projects/teamflow/05-tasks-and-filters.webp";
import teamflowTaskDetails from "../assets/projects/teamflow/06-task-details.webp";
import mawadLanding from "../assets/projects/mawad/landing.webp";
import mawadLandingDetails from "../assets/projects/mawad/landing-details.webp";
import mawadSignup from "../assets/projects/mawad/signup.webp";
import mawadSignin from "../assets/projects/mawad/signin.webp";
import mawadSupplierInvitations from "../assets/projects/mawad/supplier-invitations.webp";
import mawadSupplierProfile from "../assets/projects/mawad/supplier-profile.webp";
import mawadBuyerRequests from "../assets/projects/mawad/buyer-requests.webp";
import mawadNewRequest from "../assets/projects/mawad/new-request.webp";
import buildakLanding from "../assets/projects/buildak/landing.webp";
import buildakMaterialsCatalog from "../assets/projects/buildak/materials-catalog.webp";
import buildakRequestReview from "../assets/projects/buildak/request-review.webp";
import buildakOfferProgress from "../assets/projects/buildak/offer-progress.webp";
import buildakOfferComparison from "../assets/projects/buildak/offer-comparison.webp";
import buildakSupplierDashboard from "../assets/projects/buildak/supplier-dashboard.webp";


import type { Project } from "../types";

export const featuredProjects: Project[] = [
  {
    title: "Buildak",
    eyebrow: "B2B Ordering Platform for Construction Contractors",
    flagship: true,
    badges: [
      { label: "Syria Build Week 2026 · Top 12 Finalist", highlighted: true },
      { label: "Live product" },
    ],
    summary:
      "A two-sided ordering platform where contractors list the materials and quantities they need, suppliers send competing offers, and contractors buy cash or in installments — with delivery handled by the platform.",
    points: [
      "Customer discovery showed contractors usually buy on credit from traders they know — validated with a contracting company and added an installment option (30% upfront, rest over 3 months) beside cash.",
      "Shipped a contractor app (catalog, cart, side-by-side offer comparison, confirmation, tracking) and a separate supplier dashboard for pricing requests and managing pickups.",
      "Set a focused scope: Arabic-only RTL interface, platform-handled delivery, and a supplier-commission business model, free for contractors at launch.",
      "Selected in the top 12 of 30 participants at Syria Build Week 2026 (Startup Grind Damascus).",
    ],
    tech: ["React", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    links: [
      { label: "Contractor app", href: "https://buildak.replit.app/" },
      { label: "Supplier dashboard", href: "https://buildak-supplier.replit.app/" },
    ],
    browserUrl: "buildak.replit.app",
    image: buildakLanding,
    gallery: [
      buildakLanding,
      buildakMaterialsCatalog,
      buildakRequestReview,
      buildakOfferProgress,
      buildakOfferComparison,
      buildakSupplierDashboard,
    ],
    note: "Interface in Arabic — built for the Syrian construction market.",
  },
  {
    title: "Mawad",
    eyebrow: "B2B Construction Procurement Platform · v1",
    summary:
      "A role-based procurement platform that helps contractors submit material requests, receive private quotations from matched suppliers, and compare complete offers in one place.",
    points: [
      "Created separate contractor and supplier experiences with role-based dashboards and procurement workflows.",
      "Built multi-step material requests, supplier matching, RFQ invitations, quotation status tracking, and supplier profiles.",
      "Added AI-assisted request creation and plain-language quote insights to simplify complex procurement decisions.",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    liveDemo: "https://mawad-build-smart.lovable.app/",
    browserUrl: "mawad-build-smart.lovable.app",
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
    badges: [{ label: "Devista Internship MVP · Demo Day" }],
  },
  {
    title: "TeamFlow",
    eyebrow: "Full-Stack Project Management Platform",
    summary:
      "A complete project and task management application for organizing teams, members, assignments, priorities, statuses, due dates, and project progress through one connected system.",
    points: [
      "Designed a Laravel REST API with structured resources, form requests, and relational data models.",
      "Implemented secure Sanctum authentication, protected routes, and owner/member authorization rules.",
      "Built a responsive React dashboard with search, filtering, form validation, loading states, and clear error handling.",
      "Verified with 87 PHPUnit tests (435 assertions), browser testing, linting and production builds.",
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
    videoDemo: "https://youtu.be/Yzw3f3ZmtTw?si=wj_BngTp9G6F7cno",
    image: teamflowDashboard,
    gallery: [
      teamflowDashboard,
      teamflowProjects,
      teamflowProjectDetails,
      teamflowTasks,
      teamflowTaskDetails,
      teamflowLogin,
    ],
    stat: "87 tests",
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

