import { startTransition, useEffect, useEffectEvent, useMemo, useState } from 'react'
import './App.css'
import { Footer, Header } from './components/Layout.jsx'
import { AboutPage } from './pages/AboutPage.jsx'
import { ContactPage } from './pages/ContactPage.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { ProcessPage } from './pages/ProcessPage.jsx'
import { ServicesPage } from './pages/ServicesPage.jsx'
import { WorkPage } from './pages/WorkPage.jsx'
import { defaultLanguage, getSiteContent, languages } from './siteData.js'

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
  const [language, setLanguage] = useState(() => {
    const storedLanguage = window.localStorage.getItem('fdesign-language')

    if (storedLanguage && languages.some((item) => item.code === storedLanguage)) {
      return storedLanguage
    }

    const browserLanguage = window.navigator.language.slice(0, 2).toLowerCase()
    return languages.some((item) => item.code === browserLanguage) ? browserLanguage : defaultLanguage
  })

  const content = useMemo(() => getSiteContent(language), [language])

  const syncLocation = useEffectEvent(() => {
    setPath(window.location.pathname || '/')
  })

  const switchLanguage = useEffectEvent((nextLanguage) => {
    setLanguage(nextLanguage)
  })

  useEffect(() => {
    window.addEventListener('popstate', syncLocation)
    return () => window.removeEventListener('popstate', syncLocation)
  }, [syncLocation])

  useEffect(() => {
    window.localStorage.setItem('fdesign-language', language)
    document.documentElement.lang = language
  }, [language])

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
      <Header
        currentPath={path}
        onNavigate={navigate}
        items={content.navigation}
        content={content}
        language={language}
        onLanguageChange={switchLanguage}
      />
      <main className="page-shell">
        <Page onNavigate={navigate} content={content} language={language} />
      </main>
      <Footer onNavigate={navigate} items={content.navigation} content={content} />
    </div>
  )
}

export default App
