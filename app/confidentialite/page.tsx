import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Comment Trenova Market collecte et utilise vos données personnelles.",
};

export default function ConfidentialitePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
        Politique de confidentialité
      </h1>
      <p className="text-gray-500 mb-10 text-sm">
        Dernière mise à jour : avril 2026
      </p>

      <div className="prose prose-gray max-w-none text-sm leading-relaxed space-y-8 text-gray-700">
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">1. Données collectées</h2>
          <p>
            Lors d'une commande ou d'un contact, nous collectons : nom, prénom,
            adresse email, adresse de livraison et données de paiement (gérées
            exclusivement par Stripe, nous n'avons pas accès aux données bancaires).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">2. Utilisation des données</h2>
          <p>Vos données sont utilisées exclusivement pour :</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Traiter et expédier vos commandes.</li>
            <li>Vous envoyer des mises à jour de commande par email.</li>
            <li>Répondre à vos demandes de support.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">3. Partage des données</h2>
          <p>
            Nous partageons uniquement les données nécessaires à nos fournisseurs
            (adresse de livraison) pour expédier vos commandes. Nous ne vendons jamais
            vos données à des tiers.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">4. Cookies</h2>
          <p>
            Ce site utilise des cookies fonctionnels pour le panier et l'expérience
            utilisateur. Aucun cookie publicitaire n'est utilisé sans votre
            consentement.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">5. Vos droits (RGPD)</h2>
          <p>
            Vous disposez d'un droit d'accès, de rectification, de suppression et de
            portabilité de vos données. Pour exercer ces droits, contactez-nous à{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-violet-600 underline"
            >
              {siteConfig.email}
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
