import Icon from "./Icon";
import { emailComposeLink, linkedinProfile, whatsappLink } from "../data/site";
import type { IconName } from "../types";

const options: { label: string; detail: string; href: string; icon: IconName; primary?: boolean }[] = [
  { label: "WhatsApp", detail: "Start a project conversation", href: whatsappLink, icon: "whatsapp", primary: true },
  { label: "Email", detail: "Send a brief or an opportunity", href: emailComposeLink, icon: "mail" },
  { label: "LinkedIn", detail: "Connect and talk about a role", href: linkedinProfile, icon: "linkedin" },
];

export default function Contact() {
  return (
    <section id="contact" className="section-shell border-t border-white/8">
      <div className="contact-panel">
        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-[90px]" aria-hidden="true" />
        <div className="absolute -bottom-28 left-16 h-64 w-64 rounded-full bg-cyan-400/10 blur-[90px]" aria-hidden="true" />
        <div className="relative z-10">
          <div className="contact-heading">
            <p className="section-label">Contact</p>
            <h2 className="mt-4 max-w-3xl">Have a project or a role in mind? Let&apos;s talk.</h2>
            <p className="mt-5 max-w-2xl text-lg">A product to build, a workflow to improve, or a full-stack role to discuss. Tell me what you have in mind.</p>
          </div>
          <div className="contact-options">
            {options.map((option) => (
              <a key={option.label} href={option.href} target="_blank" rel="noreferrer" className={`contact-option${option.primary ? " contact-option-primary" : ""}`} aria-label={option.label}>
                <Icon name={option.icon} className="h-5 w-5" />
                <div><strong>{option.label}</strong><span>{option.detail}</span></div>
                <Icon name="arrow" className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="contact-response">Usually replies within 24 hours.</p>
        </div>
      </div>
    </section>
  );
}
