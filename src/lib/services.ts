export const servicePages = {
  "epilare-definitiva-iasi": {
    title: "Epilare Definitivă Laser cu Elysion Pro în Iași",
    description: "Una dintre cele mai căutate proceduri este epilarea definitivă cu laser. Halo Beauty Salon utilizează aparatul profesional Elysion Pro, oferind rezultate vizibile pe termen lung pentru o piele fină.",
    pricingGroupId: "epilare-laser-femei",
  },
  "remodelare-corporala-iasi": {
    title: "Remodelare Corporală cu Icoone Laser Med",
    description: "Scapă de celulită și obține silueta dorită cu tratamentele de remodelare corporală de succes folosind inovația Icoone Laser.",
    pricingGroupId: "remodelare-corporala",
  },
  "tratamente-faciale-iasi": {
    title: "Tratamente Faciale pentru un Ten Perfect",
    description: "Tratamente faciale (antirid, hidratare, masaj facial, peeling) pentru o piele netedă și luminoasă, folosind tehnologii de top precum Intraceuticals și Dermapen.",
    pricingGroupId: "tratamente-faciale",
  },
  "cosmetica-iasi": {
    title: "Cosmetică și Epilare Clasică",
    description: "Servicii de cosmetică și epilare cu ceară pentru o piele impecabilă, realizate într-un mediu steril și relaxant.",
    pricingGroupId: "epilare-ceara",
  },
  "manichiura-iasi": {
    title: "Manichiură și Pedichiură Premium",
    description: "Servicii de manichiură și pedichiură (semipermanentă, construcție gel) pentru unghii sănătoase și un aspect impecabil de durată.",
    pricingGroupId: "manichiura",
  },
  "machiaj-profesional-iasi": {
    title: "Machiaj Profesional",
    description: "Machiaj de zi, de seară sau machiaj special de mireasă. Artiștii noștri îți vor pune în valoare trăsăturile folosind produse de lux.",
    pricingGroupId: "machiaj",
  },
  "coafor-iasi-copou": {
    title: "Coafor și Styling în Copou, Iași",
    description: "Transformă-ți look-ul cu servicii profesionale de coafor: vopsit, tuns și coafuri speciale pentru evenimente, realizate de experții noștri.",
    pricingGroupId: "machiaj", // Reusing this since coafor pricing isn't separate in JSON but in machiaj or general. Wait, we should probably add it.
  }
};

export type ServiceSlug = keyof typeof servicePages;

export function getServiceData(slug: string) {
  return servicePages[slug as ServiceSlug];
}
