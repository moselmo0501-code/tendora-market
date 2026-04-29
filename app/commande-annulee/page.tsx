import Link from "next/link";

export default function CommandeAnnuleePage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center gap-6">
      <div className="text-6xl">😕</div>
      <h1 className="text-3xl font-extrabold text-gray-900">
        Paiement annulé
      </h1>
      <p className="text-gray-500 max-w-sm">
        Votre commande n'a pas été finalisée. Votre panier est conservé, vous
        pouvez réessayer quand vous le souhaitez.
      </p>
      <div className="flex gap-3">
        <Link
          href="/checkout"
          className="bg-violet-600 hover:bg-violet-700 text-white font-bold px-6 py-3 rounded-xl transition-colors"
        >
          Réessayer
        </Link>
        <Link
          href="/boutique"
          className="border border-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors"
        >
          Continuer mes achats
        </Link>
      </div>
    </div>
  );
}
