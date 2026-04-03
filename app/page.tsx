const qualities = [
  {
    title: "Thoughtful presence",
    description:
      "A restrained layout gives every message room to breathe and keeps the focus on reflection."
  },
  {
    title: "Quiet determination",
    description:
      "The structure is easy to extend, so new memories, photographs or notes can be added without disruption."
  },
  {
    title: "Lasting appreciation",
    description:
      "A final section leaves space for gratitude, remembrance and personal messages."
  }
];

const moments = [
  {
    label: "A warm welcome",
    description:
      "The opening section introduces the tribute with a calm, respectful tone and clear visual hierarchy."
  },
  {
    label: "Shared memories",
    description:
      "Card-based sections provide a natural place for stories, messages and highlights."
  },
  {
    label: "A lasting legacy",
    description:
      "The closing panel keeps the focus on appreciation and invites visitors to pause for a moment of reflection."
  }
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Tribute showcase</p>
          <h1>Marvin von Hagen tribute</h1>
          <p className="lead">
            A calm, modern space for remembrance, gratitude and reflection,
            built with Next.js and React.
          </p>
          <div className="hero-actions">
            <a href="#qualities" className="primary-action">
              Explore the tribute
            </a>
            <a href="#moments" className="secondary-action">
              See the structure
            </a>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Tribute summary">
          <p className="panel-label">Remembered for</p>
          <ul>
            <li>Kindness that leaves room for others.</li>
            <li>Steady focus and quiet confidence.</li>
            <li>A lasting sense of appreciation.</li>
          </ul>
        </aside>
      </section>

      <section className="intro-card">
        <p>
          This showcase is designed to feel respectful and editorial, with
          simple sections that can be tailored with personal memories, imagery
          and messages in future updates.
        </p>
      </section>

      <section id="qualities" className="content-grid">
        {qualities.map((item) => (
          <article key={item.title} className="card">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </article>
        ))}
      </section>

      <section id="moments" className="timeline-section">
        <div className="section-heading">
          <p className="eyebrow">Page flow</p>
          <h2>Built to guide the reader gently through each section</h2>
        </div>

        <div className="timeline">
          {moments.map((item, index) => (
            <article key={item.label} className="timeline-item">
              <span className="timeline-index">0{index + 1}</span>
              <div>
                <h3>{item.label}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="quote-panel" aria-label="Closing tribute message">
        <p>
          “A thoughtful life is remembered not only for what it did, but for
          how it made others feel.”
        </p>
      </section>
    </main>
  );
}
