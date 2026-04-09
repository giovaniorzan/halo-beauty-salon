import { SmoothScroll } from "@/components/SmoothScroll";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactSection } from "@/components/ContactSection";
import { ServicesSection } from "@/components/ServicesSection";
import { FloatingButtons } from "@/components/FloatingButtons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicii Premium de Înfrumusețare | Halo Beauty Salon",
  description: "Tratamente faciale, epilare definitivă, remodelare corporală, machiaj profesional, manichiură și coafor. Te așteptăm în Iași.",
};

export default function ServiciiPage() {
  return (
    <>
      <FloatingButtons />
      <SmoothScroll>
        <main className="min-h-screen bg-cream pt-20">
          <ServicesSection />
          <ContactSection />
        </main>
        <SiteFooter />
      </SmoothScroll>
    </>
  );
}
