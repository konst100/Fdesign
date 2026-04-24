import { CTASection, DetailItem, PageHero, SectionHeading } from '../components/Sections.jsx'

export function AboutPage({ onNavigate, content }) {
  const { aboutPage, values } = content

  return (
    <>
      <PageHero
        eyebrow={aboutPage.hero.eyebrow}
        title={aboutPage.hero.title}
        text={aboutPage.hero.text}
      />
      <section className="content-section content-section--split">
        <div>
          <SectionHeading
            eyebrow={aboutPage.profile.eyebrow}
            title={aboutPage.profile.title}
            text={aboutPage.profile.text}
          />
        </div>
        <div className="detail-list">
          {values.map((value) => (
            <DetailItem key={value} title={aboutPage.valueTitle} text={value} />
          ))}
        </div>
      </section>
      <section className="content-section">
        <div className="about-panel">
          <div>
            <p className="eyebrow">{aboutPage.tools.eyebrow}</p>
            <h3>{aboutPage.tools.title}</h3>
          </div>
          <div className="chip-row">
            {aboutPage.tools.chips.map((item) => (
              <span className="chip" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
      <CTASection onNavigate={onNavigate} content={content} />
    </>
  )
}
