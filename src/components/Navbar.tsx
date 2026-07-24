import { useState } from "react"
import { Menu, X } from "lucide-react"

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Roles", href: "#roles" },
  { label: "Apply", href: "#apply" },
]

const buttonBase =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary text-secondary-foreground">
      <div className="section-container flex items-center justify-between h-16">
        <a href="#" className="text-lg font-bold font-heading">
          <span className="text-primary">ATA</span>{" "}
          <span className="text-secondary-foreground">Builders</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#apply"
            className={`${buttonBase} bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-3`}
          >
            Apply Now
          </a>
        </div>

        <button
          className="md:hidden p-2 text-secondary-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-secondary-foreground/10 bg-secondary px-4 py-4 space-y-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-secondary-foreground/70 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#apply"
            onClick={() => setOpen(false)}
            className={`${buttonBase} bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-3 w-full`}
          >
            Apply Now
          </a>
        </div>
      )}
    </nav>
  )
}
