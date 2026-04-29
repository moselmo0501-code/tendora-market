"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/lib/cart";

export default function CartDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { items, removeItem, updateQuantity, total, count } = useCart();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={onClose}
          aria-hidden
        />
      )}

      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Panier"
      >
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h2 className="font-bold text-lg">
            Mon panier{" "}
            {count > 0 && (
              <span className="text-violet-600">({count})</span>
            )}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-900 text-2xl leading-none"
            aria-label="Fermer le panier"
          >
            ×
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-gray-400">
            <span className="text-5xl">🛒</span>
            <p>Votre panier est vide</p>
            <Link
              href="/boutique"
              onClick={onClose}
              className="text-violet-600 underline text-sm"
            >
              Voir les produits
            </Link>
          </div>
        ) : (
          <ul className="flex-1 overflow-y-auto divide-y px-4">
            {items.map(({ product, quantity }) => (
              <li key={product.id} className="flex gap-3 py-4">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 line-clamp-1">
                    {product.name}
                  </p>
                  <p className="text-violet-700 font-semibold text-sm mt-0.5">
                    {product.price.toFixed(2)} €
                  </p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <button
                      onClick={() =>
                        updateQuantity(product.id, quantity - 1)
                      }
                      className="w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-sm font-bold"
                    >
                      −
                    </button>
                    <span className="text-sm w-4 text-center">{quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(product.id, quantity + 1)
                      }
                      className="w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-sm font-bold"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeItem(product.id)}
                      className="ml-auto text-gray-400 hover:text-red-500 text-xs"
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        {items.length > 0 && (
          <div className="border-t px-5 py-4 space-y-3">
            <div className="flex justify-between font-semibold text-base">
              <span>Total</span>
              <span className="text-violet-700">{total.toFixed(2)} €</span>
            </div>
            <Link
              href="/checkout"
              onClick={onClose}
              className="block w-full bg-violet-600 hover:bg-violet-700 text-white text-center font-bold py-3 rounded-xl transition-colors"
            >
              Commander →
            </Link>
            <p className="text-center text-xs text-gray-400">
              Livraison calculée à la commande
            </p>
          </div>
        )}
      </aside>
    </>
  );
}
