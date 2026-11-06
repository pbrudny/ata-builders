import { Users, ShieldCheck, Layers } from "lucide-react"
import { useLang } from "../i18n"

const icons = [Users, ShieldCheck, Layers]

export default function About() {
  const { c } = useLang()
  const t = c.about
  return (
    <section id="about" className="py-24 lg:py-32 bg-muted/50">
      <div className="section-container">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
          {t.eyebrow}
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">{t.title}</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mb-16">{t.lead}</p>

        <div className="grid md:grid-cols-3 gap-8">
          {t.points.map(({ title, text }, i) => {
            const Icon = icons[i]
            return (
              <div key={title} className="flex flex-col items-start">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
