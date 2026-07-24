import { ArrowRight } from "lucide-react"

const heroButton =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 text-base font-semibold px-8 py-3 h-auto rounded-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"

const heroOutlineButton =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium disabled:pointer-events-none disabled:opacity-50 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base font-semibold px-8 py-3 h-auto rounded-lg transition-all duration-300 hover:-translate-y-0.5"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-secondary">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <svg
        className="absolute top-0 right-0 w-1/2 h-full opacity-[0.1]"
        viewBox="0 0 600 800"
        fill="none"
      >
        <line x1="100" y1="0" x2="100" y2="800" stroke="hsl(27 85% 53%)" strokeWidth="1" />
        <line x1="200" y1="0" x2="200" y2="800" stroke="hsl(27 85% 53%)" strokeWidth="1" />
        <line x1="300" y1="0" x2="300" y2="800" stroke="hsl(27 85% 53%)" strokeWidth="1" />
        <circle cx="100" cy="200" r="4" fill="hsl(27 85% 53%)" />
        <circle cx="200" cy="400" r="4" fill="hsl(27 95% 45%)" />
        <circle cx="300" cy="300" r="4" fill="hsl(27 85% 53%)" />
        <line x1="100" y1="200" x2="200" y2="400" stroke="hsl(27 95% 45%)" strokeWidth="1" />
        <line x1="200" y1="400" x2="300" y2="300" stroke="hsl(27 95% 45%)" strokeWidth="1" />
      </svg>

      <div className="section-container relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 text-primary text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Student Engineering Lab
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-secondary-foreground">ATA</span>{" "}
            <span className="text-gradient">Builders</span>
          </h1>

          <p className="text-xl sm:text-2xl font-medium text-secondary-foreground/80 mb-4">
            Building Real Systems for the University
          </p>

          <p className="text-lg text-secondary-foreground/60 max-w-xl mb-10">
            Join a student engineering team creating AI, automation, and digital
            systems used in real university operations.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#apply" className={heroButton}>
              Apply Now <ArrowRight className="ml-1 w-4 h-4" />
            </a>
            <a href="#about" className={heroOutlineButton}>
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
