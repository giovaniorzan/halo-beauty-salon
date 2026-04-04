import siteData from "../../content/site.json";
import servicesData from "../../content/services.json";
import galleryData from "../../content/gallery.json";
import testimonialsData from "../../content/testimonials.json";
import pricingData from "../../content/pricing.json";

export const site = siteData;
export const servicesContent = servicesData;
export const galleryContent = galleryData;
export const testimonialsContent = testimonialsData;
export const pricingContent = pricingData;

export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL ?? site.siteUrl;
}
