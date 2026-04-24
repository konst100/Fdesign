import { CTASection, PageHero } from '../components/Sections.jsx'
import { workItems } from '../siteData.js'

export function WorkPage({ onNavigate }) {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="A case-study style portfolio built to feel credible, polished, and commercially sharp."
        text="These examples show the level of thinking, pacing, and presentation FDesign is designed to deliver."
      />
      <section className="content-section">
        <div className="work-grid work-grid--expanded">
          {workItems.map((item) => (
            <article className="work-card" key={item.client}>
              <div className="work-card__meta">
                <span>{item.client}</span>
                <span>{item.sector}</span>
              </div>
              <h3>{item.outcome}</h3>
              <p>{item.summary}</p>
              <div className="work-card__footer">
                <strong>{item.budget}</strong>
                <span>8 week window</span>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTASection onNavigate={onNavigate} />
    </>
  )
}
