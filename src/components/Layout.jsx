import { contactDetails } from '../siteData.js'

export function Header({ currentPath, onNavigate, items }) {
  return (
    <header className="site-header">
      <button className="brand-mark" onClick={() => onNavigate('/')}>
        <span className="brand-mark__icon">FD</span>
        <span className="brand-mark__text">
          <strong>FDesign</strong>
          <small>Web Design & Development</small>
        </span>
      </button>

      <nav className="site-nav" aria-label="Primary">
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

      <a className="header-cta" href={`mailto:${contactDetails.email}`}>
        Book a call
      </a>
    </header>
  )
}

export function Footer({ onNavigate, items }) {
  return (
    <footer className="site-footer">
      <div>
        <p className="eyebrow">FDesign</p>
        <p className="footer-note">
          Premium websites for modern businesses that want to look sharper, communicate better,
          and convert with more confidence.
        </p>
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
