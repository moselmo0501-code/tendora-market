import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Livraison & Retours",
  description: "Politique de livraison et de retours de Trendora Market.",
};

export default function LivraisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
        Livraison & Retours
      </h1>
      <p className="text-gray-500 mb-10">
        Tout ce que vous devez savoir sur la livraison et notre politique de retour.
      </p>

      <div className="space-y-10 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">🚚 Livraison</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2">
              <span className="font-semibold text-gray-900 w-36 shrink-0">Délai estimé :</span>
              <span>{siteConfig.shippingDelay}</span>
            </li>
            <li className="flex gap-2">
              <span className="font-semibold text-gray-900 w-36 shrink-0">Zones :</span>
              <span>France, Europe, International (50+ pays)</span>
            </li>
            <li className="flex gap-2">
              <span className="font-semibold text-gray-900 w-36 shrink-0">Expédition :</span>
              <span>
                Directement depuis nos fournisseurs partenaires (dropshipping). Les
                produits peuvent arriver en plusieurs colis distincts.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="font-semibold text-gray-900 w-36 shrink-0">Suivi :</span>
              <span>
                Un numéro de suivi vous est envoyé par email sous 2 à 5 jours
                ouvrés après la commande.
              </span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">🔄 Retours</h2>
          <p className="text-sm mb-3">{siteConfig.returnPolicy}.</p>
          <ul className="space-y-2 text-sm list-disc list-inside">
            <li>Article dans son état d'origine, non utilisé.</li>
            <li>Contactez-nous à {siteConfig.email} avec votre n° de commande.</li>
            <li>Remboursement sous 5 à 10 jours ouvrés après réception du retour.</li>
            <li>
              Articles personnalisés (print-on-demand) non remboursables sauf
              défaut de fabrication.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">📦 Colis endommagé</h2>
          <p className="text-sm">
            Si votre colis arrive endommagé, prenez des photos et contactez-nous sous
            48h. Nous vous enverrons un remplacement ou procéderons au remboursement.
          </p>
        </section>
      </div>
    </div>
  );
}
