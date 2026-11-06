import { Bot, BookOpenText, Gauge, Workflow, FileSearch, Rocket } from "lucide-react"
import { useLang } from "../i18n"

const icons = [Bot, BookOpenText, Gauge, FileSearch, Workflow, Rocket]


export default function Services() {
  const { c } = useLang()
  const t = c.services
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="section-container">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
          {t.eyebrow}
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">{t.title}</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mb-16">
          {t.lead}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map(({ title, text }, i) => {
            const Icon = icons[i]
            return (
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
            )
          })}
        </div>
      </div>
    </section>
  )
}
