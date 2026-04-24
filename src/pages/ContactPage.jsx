import { PageHero, SectionHeading } from '../components/Sections.jsx'
import { contactDetails, faqs } from '../siteData.js'

export function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell FDesign what you want to launch, refresh, or fix."
        text="Use the contact details below or send a short brief. A clean message with goals, timeline, and budget range is enough to start."
      />
      <section className="content-section content-section--split">
        <div className="contact-card">
          <p className="eyebrow">Direct</p>
          <a href={`tel:${contactDetails.phone.replace(/\s+/g, '')}`}>{contactDetails.phone}</a>
          <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
          <span>{contactDetails.address}</span>
          <small>{contactDetails.hours}</small>
        </div>

        <form className="contact-form">
          <label>
            Name
            <input type="text" placeholder="Your name" />
          </label>
          <label>
            Company
            <input type="text" placeholder="Company or brand" />
          </label>
          <label>
            Email
            <input type="email" placeholder="name@company.com" />
          </label>
          <label>
            Budget
            <select defaultValue="from-9500">
              <option value="from-4800">€4,800 - €8,000</option>
              <option value="from-9500">€9,500 - €15,000</option>
              <option value="from-16000">€16,000+</option>
            </select>
          </label>
          <label className="contact-form__wide">
            Project brief
            <textarea
              rows="6"
              placeholder="What are you building, relaunching, or improving? What is the goal?"
            />
          </label>
          <button className="button button--primary" type="button">
            Send request
          </button>
        </form>
      </section>
      <section className="content-section">
        <SectionHeading eyebrow="FAQ" title="Quick answers before the first call." />
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
