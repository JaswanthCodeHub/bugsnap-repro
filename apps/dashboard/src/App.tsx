const components = [
  { name: "Dashboard", detail: "Reports, activity and project health", status: "Planned" },
  { name: "Browser widget", detail: "In-app reporting and visual evidence", status: "Planned" },
  { name: "Diagnostics", detail: "Privacy-filtered browser event timeline", status: "Planned" },
  { name: "Playwright generator", detail: "Editable reproduction test drafts", status: "Planned" }
];

export default function App() {
  return (
    <main className="shell">
      <header className="topbar">
        <a className="brand" href="/" aria-label="BugSnap Repro home">
          <span className="brand-mark">B</span>
          <span>BugSnap <span className="muted">Repro</span></span>
        </a>
        <span className="version">EARLY DEVELOPMENT · v0.1.0</span>
      </header>

      <section className="hero">
        <p className="eyebrow">OPEN-SOURCE DEVELOPER TOOLING</p>
        <h1>From bug report<br /><span>to reproducible test.</span></h1>
        <p className="intro">
          Capture visual evidence, understand browser failures, and turn
          interaction timelines into editable Playwright test drafts.
        </p>
        <div className="hero-actions">
          <a className="primary" href="https://github.com/JaswanthCodeHub/bugsnap-repro" target="_blank" rel="noreferrer">
            View source on GitHub ↗
          </a>
          <span className="license">MIT licensed · Self-hosting planned</span>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">PROJECT FOUNDATION</p>
            <h2>What we're building</h2>
          </div>
          <span className="phase">PHASE 01</span>
        </div>
        <div className="grid">
          {components.map((item, index) => (
            <article className="feature" key={item.name}>
              <div className="feature-top">
                <span className="number">0{index + 1}</span>
                <span className="status">{item.status}</span>
              </div>
              <h3>{item.name}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <span>Built in public by JaswanthCodeHub.</span>
        <span>Do not use with production user data yet.</span>
      </footer>
    </main>
  );
}
