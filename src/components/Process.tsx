const steps = [
  {
    num: "01",
    title: "Discover",
    text: "We map the process, the data and the people involved, and pick the problem with the clearest payoff.",
  },
  {
    num: "02",
    title: "Prototype",
    text: "A working demo on your real documents within a few weeks — something to react to, not a slide deck.",
  },
  {
    num: "03",
    title: "Evaluate",
    text: "We define what \"good\" means, build a test set and measure quality before anyone relies on the output.",
  },
  {
    num: "04",
    title: "Deploy & hand over",
    text: "Production build on your stack, integrated with your sign-in and systems, with documentation and handover.",
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-32">
      <div className="section-container">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
          Process
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-16">How we work</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
