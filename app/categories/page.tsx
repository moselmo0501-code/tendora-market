import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Catégories",
  description: "Explorez toutes les catégories de produits Trenova Market.",
};

export default function CategoriesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Catégories</h1>
      <p className="text-gray-500 mb-10">
        Explorez notre catalogue par univers produit.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {siteConfig.categories.map((cat) => {
          const count = products.filter((p) => p.category === cat.slug).length;
          return (
            <Link
              key={cat.slug}
              href={`/boutique?categorie=${cat.slug}`}
              className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-violet-200 hover:shadow-md transition-all flex items-center gap-4"
            >
              <span className="text-4xl">{cat.emoji}</span>
              <div>
                <p className="font-bold text-gray-900 group-hover:text-violet-700 transition-colors">
                  {cat.label}
                </p>
                <p className="text-sm text-gray-400">
                  {count} produit{count > 1 ? "s" : ""}
                </p>
              </div>
              <span className="ml-auto text-gray-300 group-hover:text-violet-400 transition-colors text-xl">
                →
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
