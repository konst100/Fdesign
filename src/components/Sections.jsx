import { useEffect, useRef, useState } from 'react'
import { contactDetails } from '../siteData.js'
import heroEditorial from '../assets/hero-editorial.png'

export function HeroSection({ onNavigate }) {
  const heroRef = useRef(null)
  const [parallax, setParallax] = useState({ image: 0, copy: 0, side: 0 })

  useEffect(() => {
    let frame = 0

    const updateParallax = () => {
      frame = 0

      if (!heroRef.current) {
        return
      }

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setParallax({ image: 0, copy: 0, side: 0 })
        return
      }

      const rect = heroRef.current.getBoundingClientRect()
      const compact = window.innerWidth <= 760

      setParallax({
        image: clamp(-rect.top * (compact ? 0.05 : 0.1), -36, 56),
        copy: clamp(-rect.top * (compact ? 0.025 : 0.055), -16, 28),
        side: clamp(rect.top * (compact ? 0.015 : 0.03), -16, 20),
      })
    }

    const requestParallax = () => {
      if (frame) {
        return
      }

      frame = window.requestAnimationFrame(updateParallax)
    }

    updateParallax()
    window.addEventListener('scroll', requestParallax, { passive: true })
    window.addEventListener('resize', requestParallax)

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame)
      }

      window.removeEventListener('scroll', requestParallax)
      window.removeEventListener('resize', requestParallax)
    }
  }, [])

  return (
    <section className="hero-panel hero-panel--immersive" ref={heroRef}>
      <div
        className="hero-media"
        style={{ transform: `translate3d(0, ${parallax.image}px, 0) scale(1.08)` }}
      >
        <img
          className="hero-media__image"
          src={heroEditorial}
          alt="Dark editorial interior with glass walls, concrete floors, and warm architectural lighting."
        />
      </div>

      <div
        className="hero-copy hero-copy--floating"
        style={{ transform: `translate3d(0, ${parallax.copy}px, 0)` }}
      >
        <div className="hero-meta">
          <span>Berlin based</span>
          <span>Available for select projects</span>
        </div>
        <p className="eyebrow">Boutique digital studio</p>
        <h1 className="hero-title">
          Modern websites for brands that need to feel
          <span>clear, expensive, and ready to sell.</span>
        </h1>
        <p className="hero-text">
          Strategy, design, and frontend delivery for service brands that have outgrown templates
          and need a sharper digital presence.
        </p>

        <div className="hero-actions">
          <button className="button button--primary" onClick={() => onNavigate('/contact')}>
            Start a project
          </button>
          <button className="button button--ghost" onClick={() => onNavigate('/work')}>
            View selected work
          </button>
        </div>
        <p className="hero-note">Sharper positioning, calmer process, and a site that lands with authority.</p>

        <div className="hero-metrics">
          <Metric value="5+" label="Years designing websites" />
          <Metric value="32" label="Launched client projects" />
          <Metric value="2-10" label="Week project windows" />
        </div>
      </div>

      <aside
        className="hero-side-caption"
        style={{ transform: `translate3d(0, ${parallax.side}px, 0)` }}
      >
        <span>Editorial hero direction</span>
        <strong>Architectural calm with a premium digital tone.</strong>
        <p>Full-bleed atmosphere, compact copy, restrained motion.</p>
      </aside>
    </section>
  )
}

export function PageHero({ eyebrow, title, text }) {
  return (
    <section className="page-hero">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="hero-text">{text}</p>
    </section>
  )
}

export function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <p className="section-text">{text}</p> : null}
    </div>
  )
}

export function DetailItem({ title, text }) {
  return (
    <article className="detail-item">
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  )
}

export function CTASection({ onNavigate }) {
  return (
    <section className="cta-panel">
      <div>
        <p className="eyebrow">Ready when you are</p>
        <h2>Need a website that looks current, premium, and built with intent?</h2>
      </div>
      <div className="cta-panel__actions">
        <button className="button button--primary" onClick={() => onNavigate('/contact')}>
          Book a discovery call
        </button>
        <a className="button button--ghost" href={`mailto:${contactDetails.email}`}>
          Email FDesign
        </a>
      </div>
    </section>
  )
}

function Metric({ value, label }) {
  return (
    <div className="metric">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  )
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}
