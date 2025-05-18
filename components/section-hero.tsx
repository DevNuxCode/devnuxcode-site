"use client"

import { useLanguage } from "@/hooks/use-language"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export function HeroSection() {
  const { content } = useLanguage()

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: "smooth"
      })
    }
  }

  const scrollToNextSection = () => {
    const productsSection = document.getElementById("products")
    if (productsSection) {
      window.scrollTo({
        top: productsSection.offsetTop - 80,
        behavior: "smooth"
      })
    }
  }

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-background"
    >
      <div className="container px-4 py-24 md:py-32">
        <div className="flex flex-col lg:flex-row items-center max-w-6xl mx-auto">
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-700 dark:from-blue-400 dark:to-violet-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {content?.hero?.title}
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {content?.hero?.subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button 
                size="lg" 
                className="rounded-full px-8"
                onClick={scrollToContact}
              >
                {content?.hero?.cta}
              </Button>
            </motion.div>
          </div>
          <div className="lg:w-1/2">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-full h-full absolute -left-4 -top-4 bg-blue-500/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Software Development" 
                className="rounded-3xl shadow-xl relative z-10 w-full"
              />
              <div className="absolute -right-2 -bottom-2 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl"></div>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full animate-bounce" 
            onClick={scrollToNextSection}
            aria-label="Scroll to next section"
          >
            <ChevronDown size={24} />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}