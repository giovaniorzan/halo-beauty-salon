"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { servicesContent, pricingContent } from "@/lib/site";

export function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "";
      setQuery("");
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Build searchable index
  const searchableIndex = useMemo(() => {
    const index: Array<{ id: string; title: string; subtitle: string; href: string; badge?: string }> = [];

    // Add Services
    servicesContent.services.forEach((s) => {
      index.push({
        id: `s-${s.id}`,
        title: s.title,
        subtitle: s.description,
        href: `/servicii`, // Or specific SEO page if we had precise mapping
        badge: "Serviciu",
      });
    });

    // Add Pricing Items
    pricingContent.groups.forEach((g) => {
      g.items.forEach((item, i) => {
        index.push({
          id: `p-${g.id}-${i}`,
          title: item.name,
          subtitle: item.price,
          href: `/preturi`, // Or specific SEO page
          badge: "Listă Prețuri",
        });
      });
    });

    // Add Main Layout Pages
    index.push({ id: "page-1", title: "Acasă", subtitle: "Revenire la pagina principală", href: "/", badge: "Pagină" });
    index.push({ id: "page-2", title: "Galerie", subtitle: "Portofoliul nostru vizual", href: "/galerie", badge: "Pagină" });
    index.push({ id: "page-3", title: "Contact", subtitle: "Informații și locație", href: "/#contact", badge: "Pagină" });

    return index;
  }, []);

  const results = useMemo(() => {
    if (query.trim().length < 2) return [];
    const q = query.toLowerCase();
    return searchableIndex.filter((item) => 
      item.title.toLowerCase().includes(q) || 
      item.subtitle.toLowerCase().includes(q)
    ).slice(0, 10); // Limit to top 10 results
  }, [query, searchableIndex]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex flex-col bg-charcoal/40 backdrop-blur-md p-4 sm:p-6 md:p-12 transition-opacity">
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />
      
      <div 
        className="relative mx-auto w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        style={{ maxHeight: "80vh" }}
        role="dialog"
        aria-modal="true"
        aria-label="Căutare Globală"
      >
        <div className="flex items-center border-b border-cream/50 px-6 py-4">
          <svg className="w-6 h-6 text-gold mr-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            className="w-full bg-transparent text-xl text-charcoal placeholder-gray-salon/50 outline-none"
            placeholder="Caută terapii, pachete, epilare..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button 
            onClick={onClose}
            className="ml-4 p-2 text-gray-salon hover:text-charcoal transition-colors shrink-0 bg-cream/50 rounded-full"
            aria-label="Închide căutarea"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="overflow-y-auto flex-1 bg-[#fdfaf7] px-6 py-4">
          {query.trim().length > 0 && query.trim().length < 2 && (
            <p className="text-center text-sm text-gray-salon my-8">Te rugăm să introduci cel puțin 2 caractere.</p>
          )}

          {query.trim().length >= 2 && results.length === 0 && (
            <div className="text-center my-12">
              <p className="text-lg text-charcoal font-medium">Nu am găsit rezultate pentru "{query}"</p>
              <p className="text-sm text-gray-salon mt-2">Încearcă alte cuvinte cheie (ex: epilare, masaj, unghii)</p>
            </div>
          )}

          {results.length > 0 && (
            <ul className="space-y-3">
              {results.map((result) => (
                <li key={result.id}>
                  <Link 
                    href={result.href}
                    onClick={onClose}
                    className="group block rounded-xl bg-white p-4 transition-all hover:bg-gold/5 border border-transparent hover:border-gold/20 shadow-sm hover:shadow-md"
                  >
                    <div className="flex justify-between items-center">
                      <div className="pr-4">
                        <h4 className="font-display font-medium text-charcoal group-hover:text-rose transition-colors">{result.title}</h4>
                        <p className="text-xs text-gray-salon mt-1 line-clamp-1">{result.subtitle}</p>
                      </div>
                      <span className="shrink-0 rounded-full bg-cream px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-charcoal/60">
                        {result.badge}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
          
          {query.trim().length === 0 && (
            <div className="py-8">
              <p className="text-xs font-bold uppercase tracking-wider text-charcoal/40 mb-4">Sugestii populare</p>
              <div className="flex flex-wrap gap-2">
                {["Epilare Laser", "Laminare", "Hifu", "Oferte", "Dermapen"].map((term) => (
                  <button 
                    key={term} 
                    onClick={() => setQuery(term)}
                    className="rounded-full bg-white px-4 py-2 text-sm text-gray-salon border border-cream hover:border-gold/30 hover:text-charcoal transition-all shadow-sm"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
