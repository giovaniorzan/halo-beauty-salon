import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

const NAV = [
  { href: "/", label: "Acasă" },
  { href: "/despre", label: "Despre noi" },
  { href: "/servicii", label: "Servicii" },
  { href: "/preturi", label: "Prețuri" },
  { href: "/galerie", label: "Galerie" },
  { href: "/recenzii", label: "Recenzii" },
  { href: "/contact", label: "Contact" },
];

const SERVICES = [
  { href: "/epilare-definitiva-iasi", label: "Epilare definitivă" },
  { href: "/tratamente-faciale-iasi", label: "Tratamente faciale" },
  { href: "/manichiura-iasi", label: "Manichiură / Pedichiură" },
  { href: "/coafor-iasi-copou", label: "Coafor" },
  { href: "/machiaj-profesional-iasi", label: "Machiaj Profesional" },
  { href: "/remodelare-corporala-iasi", label: "Remodelare corporală" },
];

export function SiteFooter() {
  const c = site.contact;
  const mainPhone = c.phones[0];

  return (
    <footer className="bg-charcoal pt-20 text-white">
      <div className="mx-auto max-w-content px-6 pb-0">
        <div className="grid gap-12 border-b border-white/10 pb-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex">
              <Image
                src="/images/logo.svg"
                alt="Halo Beauty Salon — logo"
                width={560}
                height={145}
                unoptimized
                className="h-28 w-auto max-w-[min(100%,560px)] object-contain object-left brightness-0 invert opacity-95 transition-opacity hover:opacity-100 sm:h-32 md:h-36 lg:h-40"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Salonul tău de înfrumusețare premium din Iași. Frumusețe, eleganță și profesionalism într-un
              ambient luxos în zona Copou.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={c.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white/70 transition hover:bg-rose hover:text-white"
                aria-label="Facebook"
              >
                <FbIcon />
              </a>
              <a
                href={c.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white/70 transition hover:bg-rose hover:text-white"
                aria-label="Instagram"
              >
                <IgIcon />
              </a>
              <a
                href={`https://wa.me/${c.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white/70 transition hover:bg-rose hover:text-white"
                aria-label="WhatsApp"
              >
                <WaIcon />
              </a>
            </div>
          </div>

          <div>
            <h2 className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-light">
              Navigare
            </h2>
            <nav className="mt-6 flex flex-col gap-2 font-nav" aria-label="Footer">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-normal tracking-wide text-white/60 transition hover:translate-x-1 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-light">
              Servicii
            </h2>
            <ul className="mt-6 flex flex-col gap-2 font-nav">
              {SERVICES.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="text-sm font-normal tracking-wide text-white/60 transition hover:translate-x-1 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-light">
              Contact
            </h2>
            <ul className="mt-6 space-y-4 text-sm text-white/60">
              <li className="flex gap-2">
                <PinSm />
                <span>
                  {c.addressLine1}, {c.addressLine2}
                </span>
              </li>
              <li className="flex gap-2">
                <PhoneSm />
                <a href={`tel:${mainPhone?.number}`} className="hover:text-white">
                  {mainPhone?.display}
                </a>
              </li>
              <li className="flex gap-2">
                <MailSm />
                <a href={`mailto:${c.email}`} className="hover:text-white">
                  {c.email}
                </a>
              </li>
              <li className="flex gap-2">
                <ClockSm />
                <span className="whitespace-pre-line">
                  {c.hours.weekdays}
                  <br />
                  {c.hours.headerShort}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <p className="text-center text-xs text-white/40 md:text-left">
            © {new Date().getFullYear()} {site.siteName}. Toate drepturile rezervate. Creat cu dragoste în Iași.
          </p>
          
          <a
            href="https://www.nazrox.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group font-sans inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-[14px] font-medium text-[#a1a1aa] no-underline transition-all duration-300 ease-in-out hover:text-[#ffffff]"
          >
            Built by{" "}
            <span className="flex items-center gap-1 font-bold text-[#ffffff]">
              nazro<span className="text-[#22d3ee]">X</span>
              <img
                src="https://www.nazrox.com/nazrox_logo.svg"
                alt="Nazrox Logo"
                className="h-6 w-6 object-contain transition-all duration-300 ease-in-out group-hover:-translate-y-[2px] group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]"
              />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

function FbIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

function IgIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
    </svg>
  );
}

function WaIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function PinSm() {
  return (
    <svg className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneSm() {
  return (
    <svg className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function MailSm() {
  return (
    <svg className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  );
}

function ClockSm() {
  return (
    <svg className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}
