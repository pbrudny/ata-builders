import { useState } from "react"
import { Menu, X } from "lucide-react"
import { useLang } from "../i18n"
import type { Lang } from "../content"

const buttonBase =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"

function LangSwitch() {
  const { lang, setLang } = useLang()
  const options: Lang[] = ["pl", "en"]
  return (
    <div
      role="group"
      aria-label="Language"
      className="inline-flex rounded-md border border-secondary-foreground/20 p-0.5 text-xs font-semibold"
    >
      {options.map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`px-2 py-1 rounded uppercase transition-colors ${
            lang === l
              ? "bg-primary text-primary-foreground"
              : "text-secondary-foreground/70 hover:text-primary"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { c } = useLang()

  const links = [
    { label: c.nav.services, href: "#services" },
    { label: c.nav.projects, href: "#projects" },
    { label: c.nav.process, href: "#process" },
    { label: c.nav.about, href: "#about" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary text-secondary-foreground">
      <div className="section-container flex items-center justify-between h-16">
        <a href="#" className="text-lg font-bold font-heading">
          <span className="text-primary">ATA</span>{" "}
          <span className="text-secondary-foreground">Builders Lab</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <LangSwitch />
          <a
            href="#contact"
            className={`${buttonBase} bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-3`}
          >
            {c.nav.cta}
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <LangSwitch />
          <button
            className="p-2 text-secondary-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-secondary-foreground/10 bg-secondary px-4 py-4 space-y-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-secondary-foreground/70 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className={`${buttonBase} bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-3 w-full`}
          >
            {c.nav.cta}
          </a>
        </div>
      )}
    </nav>
  )
}
