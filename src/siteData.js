export const languages = [
  { code: 'de', label: 'Deutsch' },
  { code: 'en', label: 'English' },
  { code: 'ru', label: 'Русский' },
]

export const defaultLanguage = 'de'

const sharedContactDetails = {
  phone: '+49 30 7543 2810',
  email: 'hello@fdesignstudio.de',
  address: 'Neue Schoenhauser Str. 8, 10178 Berlin',
}

export const siteContent = {
  de: {
    contactDetails: {
      ...sharedContactDetails,
      hours: 'Mo-Fr, 09:00-18:00 CET',
    },
    navigation: [
      { path: '/', label: 'Start' },
      { path: '/services', label: 'Leistungen' },
      { path: '/work', label: 'Projekte' },
      { path: '/about', label: 'Studio' },
      { path: '/process', label: 'Ablauf' },
      { path: '/contact', label: 'Kontakt' },
    ],
    layout: {
      brandTagline: 'Webdesign & Entwicklung',
      headerCta: 'Gespraech buchen',
      footerEyebrow: 'FDesign',
      footerNote:
        'Premium-Websites fuer moderne Unternehmen, die klarer auftreten, besser kommunizieren und ueberzeugender verkaufen wollen.',
      navAriaLabel: 'Hauptnavigation',
      languageLabel: 'Sprache',
    },
    hero: {
      meta: ['Sitz in Berlin', 'Offen fuer ausgewaehlte Projekte'],
      eyebrow: 'Boutique Digital Studio',
      title: 'Moderne Websites fuer Marken, die',
      accent: 'klar, hochwertig und verkaufsstark wirken muessen.',
      text:
        'Strategie, Design und Frontend-Umsetzung fuer Dienstleistungsmarken, die aus Templates herausgewachsen sind und digital praeziser auftreten wollen.',
      primaryCta: 'Projekt starten',
      secondaryCta: 'Arbeiten ansehen',
      note: 'Schaerfere Positionierung, ruhigerer Prozess und eine Website mit echter Autoritaet.',
      metrics: [
        { value: '5+', label: 'Jahre Website-Erfahrung' },
        { value: '32', label: 'Veroeffentlichte Kundenprojekte' },
        { value: '2-10', label: 'Wochen Projektlaufzeit' },
      ],
      sideEyebrow: 'Editorial Hero Direction',
      sideTitle: 'Architektonische Ruhe mit hochwertigem digitalem Ton.',
      sideText: 'Full-bleed Atmosphaere, kompakter Text, zurueckhaltende Bewegung.',
      imageAlt:
        'Dunkler Editorial-Innenraum mit Glaswaenden, Betonboden und warmer architektonischer Beleuchtung.',
    },
    cta: {
      eyebrow: 'Bereit wenn du es bist',
      title: 'Brauchst du eine Website, die aktuell, hochwertig und mit klarer Absicht gebaut wirkt?',
      primary: 'Discovery Call buchen',
      secondary: 'E-Mail an FDesign',
    },
    home: {
      services: {
        eyebrow: 'Leistungen',
        title: 'Ein moderner digitaler Auftritt fuer Unternehmen, deren Arbeit besser ist als ihre aktuelle Website.',
        text: 'FDesign hilft Unternehmen, etablierter zu wirken, schneller verstanden zu werden und mit weniger Reibung zu konvertieren.',
      },
      selectedProjects: {
        eyebrow: 'Ausgewaehlte Projekte',
        title: 'Arbeiten, die visuelle Sicherheit mit geschaeftlicher Absicht verbinden.',
        text: 'Die folgenden Projekte sind fuer diese Demo fiktionalisiert, aber Struktur, Budgets und Ergebnisse orientieren sich an echter Agenturpraxis.',
        button: 'Alle Case Studies ansehen',
      },
      packages: {
        eyebrow: 'Pakete',
        title: 'Fuer echte Budgets gebaut, nicht fuer Fantasie-Pitchdecks.',
        text: 'Du brauchst keine 40-koepfige Agentur fuer eine Premium-Website. Du brauchst einen klaren Prozess, gutes Gespuer und jemanden, der wirklich liefern kann.',
      },
      testimonials: {
        eyebrow: 'Kundenstimmen',
        title: 'Was Menschen nach dem Launch meistens sagen.',
      },
    },
    servicesPage: {
      hero: {
        eyebrow: 'Leistungen',
        title: 'Strategie, Design und Frontend-Umsetzung, die als ein System funktionieren.',
        text: 'FDesign baut Websites, die fuer echte Kundinnen und Kunden gedacht sind, nicht nur fuer andere Designer.',
      },
      extras: [
        {
          title: 'SEO-faehige Struktur',
          copy:
            'Saubere Ueberschriftenhierarchie, Meta-Basics, interne Linklogik und mobile Performance von Anfang an mitgedacht.',
        },
        {
          title: 'Support nach dem Launch',
          copy:
            'Verfeinerungen, neue Seiten, Content-Updates und Designpflege nach dem eigentlichen Launch.',
        },
      ],
      included: {
        eyebrow: 'Inklusive',
        title: 'Der Standard-Stack rund um eine ernsthafte Unternehmenswebsite.',
        items: [
          { title: 'Markenrichtung', text: 'Typografie, Farbwelt, Tonalitaet und visuelle Konsistenz.' },
          { title: 'Responsive Layouts', text: 'Desktop-, Tablet- und Mobile-Qualitaet ab dem ersten Entwurf.' },
          { title: 'Designsysteme', text: 'Wiederverwendbare Sektionen, Komponenten, Buttons, Karten und Abstaende.' },
          { title: 'Launch-Assets', text: 'Favicons, Social-Preview-Basics und klare Handover-Hinweise.' },
        ],
      },
    },
    workPage: {
      hero: {
        eyebrow: 'Projekte',
        title: 'Ein Portfolio im Case-Study-Stil, das glaubwuerdig, sauber und kommerziell stark wirkt.',
        text: 'Diese Beispiele zeigen das Niveau an Denken, Taktung und Praesentation, fuer das FDesign gebaut ist.',
      },
      footerLabel: '8 Wochen Laufzeit',
    },
    aboutPage: {
      hero: {
        eyebrow: 'Studio',
        title: 'FDesign ist ein Boutique-Studio fuer Unternehmen, denen ihre Aussenwirkung wichtig ist.',
        text: 'Nach Jahren Abstand zur Website-Produktion beginnt dieses Kapitel mit einer einfachen Idee: Der Webauftritt soll sich so stark anfuehlen wie die reale Leistung.',
      },
      profile: {
        eyebrow: 'Studio-Profil',
        title: 'Klein genug, um scharf zu bleiben. Senior genug, um schnell zu liefern.',
        text: 'FDesign verbindet Geschmack, Struktur und Frontend-Umsetzung, damit Projekte nicht zwischen Strategie, Design und Code verloren gehen.',
      },
      valueTitle: 'FDesign Standard',
      tools: {
        eyebrow: 'Tools & Fokus',
        title: 'Designrichtung, conversion-aware Layouts, React-Builds, launch-ready Delivery.',
        chips: ['UI Design', 'Markenton', 'React', 'Vite', 'Responsive Build', 'Beratung'],
      },
    },
    processPage: {
      hero: {
        eyebrow: 'Ablauf',
        title: 'Ein ruhiger, strukturierter Prozess, der Momentum ohne Chaos haelt.',
        text: 'Klare Checkpoints, realistische Erwartungen und genug Flexibilitaet, um die Arbeit waehrend der Entstehung besser zu machen.',
      },
      expectation: {
        eyebrow: 'Was du erwarten kannst',
        title: 'Keine vagen Timelines, kein Verschwinden, keine endlose Revisionsspirale.',
        items: [
          { title: 'Woechentlicher Rhythmus', text: 'Regelmaessige Updates mit sichtbarem Fortschritt und klaren naechsten Schritten.' },
          { title: 'Entscheidungspunkte', text: 'Klare Freigaben in jeder Phase, damit das Projekt in Bewegung bleibt.' },
          { title: 'Praktischer Umfang', text: 'Genug Ambition fuer Premium-Wirkung, genug Disziplin fuer einen echten Launch.' },
        ],
      },
    },
    contactPage: {
      hero: {
        eyebrow: 'Kontakt',
        title: 'Erzaehl FDesign, was du launchen, auffrischen oder reparieren willst.',
        text: 'Nutze die Kontaktdaten oder schicke ein kurzes Briefing. Ziele, Timeline und Budgetrahmen reichen fuer den Start.',
      },
      directEyebrow: 'Direkt',
      form: {
        name: 'Name',
        namePlaceholder: 'Dein Name',
        company: 'Unternehmen',
        companyPlaceholder: 'Firma oder Marke',
        email: 'E-Mail',
        emailPlaceholder: 'name@firma.de',
        budget: 'Budget',
        budgetOptions: ['EUR4.800 - EUR8.000', 'EUR9.500 - EUR15.000', 'EUR16.000+'],
        brief: 'Projektbeschreibung',
        briefPlaceholder: 'Was wird gebaut, neu gestartet oder verbessert? Was ist das Ziel?',
        submit: 'Anfrage senden',
      },
      faq: {
        eyebrow: 'FAQ',
        title: 'Kurze Antworten vor dem ersten Gespraech.',
      },
    },
    serviceCards: [
      {
        title: 'Markengetriebene Websites',
        copy:
          'Strategische Websites fuer Premium-Dienstleister, die Autoritaet, Klarheit und eine hochwertige Designsprache brauchen, ohne kuehl zu wirken.',
      },
      {
        title: 'Conversion-Redesigns',
        copy:
          'Veraltete Websites werden zu schaerferen, schnelleren und klareren Erlebnissen mit besserer Botschaft, besserem Flow und qualifizierteren Leads.',
      },
      {
        title: 'Frontend-Umsetzung',
        copy:
          'Responsive React-Frontends, Motion-Systeme, Komponentenbibliotheken und launch-bereite Builds, die auf jedem modernen Screen sauber wirken.',
      },
      {
        title: 'E-Commerce-Richtung',
        copy:
          'Shop-Erlebnisse fuer kuratierte Marken mit fokussiertem Produkt-Storytelling, hochwertigem UI und klaren Kaufpfaden.',
      },
    ],
    offerings: [
      {
        name: 'Launch',
        price: 'ab EUR4.800',
        length: '3-4 Wochen',
        description: 'Fuer junge Unternehmen, die schnell eine hochwertige Onepage oder kleine Mehrseiten-Praesenz brauchen.',
        bullets: ['Discovery-Workshop', 'Markenrichtung', 'Responsive Design', 'Launch-Support'],
      },
      {
        name: 'Studio',
        price: 'ab EUR9.500',
        length: '5-7 Wochen',
        description: 'Fuer Dienstleistungsunternehmen, die eine staerkere digitale Identitaet und eine serioese Sales-Website brauchen.',
        bullets: ['6-seitige Website', 'Content-Struktur', 'Individuelles UI-System', 'Performance-Politur'],
      },
      {
        name: 'Signature',
        price: 'ab EUR16.000',
        length: '8-10 Wochen',
        description: 'Fuer Teams, die bereit sind fuer editorialartige Praesentation, reichere Interaktionen und mehr Produkttiefe.',
        bullets: ['Erweitertes Designsystem', 'Motion-Richtung', 'Case-Study-Storytelling', 'Pflege nach Launch'],
      },
    ],
    workItems: [
      {
        client: 'Auren Studio',
        sector: 'Interior Design',
        budget: 'EUR11.200',
        outcome: '+34% qualifizierte Anfragen in 90 Tagen',
        summary:
          'Eine visuelle Neupositionierung fuer ein Interior-Studio, das hochwertiger wirken und mehr hochpreisige Wohnprojekte abschliessen wollte.',
      },
      {
        client: 'Northline Legal',
        sector: 'Kanzlei',
        budget: 'EUR8.900',
        outcome: '2,1x laengere Sitzungsdauer',
        summary:
          'Ein zurueckhaltendes, vertrauensstarkes Website-System, das komplexe Rechtsleistungen klarer macht und Leads mehr Sicherheit gibt.',
      },
      {
        client: 'Luma Clinic',
        sector: 'Private Healthcare',
        budget: 'EUR13.700',
        outcome: '+41% Beratungsanfragen',
        summary:
          'Ein ruhiges, modernes Patientenerlebnis mit klareren Leistungen, staerkeren Vertrauenssignalen und besserem Mobile-Flow.',
      },
      {
        client: 'Vanta Goods',
        sector: 'E-Commerce',
        budget: 'EUR14.500',
        outcome: '+22% hoehere Conversion Rate',
        summary:
          'Ein Direct-to-Consumer-Refresh mit Fokus auf Produkt-Storytelling, visuellem Rhythmus und mehr Sicherheit im Checkout.',
      },
      {
        client: 'Helio Capital',
        sector: 'Finanzen',
        budget: 'EUR18.900',
        outcome: 'Positionierung auf Enterprise-Niveau',
        summary:
          'Eine elegante Corporate-Site mit schaerferer Botschaft, klarerer Hierarchie und glaubwuerdigerem ersten Eindruck.',
      },
      {
        client: 'Sora Events',
        sector: 'Luxury Events',
        budget: 'EUR7.200',
        outcome: 'Ausgebuchte Saison zum Start',
        summary:
          'Ein hoch-emotionales Site-Konzept, das Editorial-Bilder, Event-Prestige und unkomplizierte Kontaktpfade ausbalanciert.',
      },
    ],
    values: [
      '5 Jahre Websites fuer Service-Brands, Gruender und wachsende Teams.',
      'Kompakter Senior-Prozess ohne Agentur-Ballast oder endlose Handoffs.',
      'Design und Code sind ab Tag eins aufeinander abgestimmt, damit gute Ideen baubar bleiben.',
      'Klare Kommunikation, realistische Timelines und ein Launch-Mindset von Anfang an.',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Discovery',
        text: 'Wir synchronisieren Ziele, Zielgruppe, Geschaeftsmodell, Positionierung und was die Website konkret leisten muss.',
      },
      {
        step: '02',
        title: 'Direction',
        text: 'Ich definiere Art Direction, Typografie, Raster, Seitenrhythmus und den emotionalen Ton der Marke.',
      },
      {
        step: '03',
        title: 'Design',
        text: 'Schluesselseiten werden mit Content-Struktur, Hierarchie und Conversion-Pfaden gestaltet, nicht nur dekoriert.',
      },
      {
        step: '04',
        title: 'Build',
        text: 'Die freigegebene Richtung wird zu einem responsiven Frontend mit sauberer Performance und veredelten Details.',
      },
      {
        step: '05',
        title: 'Launch',
        text: 'Final Review, SEO-Basics, Qualitaetschecks und Deployment-Support sorgen fuer einen ruhigen Go-live.',
      },
      {
        step: '06',
        title: 'Care',
        text: 'Nach dem Launch folgen Verbesserungen, Erweiterungen und strategische Verfeinerungen auf Basis echter Nutzung.',
      },
    ],
    testimonials: [
      {
        quote:
          'FDesign hat unserem Studio genau die Art Website gegeben, die den Ton im ersten Gespraech sofort veraendert. Der wahrgenommene Wert ist direkt gestiegen.',
        author: 'Mara Klein',
        role: 'Founder, Auren Studio',
      },
      {
        quote:
          'Der Prozess war strukturiert, schnell und erstaunlich ruhig. Endlich haben wir eine Website, die zum Niveau unserer Arbeit passt.',
        author: 'Elias Nord',
        role: 'Managing Partner, Northline Legal',
      },
    ],
    faqs: [
      {
        question: 'Schreibst du auch die Texte?',
        answer:
          'Ja. Ich kann Website-Content strukturieren, schaerfen und in einem Markenton formulieren, der Conversion unterstuetzt.',
      },
      {
        question: 'Kannst du eine bestehende Website ueberarbeiten?',
        answer:
          'Absolut. Viele Projekte starten mit einem Audit und einer kompletten visuellen wie strukturellen Ueberarbeitung statt bei null.',
      },
      {
        question: 'Arbeitest du auch mit Unternehmen ausserhalb Deutschlands?',
        answer:
          'Ja. FDesign arbeitet remote mit Kundinnen und Kunden in ganz Europa und in englischsprachigen Maerkten.',
      },
    ],
  },
  en: {
    contactDetails: {
      ...sharedContactDetails,
      hours: 'Mon-Fri, 09:00-18:00 CET',
    },
    navigation: [
      { path: '/', label: 'Home' },
      { path: '/services', label: 'Services' },
      { path: '/work', label: 'Work' },
      { path: '/about', label: 'Studio' },
      { path: '/process', label: 'Process' },
      { path: '/contact', label: 'Contact' },
    ],
    layout: {
      brandTagline: 'Web Design & Development',
      headerCta: 'Book a call',
      footerEyebrow: 'FDesign',
      footerNote:
        'Premium websites for modern businesses that want to look sharper, communicate better, and convert with more confidence.',
      navAriaLabel: 'Primary navigation',
      languageLabel: 'Language',
    },
    hero: {
      meta: ['Berlin based', 'Available for select projects'],
      eyebrow: 'Boutique digital studio',
      title: 'Modern websites for brands that need to feel',
      accent: 'clear, premium, and ready to sell.',
      text:
        'Strategy, design, and frontend delivery for service brands that have outgrown templates and need a sharper digital presence.',
      primaryCta: 'Start a project',
      secondaryCta: 'View selected work',
      note: 'Sharper positioning, calmer process, and a site that lands with authority.',
      metrics: [
        { value: '5+', label: 'Years designing websites' },
        { value: '32', label: 'Launched client projects' },
        { value: '2-10', label: 'Week project windows' },
      ],
      sideEyebrow: 'Editorial hero direction',
      sideTitle: 'Architectural calm with a premium digital tone.',
      sideText: 'Full-bleed atmosphere, compact copy, restrained motion.',
      imageAlt:
        'Dark editorial interior with glass walls, concrete floors, and warm architectural lighting.',
    },
    cta: {
      eyebrow: 'Ready when you are',
      title: 'Need a website that looks current, premium, and built with intent?',
      primary: 'Book a discovery call',
      secondary: 'Email FDesign',
    },
    home: {
      services: {
        eyebrow: 'What I do',
        title: 'A modern digital face for companies that have better work than their current website suggests.',
        text: 'FDesign helps businesses look more established, communicate faster, and convert with less friction.',
      },
      selectedProjects: {
        eyebrow: 'Selected projects',
        title: 'Work that balances visual confidence with business intent.',
        text: 'Every project below is fictionalised for this demo, but the structure, budgets, and outcomes are grounded in real-world agency work.',
        button: 'Explore all case studies',
      },
      packages: {
        eyebrow: 'Packages',
        title: 'Built for real budgets, not fantasy pitch decks.',
        text: 'You do not need a 40-person agency to get a site that looks premium. You need a tight process, clear taste, and someone who can actually ship.',
      },
      testimonials: {
        eyebrow: 'Client words',
        title: 'What people usually say after launch.',
      },
    },
    servicesPage: {
      hero: {
        eyebrow: 'Services',
        title: 'Strategy, design, and frontend production that work as one system.',
        text: 'FDesign builds sites that are meant to be seen by real clients, not just admired by other designers.',
      },
      extras: [
        {
          title: 'SEO-ready structure',
          copy:
            'Clean heading structure, metadata basics, internal linking logic, and mobile-first performance considerations from the start.',
        },
        {
          title: 'Post-launch support',
          copy:
            'Refinements, page additions, content updates, and design care after the main launch is done.',
        },
      ],
      included: {
        eyebrow: 'Included',
        title: 'The standard stack around a serious business website.',
        items: [
          { title: 'Brand direction', text: 'Typography, palette, tone, and visual consistency.' },
          { title: 'Responsive layouts', text: 'Desktop, tablet, and mobile polish built in from the first draft.' },
          { title: 'Design systems', text: 'Reusable sections, components, buttons, cards, and spacing rules.' },
          { title: 'Launch assets', text: 'Favicons, social preview basics, and handoff guidance.' },
        ],
      },
    },
    workPage: {
      hero: {
        eyebrow: 'Work',
        title: 'A case-study style portfolio built to feel credible, polished, and commercially sharp.',
        text: 'These examples show the level of thinking, pacing, and presentation FDesign is designed to deliver.',
      },
      footerLabel: '8 week window',
    },
    aboutPage: {
      hero: {
        eyebrow: 'Studio',
        title: 'FDesign is a boutique studio built for businesses that care how they are perceived.',
        text: 'After years away from website production, this new chapter starts with a simple idea: make the web presence feel as strong as the actual service.',
      },
      profile: {
        eyebrow: 'Studio profile',
        title: 'Small enough to stay sharp, senior enough to move fast.',
        text: 'FDesign combines taste, structure, and frontend execution so projects do not get lost between strategy, design, and code.',
      },
      valueTitle: 'FDesign standard',
      tools: {
        eyebrow: 'Tools & focus',
        title: 'Design direction, conversion-aware layouts, React builds, launch-ready delivery.',
        chips: ['UI design', 'Brand tone', 'React', 'Vite', 'Responsive build', 'Consulting'],
      },
    },
    processPage: {
      hero: {
        eyebrow: 'Process',
        title: 'A calm, structured process that keeps momentum without chaos.',
        text: 'Clear checkpoints, realistic expectations, and enough flexibility to improve the work while it is being made.',
      },
      expectation: {
        eyebrow: 'What you can expect',
        title: 'No vague timelines, no disappearing act, no endless revision spiral.',
        items: [
          { title: 'Weekly rhythm', text: 'Regular updates with visible progress and concrete next steps.' },
          { title: 'Decision points', text: 'Clear approvals at each stage so the project keeps moving.' },
          { title: 'Practical scope', text: 'Enough ambition to look premium, enough discipline to actually launch.' },
        ],
      },
    },
    contactPage: {
      hero: {
        eyebrow: 'Contact',
        title: 'Tell FDesign what you want to launch, refresh, or fix.',
        text: 'Use the contact details below or send a short brief. Goals, timing, and budget range are enough to get started.',
      },
      directEyebrow: 'Direct',
      form: {
        name: 'Name',
        namePlaceholder: 'Your name',
        company: 'Company',
        companyPlaceholder: 'Company or brand',
        email: 'Email',
        emailPlaceholder: 'name@company.com',
        budget: 'Budget',
        budgetOptions: ['EUR4,800 - EUR8,000', 'EUR9,500 - EUR15,000', 'EUR16,000+'],
        brief: 'Project brief',
        briefPlaceholder: 'What are you building, relaunching, or improving? What is the goal?',
        submit: 'Send request',
      },
      faq: {
        eyebrow: 'FAQ',
        title: 'Quick answers before the first call.',
      },
    },
    serviceCards: [
      {
        title: 'Brand-led websites',
        copy:
          'Strategic websites for premium service businesses that need authority, clarity, and a design language that feels expensive without becoming cold.',
      },
      {
        title: 'Conversion redesigns',
        copy:
          'Reworking dated websites into sharper, faster, cleaner experiences with stronger messaging, better flow, and more qualified leads.',
      },
      {
        title: 'Frontend production',
        copy:
          'Responsive React frontends, motion systems, component libraries, and launch-ready builds that look polished on every modern screen size.',
      },
      {
        title: 'E-commerce direction',
        copy:
          'Shop experiences for curated brands with focused product storytelling, premium UI, and clean purchase flows.',
      },
    ],
    offerings: [
      {
        name: 'Launch',
        price: 'from EUR4,800',
        length: '3-4 weeks',
        description: 'For young businesses that need a premium one-page or small multi-page presence quickly.',
        bullets: ['Discovery workshop', 'Brand direction', 'Responsive design', 'Launch support'],
      },
      {
        name: 'Studio',
        price: 'from EUR9,500',
        length: '5-7 weeks',
        description: 'For service companies that need a stronger digital identity and a serious sales website.',
        bullets: ['6-page website', 'Content structure', 'Custom UI system', 'Performance polish'],
      },
      {
        name: 'Signature',
        price: 'from EUR16,000',
        length: '8-10 weeks',
        description: 'For teams ready for editorial-level presentation, richer interactions, and deeper product thinking.',
        bullets: ['Advanced design system', 'Motion direction', 'Case study storytelling', 'Post-launch care'],
      },
    ],
    workItems: [
      {
        client: 'Auren Studio',
        sector: 'Interior design',
        budget: 'EUR11,200',
        outcome: '+34% qualified inquiries in 90 days',
        summary:
          'A visual repositioning for an interior studio that needed to look more premium and close higher-ticket residential projects.',
      },
      {
        client: 'Northline Legal',
        sector: 'Law firm',
        budget: 'EUR8,900',
        outcome: '2.1x longer session duration',
        summary:
          'A restrained, high-trust website system built to simplify complex legal services and improve lead confidence.',
      },
      {
        client: 'Luma Clinic',
        sector: 'Private healthcare',
        budget: 'EUR13,700',
        outcome: '+41% consultation requests',
        summary:
          'A calming but modern patient experience with better service clarity, trust cues, and mobile conversion flow.',
      },
      {
        client: 'Vanta Goods',
        sector: 'E-commerce',
        budget: 'EUR14,500',
        outcome: '+22% conversion rate uplift',
        summary:
          'A direct-to-consumer refresh focused on product storytelling, visual rhythm, and checkout confidence.',
      },
      {
        client: 'Helio Capital',
        sector: 'Finance',
        budget: 'EUR18,900',
        outcome: 'Enterprise-ready positioning',
        summary:
          'An elegant corporate site with sharper messaging, cleaner hierarchy, and a more credible first impression.',
      },
      {
        client: 'Sora Events',
        sector: 'Luxury events',
        budget: 'EUR7,200',
        outcome: 'Booked-out season launch',
        summary:
          'A high-emotion site concept balancing editorial imagery, event prestige, and easy booking contact paths.',
      },
    ],
    values: [
      '5 years shaping websites for service brands, founders, and growing teams.',
      'Compact, senior-level process without agency bloat or endless handoffs.',
      'Design and code aligned from day one, so beautiful ideas stay buildable.',
      'Clear communication, realistic timelines, and a launch mindset from the start.',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Discovery',
        text: 'We align on goals, audience, business model, positioning, and what the site must actually achieve.',
      },
      {
        step: '02',
        title: 'Direction',
        text: 'I define the art direction, typography, grid, page rhythm, and the emotional tone of the brand.',
      },
      {
        step: '03',
        title: 'Design',
        text: 'Key pages are designed with content structure, hierarchy, and conversion paths, not just decoration.',
      },
      {
        step: '04',
        title: 'Build',
        text: 'The approved direction becomes a responsive frontend with polished details, motion, and clean performance.',
      },
      {
        step: '05',
        title: 'Launch',
        text: 'Final review, SEO basics, quality checks, and deployment support so the site goes live without panic.',
      },
      {
        step: '06',
        title: 'Care',
        text: 'Post-launch improvements, additions, and strategic refinements based on real user behaviour.',
      },
    ],
    testimonials: [
      {
        quote:
          'FDesign gave our studio the kind of website that changes how people speak to you in the first meeting. It immediately raised perceived value.',
        author: 'Mara Klein',
        role: 'Founder, Auren Studio',
      },
      {
        quote:
          'The process was structured, fast, and surprisingly calm. We finally have a site that feels aligned with the level of work we actually do.',
        author: 'Elias Nord',
        role: 'Managing Partner, Northline Legal',
      },
    ],
    faqs: [
      {
        question: 'Do you write the content too?',
        answer:
          'Yes. I can structure, refine, and write website copy in a tone that matches the brand and supports conversion.',
      },
      {
        question: 'Can you redesign an existing website?',
        answer:
          'Absolutely. Many projects begin with an audit and a complete visual and structural overhaul rather than a fresh start.',
      },
      {
        question: 'Do you work with businesses outside Germany?',
        answer:
          'Yes. FDesign works remotely with clients across Europe and English-speaking markets.',
      },
    ],
  },
  ru: {
    contactDetails: {
      ...sharedContactDetails,
      hours: 'Пн-Пт, 09:00-18:00 CET',
    },
    navigation: [
      { path: '/', label: 'Главная' },
      { path: '/services', label: 'Услуги' },
      { path: '/work', label: 'Проекты' },
      { path: '/about', label: 'Студия' },
      { path: '/process', label: 'Процесс' },
      { path: '/contact', label: 'Контакт' },
    ],
    layout: {
      brandTagline: 'Веб-дизайн и разработка',
      headerCta: 'Созвониться',
      footerEyebrow: 'FDesign',
      footerNote:
        'Премиальные сайты для современных компаний, которым важно выглядеть точнее, говорить понятнее и продавать увереннее.',
      navAriaLabel: 'Основная навигация',
      languageLabel: 'Язык',
    },
    hero: {
      meta: ['Базируется в Берлине', 'Доступно для выборочных проектов'],
      eyebrow: 'Бутик digital-студия',
      title: 'Современные сайты для брендов, которым нужно выглядеть',
      accent: 'ясно, дорого и готово к продажам.',
      text:
        'Стратегия, дизайн и фронтенд-реализация для сервисных брендов, которые переросли шаблоны и хотят более сильное цифровое присутствие.',
      primaryCta: 'Начать проект',
      secondaryCta: 'Смотреть работы',
      note: 'Более четкое позиционирование, спокойный процесс и сайт, который звучит уверенно.',
      metrics: [
        { value: '5+', label: 'лет опыта в веб-дизайне' },
        { value: '32', label: 'запущенных клиентских проектов' },
        { value: '2-10', label: 'недель на проект' },
      ],
      sideEyebrow: 'Редакционное hero-направление',
      sideTitle: 'Архитектурное спокойствие с премиальным цифровым тоном.',
      sideText: 'Полноэкранная атмосфера, компактный текст и сдержанное движение.',
      imageAlt:
        'Темный интерьер в редакционном стиле со стеклянными стенами, бетонным полом и теплым архитектурным светом.',
    },
    cta: {
      eyebrow: 'Готово, когда будешь готов ты',
      title: 'Нужен сайт, который выглядит современно, премиально и собран с ясной идеей?',
      primary: 'Записаться на discovery call',
      secondary: 'Написать FDesign',
    },
    home: {
      services: {
        eyebrow: 'Что я делаю',
        title: 'Современное цифровое лицо для компаний, чья работа лучше, чем это показывает их текущий сайт.',
        text: 'FDesign помогает компаниям выглядеть солиднее, доносить ценность быстрее и конвертировать с меньшим трением.',
      },
      selectedProjects: {
        eyebrow: 'Избранные проекты',
        title: 'Работы, где визуальная уверенность встречается с бизнес-задачей.',
        text: 'Все проекты ниже художественно адаптированы для этой демо-версии, но их структура, бюджеты и результаты основаны на реальной агентской практике.',
        button: 'Посмотреть все кейсы',
      },
      packages: {
        eyebrow: 'Пакеты',
        title: 'Собрано под реальные бюджеты, а не под фантазии из питч-деков.',
        text: 'Чтобы получить премиальный сайт, не нужна агентская махина на 40 человек. Нужен четкий процесс, хороший вкус и человек, который реально доводит до релиза.',
      },
      testimonials: {
        eyebrow: 'Отзывы клиентов',
        title: 'Что люди обычно говорят после запуска.',
      },
    },
    servicesPage: {
      hero: {
        eyebrow: 'Услуги',
        title: 'Стратегия, дизайн и фронтенд-продакшн, работающие как одна система.',
        text: 'FDesign делает сайты для реальных клиентов, а не только для восхищения других дизайнеров.',
      },
      extras: [
        {
          title: 'SEO-готовая структура',
          copy:
            'Чистая иерархия заголовков, базовая мета-разметка, логика внутренних ссылок и mobile-first производительность продумываются с самого начала.',
        },
        {
          title: 'Поддержка после запуска',
          copy:
            'Доработки, новые страницы, обновления контента и поддержка дизайна после основного релиза.',
        },
      ],
      included: {
        eyebrow: 'Включено',
        title: 'Стандартный стек вокруг серьезного бизнес-сайта.',
        items: [
          { title: 'Бренд-направление', text: 'Типографика, палитра, тон и визуальная цельность.' },
          { title: 'Адаптивные макеты', text: 'Качество для desktop, tablet и mobile закладывается с первого черновика.' },
          { title: 'Дизайн-системы', text: 'Переиспользуемые секции, компоненты, кнопки, карточки и правила отступов.' },
          { title: 'Launch-ассеты', text: 'Favicons, основы social preview и понятные handoff-заметки.' },
        ],
      },
    },
    workPage: {
      hero: {
        eyebrow: 'Проекты',
        title: 'Портфолио в формате кейсов, собранное так, чтобы выглядеть убедительно, аккуратно и коммерчески сильно.',
        text: 'Эти примеры показывают уровень мышления, темпа и презентации, который FDesign стремится давать.',
      },
      footerLabel: 'Окно в 8 недель',
    },
    aboutPage: {
      hero: {
        eyebrow: 'Студия',
        title: 'FDesign — бутик-студия для компаний, которым важно, как их воспринимают.',
        text: 'После нескольких лет паузы в производстве сайтов эта глава начинается с простой идеи: сделать веб-присутствие таким же сильным, как и сама услуга.',
      },
      profile: {
        eyebrow: 'Профиль студии',
        title: 'Достаточно маленькая, чтобы оставаться острой. Достаточно senior, чтобы двигаться быстро.',
        text: 'FDesign соединяет вкус, структуру и фронтенд-исполнение, чтобы проекты не терялись между стратегией, дизайном и кодом.',
      },
      valueTitle: 'Стандарт FDesign',
      tools: {
        eyebrow: 'Инструменты и фокус',
        title: 'Дизайн-направление, макеты с учетом конверсии, React-сборки и запуск без суеты.',
        chips: ['UI design', 'Тон бренда', 'React', 'Vite', 'Адаптивная сборка', 'Консалтинг'],
      },
    },
    processPage: {
      hero: {
        eyebrow: 'Процесс',
        title: 'Спокойный и структурный процесс, который держит темп без хаоса.',
        text: 'Четкие чекпоинты, реалистичные ожидания и достаточно гибкости, чтобы улучшать работу по ходу ее создания.',
      },
      expectation: {
        eyebrow: 'Чего ожидать',
        title: 'Без расплывчатых сроков, без исчезновений и без бесконечной спирали правок.',
        items: [
          { title: 'Еженедельный ритм', text: 'Регулярные апдейты с видимым прогрессом и конкретными следующими шагами.' },
          { title: 'Точки решения', text: 'Понятные согласования на каждом этапе, чтобы проект не терял движение.' },
          { title: 'Реалистичный объем', text: 'Достаточно амбиций, чтобы выглядеть премиально, и достаточно дисциплины, чтобы реально запуститься.' },
        ],
      },
    },
    contactPage: {
      hero: {
        eyebrow: 'Контакт',
        title: 'Расскажи FDesign, что ты хочешь запустить, освежить или исправить.',
        text: 'Используй контакты ниже или отправь короткий бриф. Для старта достаточно целей, сроков и вилки бюджета.',
      },
      directEyebrow: 'Напрямую',
      form: {
        name: 'Имя',
        namePlaceholder: 'Твое имя',
        company: 'Компания',
        companyPlaceholder: 'Компания или бренд',
        email: 'Email',
        emailPlaceholder: 'name@company.com',
        budget: 'Бюджет',
        budgetOptions: ['EUR4.800 - EUR8.000', 'EUR9.500 - EUR15.000', 'EUR16.000+'],
        brief: 'Описание проекта',
        briefPlaceholder: 'Что вы создаете, перезапускаете или улучшаете? Какая цель?',
        submit: 'Отправить заявку',
      },
      faq: {
        eyebrow: 'FAQ',
        title: 'Короткие ответы до первого звонка.',
      },
    },
    serviceCards: [
      {
        title: 'Сайты, ведущиеся брендом',
        copy:
          'Стратегические сайты для премиальных сервисных бизнесов, которым нужны авторитет, ясность и дорогой язык дизайна без холодной дистанции.',
      },
      {
        title: 'Редизайны под конверсию',
        copy:
          'Преобразование устаревших сайтов в более четкие, быстрые и ясные продукты с сильным сообщением, лучшим flow и более качественными лидами.',
      },
      {
        title: 'Фронтенд-продакшн',
        copy:
          'Адаптивные React-фронтенды, motion-системы, библиотеки компонентов и launch-ready сборки, которые аккуратно выглядят на любом современном экране.',
      },
      {
        title: 'E-commerce направление',
        copy:
          'Магазинные сценарии для отобранных брендов с сфокусированным product storytelling, премиальным UI и чистыми путями к покупке.',
      },
    ],
    offerings: [
      {
        name: 'Launch',
        price: 'от EUR4.800',
        length: '3-4 недели',
        description: 'Для молодых компаний, которым быстро нужен премиальный one-page или небольшой многостраничный сайт.',
        bullets: ['Discovery-воркшоп', 'Бренд-направление', 'Адаптивный дизайн', 'Поддержка запуска'],
      },
      {
        name: 'Studio',
        price: 'от EUR9.500',
        length: '5-7 недель',
        description: 'Для сервисных компаний, которым нужна более сильная цифровая идентичность и серьезный продающий сайт.',
        bullets: ['Сайт на 6 страниц', 'Структура контента', 'Кастомная UI-система', 'Полировка производительности'],
      },
      {
        name: 'Signature',
        price: 'от EUR16.000',
        length: '8-10 недель',
        description: 'Для команд, готовых к редакционному уровню подачи, более богатым взаимодействиям и более глубокой продуктовой проработке.',
        bullets: ['Продвинутая дизайн-система', 'Motion-направление', 'Storytelling для кейсов', 'Сопровождение после запуска'],
      },
    ],
    workItems: [
      {
        client: 'Auren Studio',
        sector: 'Дизайн интерьеров',
        budget: 'EUR11.200',
        outcome: '+34% квалифицированных заявок за 90 дней',
        summary:
          'Визуальное перепозиционирование для интерьерной студии, которой нужно было выглядеть дороже и закрывать больше высокобюджетных жилых проектов.',
      },
      {
        client: 'Northline Legal',
        sector: 'Юридическая фирма',
        budget: 'EUR8.900',
        outcome: 'в 2,1 раза дольше длительность сессии',
        summary:
          'Сдержанная и внушающая доверие система сайта, созданная для упрощения сложных юридических услуг и роста уверенности у лидов.',
      },
      {
        client: 'Luma Clinic',
        sector: 'Частная медицина',
        budget: 'EUR13.700',
        outcome: '+41% запросов на консультацию',
        summary:
          'Спокойный, но современный пациентский опыт с более ясными услугами, более сильными сигналами доверия и лучшим мобильным сценарием.',
      },
      {
        client: 'Vanta Goods',
        sector: 'E-commerce',
        budget: 'EUR14.500',
        outcome: '+22% к конверсии',
        summary:
          'Обновление direct-to-consumer опыта с упором на product storytelling, визуальный ритм и уверенность на этапе checkout.',
      },
      {
        client: 'Helio Capital',
        sector: 'Финансы',
        budget: 'EUR18.900',
        outcome: 'Позиционирование уровня enterprise',
        summary:
          'Элегантный корпоративный сайт с более четким сообщением, чище выстроенной иерархией и более убедительным первым впечатлением.',
      },
      {
        client: 'Sora Events',
        sector: 'Люксовые события',
        budget: 'EUR7.200',
        outcome: 'Полностью забронированный сезон после запуска',
        summary:
          'Концепт сайта с высокой эмоциональностью, который балансирует редакционную образность, престиж событий и простые пути для связи.',
      },
    ],
    values: [
      '5 лет создания сайтов для сервисных брендов, основателей и растущих команд.',
      'Компактный senior-процесс без агентской тяжеловесности и бесконечных handoff-ов.',
      'Дизайн и код синхронизированы с первого дня, чтобы красивые идеи оставались реализуемыми.',
      'Понятная коммуникация, реалистичные сроки и запуск как основное состояние мышления.',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Погружение',
        text: 'Мы синхронизируем цели, аудиторию, бизнес-модель, позиционирование и то, чего сайт реально должен добиться.',
      },
      {
        step: '02',
        title: 'Направление',
        text: 'Я определяю art direction, типографику, сетку, ритм страниц и эмоциональный тон бренда.',
      },
      {
        step: '03',
        title: 'Дизайн',
        text: 'Ключевые страницы проектируются с учетом структуры контента, иерархии и конверсионных путей, а не только ради декора.',
      },
      {
        step: '04',
        title: 'Сборка',
        text: 'Утвержденное направление превращается в адаптивный фронтенд с аккуратными деталями, motion и чистой производительностью.',
      },
      {
        step: '05',
        title: 'Запуск',
        text: 'Финальная проверка, SEO-база, quality checks и поддержка деплоя, чтобы релиз прошел без паники.',
      },
      {
        step: '06',
        title: 'Поддержка',
        text: 'Улучшения после запуска, новые элементы и стратегические доработки на основе реального поведения пользователей.',
      },
    ],
    testimonials: [
      {
        quote:
          'FDesign дал нашей студии тот тип сайта, который сразу меняет тон первого разговора с клиентом. Ощущаемая ценность выросла мгновенно.',
        author: 'Mara Klein',
        role: 'Основательница, Auren Studio',
      },
      {
        quote:
          'Процесс был структурным, быстрым и удивительно спокойным. Наконец у нас есть сайт, который соответствует реальному уровню нашей работы.',
        author: 'Elias Nord',
        role: 'Управляющий партнер, Northline Legal',
      },
    ],
    faqs: [
      {
        question: 'Ты тоже пишешь тексты для сайта?',
        answer:
          'Да. Я могу структурировать, доработать и написать тексты в тоне бренда и с учетом конверсии.',
      },
      {
        question: 'Ты можешь переделать уже существующий сайт?',
        answer:
          'Конечно. Многие проекты начинаются с аудита и полной визуальной и структурной переработки, а не с чистого листа.',
      },
      {
        question: 'Ты работаешь с компаниями вне Германии?',
        answer:
          'Да. FDesign работает удаленно с клиентами по всей Европе и на англоязычных рынках.',
      },
    ],
  },
}

const mojibakePattern = /[ÐÑ]/u
const utf8Decoder = new TextDecoder('utf-8')

function decodeMojibakeString(value) {
  if (!mojibakePattern.test(value)) {
    return value
  }

  try {
    const bytes = Uint8Array.from(value, (character) => character.charCodeAt(0))
    const decoded = utf8Decoder.decode(bytes)

    return decoded.includes('\uFFFD') ? value : decoded
  } catch {
    return value
  }
}

function normalizeLocaleContent(value) {
  if (typeof value === 'string') {
    return decodeMojibakeString(value)
  }

  if (Array.isArray(value)) {
    return value.map(normalizeLocaleContent)
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, nestedValue]) => [key, normalizeLocaleContent(nestedValue)]),
    )
  }

  return value
}

const normalizedSiteContent = {
  ...siteContent,
  ru: normalizeLocaleContent(siteContent.ru),
}

export function getSiteContent(language) {
  return normalizedSiteContent[language] || normalizedSiteContent[defaultLanguage]
}

const publicPortfolioContent = {
  de: {
    layout: {
      headerCta: 'E-Mail schreiben',
      footerMeta:
        'Oeffentliche Portfolio-Version ohne Tracking, Telefon und Anfrageformulare. Vor dem Livegang in Deutschland Impressum und Datenschutz mit echten Angaben vervollstaendigen.',
    },
    hero: {
      primaryCta: 'Arbeiten ansehen',
      primaryHref: '/work',
      secondaryCta: 'Studio ansehen',
      secondaryHref: '/about',
      metaReplacement: 'Oeffentliche Portfolio-Version',
    },
    cta: {
      primary: 'Portfolio ansehen',
      primaryHref: '/work',
      secondary: 'E-Mail schreiben',
    },
    home: {
      selectedProjectsText:
        'Die folgenden Projekte sind fuer diese Demo fiktionalisiert. Der Fokus liegt auf Struktur, Tonalitaet und visueller Richtung statt auf kommerziellen Kennzahlen.',
    },
    contactPage: {
      heroTitle: 'Schreib FDesign fuer Austausch, Feedback oder einen stillen digitalen Schulterblick.',
      heroText:
        'Diese oeffentliche Version verzichtet bewusst auf Terminbuchung, Briefing-Formulare und Telefonkontakt. Eine kurze E-Mail reicht vollkommen.',
      directEyebrow: 'Kontakt per E-Mail',
      noteTitle: 'Kontakt ohne Formular',
      noteText:
        'Diese Portfolio-Version speichert keine Projektanfragen auf der Website. Wenn du etwas teilen moechtest, nutze bitte direkt die E-Mail-Adresse.',
      emailLabel: 'E-Mail',
    },
  },
  en: {
    layout: {
      headerCta: 'Send an email',
      footerMeta:
        'Public portfolio version without tracking, phone numbers, or inquiry forms. Complete the imprint and privacy details with real information before a public launch in Germany.',
    },
    hero: {
      primaryCta: 'View the work',
      primaryHref: '/work',
      secondaryCta: 'Visit the studio',
      secondaryHref: '/about',
      metaReplacement: 'Public portfolio edition',
    },
    cta: {
      primary: 'Browse portfolio',
      primaryHref: '/work',
      secondary: 'Send an email',
    },
    home: {
      selectedProjectsText:
        'The projects below are fictionalised for this demo. The focus is on structure, tone, and visual direction rather than commercial metrics.',
    },
    contactPage: {
      heroTitle: 'Write to FDesign for feedback, exchange, or a quiet digital second opinion.',
      heroText:
        'This public version intentionally avoids booking widgets, brief forms, and phone contact. A short email is enough.',
      directEyebrow: 'Email contact',
      noteTitle: 'Contact without a form',
      noteText:
        'This portfolio version does not collect project briefs through the website. If you want to share something, please use the email address directly.',
      emailLabel: 'Email',
    },
  },
  ru: {
    layout: {
      headerCta: '\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043d\u0430 email',
      footerMeta:
        '\u041f\u0443\u0431\u043b\u0438\u0447\u043d\u0430\u044f portfolio-\u0432\u0435\u0440\u0441\u0438\u044f \u0431\u0435\u0437 \u0442\u0440\u0435\u043a\u0438\u043d\u0433\u0430, \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u043e\u0432 \u0438 \u0444\u043e\u0440\u043c \u0437\u0430\u044f\u0432\u043a\u0438. \u041f\u0435\u0440\u0435\u0434 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u043c \u0437\u0430\u043f\u0443\u0441\u043a\u043e\u043c \u0432 \u0413\u0435\u0440\u043c\u0430\u043d\u0438\u0438 \u0437\u0430\u043f\u043e\u043b\u043d\u0438 Impressum \u0438 Datenschutz \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438.',
    },
    hero: {
      primaryCta: '\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u044b',
      primaryHref: '/work',
      secondaryCta: '\u041e \u0441\u0442\u0443\u0434\u0438\u0438',
      secondaryHref: '/about',
      metaReplacement: '\u041f\u0443\u0431\u043b\u0438\u0447\u043d\u0430\u044f portfolio-\u0432\u0435\u0440\u0441\u0438\u044f',
    },
    cta: {
      primary: '\u041f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e',
      primaryHref: '/work',
      secondary: '\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043d\u0430 email',
    },
    home: {
      selectedProjectsText:
        '\u041f\u0440\u043e\u0435\u043a\u0442\u044b \u043d\u0438\u0436\u0435 \u0444\u0438\u043a\u0442\u0438\u0432\u043d\u044b \u0434\u043b\u044f \u044d\u0442\u043e\u0439 \u0434\u0435\u043c\u043e-\u0432\u0435\u0440\u0441\u0438\u0438. \u0424\u043e\u043a\u0443\u0441 \u0437\u0434\u0435\u0441\u044c \u043d\u0430 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0435, \u0442\u043e\u043d\u0435 \u0438 \u0432\u0438\u0437\u0443\u0430\u043b\u044c\u043d\u043e\u043c \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0438, \u0430 \u043d\u0435 \u043d\u0430 \u043a\u043e\u043c\u043c\u0435\u0440\u0447\u0435\u0441\u043a\u0438\u0445 \u0446\u0438\u0444\u0440\u0430\u0445.',
    },
    contactPage: {
      heroTitle:
        '\u041d\u0430\u043f\u0438\u0448\u0438 FDesign \u0434\u043b\u044f \u043e\u0431\u043c\u0435\u043d\u0430, \u043e\u0442\u0437\u044b\u0432\u0430 \u0438\u043b\u0438 \u0441\u043f\u043e\u043a\u043e\u0439\u043d\u043e\u0433\u043e \u0432\u0442\u043e\u0440\u043e\u0433\u043e \u0432\u0437\u0433\u043b\u044f\u0434\u0430 \u043d\u0430 \u0441\u0430\u0439\u0442.',
      heroText:
        '\u0412 \u044d\u0442\u043e\u0439 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u043d\u0435\u0442 \u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f, \u0431\u0440\u0438\u0444-\u0444\u043e\u0440\u043c \u0438 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430. \u041a\u043e\u0440\u043e\u0442\u043a\u043e\u0433\u043e email \u0431\u043e\u043b\u0435\u0435 \u0447\u0435\u043c \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e.',
      directEyebrow: '\u041a\u043e\u043d\u0442\u0430\u043a\u0442 \u043f\u043e email',
      noteTitle: '\u041a\u043e\u043d\u0442\u0430\u043a\u0442 \u0431\u0435\u0437 \u0444\u043e\u0440\u043c\u044b',
      noteText:
        '\u042d\u0442\u0430 portfolio-\u0432\u0435\u0440\u0441\u0438\u044f \u043d\u0435 \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u0442 \u0437\u0430\u044f\u0432\u043a\u0438 \u0438 \u0431\u0440\u0438\u0444\u044b \u0447\u0435\u0440\u0435\u0437 \u0441\u0430\u0439\u0442. \u0415\u0441\u043b\u0438 \u0445\u043e\u0447\u0435\u0448\u044c \u0447\u0442\u043e-\u0442\u043e \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439 \u0430\u0434\u0440\u0435\u0441 email \u043d\u0438\u0436\u0435.',
      emailLabel: 'Email',
    },
  },
}

export function getPreparedSiteContent(language) {
  const content = structuredClone(getSiteContent(language))
  const locale = publicPortfolioContent[language] || publicPortfolioContent[defaultLanguage]

  content.contactDetails.phone = ''
  content.contactDetails.address = ''

  content.layout.headerCta = locale.layout.headerCta
  content.layout.footerBadge = `© ${new Date().getFullYear()} FDesign`
  content.layout.footerMeta = locale.layout.footerMeta

  content.hero.primaryCta = locale.hero.primaryCta
  content.hero.primaryHref = locale.hero.primaryHref
  content.hero.secondaryCta = locale.hero.secondaryCta
  content.hero.secondaryHref = locale.hero.secondaryHref

  if (content.hero.meta?.[1]) {
    content.hero.meta[1] = locale.hero.metaReplacement
  }

  content.cta.primary = locale.cta.primary
  content.cta.primaryHref = locale.cta.primaryHref
  content.cta.secondary = locale.cta.secondary
  content.cta.secondaryHref = `mailto:${content.contactDetails.email}`

  content.home.selectedProjects.text = locale.home.selectedProjectsText
  content.offerings = []
  content.workItems = content.workItems.map((item) => ({ ...item, budget: '' }))
  content.workPage.footerLabel = ''

  content.contactPage.hero.title = locale.contactPage.heroTitle
  content.contactPage.hero.text = locale.contactPage.heroText
  content.contactPage.directEyebrow = locale.contactPage.directEyebrow
  content.contactPage.form = {
    ...content.contactPage.form,
    enabled: false,
    noteTitle: locale.contactPage.noteTitle,
    noteText: locale.contactPage.noteText,
    emailLabel: locale.contactPage.emailLabel,
  }

  return content
}
