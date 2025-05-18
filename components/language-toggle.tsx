"use client"

import { useLanguage } from "@/hooks/use-language"
import { Button } from "@/components/ui/button"
import { GlobeIcon } from "lucide-react"

export function LanguageToggle() {
  const { language, setLanguage, content } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en")
  }

  return (
    <Button 
      variant="ghost" 
      size="icon"
      onClick={toggleLanguage}
      aria-label={`Switch to ${language === "en" ? "Spanish" : "English"}`}
    >
      <span className="sr-only">Toggle language</span>
      <div className="flex items-center">
        <GlobeIcon className="h-[1.2rem] w-[1.2rem]" />
        <span className="ml-1 text-sm font-medium">{language.toUpperCase()}</span>
      </div>
    </Button>
  )
}