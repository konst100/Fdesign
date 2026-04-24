export const languages = [
  { code: 'de', label: 'DE' },
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
]

export const defaultLanguage = 'de'

const sharedContactDetails = {
  phone: '+49 30 7543 2810',
  email: 'hello@fdesignstudio.de',
  address: 'Neue Schönhauser Str. 8, 10178 Berlin',
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
      headerCta: 'Gespräch buchen',
      footerEyebrow: 'FDesign',
      footerNote:
        'Premium-Websites für moderne Unternehmen, die schärfer auftreten, klarer kommunizieren und überzeugender verkaufen wollen.',
      navAriaLabel: 'Hauptnavigation',
      languageLabel: 'Sprache',
    },
    hero: {
      meta: ['Sitz in Berlin', 'Offen für ausgewählte Projekte'],
      eyebrow: 'Boutique Digital Studio',
      title: 'Moderne Websites für Marken, die',
      accent: 'klar, hochwertig und verkaufsstark wirken müssen.',
      text:
        'Strategie, Design und Frontend-Umsetzung für Dienstleistungsmarken, die aus Templates herausgewachsen sind und digital präziser auftreten wollen.',
      primaryCta: 'Projekt starten',
      secondaryCta: 'Arbeiten ansehen',
      note: 'Schärfere Positionierung, ruhigerer Prozess und eine Website mit echter Autorität.',
      metrics: [
        { value: '5+', label: 'Jahre Website-Erfahrung' },
        { value: '32', label: 'Veröffentlichte Kundenprojekte' },
        { value: '2-10', label: 'Wochen Projektlaufzeit' },
      ],
      sideEyebrow: 'Editorial Hero Direction',
      sideTitle: 'Architektonische Ruhe mit hochwertigem digitalem Ton.',
      sideText: 'Full-bleed Atmosphäre, kompakter Text, zurückhaltende Bewegung.',
      imageAlt:
        'Dunkler Editorial-Innenraum mit Glaswänden, Betonboden und warmer architektonischer Beleuchtung.',
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
        title: 'Ein moderner digitaler Auftritt für Unternehmen, deren Arbeit besser ist als ihre aktuelle Website.',
        text: 'FDesign hilft Unternehmen, etablierter zu wirken, schneller verstanden zu werden und mit weniger Reibung zu konvertieren.',
      },
      selectedProjects: {
        eyebrow: 'Ausgewählte Projekte',
        title: 'Arbeiten, die visuelle Sicherheit mit geschäftlicher Absicht verbinden.',
        text: 'Die folgenden Projekte sind für diese Demo fiktionalisiert, aber Struktur, Budgets und Ergebnisse orientieren sich an echter Agenturpraxis.',
        button: 'Alle Case Studies ansehen',
      },
      packages: {
        eyebrow: 'Pakete',
        title: 'Für echte Budgets gebaut, nicht für Fantasie-Pitchdecks.',
        text: 'Du brauchst keine 40-köpfige Agentur für eine Premium-Website. Du brauchst einen klaren Prozess, gutes Gespür und jemanden, der wirklich liefern kann.',
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
        text: 'FDesign baut Websites, die für echte Kund:innen gedacht sind, nicht nur für andere Designer.',
      },
      extras: [
        {
          title: 'SEO-fähige Struktur',
          copy:
            'Saubere Überschriftenhierarchie, Meta-Basics, interne Linklogik und mobile Performance von Anfang an mitgedacht.',
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
          { title: 'Markenrichtung', text: 'Typografie, Farbwelt, Tonalität und visuelle Konsistenz.' },
          { title: 'Responsive Layouts', text: 'Desktop-, Tablet- und Mobile-Qualität ab dem ersten Entwurf.' },
          { title: 'Designsysteme', text: 'Wiederverwendbare Sektionen, Komponenten, Buttons, Karten und Abstände.' },
          { title: 'Launch-Assets', text: 'Favicons, Social-Preview-Basics und klare Handover-Hinweise.' },
        ],
      },
    },
    workPage: {
      hero: {
        eyebrow: 'Projekte',
        title: 'Ein Portfolio im Case-Study-Stil, das glaubwürdig, sauber und kommerziell stark wirkt.',
        text: 'Diese Beispiele zeigen das Niveau an Denken, Taktung und Präsentation, für das FDesign gebaut ist.',
      },
      footerLabel: '8 Wochen Laufzeit',
    },
    aboutPage: {
      hero: {
        eyebrow: 'Studio',
        title: 'FDesign ist ein Boutique-Studio für Unternehmen, denen ihre Außenwirkung wichtig ist.',
        text: 'Nach Jahren Abstand zur Website-Produktion beginnt dieses Kapitel mit einer einfachen Idee: Der Webauftritt soll sich so stark anfühlen wie die reale Leistung.',
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
        title: 'Ein ruhiger, strukturierter Prozess, der Momentum ohne Chaos hält.',
        text: 'Klare Checkpoints, realistische Erwartungen und genug Flexibilität, um die Arbeit während der Entstehung besser zu machen.',
      },
      expectation: {
        eyebrow: 'Was du erwarten kannst',
        title: 'Keine vagen Timelines, kein Verschwinden, keine endlose Revisionsspirale.',
        items: [
          { title: 'Wöchentlicher Rhythmus', text: 'Regelmäßige Updates mit sichtbarem Fortschritt und klaren nächsten Schritten.' },
          { title: 'Entscheidungspunkte', text: 'Klare Freigaben in jeder Phase, damit das Projekt in Bewegung bleibt.' },
          { title: 'Praktischer Umfang', text: 'Genug Ambition für Premium-Wirkung, genug Disziplin für einen echten Launch.' },
        ],
      },
    },
    contactPage: {
      hero: {
        eyebrow: 'Kontakt',
        title: 'Erzähl FDesign, was du launchen, auffrischen oder reparieren willst.',
        text: 'Nutze die Kontaktdaten oder schicke ein kurzes Briefing. Ziele, Timeline und Budgetrahmen reichen für den Start.',
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
        budgetOptions: ['€4.800 - €8.000', '€9.500 - €15.000', '€16.000+'],
        brief: 'Projektbeschreibung',
        briefPlaceholder: 'Was wird gebaut, neu gestartet oder verbessert? Was ist das Ziel?',
        submit: 'Anfrage senden',
      },
      faq: {
        eyebrow: 'FAQ',
        title: 'Kurze Antworten vor dem ersten Gespräch.',
      },
    },
    serviceCards: [
      {
        title: 'Markengetriebene Websites',
        copy:
          'Strategische Websites für Premium-Dienstleister, die Autorität, Klarheit und eine hochwertige Designsprache brauchen, ohne kühl zu wirken.',
      },
      {
        title: 'Conversion-Redesigns',
        copy:
          'Veraltete Websites werden zu schärferen, schnelleren und klareren Erlebnissen mit besserer Botschaft, besserem Flow und qualifizierteren Leads.',
      },
      {
        title: 'Frontend-Umsetzung',
        copy:
          'Responsive React-Frontends, Motion-Systeme, Komponentenbibliotheken und launch-bereite Builds, die auf jedem modernen Screen sauber wirken.',
      },
      {
        title: 'E-Commerce-Richtung',
        copy:
          'Shop-Erlebnisse für kuratierte Marken mit fokussiertem Produkt-Storytelling, hochwertigem UI und klaren Kaufpfaden.',
      },
    ],
    offerings: [
      {
        name: 'Launch',
        price: 'ab €4.800',
        length: '3-4 Wochen',
        description: 'Für junge Unternehmen, die schnell eine hochwertige Onepage oder kleine Mehrseiten-Präsenz brauchen.',
        bullets: ['Discovery-Workshop', 'Markenrichtung', 'Responsive Design', 'Launch-Support'],
      },
      {
        name: 'Studio',
        price: 'ab €9.500',
        length: '5-7 Wochen',
        description: 'Für Dienstleistungsunternehmen, die eine stärkere digitale Identität und eine seriöse Sales-Website brauchen.',
        bullets: ['6-seitige Website', 'Content-Struktur', 'Individuelles UI-System', 'Performance-Politur'],
      },
      {
        name: 'Signature',
        price: 'ab €16.000',
        length: '8-10 Wochen',
        description: 'Für Teams, die bereit sind für editorialartige Präsentation, reichere Interaktionen und mehr Produkttiefe.',
        bullets: ['Erweitertes Designsystem', 'Motion-Richtung', 'Case-Study-Storytelling', 'Pflege nach Launch'],
      },
    ],
    workItems: [
      {
        client: 'Auren Studio',
        sector: 'Interior Design',
        budget: '€11.200',
        outcome: '+34% qualifizierte Anfragen in 90 Tagen',
        summary:
          'Eine visuelle Neupositionierung für ein Interior-Studio, das hochwertiger wirken und mehr hochpreisige Wohnprojekte abschließen wollte.',
      },
      {
        client: 'Northline Legal',
        sector: 'Kanzlei',
        budget: '€8.900',
        outcome: '2,1x längere Sitzungsdauer',
        summary:
          'Ein zurückhaltendes, vertrauensstarkes Website-System, das komplexe Rechtsleistungen klarer macht und Leads mehr Sicherheit gibt.',
      },
      {
        client: 'Luma Clinic',
        sector: 'Private Healthcare',
        budget: '€13.700',
        outcome: '+41% Beratungsanfragen',
        summary:
          'Ein ruhiges, modernes Patientenerlebnis mit klareren Leistungen, stärkeren Vertrauenssignalen und besserem Mobile-Flow.',
      },
      {
        client: 'Vanta Goods',
        sector: 'E-Commerce',
        budget: '€14.500',
        outcome: '+22% höhere Conversion Rate',
        summary:
          'Ein Direct-to-Consumer-Refresh mit Fokus auf Produkt-Storytelling, visuellem Rhythmus und mehr Sicherheit im Checkout.',
      },
      {
        client: 'Helio Capital',
        sector: 'Finanzen',
        budget: '€18.900',
        outcome: 'Positionierung auf Enterprise-Niveau',
        summary:
          'Eine elegante Corporate-Site mit schärferer Botschaft, klarerer Hierarchie und glaubwürdigerem ersten Eindruck.',
      },
      {
        client: 'Sora Events',
        sector: 'Luxury Events',
        budget: '€7.200',
        outcome: 'Ausgebuchte Saison zum Start',
        summary:
          'Ein emotionales Site-Konzept, das Editorial-Bildwelt, Event-Prestige und einfache Buchungswege balanciert.',
      },
    ],
    values: [
      '5 Jahre Erfahrung mit Websites für Dienstleistungsmarken, Gründer:innen und wachsende Teams.',
      'Ein kompakter Senior-Prozess ohne Agentur-Ballast und endlose Handoffs.',
      'Design und Code sind von Tag eins aufeinander abgestimmt, damit gute Ideen auch baubar bleiben.',
      'Klare Kommunikation, realistische Timelines und Launch-Fokus von Anfang an.',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Discovery',
        text: 'Wir schärfen Ziele, Zielgruppe, Geschäftsmodell, Positionierung und was die Website tatsächlich leisten muss.',
      },
      {
        step: '02',
        title: 'Richtung',
        text: 'Ich definiere Art Direction, Typografie, Grid, Seitenrhythmus und den emotionalen Ton der Marke.',
      },
      {
        step: '03',
        title: 'Design',
        text: 'Wichtige Seiten werden mit Content-Struktur, Hierarchie und Conversion-Pfaden gestaltet, nicht nur dekoriert.',
      },
      {
        step: '04',
        title: 'Build',
        text: 'Die freigegebene Richtung wird zu einem responsiven Frontend mit polierten Details, Motion und sauberer Performance.',
      },
      {
        step: '05',
        title: 'Launch',
        text: 'Finale Prüfung, SEO-Basics, Qualitätschecks und Deployment-Support, damit die Website ohne Panik live geht.',
      },
      {
        step: '06',
        title: 'Pflege',
        text: 'Verbesserungen, Ergänzungen und strategische Verfeinerungen auf Basis echten Nutzerverhaltens.',
      },
    ],
    testimonials: [
      {
        quote:
          'FDesign hat unserem Studio genau die Art Website gegeben, die schon im ersten Gespräch spürbar den Wert erhöht. Die Wahrnehmung war sofort eine andere.',
        author: 'Mara Klein',
        role: 'Founder, Auren Studio',
      },
      {
        quote:
          'Der Prozess war strukturiert, schnell und überraschend ruhig. Endlich fühlt sich unsere Website auf dem Niveau unserer tatsächlichen Arbeit an.',
        author: 'Elias Nord',
        role: 'Managing Partner, Northline Legal',
      },
    ],
    faqs: [
      {
        question: 'Schreibst du auch die Texte?',
        answer:
          'Ja. Ich kann Website-Texte strukturieren, schärfen und in einem Ton schreiben, der zur Marke passt und Conversions unterstützt.',
      },
      {
        question: 'Kannst du eine bestehende Website neu gestalten?',
        answer:
          'Absolut. Viele Projekte starten mit einem Audit und einer kompletten visuellen und strukturellen Überarbeitung statt bei null.',
      },
      {
        question: 'Arbeitest du auch mit Unternehmen außerhalb Deutschlands?',
        answer:
          'Ja. FDesign arbeitet remote mit Kund:innen in ganz Europa und in englischsprachigen Märkten.',
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
      { path: '/about', label: 'About' },
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
      accent: 'clear, expensive, and ready to sell.',
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
        eyebrow: 'About',
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
        text: 'Use the contact details below or send a short brief. A clean message with goals, timeline, and budget range is enough to start.',
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
        budgetOptions: ['€4,800 - €8,000', '€9,500 - €15,000', '€16,000+'],
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
        price: 'from €4,800',
        length: '3-4 weeks',
        description: 'For young businesses that need a premium one-page or small multi-page presence quickly.',
        bullets: ['Discovery workshop', 'Brand direction', 'Responsive design', 'Launch support'],
      },
      {
        name: 'Studio',
        price: 'from €9,500',
        length: '5-7 weeks',
        description: 'For service companies that need a stronger digital identity and a serious sales website.',
        bullets: ['6-page website', 'Content structure', 'Custom UI system', 'Performance polish'],
      },
      {
        name: 'Signature',
        price: 'from €16,000',
        length: '8-10 weeks',
        description: 'For teams ready for editorial-level presentation, richer interactions, and deeper product thinking.',
        bullets: ['Advanced design system', 'Motion direction', 'Case study storytelling', 'Post-launch care'],
      },
    ],
    workItems: [
      {
        client: 'Auren Studio',
        sector: 'Interior design',
        budget: '€11,200',
        outcome: '+34% qualified inquiries in 90 days',
        summary:
          'A visual repositioning for an interior studio that needed to look more premium and close higher-ticket residential projects.',
      },
      {
        client: 'Northline Legal',
        sector: 'Law firm',
        budget: '€8,900',
        outcome: '2.1x longer session duration',
        summary:
          'A restrained, high-trust website system built to simplify complex legal services and improve lead confidence.',
      },
      {
        client: 'Luma Clinic',
        sector: 'Private healthcare',
        budget: '€13,700',
        outcome: '+41% consultation requests',
        summary:
          'A calming but modern patient experience with better service clarity, trust cues, and mobile conversion flow.',
      },
      {
        client: 'Vanta Goods',
        sector: 'E-commerce',
        budget: '€14,500',
        outcome: '+22% conversion rate uplift',
        summary:
          'A direct-to-consumer refresh focused on product storytelling, visual rhythm, and checkout confidence.',
      },
      {
        client: 'Helio Capital',
        sector: 'Finance',
        budget: '€18,900',
        outcome: 'Enterprise-ready positioning',
        summary:
          'An elegant corporate site with sharper messaging, cleaner hierarchy, and a more credible first impression.',
      },
      {
        client: 'Sora Events',
        sector: 'Luxury events',
        budget: '€7,200',
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
  fr: {
    contactDetails: {
      ...sharedContactDetails,
      hours: 'Lun-Ven, 09:00-18:00 CET',
    },
    navigation: [
      { path: '/', label: 'Accueil' },
      { path: '/services', label: 'Services' },
      { path: '/work', label: 'Projets' },
      { path: '/about', label: 'Studio' },
      { path: '/process', label: 'Processus' },
      { path: '/contact', label: 'Contact' },
    ],
    layout: {
      brandTagline: 'Design web & développement',
      headerCta: 'Réserver un appel',
      footerEyebrow: 'FDesign',
      footerNote:
        'Des sites premium pour les entreprises modernes qui veulent paraître plus nettes, mieux communiquer et convertir avec davantage d’assurance.',
      navAriaLabel: 'Navigation principale',
      languageLabel: 'Langue',
    },
    hero: {
      meta: ['Basé à Berlin', 'Disponible pour une sélection de projets'],
      eyebrow: 'Studio digital boutique',
      title: 'Des sites modernes pour les marques qui doivent paraître',
      accent: 'claires, haut de gamme et prêtes à vendre.',
      text:
        'Stratégie, design et réalisation frontend pour les marques de services qui ont dépassé les templates et veulent une présence digitale plus affûtée.',
      primaryCta: 'Lancer un projet',
      secondaryCta: 'Voir les projets',
      note: 'Un positionnement plus net, un processus plus serein et un site qui impose une vraie présence.',
      metrics: [
        { value: '5+', label: 'Années à concevoir des sites web' },
        { value: '32', label: 'Projets clients lancés' },
        { value: '2-10', label: 'Semaines de projet' },
      ],
      sideEyebrow: 'Direction hero éditoriale',
      sideTitle: 'Un calme architectural avec une tonalité digitale premium.',
      sideText: 'Atmosphère full-bleed, texte compact, mouvement maîtrisé.',
      imageAlt:
        'Intérieur éditorial sombre avec parois vitrées, sol en béton et éclairage architectural chaleureux.',
    },
    cta: {
      eyebrow: 'Prêt quand vous l’êtes',
      title: 'Besoin d’un site qui paraisse actuel, premium et construit avec intention ?',
      primary: 'Réserver un appel découverte',
      secondary: 'Écrire à FDesign',
    },
    home: {
      services: {
        eyebrow: 'Ce que je fais',
        title: 'Une présence digitale moderne pour les entreprises dont le travail vaut mieux que leur site actuel.',
        text: 'FDesign aide les entreprises à paraître plus établies, à communiquer plus vite et à convertir avec moins de friction.',
      },
      selectedProjects: {
        eyebrow: 'Projets sélectionnés',
        title: 'Un travail qui équilibre confiance visuelle et intention business.',
        text: 'Les projets ci-dessous sont fictionnalisés pour cette démo, mais leur structure, leurs budgets et leurs résultats sont ancrés dans la réalité d’agence.',
        button: 'Explorer toutes les études de cas',
      },
      packages: {
        eyebrow: 'Offres',
        title: 'Pensé pour de vrais budgets, pas pour des decks fantasmés.',
        text: 'Il ne faut pas une agence de 40 personnes pour obtenir un site premium. Il faut un processus resserré, un vrai goût et quelqu’un qui livre réellement.',
      },
      testimonials: {
        eyebrow: 'Mots des clients',
        title: 'Ce que les gens disent généralement après le lancement.',
      },
    },
    servicesPage: {
      hero: {
        eyebrow: 'Services',
        title: 'Stratégie, design et production frontend qui fonctionnent comme un seul système.',
        text: 'FDesign conçoit des sites destinés à être vus par de vrais clients, pas seulement admirés par d’autres designers.',
      },
      extras: [
        {
          title: 'Structure prête pour le SEO',
          copy:
            'Hiérarchie de titres propre, bases de métadonnées, logique de liens internes et performance mobile pensées dès le départ.',
        },
        {
          title: 'Support après lancement',
          copy:
            'Ajustements, nouvelles pages, mises à jour de contenu et soin design une fois le lancement principal terminé.',
        },
      ],
      included: {
        eyebrow: 'Inclus',
        title: 'Le stack standard autour d’un site sérieux pour entreprise.',
        items: [
          { title: 'Direction de marque', text: 'Typographie, palette, tonalité et cohérence visuelle.' },
          { title: 'Layouts responsives', text: 'Qualité desktop, tablette et mobile intégrée dès le premier draft.' },
          { title: 'Systèmes de design', text: 'Sections, composants, boutons, cartes et règles d’espacement réutilisables.' },
          { title: 'Assets de lancement', text: 'Favicons, bases de prévisualisation sociale et consignes de handoff.' },
        ],
      },
    },
    workPage: {
      hero: {
        eyebrow: 'Projets',
        title: 'Un portfolio au format étude de cas, conçu pour paraître crédible, soigné et commercialement affûté.',
        text: 'Ces exemples montrent le niveau de réflexion, de rythme et de présentation que FDesign cherche à livrer.',
      },
      footerLabel: 'Fenêtre de 8 semaines',
    },
    aboutPage: {
      hero: {
        eyebrow: 'Studio',
        title: 'FDesign est un studio boutique pensé pour les entreprises qui se soucient de la façon dont elles sont perçues.',
        text: 'Après plusieurs années loin de la production de sites, ce nouveau chapitre démarre avec une idée simple : faire sentir la présence web au niveau du service réel.',
      },
      profile: {
        eyebrow: 'Profil du studio',
        title: 'Assez petit pour rester affûté, assez senior pour aller vite.',
        text: 'FDesign réunit goût, structure et exécution frontend afin que les projets ne se perdent pas entre stratégie, design et code.',
      },
      valueTitle: 'Standard FDesign',
      tools: {
        eyebrow: 'Outils & focus',
        title: 'Direction design, layouts orientés conversion, builds React, livraison prête au lancement.',
        chips: ['UI design', 'Ton de marque', 'React', 'Vite', 'Build responsive', 'Conseil'],
      },
    },
    processPage: {
      hero: {
        eyebrow: 'Processus',
        title: 'Un processus calme et structuré qui garde l’élan sans chaos.',
        text: 'Des checkpoints clairs, des attentes réalistes et assez de flexibilité pour améliorer le travail pendant sa création.',
      },
      expectation: {
        eyebrow: 'À quoi s’attendre',
        title: 'Pas de délais vagues, pas de disparition, pas de spirale infinie de révisions.',
        items: [
          { title: 'Rythme hebdomadaire', text: 'Des mises à jour régulières avec progrès visible et prochaines étapes concrètes.' },
          { title: 'Points de décision', text: 'Des validations claires à chaque phase pour garder le projet en mouvement.' },
          { title: 'Périmètre réaliste', text: 'Assez d’ambition pour paraître premium, assez de discipline pour lancer vraiment.' },
        ],
      },
    },
    contactPage: {
      hero: {
        eyebrow: 'Contact',
        title: 'Dites à FDesign ce que vous voulez lancer, rafraîchir ou corriger.',
        text: 'Utilisez les coordonnées ci-dessous ou envoyez un brief court. Objectifs, timing et fourchette budgétaire suffisent pour démarrer.',
      },
      directEyebrow: 'Direct',
      form: {
        name: 'Nom',
        namePlaceholder: 'Votre nom',
        company: 'Entreprise',
        companyPlaceholder: 'Société ou marque',
        email: 'Email',
        emailPlaceholder: 'nom@entreprise.com',
        budget: 'Budget',
        budgetOptions: ['€4.800 - €8.000', '€9.500 - €15.000', '€16.000+'],
        brief: 'Brief projet',
        briefPlaceholder: 'Que construisez-vous, relancez-vous ou améliorez-vous ? Quel est l’objectif ?',
        submit: 'Envoyer la demande',
      },
      faq: {
        eyebrow: 'FAQ',
        title: 'Réponses rapides avant le premier appel.',
      },
    },
    serviceCards: [
      {
        title: 'Sites guidés par la marque',
        copy:
          'Des sites stratégiques pour les entreprises de services premium qui ont besoin d’autorité, de clarté et d’un langage design haut de gamme sans devenir froid.',
      },
      {
        title: 'Refontes orientées conversion',
        copy:
          'Transformer des sites datés en expériences plus nettes, plus rapides et plus claires, avec un meilleur message, un meilleur flux et des leads plus qualifiés.',
      },
      {
        title: 'Production frontend',
        copy:
          'Des frontends React responsives, des systèmes de motion, des bibliothèques de composants et des builds prêts au lancement sur tous les écrans modernes.',
      },
      {
        title: 'Direction e-commerce',
        copy:
          'Des expériences boutique pour des marques curées, avec storytelling produit ciblé, UI premium et parcours d’achat propres.',
      },
    ],
    offerings: [
      {
        name: 'Launch',
        price: 'à partir de €4.800',
        length: '3-4 semaines',
        description: 'Pour les jeunes entreprises qui ont besoin rapidement d’une présence premium en une page ou petit site multi-pages.',
        bullets: ['Workshop découverte', 'Direction de marque', 'Design responsive', 'Support au lancement'],
      },
      {
        name: 'Studio',
        price: 'à partir de €9.500',
        length: '5-7 semaines',
        description: 'Pour les entreprises de services qui ont besoin d’une identité digitale plus forte et d’un vrai site commercial.',
        bullets: ['Site de 6 pages', 'Structure de contenu', 'Système UI sur mesure', 'Finition performance'],
      },
      {
        name: 'Signature',
        price: 'à partir de €16.000',
        length: '8-10 semaines',
        description: 'Pour les équipes prêtes pour une présentation de niveau éditorial, des interactions plus riches et une réflexion produit plus poussée.',
        bullets: ['Système de design avancé', 'Direction motion', 'Storytelling d’études de cas', 'Suivi post-lancement'],
      },
    ],
    workItems: [
      {
        client: 'Auren Studio',
        sector: 'Design d’intérieur',
        budget: '€11.200',
        outcome: '+34% de demandes qualifiées en 90 jours',
        summary:
          'Un repositionnement visuel pour un studio d’intérieur qui devait paraître plus premium et signer davantage de projets résidentiels haut de gamme.',
      },
      {
        client: 'Northline Legal',
        sector: 'Cabinet juridique',
        budget: '€8.900',
        outcome: '2,1x plus de durée de session',
        summary:
          'Un système de site sobre et rassurant conçu pour simplifier des services juridiques complexes et renforcer la confiance des leads.',
      },
      {
        client: 'Luma Clinic',
        sector: 'Santé privée',
        budget: '€13.700',
        outcome: '+41% de demandes de consultation',
        summary:
          'Une expérience patient apaisante mais moderne, avec plus de clarté sur les services, de signaux de confiance et un meilleur flux mobile.',
      },
      {
        client: 'Vanta Goods',
        sector: 'E-commerce',
        budget: '€14.500',
        outcome: '+22% de hausse du taux de conversion',
        summary:
          'Un rafraîchissement direct-to-consumer centré sur le storytelling produit, le rythme visuel et la confiance au checkout.',
      },
      {
        client: 'Helio Capital',
        sector: 'Finance',
        budget: '€18.900',
        outcome: 'Positionnement prêt pour l’enterprise',
        summary:
          'Un site corporate élégant avec un message plus net, une hiérarchie plus propre et une première impression plus crédible.',
      },
      {
        client: 'Sora Events',
        sector: 'Événementiel luxe',
        budget: '€7.200',
        outcome: 'Saison de lancement complète',
        summary:
          'Un concept de site à forte émotion qui équilibre imagerie éditoriale, prestige événementiel et parcours de contact faciles.',
      },
    ],
    values: [
      '5 ans à façonner des sites pour des marques de services, des fondateurs et des équipes en croissance.',
      'Un processus compact et senior, sans lourdeur d’agence ni handoffs interminables.',
      'Design et code alignés dès le premier jour, pour que les belles idées restent réellement réalisables.',
      'Communication claire, délais réalistes et état d’esprit orienté lancement dès le départ.',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Découverte',
        text: 'Nous alignons les objectifs, l’audience, le modèle économique, le positionnement et ce que le site doit réellement accomplir.',
      },
      {
        step: '02',
        title: 'Direction',
        text: 'Je définis l’art direction, la typographie, la grille, le rythme des pages et la tonalité émotionnelle de la marque.',
      },
      {
        step: '03',
        title: 'Design',
        text: 'Les pages clés sont conçues avec structure de contenu, hiérarchie et chemins de conversion, pas seulement avec de la décoration.',
      },
      {
        step: '04',
        title: 'Build',
        text: 'La direction validée devient un frontend responsive avec des détails soignés, du motion et une performance propre.',
      },
      {
        step: '05',
        title: 'Lancement',
        text: 'Relecture finale, bases SEO, contrôles qualité et support de déploiement pour une mise en ligne sans panique.',
      },
      {
        step: '06',
        title: 'Suivi',
        text: 'Améliorations post-lancement, ajouts et raffinements stratégiques fondés sur le comportement réel des utilisateurs.',
      },
    ],
    testimonials: [
      {
        quote:
          'FDesign a donné à notre studio le type de site qui change immédiatement la façon dont les gens vous parlent lors du premier rendez-vous. La valeur perçue a bondi.',
        author: 'Mara Klein',
        role: 'Founder, Auren Studio',
      },
      {
        quote:
          'Le processus était structuré, rapide et étonnamment serein. Nous avons enfin un site aligné avec le niveau réel de notre travail.',
        author: 'Elias Nord',
        role: 'Managing Partner, Northline Legal',
      },
    ],
    faqs: [
      {
        question: 'Rédiges-tu aussi les contenus ?',
        answer:
          'Oui. Je peux structurer, affiner et écrire les textes du site dans un ton adapté à la marque et orienté conversion.',
      },
      {
        question: 'Peux-tu refondre un site existant ?',
        answer:
          'Absolument. Beaucoup de projets commencent par un audit et une refonte visuelle et structurelle complète plutôt qu’un nouveau départ.',
      },
      {
        question: 'Travailles-tu avec des entreprises hors d’Allemagne ?',
        answer:
          'Oui. FDesign travaille à distance avec des clients à travers l’Europe et sur les marchés anglophones.',
      },
    ],
  },
}

export function getSiteContent(language) {
  return siteContent[language] || siteContent[defaultLanguage]
}
