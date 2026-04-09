import { SiteHeader } from "@/components/SiteHeader";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSummary } from "@/components/ServicesSummary";
import { PricingSummary } from "@/components/PricingSummary";
import { GallerySummary } from "@/components/GallerySummary";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingButtons } from "@/components/FloatingButtons";
import { SmoothScroll } from "@/components/SmoothScroll";
import { TechnologySection } from "@/components/TechnologySection";
import { VoucherSection } from "@/components/VoucherSection";

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
      <SmoothScroll>
        <main id="main">
          <HeroSection />
          <AboutSection />
          <ServicesSummary />
          <TechnologySection />
          <PricingSummary />
          <GallerySummary />
          <TestimonialsSection />
          <VoucherSection />
          <ContactSection />
        </main>
        <SiteFooter />
      </SmoothScroll>
      <FloatingButtons />
    </>
  );
}
