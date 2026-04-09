import { AboutSection } from "@/components/AboutSection";
import { FloatingButtons } from "@/components/FloatingButtons";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ContactSection } from "@/components/ContactSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Despre Noi | Halo Beauty Salon",
  description: "Află povestea Halo Beauty Salon, viziunea noastră și expertiza din spatele serviciilor de frumusețe din Iași.",
};

export default function DesprePage() {
  return (
    <>
      <FloatingButtons />
      <SiteHeader />
      <SmoothScroll>
        <main className="min-h-screen bg-cream">
          <PageHero 
            label="Povestea Noastră"
            title="Suntem redefiniția eleganței."
            description="Pasiune, excelență și dedicare la fiecare vizită."
          />
          <AboutSection />
          <ContactSection />
        </main>
        <SiteFooter />
      </SmoothScroll>
    </>
  );
}
