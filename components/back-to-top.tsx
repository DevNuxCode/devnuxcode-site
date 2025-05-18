"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { cn } from "@/lib/utils"

export function BackToTop() {
  const [show, setShow] = useState(false)
  const { content } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShow(true)
      } else {
        setShow(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <Button
      className={cn(
        "fixed bottom-4 right-4 z-50 rounded-full p-3 transition-all duration-300 shadow-lg",
        show ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      )}
      onClick={scrollToTop}
      size="icon"
      aria-label={content?.buttons?.backToTop}
    >
      <ArrowUp size={20} />
      <span className="sr-only">{content?.buttons?.backToTop}</span>
    </Button>
  )
}