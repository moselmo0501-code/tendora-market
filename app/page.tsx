import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/products";
import { siteConfig } from "@/lib/config";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
};

const featured = products.filter((p) => p.badge).slice(0, 4);

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-violet-700 via-violet-600 to-blue-600 text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-violet-200 text-sm font-semibold tracking-widest uppercase">
            Boutique sans stock · Dropshipping & Print-on-Demand
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Des produits tendance,
            <br />
            <span className="text-violet-200">livrés directement chez vous</span>
          </h1>
          <p className="text-violet-100 text-lg max-w-xl mx-auto">
            Découvrez notre sélection de produits actuels, utiles et à fort potentiel —
            sans compromis sur la qualité.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/boutique"
              className="bg-white text-violet-700 font-bold px-8 py-3 rounded-xl hover:bg-violet-50 transition-colors"
            >
              Voir la boutique
            </Link>
            <Link
              href="/categories"
              className="border-2 border-white/50 text-white font-semibold px-8 py-3 rounded-xl hover:bg-white/10 transition-colors"
            >
              Voir les catégories
            </Link>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {siteConfig.advantages.map((adv) => (
            <div
              key={adv.title}
              className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100"
            >
              <div className="text-3xl mb-2">{adv.icon}</div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">{adv.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{adv.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Produits vedettes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-14">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900">Produits populaires</h2>
            <p className="text-gray-500 text-sm mt-1">Les incontournables de la boutique</p>
          </div>
          <Link
            href="/boutique"
            className="text-violet-600 font-semibold text-sm hover:underline"
          >
            Voir tout →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Catégories */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6 text-center">
            Explorez par catégorie
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {siteConfig.categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/boutique?categorie=${cat.slug}`}
                className="flex flex-col items-center justify-center gap-2 bg-gray-50 hover:bg-violet-50 border border-gray-100 hover:border-violet-200 rounded-2xl p-5 transition-all group"
              >
                <span className="text-3xl">{cat.emoji}</span>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-violet-700 text-center leading-tight">
                  {cat.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-14 px-4">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <h2 className="text-2xl font-extrabold text-gray-900">
            Prêt à découvrir nos produits ?
          </h2>
          <p className="text-gray-500">
            {siteConfig.shippingDelay} · {siteConfig.returnPolicy}
          </p>
          <Link
            href="/boutique"
            className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-bold px-10 py-3 rounded-xl transition-colors"
          >
            Accéder à la boutique
          </Link>
        </div>
      </section>
    </>
  );
}
