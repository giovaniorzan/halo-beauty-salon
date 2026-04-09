import { notFound } from "next/navigation";
import { getServiceData, servicePages } from "@/lib/services";
import { SmoothScroll } from "@/components/SmoothScroll";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactSection } from "@/components/ContactSection";
import { PricingSection } from "@/components/PricingSection";
import { Reveal } from "@/components/Reveal";
import { FloatingButtons } from "@/components/FloatingButtons";
import { Metadata } from "next";
import { site } from "@/lib/site";
import Link from "next/link";

type Props = {
  params: Promise<{ service: string }>;
};

export function generateStaticParams() {
  return Object.keys(servicePages).map((service) => ({
    service,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const data = getServiceData(resolvedParams.service);
  if (!data) return { title: "Not Found" };

  return {
    title: `${data.title} | ${site.siteName}`,
    description: data.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const resolvedParams = await params;
  const data = getServiceData(resolvedParams.service);

  if (!data) {
    notFound();
  }

  return (
    <>
      <FloatingButtons />
      <SmoothScroll>
        <main className="min-h-screen bg-cream">
          {/* SEO Hero Section */}
          <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden border-b border-gold/10">
            <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
            <div className="mx-auto max-w-content px-6 relative z-10 text-center">
              <Reveal>
                <Link href="/" className="inline-block mb-6 text-xs font-bold uppercase tracking-widest text-gold hover:text-rose transition-colors">
                  ← Înapoi la Acasă
                </Link>
              </Reveal>
              <Reveal>
                <h1 className="font-display text-4xl font-semibold text-charcoal md:text-5xl lg:text-6xl text-balance mx-auto max-w-4xl">
                  {data.title}
                </h1>
              </Reveal>
              <Reveal>
                <p className="mt-6 text-lg leading-relaxed text-gray-salon md:text-xl max-w-3xl mx-auto text-balance">
                  {data.description}
                </p>
              </Reveal>
              <Reveal>
                <a
                  href="#contact"
                  className="mt-10 inline-flex items-center justify-center rounded-full bg-rose px-8 py-3.5 text-sm font-semibold tracking-wide text-white transition-all shadow-salon hover:bg-rose-deep hover:-translate-y-0.5"
                >
                  Programează-te Acum
                </a>
              </Reveal>
            </div>
            
            {/* Background elements */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 h-96 w-96 rounded-full bg-peach/20 blur-[100px] pointer-events-none" aria-hidden />
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-96 w-96 rounded-full bg-gold/10 blur-[100px] pointer-events-none" aria-hidden />
          </section>

          {/* Pricing Section - we reuse it, but it functions perfectly here as well */}
          <PricingSection />
          
          <ContactSection />
        </main>
        <SiteFooter />
      </SmoothScroll>
    </>
  );
}
