/**
 * Extrage durata din formatul „preț / N min” de la sfârșitul stringului.
 * Rânduri fără acest pattern (ex. pachete laser) rămân integral în `amount`.
 */
export function parseServicePrice(price: string): { amount: string; duration?: string } {
  const t = price.trim();
  const durationRe = /\s*\/\s*(\d+(?:\/\d+)?\s*min)\s*$/i;
  const m = t.match(durationRe);
  if (m && m.index !== undefined && m.index > 0) {
    return {
      amount: t.slice(0, m.index).trim(),
      duration: m[1].trim(),
    };
  }
  return { amount: t };
}
