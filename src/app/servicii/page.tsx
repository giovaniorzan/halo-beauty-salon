import { SmoothScroll } from "@/components/SmoothScroll";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactSection } from "@/components/ContactSection";
import { ServicesSection } from "@/components/ServicesSection";
import { FloatingButtons } from "@/components/FloatingButtons";
import { SiteHeader } from "@/components/SiteHeader";
import { PageHero } from "@/components/PageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicii Premium de Înfrumusețare | Halo Beauty Salon",
  description: "Tratamente faciale, epilare definitivă, remodelare corporală, machiaj profesional, manichiură și coafor. Te așteptăm în Iași.",
};

export default function ServiciiPage() {
  return (
    <>
      <FloatingButtons />
      <SiteHeader />
      <SmoothScroll>
        <main className="min-h-screen bg-cream">
          <PageHero 
            label="Meniul de Servicii"
            title="Sute de cliente ne calcă pragul lunar."
            description="Lasă-te pe mâna profesioniștilor noștri."
          />
          <ServicesSection hideHeader={true} />
          <ContactSection />
        </main>
        <SiteFooter />
      </SmoothScroll>
    </>
  );
}
