import { SmoothScroll } from "@/components/SmoothScroll";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactSection } from "@/components/ContactSection";
import { GallerySection } from "@/components/GallerySection";
import { FloatingButtons } from "@/components/FloatingButtons";
import { SiteHeader } from "@/components/SiteHeader";
import { PageHero } from "@/components/PageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galerie Foto | Halo Beauty Salon",
  description: "Vezi portofoliul nostru și rezultatele procedurilor estetice. Galerie cu imagini realizate de profesioniștii noștri în Iași.",
};

export default function GaleriePage() {
  return (
    <>
      <FloatingButtons />
      <SiteHeader />
      <SmoothScroll>
        <main className="min-h-screen bg-cream">
          <PageHero 
            label="Portofoliu"
            title="Rezultatele vorbesc de la sine."
            description="O imagine face cât o mie de cuvinte. Explorează munca noastră."
          />
          <GallerySection hideHeader={true} />
          <ContactSection />
        </main>
        <SiteFooter />
      </SmoothScroll>
    </>
  );
}
