"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart";

export default function CommandeConfirmeePage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center gap-6">
      <div className="text-6xl">🎉</div>
      <h1 className="text-3xl font-extrabold text-gray-900">
        Commande confirmée !
      </h1>
      <p className="text-gray-500 max-w-sm">
        Merci pour votre achat. Vous recevrez un email de confirmation et un
        numéro de suivi dès l'expédition.
      </p>
      <Link
        href="/boutique"
        className="bg-violet-600 hover:bg-violet-700 text-white font-bold px-8 py-3 rounded-xl transition-colors"
      >
        Continuer mes achats
      </Link>
    </div>
  );
}
