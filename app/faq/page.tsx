import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Questions fréquentes sur les commandes, livraisons et retours.",
};

const faqs = [
  {
    q: "Comment fonctionne votre boutique sans stock ?",
    a: "Nous travaillons avec des fournisseurs dropshipping et print-on-demand certifiés. Quand vous commandez, votre colis est expédié directement depuis le fournisseur, sans passer par un entrepôt intermédiaire.",
  },
  {
    q: "Quel est le délai de livraison ?",
    a: `En général, ${siteConfig.shippingDelay}. Ce délai peut varier selon le produit et la destination. Un email de suivi vous est envoyé dès l'expédition.`,
  },
  {
    q: "Puis-je retourner un article ?",
    a: `Oui, vous bénéficiez de ${siteConfig.returnPolicy}. Contactez-nous à ${siteConfig.email} avec votre numéro de commande pour initier un retour.`,
  },
  {
    q: "Le paiement est-il sécurisé ?",
    a: "Oui. Toutes les transactions sont chiffrées SSL. Nous utilisons Stripe comme processeur de paiement (intégration en cours pour le MVP).",
  },
  {
    q: "Puis-je annuler ma commande ?",
    a: "Les annulations sont possibles dans les 2 heures suivant la commande. Passé ce délai, l'expédition est déjà en cours. Contactez-nous rapidement.",
  },
  {
    q: "Livrez-vous à l'international ?",
    a: "Oui, nous livrons dans plus de 50 pays. Les frais et délais de livraison peuvent varier selon la destination.",
  },
  {
    q: "Mes données personnelles sont-elles protégées ?",
    a: "Absolument. Nous ne vendons jamais vos données à des tiers. Consultez notre Politique de confidentialité pour plus de détails.",
  },
];

export default function FaqPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
        Questions fréquentes
      </h1>
      <p className="text-gray-500 mb-10">
        Tout ce que vous devez savoir avant de commander.
      </p>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <details
            key={i}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm group"
          >
            <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-gray-900 list-none gap-3">
              <span>{faq.q}</span>
              <span className="text-violet-500 shrink-0 group-open:rotate-45 transition-transform text-xl font-light">
                +
              </span>
            </summary>
            <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
              {faq.a}
            </div>
          </details>
        ))}
      </div>

      <div className="mt-10 bg-violet-50 rounded-2xl p-6 text-center">
        <p className="text-gray-700 font-medium mb-2">
          Vous n&apos;avez pas trouvé votre réponse ?
        </p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="text-violet-600 font-bold hover:underline"
        >
          Contactez-nous →
        </a>
      </div>
    </div>
  );
}
