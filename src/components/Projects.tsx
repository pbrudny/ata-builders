import { Bot, Workflow, CalendarClock, LayoutDashboard } from "lucide-react"

const projects = [
  {
    icon: Bot,
    title: "AI Chatbot",
    text: "Intelligent assistant for student services — answers FAQs, guides enrollment, and handles requests 24/7.",
  },
  {
    icon: Workflow,
    title: "Internship Automation",
    text: "End-to-end workflow automation for internship applications, approvals, and document management.",
  },
  {
    icon: CalendarClock,
    title: "Scheduling System",
    text: "Smart scheduling engine for classes, rooms, and faculty — optimized with constraint algorithms.",
  },
  {
    icon: LayoutDashboard,
    title: "Data Dashboards",
    text: "Real-time analytics dashboards for university operations, enrollment metrics, and resource usage.",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-muted/50">
      <div className="section-container">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-16">What We Build</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group relative p-6 rounded-2xl bg-card border hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full"
            >
              <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
