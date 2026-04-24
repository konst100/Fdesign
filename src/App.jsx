import { startTransition, useEffect, useEffectEvent, useMemo, useState } from 'react'
import './App.css'
import { Footer, Header } from './components/Layout.jsx'
import { AboutPage } from './pages/AboutPage.jsx'
import { ContactPage } from './pages/ContactPage.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { ProcessPage } from './pages/ProcessPage.jsx'
import { ServicesPage } from './pages/ServicesPage.jsx'
import { WorkPage } from './pages/WorkPage.jsx'

const navigationItems = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/work', label: 'Work' },
  { path: '/about', label: 'About' },
  { path: '/process', label: 'Process' },
  { path: '/contact', label: 'Contact' },
]

const pages = {
  '/': HomePage,
  '/services': ServicesPage,
  '/work': WorkPage,
  '/about': AboutPage,
  '/process': ProcessPage,
  '/contact': ContactPage,
}

function App() {
  const [path, setPath] = useState(() => window.location.pathname || '/')

  const syncLocation = useEffectEvent(() => {
    setPath(window.location.pathname || '/')
  })

  useEffect(() => {
    window.addEventListener('popstate', syncLocation)
    return () => window.removeEventListener('popstate', syncLocation)
  }, [syncLocation])

  const navigate = useEffectEvent((nextPath) => {
    if (nextPath === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    window.history.pushState({}, '', nextPath)
    startTransition(() => {
      setPath(nextPath)
    })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })

  const Page = useMemo(() => pages[path] || HomePage, [path])

  return (
    <div className="site-shell">
      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <div className="orb orb-three" />
      <Header currentPath={path} onNavigate={navigate} items={navigationItems} />
      <main className="page-shell">
        <Page onNavigate={navigate} />
      </main>
      <Footer onNavigate={navigate} items={navigationItems} />
    </div>
  )
}

export default App
