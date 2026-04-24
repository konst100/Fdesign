import { CTASection, DetailItem, PageHero, SectionHeading } from '../components/Sections.jsx'

export function ProcessPage({ onNavigate, content }) {
  const { processPage, processSteps } = content

  return (
    <>
      <PageHero
        eyebrow={processPage.hero.eyebrow}
        title={processPage.hero.title}
        text={processPage.hero.text}
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
            eyebrow={processPage.expectation.eyebrow}
            title={processPage.expectation.title}
          />
        </div>
        <div className="detail-list">
          {processPage.expectation.items.map((item) => (
            <DetailItem key={item.title} title={item.title} text={item.text} />
          ))}
        </div>
      </section>
      <CTASection onNavigate={onNavigate} content={content} />
    </>
  )
}
