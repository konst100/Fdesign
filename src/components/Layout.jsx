import { languages } from '../siteData.js'

const languageDecoder = new TextDecoder('utf-8')

const legalLinks = [
  { path: '/impressum', label: 'Impressum' },
  { path: '/datenschutz', label: 'Datenschutz' },
]

export function Header({ currentPath, onNavigate, items, content, language, onLanguageChange }) {
  const { contactDetails, layout } = content

  return (
    <header className="site-header">
      <button className="brand-mark" onClick={() => onNavigate('/')}>
        <span className="brand-mark__icon">FD</span>
        <span className="brand-mark__text">
          <strong>FDesign</strong>
          <small>{layout.brandTagline}</small>
        </span>
      </button>

      <nav className="site-nav" aria-label={layout.navAriaLabel}>
        {items.map((item) => (
          <button
            key={item.path}
            className={currentPath === item.path ? 'nav-link is-active' : 'nav-link'}
            onClick={() => onNavigate(item.path)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="header-tools">
        <label className="language-switcher">
          <span className="language-switcher__label">{layout.languageLabel}</span>
          <select
            className="language-select"
            aria-label={layout.languageLabel}
            value={language}
            onChange={(event) => onLanguageChange(event.target.value)}
          >
            {languages.map((item) => (
              <option key={item.code} value={item.code}>
                {decodeLanguageLabel(item.label)}
              </option>
            ))}
          </select>
        </label>

        <a className="header-cta" href={`mailto:${contactDetails.email}`}>
          {layout.headerCta}
        </a>
      </div>
    </header>
  )
}

export function Footer({ onNavigate, items, content }) {
  const { contactDetails, layout } = content

  return (
    <footer className="site-footer">
      <div className="site-footer__lead">
        <p className="eyebrow">{layout.footerEyebrow}</p>
        <p className="footer-note">{layout.footerNote}</p>
        {layout.footerBadge ? <small className="footer-badge">{layout.footerBadge}</small> : null}
        {layout.footerMeta ? <small className="footer-meta">{layout.footerMeta}</small> : null}
      </div>

      <div className="footer-links">
        {items.map((item) => (
          <button key={item.path} className="footer-link" onClick={() => onNavigate(item.path)}>
            {item.label}
          </button>
        ))}
      </div>

      <div className="footer-links footer-links--legal">
        {legalLinks.map((item) => (
          <button key={item.path} className="footer-link" onClick={() => onNavigate(item.path)}>
            {item.label}
          </button>
        ))}
      </div>

      <div className="footer-contact">
        {contactDetails.phone ? (
          <a href={`tel:${contactDetails.phone.replace(/\s+/g, '')}`}>{contactDetails.phone}</a>
        ) : null}
        <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
        {contactDetails.address ? <span>{contactDetails.address}</span> : null}
      </div>
    </footer>
  )
}

function decodeLanguageLabel(value) {
  if (!/[ÐÑ]/u.test(value)) {
    return value
  }

  try {
    const bytes = Uint8Array.from(value, (character) => character.charCodeAt(0))
    const decoded = languageDecoder.decode(bytes)
    return decoded.includes('\uFFFD') ? value : decoded
  } catch {
    return value
  }
}
