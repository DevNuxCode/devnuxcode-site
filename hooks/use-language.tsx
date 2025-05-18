"use client"

import { createContext, useContext, useEffect, useState } from "react"
import data from "@/lib/data.json"

type Language = "en" | "es"
type Content = typeof data.en

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  content: Content | null
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  content: null,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [content, setContent] = useState<Content | null>(null)

  useEffect(() => {
    // Check for stored language preference
    const storedLanguage = localStorage.getItem("language") as Language | null
    if (storedLanguage) {
      setLanguage(storedLanguage)
    } else {
      // Get browser language
      const browserLanguage = navigator.language.split('-')[0]
      if (browserLanguage === "es") {
        setLanguage("es")
      }
    }
  }, [])

  useEffect(() => {
    if (language) {
      localStorage.setItem("language", language)
      setContent(data[language] as Content)
    }
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, content }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)