export default function Footer() {
  return (
    <footer className="py-12 bg-secondary text-secondary-foreground">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-center sm:text-left">
          <div>
            <p className="font-semibold">
              <span className="text-primary">ATA</span> Builders Lab
            </p>
            <p className="text-secondary-foreground/60">
              Agentic systems · RAG · LLM evaluation
            </p>
          </div>
          <p className="text-secondary-foreground/60">
            Akademia Techniczno-Artystyczna w Warszawie
          </p>
        </div>
      </div>
    </footer>
  )
}
