import { languages } from '../siteData.js'

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
        <div className="language-switcher" aria-label={layout.languageLabel}>
          {languages.map((item) => (
            <button
              key={item.code}
              className={language === item.code ? 'language-button is-active' : 'language-button'}
              onClick={() => onLanguageChange(item.code)}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </div>

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
      <div>
        <p className="eyebrow">{layout.footerEyebrow}</p>
        <p className="footer-note">{layout.footerNote}</p>
      </div>

      <div className="footer-links">
        {items.map((item) => (
          <button key={item.path} className="footer-link" onClick={() => onNavigate(item.path)}>
            {item.label}
          </button>
        ))}
      </div>

      <div className="footer-contact">
        <a href={`tel:${contactDetails.phone.replace(/\s+/g, '')}`}>{contactDetails.phone}</a>
        <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
        <span>{contactDetails.address}</span>
      </div>
    </footer>
  )
}
