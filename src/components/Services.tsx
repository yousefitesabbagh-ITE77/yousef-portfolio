import Icon from "./Icon";
import type { IconName } from "../types";

const services: { title: string; description: string; icon: IconName }[] = [
  { title: "MVP Development", description: "Turn an idea into a working first version: scope, user flows, and a deployable product.", icon: "sparkles" },
  { title: "Business Web Apps & Dashboards", description: "Admin panels, internal tools, ordering and management systems with roles and permissions.", icon: "layers" },
  { title: "Full-Stack Web Applications", description: "React frontends with Laravel REST APIs, authentication, and relational databases.", icon: "server" },
  { title: "Product-Focused Websites", description: "Fast, responsive, SEO-ready websites built around a clear goal.", icon: "code" },
];

export default function Services() {
  return (
    <section id="services" className="section-shell border-t border-white/8">
      <div className="section-heading">
        <div>
          <p className="section-label">Services</p>
          <h2 className="section-title">From a first idea to a product people use.</h2>
        </div>
        <p className="section-description">A focused first version, a business tool, or a complete application. I connect the interface, the logic, and the data.</p>
      </div>
      <div className="services-grid">
        {services.map((service) => (
          <article key={service.title} className="service-card">
            <Icon name={service.icon} className="h-6 w-6" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
