import { CTASection, HeroSection, SectionHeading } from '../components/Sections.jsx'

export function HomePage({ onNavigate, content }) {
  const { home, offerings, serviceCards, testimonials, workItems } = content

  return (
    <>
      <HeroSection onNavigate={onNavigate} content={content} />

      <section className="content-section">
        <SectionHeading
          eyebrow={home.services.eyebrow}
          title={home.services.title}
          text={home.services.text}
        />

        <div className="card-grid card-grid--services">
          {serviceCards.map((card) => (
            <article className="info-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <SectionHeading
          eyebrow={home.selectedProjects.eyebrow}
          title={home.selectedProjects.title}
          text={home.selectedProjects.text}
        />

        <div className="work-grid">
          {workItems.slice(0, 3).map((item) => (
            <article className="work-card" key={item.client}>
              <div className="work-card__meta">
                <span>{item.client}</span>
                <span>{item.sector}</span>
              </div>
              <h3>{item.outcome}</h3>
              <p>{item.summary}</p>
              {item.budget ? <strong>{item.budget}</strong> : null}
            </article>
          ))}
        </div>

        <button className="button button--ghost" onClick={() => onNavigate('/work')}>
          {home.selectedProjects.button}
        </button>
      </section>

      {offerings.length ? (
        <section className="content-section content-section--split">
          <div>
            <SectionHeading
              eyebrow={home.packages.eyebrow}
              title={home.packages.title}
              text={home.packages.text}
            />
          </div>

          <div className="pricing-list">
            {offerings.map((item) => (
              <article className="pricing-card" key={item.name}>
                <div className="pricing-card__head">
                  <h3>{item.name}</h3>
                  <strong>{item.price}</strong>
                </div>
                <p>{item.description}</p>
                <span>{item.length}</span>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section className="content-section">
        <SectionHeading eyebrow={home.testimonials.eyebrow} title={home.testimonials.title} />
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article className="quote-card" key={item.author}>
              <p>"{item.quote}"</p>
              <strong>{item.author}</strong>
              <span>{item.role}</span>
            </article>
          ))}
        </div>
      </section>

      <CTASection onNavigate={onNavigate} content={content} />
    </>
  )
}
