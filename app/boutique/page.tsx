"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { products } from "@/lib/products";
import { siteConfig } from "@/lib/config";
import ProductCard from "@/components/ProductCard";

function BoutiqueContent() {
  const searchParams = useSearchParams();
  const initialCat = searchParams.get("categorie") ?? "all";
  const [category, setCategory] = useState(initialCat);
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCat = category === "all" || p.category === category;
      const matchSearch =
        search === "" ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [category, search]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900">Boutique</h1>
        <p className="text-gray-500 mt-1">{products.length} produits disponibles</p>
      </div>

      {/* Filtres */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <input
          type="search"
          placeholder="Rechercher un produit..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 bg-white"
        />
        <div className="flex gap-2 overflow-x-auto pb-1">
          <button
            onClick={() => setCategory("all")}
            className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
              category === "all"
                ? "bg-violet-600 text-white"
                : "bg-white text-gray-600 border border-gray-200 hover:border-violet-300"
            }`}
          >
            Tous
          </button>
          {siteConfig.categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setCategory(cat.slug)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-colors flex items-center gap-1 ${
                category === cat.slug
                  ? "bg-violet-600 text-white"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-violet-300"
              }`}
            >
              {cat.emoji} {cat.label}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-4xl mb-3">🔍</p>
          <p>Aucun produit trouvé.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function BoutiquePage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-gray-400">Chargement...</div>}>
      <BoutiqueContent />
    </Suspense>
  );
}
