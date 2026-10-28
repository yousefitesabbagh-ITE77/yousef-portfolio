import type { ReactNode } from "react";

const marks: Record<string, ReactNode> = {
  React: <><ellipse cx="12" cy="12" rx="10" ry="4" /><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" /><circle cx="12" cy="12" r="1.5" fill="currentColor" /></>,
  TypeScript: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 11h6m-3 0v7m8-7c-4-1-5 3-1 4s2 4-1 3" /></>,
  Laravel: <path d="m3 5 5-3 5 3v6l5-3 4 2v6l-9 6-10-6V5Zm0 0 5 3 5-3M8 8v9l5 5m0-11v6l9-7m-4-2v6" />,
  PHP: <><ellipse cx="12" cy="12" rx="11" ry="7" /><path d="m5 16 2-7h3l-1 4H6m6 1 2-7m-1 4h3l-1 3m2 2 2-7h2" /></>,
  "Tailwind CSS": <path d="M2 12c2-6 6-6 10-3s7 3 10-3c-2 8-6 9-11 5S4 9 2 12Zm0 6c2-6 6-6 10-3s7 3 10-3c-2 8-6 9-11 5S4 15 2 18Z" />,
  PostgreSQL: <><ellipse cx="12" cy="5" rx="7" ry="3" /><path d="M5 5v14c0 4 14 4 14 0V5M5 12c0 4 14 4 14 0" /></>,
  MariaDB: <path d="M2 18c4-2 4-8 10-9l8-5 2 1-3 5c-1 6-6 8-11 7l-4 3 1-4m7-7 2 5 4-4" />,
  Git: <><path d="m12 2 10 10-10 10L2 12 12 2Z" /><path d="m8 6 8 8m-4-4v8" /><circle cx="12" cy="10" r="1" /><circle cx="16" cy="14" r="1" /><circle cx="12" cy="18" r="1" /></>,
};

export default function TechMarquee() {
  return (
    <div className="tech-marquee" data-marquee aria-label="Technology toolkit">
      <div className="marquee-track">
        {[0,1].map((copy) => <div key={copy} className="marquee-copy" aria-hidden={copy === 1 ? true : undefined}>
          {Object.entries(marks).map(([name, mark]) => <span key={name} className="marquee-item"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">{mark}</svg>{name}</span>)}
        </div>)}
      </div>
    </div>
  );
}
