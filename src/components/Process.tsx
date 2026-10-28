const steps = [
  { title: "Discover", description: "understand the business problem and the users." },
  { title: "Scope", description: "define the MVP, flows and requirements in a written spec." },
  { title: "Build", description: "ship in small, reviewed iterations you can test along the way." },
  { title: "Launch", description: "deploy, verify, and support the first real users." },
];

export default function Process() {
  return (
    <section id="process" className="section-shell border-t border-white/8">
      <div className="section-heading">
        <div>
          <p className="section-label">How I work</p>
          <h2 className="section-title">A clear path from problem to launch.</h2>
        </div>
        <p className="section-description">Understand first. Agree on the scope. Build in steps you can review. Then put the product in real hands.</p>
      </div>
      <ol className="process-timeline" aria-label="How I work">
        {steps.map((step, index) => (
          <li key={step.title} className="process-step">
            <span className="process-number" aria-hidden="true">0{index + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
