import { GraduationCap, Building2 } from "lucide-react"
import { useLang } from "../i18n"

const icons = [Building2, GraduationCap]

export default function Projects() {
  const { c } = useLang()
  const t = c.projects
  return (
    <section id="projects" className="py-24 lg:py-32 bg-muted/50">
      <div className="section-container">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
          {t.eyebrow}
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">{t.title}</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mb-16">{t.lead}</p>

        <div className="space-y-16">
          {t.clients.map(({ client, label, intro, projects }, i) => {
            const Icon = icons[i]
            return (
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
            )
          })}
        </div>
      </div>
    </section>
  )
}
