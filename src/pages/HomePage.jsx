import { CTASection, HeroSection, SectionHeading } from '../components/Sections.jsx'
import { offerings, serviceCards, testimonials, workItems } from '../siteData.js'

export function HomePage({ onNavigate }) {
  return (
    <>
      <HeroSection onNavigate={onNavigate} />

      <section className="content-section">
        <SectionHeading
          eyebrow="What I do"
          title="A modern digital face for companies that have better work than their current website suggests."
          text="FDesign helps businesses look more established, communicate faster, and convert with less friction."
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
          eyebrow="Selected projects"
          title="Work that balances visual confidence with business intent."
          text="Every project below is fictionalised for this demo, but the structure, budgets, and outcomes are grounded in real-world agency work."
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
              <strong>{item.budget}</strong>
            </article>
          ))}
        </div>

        <button className="button button--ghost" onClick={() => onNavigate('/work')}>
          Explore all case studies
        </button>
      </section>

      <section className="content-section content-section--split">
        <div>
          <SectionHeading
            eyebrow="Packages"
            title="Built for real budgets, not fantasy pitch decks."
            text="You do not need a 40-person agency to get a site that looks premium. You need a tight process, clear taste, and someone who can actually ship."
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

      <section className="content-section">
        <SectionHeading eyebrow="Client words" title="What people usually say after launch." />
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article className="quote-card" key={item.author}>
              <p>“{item.quote}”</p>
              <strong>{item.author}</strong>
              <span>{item.role}</span>
            </article>
          ))}
        </div>
      </section>

      <CTASection onNavigate={onNavigate} />
    </>
  )
}
