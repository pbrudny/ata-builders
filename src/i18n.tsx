import { createContext, useContext, useEffect, useState } from "react"
import { content, type Content, type Lang } from "./content"

const STORAGE_KEY = "lang"

function initialLang(): Lang {
  const fromUrl = new URLSearchParams(window.location.search).get("lang")
  if (fromUrl === "pl" || fromUrl === "en") return fromUrl
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === "pl" || saved === "en") return saved
  } catch {
    // storage blocked: fall through
  }
  return navigator.language?.toLowerCase().startsWith("pl") ? "pl" : "en"
}

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void; c: Content }>({
  lang: "en",
  setLang: () => {},
  c: content.en,
})

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang)
  const c = content[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = c.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute("content", c.meta.description)
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // ignore
    }
  }, [lang, c])

  return <LangContext.Provider value={{ lang, setLang, c }}>{children}</LangContext.Provider>
}

export const useLang = () => useContext(LangContext)
