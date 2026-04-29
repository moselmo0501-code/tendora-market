"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/lib/cart";
import { siteConfig } from "@/lib/config";

export default function CheckoutPage() {
  const { items, total, count } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleStripeCheckout() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Erreur serveur");
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inconnue");
      setLoading(false);
    }
  }

  if (count === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-5 text-gray-400 px-4">
        <span className="text-6xl">🛒</span>
        <p className="text-lg font-medium">Votre panier est vide</p>
        <Link
          href="/boutique"
          className="bg-violet-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-violet-700 transition-colors"
        >
          Voir la boutique
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Commande</h1>
      <p className="text-gray-500 mb-8">Récapitulatif de votre panier</p>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Récap produits */}
        <div className="md:col-span-2 space-y-4">
          {items.map(({ product, quantity }) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-gray-100 p-4 flex gap-4 items-center"
            >
              <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-gray-100 shrink-0">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm text-gray-900 line-clamp-1">
                  {product.name}
                </p>
                <p className="text-gray-400 text-xs mt-0.5">
                  Quantité : {quantity}
                </p>
              </div>
              <p className="font-bold text-violet-700 text-sm shrink-0">
                {(product.price * quantity).toFixed(2)} €
              </p>
            </div>
          ))}
        </div>

        {/* Résumé */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 h-fit space-y-4">
          <h2 className="font-bold text-gray-900">Résumé</h2>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Sous-total</span>
            <span>{total.toFixed(2)} €</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Livraison</span>
            <span className="text-emerald-600">Calculée à la commande</span>
          </div>
          <div className="border-t pt-3 flex justify-between font-bold text-gray-900">
            <span>Total</span>
            <span className="text-violet-700">{total.toFixed(2)} €</span>
          </div>

          {error && (
            <p className="text-red-500 text-xs bg-red-50 rounded-xl px-3 py-2">
              ⚠ {error}
            </p>
          )}

          <button
            onClick={handleStripeCheckout}
            disabled={loading}
            className="w-full bg-violet-600 hover:bg-violet-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Redirection…
              </>
            ) : (
              "💳 Payer avec Stripe →"
            )}
          </button>

          <p className="text-xs text-gray-400 text-center">
            🔒 Paiement chiffré SSL · {siteConfig.returnPolicy}
          </p>
        </div>
      </div>
    </div>
  );
}
