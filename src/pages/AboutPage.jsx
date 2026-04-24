import { CTASection, DetailItem, PageHero, SectionHeading } from '../components/Sections.jsx'
import { values } from '../siteData.js'

export function AboutPage({ onNavigate }) {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="FDesign is a boutique studio built for businesses that care how they are perceived."
        text="After years away from website production, this new chapter starts with a simple idea: make the web presence feel as strong as the actual service."
      />
      <section className="content-section content-section--split">
        <div>
          <SectionHeading
            eyebrow="Studio profile"
            title="Small enough to stay sharp, senior enough to move fast."
            text="FDesign combines taste, structure, and frontend execution so projects do not get lost between strategy, design, and code."
          />
        </div>
        <div className="detail-list">
          {values.map((value) => (
            <DetailItem key={value} title="FDesign standard" text={value} />
          ))}
        </div>
      </section>
      <section className="content-section">
        <div className="about-panel">
          <div>
            <p className="eyebrow">Tools & focus</p>
            <h3>Design direction, conversion-aware layouts, React builds, launch-ready delivery.</h3>
          </div>
          <div className="chip-row">
            {['UI design', 'Brand tone', 'React', 'Vite', 'Responsive build', 'Consulting'].map((item) => (
              <span className="chip" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
      <CTASection onNavigate={onNavigate} />
    </>
  )
}
