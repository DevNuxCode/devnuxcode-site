"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useLanguage } from "@/hooks/use-language"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const { content } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const sections = [
    { id: "home", name: content?.navbar?.home },
    { id: "products", name: content?.navbar?.products },
    { id: "technologies", name: content?.navbar?.technologies },
    { id: "projects", name: content?.navbar?.projects },
    { id: "clients", name: content?.navbar?.clients },
    { id: "contact", name: content?.navbar?.contact },
  ]

  const scrollToSection = (id: string) => {
    closeMenu()
    
    const section = document.getElementById(id)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth"
      })
    }
  }

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className="text-foreground/70 hover:text-foreground transition-colors"
                >
                  {section.name}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu} 
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-x-0 top-[72px] bg-background/95 backdrop-blur-lg border-b py-6 px-6 shadow-lg md:hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col gap-6">
          <ul className="flex flex-col gap-4">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className="text-foreground/70 hover:text-foreground transition-colors text-lg"
                >
                  {section.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}