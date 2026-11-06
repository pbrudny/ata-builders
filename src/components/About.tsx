import { Users, ShieldCheck, Layers } from "lucide-react"

const points = [
  {
    icon: Users,
    title: "Engineers + students",
    text: "Led by experienced engineers, delivered with a team of Computer Engineering students working in sprints with code review.",
  },
  {
    icon: ShieldCheck,
    title: "Built for sensitive data",
    text: "Personal and internal data handled with care: access control, SSO, deployment on infrastructure you choose.",
  },
  {
    icon: Layers,
    title: "Fits your stack",
    text: "We build where your team can maintain it — Python, TypeScript, PHP/Laravel, Postgres, Docker, Microsoft 365.",
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-muted/50">
      <div className="section-container">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
          About
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Who we are</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mb-16">
          ATA Builders Lab is the applied-AI lab of Akademia Techniczno-Artystyczna in
          Warsaw. We first built AI tools for our own university — now we build them for
          partner companies too.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {points.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex flex-col items-start">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
