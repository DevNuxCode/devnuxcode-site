"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/hooks/use-language"
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { toast } from "sonner"

export function ContactSection() {
  const { content } = useLanguage()
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [plan, setPlan] = useState("")
  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    // Check if there's a selected plan from localStorage
    const selectedPlan = localStorage.getItem("selectedPlan")
    if (selectedPlan) {
      setPlan(selectedPlan)
      // Clear the selected plan from localStorage
      localStorage.removeItem("selectedPlan")
    }
  }, [])

  useEffect(() => {
    // Validate form
    setIsFormValid(
      name.trim() !== "" && 
      phone.trim() !== "" && 
      email.trim() !== "" && 
      plan !== ""
    )
  }, [name, phone, email, plan])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!isFormValid) {
      toast.error("Please fill in all fields")
      return
    }

    // Get the plan name based on the selected plan id
    let planName = ""
    if (content?.products?.plans) {
      const selectedPlan = content.products.plans.find(p => p.id === plan)
      if (selectedPlan) {
        planName = selectedPlan.name
      }
    }

    // Prepare the WhatsApp message
    const message = `Nombre: ${name}%0ATeléfono: ${phone}%0AEmail: ${email}%0APlan: ${planName}`
    const whatsappUrl = `https://wa.me/${content?.contact?.info?.phone.replace(/\+/g, '')}?text=${message}`

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank")

    // Reset form
    setName("")
    setPhone("")
    setEmail("")
    setPlan("")

    // Show toast
    toast.success("Message sent successfully")
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content?.contact?.title}
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {content?.contact?.description}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>{content?.contact?.title}</CardTitle>
                <CardDescription>{content?.contact?.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{content?.contact?.form?.name}</Label>
                    <Input 
                      id="name" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">{content?.contact?.form?.phone}</Label>
                    <Input 
                      id="phone" 
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">{content?.contact?.form?.email}</Label>
                    <Input 
                      id="email" 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="plan">{content?.contact?.form?.plan}</Label>
                    <Select 
                      value={plan}
                      onValueChange={setPlan}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder={content?.contact?.form?.planOptions[0]} />
                      </SelectTrigger>
                      <SelectContent>
                        {content?.products?.plans.map((p) => (
                          <SelectItem key={p.id} value={p.id}>
                            {p.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={!isFormValid}
                  >
                    {content?.contact?.form?.submit}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center"
          >
            <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148469805!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sus!4v1623501891756!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="DevNuxCode location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}