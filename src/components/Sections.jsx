import { useEffect, useRef, useState } from 'react'
import heroEditorial from '../assets/hero-editorial.png'

export function HeroSection({ onNavigate, content }) {
  const heroRef = useRef(null)
  const [parallax, setParallax] = useState({ image: 0, copy: 0, side: 0 })
  const { hero } = content

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
          alt={hero.imageAlt}
        />
      </div>

      <div
        className="hero-copy hero-copy--floating"
        style={{ transform: `translate3d(0, ${parallax.copy}px, 0)` }}
      >
        <div className="hero-meta">
          {hero.meta.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1 className="hero-title">
          {hero.title}
          <span>{hero.accent}</span>
        </h1>
        <p className="hero-text">{hero.text}</p>

        <div className="hero-actions">
          <button className="button button--primary" onClick={() => onNavigate('/contact')}>
            {hero.primaryCta}
          </button>
          <button className="button button--ghost" onClick={() => onNavigate('/work')}>
            {hero.secondaryCta}
          </button>
        </div>
        <p className="hero-note">{hero.note}</p>

        <div className="hero-metrics">
          {hero.metrics.map((item) => (
            <Metric key={item.label} value={item.value} label={item.label} />
          ))}
        </div>
      </div>

      <aside
        className="hero-side-caption"
        style={{ transform: `translate3d(0, ${parallax.side}px, 0)` }}
      >
        <span>{hero.sideEyebrow}</span>
        <strong>{hero.sideTitle}</strong>
        <p>{hero.sideText}</p>
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

export function CTASection({ onNavigate, content }) {
  const { cta, contactDetails } = content

  return (
    <section className="cta-panel">
      <div>
        <p className="eyebrow">{cta.eyebrow}</p>
        <h2>{cta.title}</h2>
      </div>
      <div className="cta-panel__actions">
        <button className="button button--primary" onClick={() => onNavigate('/contact')}>
          {cta.primary}
        </button>
        <a className="button button--ghost" href={`mailto:${contactDetails.email}`}>
          {cta.secondary}
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
