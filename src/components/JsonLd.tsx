import { getSiteUrl, site } from "@/lib/site";

export function JsonLdLocalBusiness() {
  const base = getSiteUrl();
  const c = site.contact;
  const raw = c.phones[0]?.number.replace(/\s/g, "") ?? "";
  const telephone = raw.startsWith("0") ? `+40${raw.slice(1)}` : raw ? `+${raw}` : "";

  const data = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: site.siteName,
    description:
      "Salon de înfrumusețare în Iași: epilare definitivă laser, tratamente faciale, manichiură, coafor și machiaj profesional.",
    url: base,
    ...(telephone ? { telephone } : {}),
    email: c.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: c.addressLine1,
      addressLocality: "Iași",
      addressCountry: "RO",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "09:00",
        closes: "14:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "17:00",
      },
    ],
    sameAs: [c.social.facebook, c.social.instagram].filter(Boolean),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
