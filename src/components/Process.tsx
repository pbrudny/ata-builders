const steps = [
  {
    num: "01",
    title: "Apply & Join",
    text: "Submit your application and join a cross-functional team.",
  },
  {
    num: "02",
    title: "6-Month Program",
    text: "Work on real projects across two semesters with structured milestones.",
  },
  {
    num: "03",
    title: "Weekly Sprints",
    text: "Plan, develop, and demo — just like in a real engineering team.",
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-32">
      <div className="section-container">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Process
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-16">How It Works</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map(({ num, title, text }) => (
            <div
              key={num}
              className="relative pl-8 border-l-2 border-primary/20 hover:border-primary/50 transition-colors"
            >
              <span className="text-5xl font-bold text-primary/10 absolute -top-2 left-4">
                {num}
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
