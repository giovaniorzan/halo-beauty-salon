import { SmoothScroll } from "@/components/SmoothScroll";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactSection } from "@/components/ContactSection";
import { PricingSection } from "@/components/PricingSection";
import { FloatingButtons } from "@/components/FloatingButtons";
import { SiteHeader } from "@/components/SiteHeader";
import { PageHero } from "@/components/PageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lista de Prețuri | Halo Beauty Salon",
  description: "Descoperă lista noastră completă de prețuri pentru epilare cu laser, tratamente faciale, machiaj, manichiură și coafor.",
};

export default function PreturiPage() {
  return (
    <>
      <FloatingButtons />
      <SiteHeader />
      <SmoothScroll>
        <main className="min-h-screen bg-cream">
          <PageHero 
            label="Transparență"
            title="Găsește Pachetul Potrivit Pentru Tine."
            description="Transparență 100%. Calitate demonstrată."
          />
          <PricingSection hideHeader={true} />
          <ContactSection />
        </main>
        <SiteFooter />
      </SmoothScroll>
    </>
  );
}
