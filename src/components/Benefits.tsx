import { Rocket, FolderTree, Award, FileText } from "lucide-react"

const benefits = [
  {
    icon: Rocket,
    title: "Real-World Experience",
    text: "Work on production systems used by real people — not hypothetical exercises.",
  },
  {
    icon: FolderTree,
    title: "Portfolio Projects",
    text: "Showcase meaningful projects on your CV and GitHub profile.",
  },
  {
    icon: Award,
    title: "Certificate",
    text: "Receive an official certificate recognizing your contribution and skills.",
  },
  {
    icon: FileText,
    title: "Recommendation Letter",
    text: "Earn a professional recommendation from the lab supervisors.",
  },
]

export default function Benefits() {
  return (
    <section className="py-24 lg:py-32">
      <div className="section-container">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Benefits
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-16">What You Get</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex flex-col items-start">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-accent" />
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
