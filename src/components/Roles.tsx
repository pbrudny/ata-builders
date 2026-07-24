import { Server, Monitor, Cpu, Database } from "lucide-react"

const roles = [
  {
    icon: Server,
    title: "Backend Developer",
    text: "APIs, services, databases — build the engine behind our systems.",
  },
  {
    icon: Monitor,
    title: "Frontend Developer",
    text: "Design and build modern interfaces that users love.",
  },
  {
    icon: Cpu,
    title: "AI / Automation Engineer",
    text: "Create intelligent agents, NLP pipelines, and workflow automation.",
  },
  {
    icon: Database,
    title: "Data Engineer",
    text: "Design data pipelines, dashboards, and analytics infrastructure.",
  },
]

export default function Roles() {
  return (
    <section id="roles" className="py-24 lg:py-32 bg-muted/50">
      <div className="section-container">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Roles
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-16">Find Your Role</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group text-center p-8 rounded-2xl border bg-card hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
