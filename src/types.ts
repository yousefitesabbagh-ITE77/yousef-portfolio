export type Project = {
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
  flagship?: boolean;
  badges?: { label: string; highlighted?: boolean }[];
  links?: { label: string; href: string }[];
  browserUrl?: string;
  note?: string;
  stat?: string;
};

export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

export type IconName =
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


export type Gallery = { images: string[]; title: string; index: number };
