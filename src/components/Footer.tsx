import Icon from "./Icon";
import { emailComposeLink, githubProfile, linkedinProfile, whatsappLink } from "../data/site";

export default function Footer() {

  return (
<footer className="border-t border-white/8 px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-3">
          <p>© 2026 Yousef Sabbagh. Full-Stack Developer.</p>
          <div className="flex items-center gap-5">
            <a href={githubProfile} target="_blank" rel="noreferrer" className="icon-button" aria-label="GitHub"><Icon name="github" className="h-4 w-4" /></a>
            <a href={linkedinProfile} target="_blank" rel="noreferrer" className="icon-button" aria-label="LinkedIn"><Icon name="linkedin" className="h-4 w-4" /></a>
            <a href={emailComposeLink} target="_blank" rel="noreferrer" className="icon-button" aria-label="Email"><Icon name="mail" className="h-4 w-4" /></a>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="icon-button" aria-label="WhatsApp"><Icon name="whatsapp" className="h-4 w-4" /></a>
          </div>
        </div>
      </footer>
  );
}
