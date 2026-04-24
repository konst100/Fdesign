import { CTASection, DetailItem, PageHero, SectionHeading } from '../components/Sections.jsx'
import { processSteps } from '../siteData.js'

export function ProcessPage({ onNavigate }) {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="A calm, structured process that keeps momentum without chaos."
        text="Clear checkpoints, realistic expectations, and enough flexibility to improve the work while it is being made."
      />
      <section className="content-section">
        <div className="process-grid">
          {processSteps.map((item) => (
            <article className="process-card" key={item.step}>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="content-section content-section--split">
        <div>
          <SectionHeading
            eyebrow="What you can expect"
            title="No vague timelines, no disappearing act, no endless revision spiral."
          />
        </div>
        <div className="detail-list">
          <DetailItem title="Weekly rhythm" text="Regular updates with visible progress and concrete next steps." />
          <DetailItem title="Decision points" text="Clear approvals at each stage so the project keeps moving." />
          <DetailItem title="Practical scope" text="Enough ambition to look premium, enough discipline to actually launch." />
        </div>
      </section>
      <CTASection onNavigate={onNavigate} />
    </>
  )
}
