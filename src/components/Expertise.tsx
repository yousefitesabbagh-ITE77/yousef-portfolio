import Icon from "./Icon";
import { skillGroups } from "../data/skills";

export default function Expertise() {

  return (
<section id="expertise" className="section-shell border-t border-white/8 bg-white/[0.012]">
        <div className="section-heading">
          <div>
            <p className="section-label">Skills</p>
            <h2 className="section-title">Product sense, backed by real engineering.</h2>
          </div>
          <p className="section-description">
            I start from the user and the business problem, then carry the solution through interface, logic and data, so what I specify is something I know can be built.
          </p>
        </div>

        <div className="expertise-grid mt-12">
          {skillGroups.map((group, index) => {
            return (
              <article key={group.title} className="expertise-card">
                <div className="expertise-icon-row">
                  <Icon name={group.icon} className="h-6 w-6" />
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
