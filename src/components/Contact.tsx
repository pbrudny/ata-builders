import { useState } from "react"
import { Send, Mail } from "lucide-react"
import { useLang } from "../i18n"

const CONTACT_EMAIL = "piotr.brudny@akademiata.edu.pl"

const inputClass =
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:text-sm"

export default function Contact() {
  const { c } = useLang()
  const t = c.contact
  const [name, setName] = useState("")
  const [company, setCompany] = useState("")
  const [message, setMessage] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = `${t.subject}${company ? ` — ${company}` : ""}`
    const body = `${message}\n\n${name}${company ? `\n${company}` : ""}`
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="section-container">
        <div className="max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            {t.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.title}</h2>
          <p className="text-muted-foreground mb-4 max-w-xl">{t.lead}</p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-2 text-primary font-medium mb-12 break-all"
          >
            <Mail className="w-4 h-4 shrink-0" /> {CONTACT_EMAIL}
          </a>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <label className="block">
                <span className="block text-sm font-medium mb-2">{t.name}</span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClass}
                  required
                />
              </label>
              <label className="block">
                <span className="block text-sm font-medium mb-2">
                  {t.company}{" "}
                  <span className="text-muted-foreground font-normal">{t.optional}</span>
                </span>
                <input
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className={inputClass}
                />
              </label>
            </div>

            <label className="block">
              <span className="block text-sm font-medium mb-2">{t.message}</span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t.placeholder}
                rows={5}
                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                required
              />
            </label>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap bg-primary text-primary-foreground hover:bg-primary/90 text-base font-semibold px-8 py-3 rounded-lg shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto"
            >
              {t.submit} <Send className="ml-1 w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
