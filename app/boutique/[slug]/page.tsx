"use client";

import { use } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductBySlug } from "@/lib/products";
import { siteConfig } from "@/lib/config";
import Badge from "@/components/Badge";
import { useCart } from "@/lib/cart";

export default function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const { addItem } = useCart();

  const discount = product.comparePrice
    ? Math.round((1 - product.price / product.comparePrice) * 100)
    : null;

  const category = siteConfig.categories.find(
    (c) => c.slug === product.category
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-violet-600">
          Accueil
        </Link>
        <span>/</span>
        <Link href="/boutique" className="hover:text-violet-600">
          Boutique
        </Link>
        <span>/</span>
        <span className="text-gray-900 font-medium line-clamp-1">{product.name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {product.badge && (
            <div className="absolute top-3 left-3">
              <Badge badge={product.badge} />
            </div>
          )}
          {discount && (
            <div className="absolute top-3 right-3 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded-full">
              -{discount}%
            </div>
          )}
        </div>

        {/* Infos */}
        <div className="flex flex-col gap-5">
          {category && (
            <Link
              href={`/boutique?categorie=${category.slug}`}
              className="text-violet-600 text-sm font-semibold hover:underline"
            >
              {category.emoji} {category.label}
            </Link>
          )}

          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
            {product.name}
          </h1>

          <div className="flex items-center gap-2">
            <span className="text-amber-400 text-base">
              {"★".repeat(Math.round(product.rating))}
            </span>
            <span className="text-gray-500 text-sm">
              {product.rating}/5 · {product.reviews} avis
            </span>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-extrabold text-violet-700">
              {product.price.toFixed(2)} €
            </span>
            {product.comparePrice && (
              <span className="text-gray-400 line-through text-lg">
                {product.comparePrice.toFixed(2)} €
              </span>
            )}
          </div>

          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          <ul className="space-y-1.5">
            {product.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                <span className="text-violet-500 font-bold">✓</span>
                {f}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <span
              className={`w-2 h-2 rounded-full ${
                product.stock === "en stock" ? "bg-emerald-500" : "bg-red-400"
              }`}
            />
            <span className="text-sm text-gray-600 capitalize">{product.stock}</span>
          </div>

          <button
            onClick={() => addItem(product)}
            className="w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-4 rounded-xl transition-colors text-base"
          >
            Ajouter au panier
          </button>

          <Link
            href="/checkout"
            onClick={() => addItem(product)}
            className="block w-full text-center border-2 border-violet-600 text-violet-600 hover:bg-violet-50 font-bold py-3.5 rounded-xl transition-colors"
          >
            Commander maintenant
          </Link>

          <p className="text-xs text-gray-400 text-center">
            🚚 Livraison en {siteConfig.shippingDelay} · 🔄 {siteConfig.returnPolicy}
          </p>
        </div>
      </div>
    </div>
  );
}
