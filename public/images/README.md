# Imagini site — Halo Beauty Salon

Pune aici fișierele tale locale. În `content/site.json`, `content/gallery.json` poți folosi căi de forma `/images/...`.

## Structură recomandată

| Folder | Rol |
|--------|-----|
| `hero/` | Imagine mare pentru secțiunea hero (ex. `salon-hero.jpg`) |
| `about/` | Poză pentru „Despre noi” (ex. `salon-interior.jpg`) |
| `gallery/` | Poze portofoliu (ex. `01.jpg`, `02.jpg`) |
| `uploads/` | Fișiere încărcate prin Decap CMS (dacă folosești admin-ul) |

## Formate

Preferat: **WebP** sau **JPEG** optimizat, lățime rezonabilă (ex. 1600–2400px pentru hero).

## După ce adaugi fișiere

1. Actualizează URL-urile în `content/site.json` (câmpurile `heroImage`, `about.image`) sau în `content/gallery.json` (`src` pentru fiecare element).
2. Pentru imagini locale, `src` arată astfel: `/images/gallery/poza-mea.jpg` (fără `public` în cale).

Remote (ex. Unsplash) funcționează deja — domeniul trebuie să fie în `next.config.ts` la `images.remotePatterns`.
