import Icon from "./Icon";
import type { IconName } from "../types";
import { skillGroups } from "../data/skills";

export default function Expertise() {

  return (
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

        <div className="expertise-grid mt-12">
          {skillGroups.map((group, index) => {
            const icons: IconName[] = ["code", "server", "database", "layers"];
            return (
              <article key={group.title} className="expertise-card">
                <div className="expertise-icon-row">
                  <Icon name={icons[index]} className="h-6 w-6" />
                  <span className="expertise-index">0{index + 1} / EXPERTISE</span>
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
  );
}
