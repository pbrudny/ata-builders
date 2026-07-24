import { Building2, Users, Briefcase } from "lucide-react"

const cards = [
  {
    icon: Building2,
    title: "Real Projects",
    text: "Build systems that solve actual university challenges — not toy exercises.",
  },
  {
    icon: Users,
    title: "Real Users",
    text: "Your work is used by the dean's office, admin, and students across campus.",
  },
  {
    icon: Briefcase,
    title: "Industry Workflow",
    text: "Sprints, code reviews, deployments — teamwork like in a real tech company.",
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="section-container">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            About Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            What is ATA Builders?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mb-16">
            ATA Builders is a student-driven engineering lab at Akademia
            Techniczno-Artystyczna w Warszawie. We design, build, and deploy
            digital systems — from AI chatbots to data dashboards — that power
            real university operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map(({ icon: Icon, title, text }) => (
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
