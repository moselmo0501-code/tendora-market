"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import Badge from "./Badge";
import { useCart } from "@/lib/cart";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  const discount =
    product.comparePrice
      ? Math.round((1 - product.price / product.comparePrice) * 100)
      : null;

  return (
    <article className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col overflow-hidden group">
      <Link href={`/boutique/${product.slug}`} className="relative block overflow-hidden aspect-square">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {product.badge && (
          <div className="absolute top-2 left-2">
            <Badge badge={product.badge} />
          </div>
        )}
        {discount && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
            -{discount}%
          </div>
        )}
      </Link>

      <div className="flex flex-col flex-1 p-4 gap-2">
        <Link href={`/boutique/${product.slug}`}>
          <h3 className="font-semibold text-gray-900 text-sm leading-snug hover:text-violet-700 transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-1 text-amber-400 text-xs">
          {"★".repeat(Math.round(product.rating))}
          <span className="text-gray-500 ml-1">({product.reviews})</span>
        </div>

        <div className="flex items-baseline gap-2 mt-auto">
          <span className="text-violet-700 font-bold text-base">
            {product.price.toFixed(2)} €
          </span>
          {product.comparePrice && (
            <span className="text-gray-400 line-through text-xs">
              {product.comparePrice.toFixed(2)} €
            </span>
          )}
        </div>

        <button
          onClick={() => addItem(product)}
          className="mt-1 w-full bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold py-2 rounded-xl transition-colors"
        >
          Ajouter au panier
        </button>
      </div>
    </article>
  );
}
