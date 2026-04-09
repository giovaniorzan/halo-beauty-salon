import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FloatingButtons } from "@/components/FloatingButtons";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ContactSection } from "@/components/ContactSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recenzii | Halo Beauty Salon",
  description: "Părerile clienților noștri.",
};

export default function RecenziiPage() {
  return (
    <>
      <FloatingButtons />
      <SiteHeader />
      <SmoothScroll>
        <main className="min-h-screen bg-cream">
          <PageHero 
            label="Recenzii 100% Reale"
            title="Ce spun clienții noștri"
            description="Mii de zâmbete readuse și rezultate de excepție. O selecție a gândurilor lor."
          />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <SiteFooter />
      </SmoothScroll>
    </>
  );
}
