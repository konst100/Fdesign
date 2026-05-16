import { PageHero } from '../components/Sections.jsx'

const imprintContent = {
  de: {
    eyebrow: 'Impressum',
    title: 'Pflichtangaben fuer eine oeffentliche Website in Deutschland.',
    text:
      'Diese Vorlage ist als ruhiges Geruest fuer eine oeffentliche Portfolio-Version gedacht. Vor dem echten Livegang muessen die Platzhalter mit realen Angaben ersetzt werden.',
    sections: [
      {
        title: 'Verantwortlich fuer den Inhalt',
        body: [
          '[Vollstaendiger Name]',
          '[Strasse und Hausnummer]',
          '[PLZ Ort]',
        ],
      },
      {
        title: 'Kontakt',
        body: [
          'E-Mail: hello@fdesignstudio.de',
          'Optional weitere Kontaktmoeglichkeit, falls tatsaechlich genutzt.',
        ],
      },
      {
        title: 'Hinweis zur Website',
        body: [
          'Diese Version ist als Portfolio- und Praesentationswebsite konzipiert.',
          'Wenn ueber die Website doch Leistungen angeboten, Termine gebucht oder Daten aktiv erhoben werden, muessen die Angaben rechtlich erneut geprueft und erweitert werden.',
        ],
      },
    ],
    note:
      'Fuer journalistisch-redaktionelle Inhalte oder eine geschäftsmaessige Taetigkeit koennen weitere Angaben erforderlich sein.',
  },
  en: {
    eyebrow: 'Imprint',
    title: 'Required information for a public website in Germany.',
    text:
      'This template is meant as a calm starting point for a public portfolio site. Replace every placeholder with real information before a real public launch.',
    sections: [
      {
        title: 'Responsible for content',
        body: [
          '[Full legal name]',
          '[Street and house number]',
          '[Postal code, city]',
        ],
      },
      {
        title: 'Contact',
        body: [
          'Email: hello@fdesignstudio.de',
          'Add another direct contact method only if it is actually used.',
        ],
      },
      {
        title: 'Website note',
        body: [
          'This version is designed as a portfolio and presentation website.',
          'If the website later offers paid services, bookings, or active data collection, the legal information should be reviewed and expanded.',
        ],
      },
    ],
    note:
      'Journalistic/editorial content or business activity can trigger additional disclosure requirements.',
  },
  ru: {
    eyebrow: 'Impressum',
    title: '\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0434\u043b\u044f \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0433\u043e \u0441\u0430\u0439\u0442\u0430 \u0432 \u0413\u0435\u0440\u043c\u0430\u043d\u0438\u0438.',
    text:
      '\u042d\u0442\u043e \u0441\u043f\u043e\u043a\u043e\u0439\u043d\u0430\u044f \u0437\u0430\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u0434\u043b\u044f \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0439 portfolio-\u0432\u0435\u0440\u0441\u0438\u0438. \u041f\u0435\u0440\u0435\u0434 \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u043c \u0437\u0430\u043f\u0443\u0441\u043a\u043e\u043c \u0432\u0441\u0435 \u043f\u043b\u0435\u0439\u0441\u0445\u043e\u043b\u0434\u0435\u0440\u044b \u043d\u0443\u0436\u043d\u043e \u0437\u0430\u043c\u0435\u043d\u0438\u0442\u044c \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438.',
    sections: [
      {
        title: '\u041e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0437\u0430 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435',
        body: [
          '[\u041f\u043e\u043b\u043d\u043e\u0435 \u0438\u043c\u044f]',
          '[\u0423\u043b\u0438\u0446\u0430 \u0438 \u043d\u043e\u043c\u0435\u0440 \u0434\u043e\u043c\u0430]',
          '[\u0418\u043d\u0434\u0435\u043a\u0441, \u0433\u043e\u0440\u043e\u0434]',
        ],
      },
      {
        title: '\u041a\u043e\u043d\u0442\u0430\u043a\u0442',
        body: [
          'Email: hello@fdesignstudio.de',
          '\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0439 \u0434\u0440\u0443\u0433\u043e\u0439 \u043a\u0430\u043d\u0430\u043b \u0441\u0432\u044f\u0437\u0438 \u0442\u043e\u043b\u044c\u043a\u043e \u0435\u0441\u043b\u0438 \u043e\u043d \u0440\u0435\u0430\u043b\u044c\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f.',
        ],
      },
      {
        title: '\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435 \u043e \u0441\u0430\u0439\u0442\u0435',
        body: [
          '\u042d\u0442\u0430 \u0432\u0435\u0440\u0441\u0438\u044f \u0437\u0430\u0434\u0443\u043c\u0430\u043d\u0430 \u043a\u0430\u043a portfolio-\u0441\u0430\u0439\u0442 \u0438 \u043f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u043e\u043d\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430.',
          '\u0415\u0441\u043b\u0438 \u043f\u043e\u0442\u043e\u043c \u043d\u0430 \u0441\u0430\u0439\u0442\u0435 \u043f\u043e\u044f\u0432\u044f\u0442\u0441\u044f \u043f\u043b\u0430\u0442\u043d\u044b\u0435 \u0443\u0441\u043b\u0443\u0433\u0438, \u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0438\u043b\u0438 \u0441\u0431\u043e\u0440 \u0434\u0430\u043d\u043d\u044b\u0445, legal-\u0431\u043b\u043e\u043a \u043d\u0443\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0438 \u0440\u0430\u0441\u0448\u0438\u0440\u0438\u0442\u044c.',
        ],
      },
    ],
    note:
      '\u0414\u043b\u044f \u0436\u0443\u0440\u043d\u0430\u043b\u0438\u0441\u0442\u0441\u043a\u0438\u0445/\u0440\u0435\u0434\u0430\u043a\u0446\u0438\u043e\u043d\u043d\u044b\u0445 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u043e\u0432 \u0438\u043b\u0438 \u043f\u0440\u0438 \u0444\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u043a\u043e\u043c\u043c\u0435\u0440\u0446\u0438\u0438 \u043c\u043e\u0433\u0443\u0442 \u043f\u043e\u043d\u0430\u0434\u043e\u0431\u0438\u0442\u044c\u0441\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435.',
  },
}

export function ImprintPage({ language }) {
  const copy = imprintContent[language] || imprintContent.de

  return (
    <>
      <PageHero eyebrow={copy.eyebrow} title={copy.title} text={copy.text} />
      <section className="content-section">
        <div className="legal-grid">
          {copy.sections.map((section) => (
            <article className="legal-card" key={section.title}>
              <h3>{section.title}</h3>
              {section.body.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </article>
          ))}
        </div>
      </section>
      <section className="content-section">
        <article className="legal-card legal-card--note">
          <p>{copy.note}</p>
        </article>
      </section>
    </>
  )
}
