import { useState } from "react"
import { Send } from "lucide-react"

const MAX_WORDS = 200

const roles = [
  "Backend Developer",
  "Frontend Developer",
  "AI / Automation Engineer",
  "Data Engineer",
]

const experienceLevels = ["Beginner", "Intermediate", "Advanced"]

const inputClass =
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:text-sm"

const textareaClass =
  "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"

function Field({
  label,
  optional,
  children,
}: {
  label: string
  optional?: boolean
  children: React.ReactNode
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">
        {label}{" "}
        {optional && (
          <span className="text-muted-foreground font-normal">(optional)</span>
        )}
      </label>
      {children}
    </div>
  )
}

export default function Apply() {
  const [motivation, setMotivation] = useState("")

  const wordCount =
    motivation.trim() === "" ? 0 : motivation.trim().split(/\s+/).length

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
  }

  return (
    <section id="apply" className="py-24 lg:py-32 bg-muted/50">
      <div className="section-container">
        <div className="max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Apply
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Join ATA Builders</h2>
          <p className="text-muted-foreground mb-12 max-w-xl">
            Ready to build real systems? Fill out the form below.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Full Name">
                <input placeholder="Jan Kowalski" className={inputClass} required />
              </Field>
              <Field label="Email">
                <input
                  type="email"
                  placeholder="jan@email.com"
                  className={inputClass}
                  required
                />
              </Field>
              <Field label="Field of Study">
                <input
                  placeholder="Computer Science"
                  className={inputClass}
                  required
                />
              </Field>
              <Field label="Year of Study">
                <input placeholder="2nd year" className={inputClass} required />
              </Field>
            </div>

            <Field label="GitHub / Portfolio" optional>
              <input
                placeholder="https://github.com/username"
                className={inputClass}
              />
            </Field>

            <Field label="Preferred Role">
              <select className={inputClass} defaultValue="" required>
                <option value="" disabled>
                  Select a role
                </option>
                {roles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Experience Level">
              <select className={inputClass} defaultValue="" required>
                <option value="" disabled>
                  Select your level
                </option>
                {experienceLevels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Motivation">
              <textarea
                value={motivation}
                onChange={(e) => setMotivation(e.target.value)}
                placeholder="Why do you want to join ATA Builders?"
                rows={5}
                className={textareaClass}
                required
              />
              <p
                className={`text-xs mt-1 ${
                  wordCount > MAX_WORDS ? "text-destructive" : "text-muted-foreground"
                }`}
              >
                {wordCount}/{MAX_WORDS} words
              </p>
            </Field>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 text-base font-semibold px-8 py-3 h-auto rounded-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto"
            >
              Apply to ATA Builders <Send className="ml-1 w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
