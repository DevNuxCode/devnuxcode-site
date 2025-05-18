import { BackToTop } from "@/components/back-to-top"
import { ClientsSection } from "@/components/section-clients"
import { ContactSection } from "@/components/section-contact"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/section-hero"
import { Navbar } from "@/components/navbar"
import { ProductsSection } from "@/components/section-products"
import { ProjectsSection } from "@/components/section-projects"
import { TechnologiesSection } from "@/components/section-technologies"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <TechnologiesSection />
      <ProjectsSection />
      <ClientsSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </main>
  );
}