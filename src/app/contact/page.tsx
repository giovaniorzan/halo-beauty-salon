import { ContactSection } from "@/components/ContactSection";
import { FloatingButtons } from "@/components/FloatingButtons";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Programări | Halo Beauty Salon",
  description: "Programează-te la Halo Beauty Salon Iași. Date de contact, locație și formular de rezervare.",
};

export default function ContactPage() {
  return (
    <>
      <FloatingButtons />
      <SiteHeader />
      <SmoothScroll>
        <main className="min-h-screen bg-cream">
          <PageHero 
            label="Programează-te"
            title="Ești la un click distanță de o schimbare"
            description="Lasă-ne un mesaj, vizitează-ne sau sună-ne. Vom răspunde cu prioritate."
          />
          <ContactSection />
        </main>
        <SiteFooter />
      </SmoothScroll>
    </>
  );
}
