import { CTASection, DetailItem, PageHero, SectionHeading } from '../components/Sections.jsx'

export function ServicesPage({ onNavigate, content }) {
  const { serviceCards, servicesPage } = content

  return (
    <>
      <PageHero
        eyebrow={servicesPage.hero.eyebrow}
        title={servicesPage.hero.title}
        text={servicesPage.hero.text}
      />
      <section className="content-section">
        <div className="card-grid card-grid--services">
          {serviceCards.map((card) => (
            <article className="info-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
            </article>
          ))}
          {servicesPage.extras.map((item) => (
            <article className="info-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="content-section content-section--split">
        <div>
          <SectionHeading eyebrow={servicesPage.included.eyebrow} title={servicesPage.included.title} />
        </div>
        <div className="detail-list">
          {servicesPage.included.items.map((item) => (
            <DetailItem key={item.title} title={item.title} text={item.text} />
          ))}
        </div>
      </section>
      <CTASection onNavigate={onNavigate} content={content} />
    </>
  )
}
