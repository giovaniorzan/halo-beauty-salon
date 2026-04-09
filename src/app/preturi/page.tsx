import { SmoothScroll } from "@/components/SmoothScroll";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactSection } from "@/components/ContactSection";
import { PricingSection } from "@/components/PricingSection";
import { FloatingButtons } from "@/components/FloatingButtons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lista de Prețuri | Halo Beauty Salon",
  description: "Descoperă lista noastră completă de prețuri pentru epilare cu laser, tratamente faciale, machiaj, manichiură și coafor.",
};

export default function PreturiPage() {
  return (
    <>
      <FloatingButtons />
      <SmoothScroll>
        <main className="min-h-screen bg-cream pt-20">
          <PricingSection />
          <ContactSection />
        </main>
        <SiteFooter />
      </SmoothScroll>
    </>
  );
}
