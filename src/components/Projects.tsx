import { GraduationCap, Building2 } from "lucide-react"

type Project = {
  title: string
  text: string
  stack: string[]
}

const clients: {
  icon: typeof GraduationCap
  client: string
  label: string
  intro: string
  projects: Project[]
}[] = [
  {
    icon: Building2,
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
    icon: GraduationCap,
    client: "Akademia Techniczno-Artystyczna",
    label: "University",
    intro:
      "Systems running the internship programme and student services at ATA in Warsaw.",
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
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-muted/50">
      <div className="section-container">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
          Projects
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Selected work</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mb-16">
          Systems built for real users with real data — not toy demos.
        </p>

        <div className="space-y-16">
          {clients.map(({ icon: Icon, client, label, intro, projects }) => (
            <div key={client}>
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-secondary flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {label}
                  </p>
                  <h3 className="text-2xl font-bold">{client}</h3>
                  <p className="text-muted-foreground mt-1 max-w-2xl">{intro}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map(({ title, text, stack }) => (
                  <div
                    key={title}
                    className="flex flex-col p-6 rounded-2xl bg-card border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                  >
                    <h4 className="text-lg font-semibold mb-2">{title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                      {text}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {stack.map((s) => (
                        <span
                          key={s}
                          className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary font-medium"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
