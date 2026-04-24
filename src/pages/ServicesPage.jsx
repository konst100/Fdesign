import { CTASection, DetailItem, PageHero, SectionHeading } from '../components/Sections.jsx'
import { serviceCards } from '../siteData.js'

export function ServicesPage({ onNavigate }) {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Strategy, design, and frontend production that work as one system."
        text="FDesign builds sites that are meant to be seen by real clients, not just admired by other designers."
      />
      <section className="content-section">
        <div className="card-grid card-grid--services">
          {serviceCards.map((card) => (
            <article className="info-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
            </article>
          ))}
          <article className="info-card">
            <h3>SEO-ready structure</h3>
            <p>
              Clean heading structure, metadata basics, internal linking logic, and mobile-first
              performance considerations from the start.
            </p>
          </article>
          <article className="info-card">
            <h3>Post-launch support</h3>
            <p>
              Refinements, page additions, content updates, and design care after the main launch is
              done.
            </p>
          </article>
        </div>
      </section>
      <section className="content-section content-section--split">
        <div>
          <SectionHeading
            eyebrow="Included"
            title="The standard stack around a serious business website."
          />
        </div>
        <div className="detail-list">
          <DetailItem title="Brand direction" text="Typography, palette, tone, and visual consistency." />
          <DetailItem title="Responsive layouts" text="Desktop, tablet, and mobile polish built in from the first draft." />
          <DetailItem title="Design systems" text="Reusable sections, components, buttons, cards, and spacing rules." />
          <DetailItem title="Launch assets" text="Favicons, social preview basics, and handoff guidance." />
        </div>
      </section>
      <CTASection onNavigate={onNavigate} />
    </>
  )
}
