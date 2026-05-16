import { PageHero, SectionHeading } from '../components/Sections.jsx'

export function ContactPage({ content }) {
  const { contactDetails, contactPage, faqs } = content
  const contactFormEnabled = contactPage.form.enabled !== false

  return (
    <>
      <PageHero
        eyebrow={contactPage.hero.eyebrow}
        title={contactPage.hero.title}
        text={contactPage.hero.text}
      />
      <section className="content-section content-section--split">
        <div className="contact-card">
          <p className="eyebrow">{contactPage.directEyebrow}</p>
          <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
          {contactDetails.phone ? (
            <a href={`tel:${contactDetails.phone.replace(/\s+/g, '')}`}>{contactDetails.phone}</a>
          ) : null}
          {contactDetails.address ? <span>{contactDetails.address}</span> : null}
          <small>{contactDetails.hours}</small>
        </div>

        {contactFormEnabled ? (
          <form className="contact-form">
            <label>
              {contactPage.form.name}
              <input type="text" placeholder={contactPage.form.namePlaceholder} />
            </label>
            <label>
              {contactPage.form.company}
              <input type="text" placeholder={contactPage.form.companyPlaceholder} />
            </label>
            <label>
              {contactPage.form.email}
              <input type="email" placeholder={contactPage.form.emailPlaceholder} />
            </label>
            <label>
              {contactPage.form.budget}
              <select defaultValue="from-9500">
                <option value="from-4800">{contactPage.form.budgetOptions[0]}</option>
                <option value="from-9500">{contactPage.form.budgetOptions[1]}</option>
                <option value="from-16000">{contactPage.form.budgetOptions[2]}</option>
              </select>
            </label>
            <label className="contact-form__wide">
              {contactPage.form.brief}
              <textarea rows="6" placeholder={contactPage.form.briefPlaceholder} />
            </label>
            <button className="button button--primary" type="button">
              {contactPage.form.submit}
            </button>
          </form>
        ) : (
          <article className="contact-card contact-note">
            <p className="eyebrow">{contactPage.form.noteTitle}</p>
            <p>{contactPage.form.noteText}</p>
            <small>{contactPage.form.emailLabel}</small>
            <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
          </article>
        )}
      </section>
      <section className="content-section">
        <SectionHeading eyebrow={contactPage.faq.eyebrow} title={contactPage.faq.title} />
        <div className="faq-list">
          {faqs.map((item) => (
            <article className="faq-card" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
