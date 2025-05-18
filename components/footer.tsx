"use client"

import { Logo } from "@/components/logo"
import { useLanguage } from "@/hooks/use-language"
import Link from "next/link"
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react"

export function Footer() {
  const { content } = useLanguage()
  
  const sections = [
    { id: "home", name: content?.navbar?.home },
    { id: "products", name: content?.navbar?.products },
    { id: "technologies", name: content?.navbar?.technologies },
    { id: "projects", name: content?.navbar?.projects },
    { id: "clients", name: content?.navbar?.clients },
    { id: "contact", name: content?.navbar?.contact },
  ]

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
  ]

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth"
      })
    }
  }

  return (
    <footer className="bg-muted/30 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 */}
          <div>
            <Logo className="mb-4" />
            <p className="text-muted-foreground mb-4">
              {content?.footer?.about}
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{content?.footer?.quickLinks}</h3>
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {section.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{content?.footer?.contact}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={18} />
                <span>{content?.contact?.info?.address}</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail size={18} />
                <a 
                  href={`mailto:${content?.contact?.info?.email}`}
                  className="hover:text-foreground transition-colors"
                >
                  {content?.contact?.info?.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone size={18} />
                <a 
                  href={`tel:${content?.contact?.info?.phone}`}
                  className="hover:text-foreground transition-colors"
                >
                  {content?.contact?.info?.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{content?.footer?.social}</h3>
            <div className="flex gap-3">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="bg-primary/10 hover:bg-primary/20 p-2 rounded-full transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t pt-6 text-center text-muted-foreground">
          <p>{content?.footer?.copyright}</p>
        </div>
      </div>
    </footer>
  )
}