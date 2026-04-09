import { SmoothScroll } from "@/components/SmoothScroll";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactSection } from "@/components/ContactSection";
import { GallerySection } from "@/components/GallerySection";
import { FloatingButtons } from "@/components/FloatingButtons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galerie Foto | Halo Beauty Salon",
  description: "Vezi portofoliul nostru și rezultatele procedurilor estetice. Galerie cu imagini realizate de profesioniștii noștri în Iași.",
};

export default function GaleriePage() {
  return (
    <>
      <FloatingButtons />
      <SmoothScroll>
        <main className="min-h-screen bg-cream pt-20">
          <GallerySection />
          <ContactSection />
        </main>
        <SiteFooter />
      </SmoothScroll>
    </>
  );
}
