export default function Footer() {
  return (
    <footer className="py-12 bg-secondary text-secondary-foreground">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <div>
            <p className="font-semibold">
              <span className="text-primary">ATA</span> Builders
            </p>
            <p className="text-secondary-foreground/60">Digital Systems & AI Lab</p>
          </div>
          <p className="text-secondary-foreground/60">
            Akademia Techniczno-Artystyczna w Warszawie
          </p>
        </div>
      </div>
    </footer>
  )
}
