"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

const SERVICE_OPTIONS = [
  { value: "", label: "Selectează un serviciu" },
  { value: "epilare", label: "Epilare definitivă laser" },
  { value: "facial", label: "Tratamente faciale" },
  { value: "manichiura", label: "Manichiură / Pedichiură" },
  { value: "coafor", label: "Coafor" },
  { value: "machiaj", label: "Machiaj profesional" },
  { value: "remodelare", label: "Remodelare corporală" },
];

export function ContactSection() {
  const c = site.contact;
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    window.setTimeout(() => {
      setSent(false);
      e.currentTarget.reset();
    }, 3200);
  }

  return (
    <section id="contact" className="bg-cream py-24 md:py-28" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-content px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">Contact</p>
          </Reveal>
          <Reveal>
            <h2
              id="contact-heading"
              className="font-display text-3xl font-semibold text-charcoal md:text-4xl"
            >
              Programează-te acum
            </h2>
          </Reveal>
          <Reveal>
            <p className="mt-4 text-balance text-gray-salon leading-relaxed">
              Suntem aici pentru tine! Contactează-ne prin telefon, WhatsApp sau completează formularul
              de mai jos.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <Reveal>
              <div className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-rose shadow-sm">
                  <PinIcon />
                </span>
                <div>
                  <h3 className="font-sans text-sm font-semibold text-charcoal">Adresă</h3>
                  <p className="mt-1 text-sm text-gray-salon">
                    {c.addressLine1}
                    <br />
                    {c.addressLine2}
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-rose shadow-sm">
                  <PhoneIcon />
                </span>
                <div>
                  <h3 className="font-sans text-sm font-semibold text-charcoal">Telefon</h3>
                  {c.phones.map((p) => (
                    <p key={p.number} className="mt-1 text-sm">
                      <a href={`tel:${p.number}`} className="font-medium text-rose hover:text-rose-deep">
                        {p.display}
                      </a>
                      {p.label && (
                        <span className="text-gray-salon"> ({p.label})</span>
                      )}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-rose shadow-sm">
                  <MailIcon />
                </span>
                <div>
                  <h3 className="font-sans text-sm font-semibold text-charcoal">Email</h3>
                  <p className="mt-1 text-sm">
                    <a href={`mailto:${c.email}`} className="font-medium text-rose hover:text-rose-deep">
                      {c.email}
                    </a>
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-rose shadow-sm">
                  <ClockIcon />
                </span>
                <div>
                  <h3 className="font-sans text-sm font-semibold text-charcoal">Program</h3>
                  <p className="mt-1 whitespace-pre-line text-sm leading-relaxed text-gray-salon">
                    {c.hours.weekdays}
                    <br />
                    {c.hours.saturday}
                    <br />
                    {c.hours.sunday}
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-rose shadow-sm">
                  <ShareIcon />
                </span>
                <div>
                  <h3 className="font-sans text-sm font-semibold text-charcoal">Social media</h3>
                  <p className="mt-2 text-sm">
                    <a
                      href={c.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-rose hover:text-rose-deep"
                    >
                      Facebook
                    </a>
                    {" · "}
                    <a
                      href={c.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-rose hover:text-rose-deep"
                    >
                      Instagram
                    </a>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="rounded-2xl bg-white p-8 shadow-salon md:p-12">
              <h3 className="font-display text-xl font-semibold text-charcoal">Trimite-ne un mesaj</h3>
              <p className="mt-2 text-sm text-gray-salon">
                Completează formularul și te contactăm noi în cel mai scurt timp.
              </p>
              <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-xs font-semibold text-charcoal-light">
                      Nume complet
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      placeholder="Numele tău"
                      className="min-h-12 w-full rounded-lg border border-cream-dark bg-cream px-4 text-sm outline-none transition focus:border-rose focus:bg-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold text-charcoal-light">
                      Telefon
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="07XX XXX XXX"
                      className="min-h-12 w-full rounded-lg border border-cream-dark bg-cream px-4 text-sm outline-none transition focus:border-rose focus:bg-white"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-charcoal-light">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="email@exemplu.ro"
                    className="min-h-12 w-full rounded-lg border border-cream-dark bg-cream px-4 text-sm outline-none transition focus:border-rose focus:bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="mb-1.5 block text-xs font-semibold text-charcoal-light">
                    Serviciu dorit
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="min-h-12 w-full rounded-lg border border-cream-dark bg-cream px-4 text-sm outline-none transition focus:border-rose focus:bg-white"
                    defaultValue=""
                  >
                    {SERVICE_OPTIONS.map((o) => (
                      <option key={o.value || "empty"} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-xs font-semibold text-charcoal-light">
                    Mesaj
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Scrie-ne ce te interesează..."
                    className="w-full rounded-lg border border-cream-dark bg-cream px-4 py-3 text-sm outline-none transition focus:border-rose focus:bg-white"
                  />
                </div>
                <button
                  type="submit"
                  disabled={sent}
                  className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-rose text-sm font-semibold text-white transition hover:bg-rose-deep disabled:bg-gold"
                >
                  {sent ? "Mesaj trimis cu succes ✓" : "Trimite mesajul"}
                </button>
              </form>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-14 overflow-hidden rounded-2xl shadow-salon">
            <iframe
              title="Locația Halo Beauty Salon pe hartă"
              src={c.mapEmbedUrl}
              className="h-[400px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
    </svg>
  );
}
