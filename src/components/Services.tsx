import { Bot, BookOpenText, Gauge, Workflow, FileSearch, Rocket } from "lucide-react"

const services = [
  {
    icon: Bot,
    title: "Agentic systems",
    text: "LLM agents that use your tools — email, documents, databases, APIs — to complete multi-step processes, with a human approving the steps that matter.",
  },
  {
    icon: BookOpenText,
    title: "RAG assistants",
    text: "Chat and search over your own knowledge base: regulations, procedures, contracts. Answers grounded in your documents, with sources.",
  },
  {
    icon: Gauge,
    title: "Evaluation & observability",
    text: "Test sets, LLM-as-judge scoring, tracing with Langfuse and regression checks in CI — so you know the system works before and after every change.",
  },
  {
    icon: FileSearch,
    title: "Document AI",
    text: "Extract, check and compare data from PDFs, scans and forms. Flag missing fields, verify documents against rules, generate reports.",
  },
  {
    icon: Workflow,
    title: "Workflow automation",
    text: "Connect inboxes, Microsoft 365, Slack and internal systems. Replace repetitive manual steps with reliable pipelines.",
  },
  {
    icon: Rocket,
    title: "Prototype to production",
    text: "Working demo in weeks, then a deployed, documented system built on your stack (Docker, Postgres, Entra ID SSO and more).",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="section-container">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
          Services
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">What we build</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mb-16">
          We focus on applied AI: systems that take over a concrete process, are measured,
          and keep working after the demo.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group p-8 rounded-2xl border bg-card hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
