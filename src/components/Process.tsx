import { useLang } from "../i18n"

export default function Process() {
  const { c } = useLang()
  const t = c.process
  return (
    <section id="process" className="py-24 lg:py-32">
      <div className="section-container">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
          {t.eyebrow}
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-16">{t.title}</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.steps.map(({ title, text }, i) => (
            <div
              key={title}
              className="relative pl-8 border-l-2 border-primary/20 hover:border-primary/50 transition-colors"
            >
              <span className="text-5xl font-bold text-primary/10 absolute -top-2 left-4">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="pt-8">
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
