import { SiteHeader } from "@/components/SiteHeader";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PricingSection } from "@/components/PricingSection";
import { GallerySection } from "@/components/GallerySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingButtons } from "@/components/FloatingButtons";

export default function HomePage() {
  return (
    <>
      <a
        href="#acasa"
        className="fixed left-4 top-2 z-[2001] -translate-y-20 rounded-lg bg-rose px-4 py-2 text-sm font-medium text-white shadow transition focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-gold"
      >
        Sari la conținut
      </a>
      <SiteHeader />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PricingSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <FloatingButtons />
    </>
  );
}
