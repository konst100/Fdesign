import { CTASection, PageHero } from '../components/Sections.jsx'

export function WorkPage({ onNavigate, content }) {
  const { workItems, workPage } = content

  return (
    <>
      <PageHero
        eyebrow={workPage.hero.eyebrow}
        title={workPage.hero.title}
        text={workPage.hero.text}
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
                <span>{workPage.footerLabel}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTASection onNavigate={onNavigate} content={content} />
    </>
  )
}
