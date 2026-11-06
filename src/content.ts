export type Lang = "en" | "pl"

type Card = { title: string; text: string }
type Project = Card & { stack: string[] }

export type Content = {
  meta: { title: string; description: string }
  nav: { services: string; projects: string; process: string; about: string; cta: string }
  hero: {
    badge: string
    title1: string
    title2: string
    lead: string
    tags: string[]
    cta: string
    secondary: string
  }
  services: { eyebrow: string; title: string; lead: string; items: Card[] }
  projects: {
    eyebrow: string
    title: string
    lead: string
    clients: { client: string; label: string; intro: string; projects: Project[] }[]
  }
  process: { eyebrow: string; title: string; steps: Card[] }
  about: { eyebrow: string; title: string; lead: string; points: Card[] }
  contact: {
    eyebrow: string
    title: string
    lead: string
    name: string
    company: string
    optional: string
    message: string
    placeholder: string
    submit: string
    subject: string
  }
  footer: { tagline: string; university: string }
}

const en: Content = {
  meta: {
    title: "ATA Builders Lab — AI agents, RAG & evaluation",
    description:
      "ATA Builders Lab builds agentic systems, RAG assistants and LLM evaluation for universities and companies.",
  },
  nav: {
    services: "Services",
    projects: "Projects",
    process: "Process",
    about: "About",
    cta: "Start a project",
  },
  hero: {
    badge: "AI engineering studio · Akademia Techniczno-Artystyczna",
    title1: "We build AI systems",
    title2: "that do real work",
    lead: "ATA Builders Lab designs, builds and evaluates AI agents, RAG assistants and document automation for universities and companies — from first prototype to a deployed system your team actually uses.",
    tags: ["Agentic systems", "RAG", "LLM evaluation", "Workflow automation", "Document AI"],
    cta: "Start a project",
    secondary: "See our work",
  },
  services: {
    eyebrow: "Services",
    title: "What we build",
    lead: "We focus on applied AI: systems that take over a concrete process, are measured, and keep working after the demo.",
    items: [
      {
        title: "Agentic systems",
        text: "LLM agents that use your tools — email, documents, databases, APIs — to complete multi-step processes, with a human approving the steps that matter.",
      },
      {
        title: "RAG assistants",
        text: "Chat and search over your own knowledge base: regulations, procedures, contracts. Answers grounded in your documents, with sources.",
      },
      {
        title: "Evaluation & observability",
        text: "Test sets, LLM-as-judge scoring, tracing with Langfuse and regression checks in CI — so you know the system works before and after every change.",
      },
      {
        title: "Document AI",
        text: "Extract, check and compare data from PDFs, scans and forms. Flag missing fields, verify documents against rules, generate reports.",
      },
      {
        title: "Workflow automation",
        text: "Connect inboxes, Microsoft 365, Slack and internal systems. Replace repetitive manual steps with reliable pipelines.",
      },
      {
        title: "Prototype to production",
        text: "Working demo in weeks, then a deployed, documented system built on your stack (Docker, Postgres, Entra ID SSO and more).",
      },
    ],
  },
  projects: {
    eyebrow: "Projects",
    title: "Selected work",
    lead: "Systems built for real users with real data — not toy demos.",
    clients: [
      {
        client: "SEKA S.A.",
        label: "Industry partner",
        intro:
          "One of the largest health & safety (BHP) training providers in Poland. We work with SEKA on AI and automation for their internal processes.",
        projects: [
          {
            title: "Recruitment management system",
            text: "Applications arriving by email are turned into candidate profiles: CVs parsed, candidates assigned to branches by city, statuses tracked through the recruitment process. Incomplete applications trigger an automatic request to the candidate. Role-based access for HR and branch managers with Microsoft Entra ID sign-in.",
            stack: ["Email ingestion", "CV parsing", "Entra ID SSO", "Postgres", "Docker"],
          },
          {
            title: "Next in the pipeline",
            text: "AI comparison of environmental test results against location-specific norms in PDF, and an assistant that fills client safety questionnaires from SEKA's knowledge base.",
            stack: ["Document AI", "RAG"],
          },
        ],
      },
      {
        client: "Akademia Techniczno-Artystyczna",
        label: "University",
        intro: "Systems running the internship programme and student services at ATA in Warsaw.",
        projects: [
          {
            title: "Agentic internship coordinator",
            text: "Agent that reads the internship mailbox, matches messages to students, checks submitted documents and drafts replies for the coordinator to approve.",
            stack: ["Agents", "Microsoft Graph", "LLM"],
          },
          {
            title: "Internship report reviewer",
            text: "Checks internship journals and learning-outcome reports against the programme rules and finds evidence for each outcome, producing a review ready for sign-off.",
            stack: ["Document AI", "OCR", "LLM"],
          },
          {
            title: "ATA RAG assistant",
            text: "Question answering over university regulations and documents, with answers grounded in cited sources.",
            stack: ["RAG", "Vector search"],
          },
          {
            title: "AI evaluation platform",
            text: "Shared evaluation layer for all the tools above: test datasets, automated scoring, tracing and CI checks so regressions are caught before release.",
            stack: ["Langfuse", "LLM-as-judge", "CI/CD"],
          },
          {
            title: "PDF signer",
            text: "Fills and signs the university section of internship documents, including scanned PDFs.",
            stack: ["PDF", "Automation"],
          },
        ],
      },
    ],
  },
  process: {
    eyebrow: "Process",
    title: "How we work",
    steps: [
      {
        title: "Discover",
        text: "We map the process, the data and the people involved, and pick the problem with the clearest payoff.",
      },
      {
        title: "Prototype",
        text: "A working demo on your real documents within a few weeks — something to react to, not a slide deck.",
      },
      {
        title: "Evaluate",
        text: 'We define what "good" means, build a test set and measure quality before anyone relies on the output.',
      },
      {
        title: "Deploy & hand over",
        text: "Production build on your stack, integrated with your sign-in and systems, with documentation and handover.",
      },
    ],
  },
  about: {
    eyebrow: "About",
    title: "Who we are",
    lead: "ATA Builders Lab is the applied-AI lab of Akademia Techniczno-Artystyczna in Warsaw. We first built AI tools for our own university — now we build them for partner companies too.",
    points: [
      {
        title: "Engineers + students",
        text: "Led by experienced engineers, delivered with a team of Computer Engineering students working in sprints with code review.",
      },
      {
        title: "Built for sensitive data",
        text: "Personal and internal data handled with care: access control, SSO, deployment on infrastructure you choose.",
      },
      {
        title: "Fits your stack",
        text: "We build where your team can maintain it — Python, TypeScript, PHP/Laravel, Postgres, Docker, Microsoft 365.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Have a process to automate?",
    lead: "Tell us what takes your team too much time. We'll come back with an idea of what an AI system could do and how fast we can show a working prototype.",
    name: "Name",
    company: "Company",
    optional: "(optional)",
    message: "What would you like to build?",
    placeholder: "E.g. we receive 200 applications a month by email and sort them by hand…",
    submit: "Send inquiry",
    subject: "Project inquiry",
  },
  footer: {
    tagline: "Agentic systems · RAG · LLM evaluation",
    university: "Akademia Techniczno-Artystyczna w Warszawie",
  },
}

const pl: Content = {
  meta: {
    title: "ATA Builders Lab — agenci AI, RAG i ewaluacja",
    description:
      "ATA Builders Lab tworzy systemy agentowe, asystentów RAG i ewaluację modeli językowych dla uczelni i firm.",
  },
  nav: {
    services: "Usługi",
    projects: "Projekty",
    process: "Proces",
    about: "O nas",
    cta: "Rozpocznij projekt",
  },
  hero: {
    badge: "Studio inżynierii AI · Akademia Techniczno-Artystyczna",
    title1: "Budujemy systemy AI,",
    title2: "które wykonują realną pracę",
    lead: "ATA Builders Lab projektuje, buduje i ewaluuje agentów AI, asystentów RAG oraz automatyzację dokumentów dla uczelni i firm — od pierwszego prototypu do wdrożonego systemu, z którego Twój zespół naprawdę korzysta.",
    tags: ["Systemy agentowe", "RAG", "Ewaluacja LLM", "Automatyzacja procesów", "AI dla dokumentów"],
    cta: "Rozpocznij projekt",
    secondary: "Zobacz realizacje",
  },
  services: {
    eyebrow: "Usługi",
    title: "Co budujemy",
    lead: "Zajmujemy się AI w praktyce: systemami, które przejmują konkretny proces, są mierzalne i działają także po demo.",
    items: [
      {
        title: "Systemy agentowe",
        text: "Agenci LLM korzystający z Twoich narzędzi — poczty, dokumentów, baz danych, API — aby realizować wieloetapowe procesy. Kluczowe kroki zatwierdza człowiek.",
      },
      {
        title: "Asystenci RAG",
        text: "Czat i wyszukiwanie w Twojej bazie wiedzy: regulaminach, procedurach, umowach. Odpowiedzi oparte na Twoich dokumentach, ze wskazaniem źródeł.",
      },
      {
        title: "Ewaluacja i monitoring",
        text: "Zbiory testowe, ocena LLM-as-judge, śledzenie w Langfuse i testy regresji w CI — wiesz, że system działa przed każdą zmianą i po niej.",
      },
      {
        title: "AI dla dokumentów",
        text: "Wydobywanie, weryfikacja i porównywanie danych z PDF-ów, skanów i formularzy. Wykrywanie braków, sprawdzanie zgodności z zasadami, generowanie raportów.",
      },
      {
        title: "Automatyzacja procesów",
        text: "Integracja skrzynek pocztowych, Microsoft 365, Slacka i systemów wewnętrznych. Powtarzalną pracę ręczną zastępujemy niezawodnymi procesami.",
      },
      {
        title: "Od prototypu do produkcji",
        text: "Działające demo w kilka tygodni, potem wdrożony i udokumentowany system na Twojej infrastrukturze (Docker, Postgres, logowanie Entra ID i inne).",
      },
    ],
  },
  projects: {
    eyebrow: "Projekty",
    title: "Wybrane realizacje",
    lead: "Systemy dla prawdziwych użytkowników, na prawdziwych danych — nie zabawkowe dema.",
    clients: [
      {
        client: "SEKA S.A.",
        label: "Partner biznesowy",
        intro:
          "Jeden z największych w Polsce dostawców szkoleń BHP. Współpracujemy z SEKA przy AI i automatyzacji procesów wewnętrznych.",
        projects: [
          {
            title: "System zarządzania rekrutacjami",
            text: "Zgłoszenia przychodzące e-mailem zamieniane są w profile kandydatów: analiza CV, przypisanie do oddziału według miasta, śledzenie statusów w procesie rekrutacji. Niekompletne zgłoszenie uruchamia automatyczną prośbę do kandydata o uzupełnienie. Dostęp oparty na rolach dla HR i kierowników oddziałów, logowanie przez Microsoft Entra ID.",
            stack: ["Import z e-maili", "Analiza CV", "Entra ID SSO", "Postgres", "Docker"],
          },
          {
            title: "Kolejne projekty",
            text: "Porównywanie przez AI wyników badań środowiskowych z normami dla danej lokalizacji zapisanymi w PDF oraz asystent wypełniający ankiety bezpieczeństwa klientów na podstawie bazy wiedzy SEKA.",
            stack: ["AI dla dokumentów", "RAG"],
          },
        ],
      },
      {
        client: "Akademia Techniczno-Artystyczna",
        label: "Uczelnia",
        intro: "Systemy obsługujące praktyki zawodowe i sprawy studenckie w ATA w Warszawie.",
        projects: [
          {
            title: "Agentowy koordynator praktyk",
            text: "Agent czyta skrzynkę praktyk, przypisuje wiadomości do studentów, sprawdza przesłane dokumenty i przygotowuje odpowiedzi do zatwierdzenia przez koordynatora.",
            stack: ["Agenci", "Microsoft Graph", "LLM"],
          },
          {
            title: "Weryfikator sprawozdań z praktyk",
            text: "Sprawdza dzienniki praktyk i sprawozdania z efektów uczenia się pod kątem zasad programu, wskazuje dowody dla każdego efektu i przygotowuje ocenę gotową do podpisu.",
            stack: ["AI dla dokumentów", "OCR", "LLM"],
          },
          {
            title: "Asystent RAG dla ATA",
            text: "Odpowiedzi na pytania o regulaminy i dokumenty uczelni, oparte na cytowanych źródłach.",
            stack: ["RAG", "Wyszukiwanie wektorowe"],
          },
          {
            title: "Platforma ewaluacji AI",
            text: "Wspólna warstwa ewaluacji dla wszystkich powyższych narzędzi: zbiory testowe, automatyczna ocena, śledzenie i testy w CI, które wyłapują regresje przed wdrożeniem.",
            stack: ["Langfuse", "LLM-as-judge", "CI/CD"],
          },
          {
            title: "Podpisywanie PDF",
            text: "Wypełnia i podpisuje część uczelnianą dokumentów praktyk, także w zeskanowanych PDF-ach.",
            stack: ["PDF", "Automatyzacja"],
          },
        ],
      },
    ],
  },
  process: {
    eyebrow: "Proces",
    title: "Jak pracujemy",
    steps: [
      {
        title: "Analiza",
        text: "Poznajemy proces, dane i zaangażowane osoby, a następnie wybieramy problem, którego rozwiązanie da najwyraźniejszy efekt.",
      },
      {
        title: "Prototyp",
        text: "Działające demo na Twoich prawdziwych dokumentach w ciągu kilku tygodni — coś, co można ocenić, a nie prezentacja.",
      },
      {
        title: "Ewaluacja",
        text: "Ustalamy, co znaczy „dobrze”, budujemy zbiór testowy i mierzymy jakość, zanim ktokolwiek zacznie polegać na wynikach.",
      },
      {
        title: "Wdrożenie i przekazanie",
        text: "Wersja produkcyjna na Twojej infrastrukturze, zintegrowana z logowaniem i systemami, z dokumentacją i przekazaniem.",
      },
    ],
  },
  about: {
    eyebrow: "O nas",
    title: "Kim jesteśmy",
    lead: "ATA Builders Lab to laboratorium AI stosowanej przy Akademii Techniczno-Artystycznej w Warszawie. Najpierw budowaliśmy narzędzia AI dla własnej uczelni — teraz tworzymy je także dla firm partnerskich.",
    points: [
      {
        title: "Inżynierowie + studenci",
        text: "Projekty prowadzą doświadczeni inżynierowie, a realizuje je zespół studentów informatyki pracujący w sprintach, z code review.",
      },
      {
        title: "Gotowi na wrażliwe dane",
        text: "Dane osobowe i wewnętrzne traktujemy ostrożnie: kontrola dostępu, SSO, wdrożenie na wybranej przez Ciebie infrastrukturze.",
      },
      {
        title: "Dopasowani do Twojego stosu",
        text: "Budujemy w technologiach, które Twój zespół może utrzymać — Python, TypeScript, PHP/Laravel, Postgres, Docker, Microsoft 365.",
      },
    ],
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Masz proces do zautomatyzowania?",
    lead: "Napisz, co zabiera Twojemu zespołowi najwięcej czasu. Odpowiemy z pomysłem, co mógłby zrobić system AI i jak szybko możemy pokazać działający prototyp.",
    name: "Imię i nazwisko",
    company: "Firma",
    optional: "(opcjonalnie)",
    message: "Co chcesz zbudować?",
    placeholder: "Np. co miesiąc dostajemy 200 zgłoszeń e-mailem i sortujemy je ręcznie…",
    submit: "Wyślij zapytanie",
    subject: "Zapytanie o projekt",
  },
  footer: {
    tagline: "Systemy agentowe · RAG · Ewaluacja LLM",
    university: "Akademia Techniczno-Artystyczna w Warszawie",
  },
}

export const content: Record<Lang, Content> = { en, pl }
