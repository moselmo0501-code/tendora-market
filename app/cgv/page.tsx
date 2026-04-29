import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente",
  description: "CGV de Trendora Market — droits et obligations des parties.",
};

export default function CgvPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
        Conditions Générales de Vente
      </h1>
      <p className="text-gray-500 mb-10 text-sm">Dernière mise à jour : avril 2026</p>

      <div className="space-y-8 text-sm text-gray-700 leading-relaxed">
        {[
          {
            title: "1. Objet",
            body: `Les présentes CGV régissent les ventes effectuées sur ${siteConfig.name} (${siteConfig.url}). Toute commande implique l'acceptation pleine et entière de ces conditions.`,
          },
          {
            title: "2. Produits",
            body: "Les produits proposés sont commercialisés via des partenaires dropshipping et print-on-demand. Les photos sont représentatives mais peuvent légèrement différer du produit reçu.",
          },
          {
            title: "3. Prix",
            body: "Les prix sont indiqués en euros TTC. Nous nous réservons le droit de modifier les prix à tout moment, sans que cela affecte les commandes déjà confirmées.",
          },
          {
            title: "4. Commande",
            body: "La commande est validée après confirmation du paiement. Un email de confirmation vous est envoyé. Nous nous réservons le droit d'annuler toute commande suspecte.",
          },
          {
            title: "5. Paiement",
            body: "Le paiement est sécurisé via Stripe. Nous acceptons les cartes bancaires (Visa, Mastercard, Amex) et autres méthodes proposées par Stripe.",
          },
          {
            title: "6. Livraison",
            body: `Les délais de livraison sont indicatifs (${siteConfig.shippingDelay}). Nous ne sommes pas responsables des retards liés aux transporteurs ou aux douanes.`,
          },
          {
            title: "7. Droit de rétractation",
            body: `Conformément à la loi, vous disposez de 14 jours à compter de la réception pour exercer votre droit de rétractation. Les articles personnalisés sont exclus de ce droit.`,
          },
          {
            title: "8. Responsabilité",
            body: "Notre responsabilité ne saurait être engagée pour les dommages indirects liés à l'utilisation de nos produits. Notre responsabilité est limitée au montant de la commande.",
          },
          {
            title: "9. Litiges",
            body: `En cas de litige, une solution amiable sera recherchée en priorité. Contactez-nous à ${siteConfig.email}. À défaut, les tribunaux français seront compétents.`,
          },
        ].map((section) => (
          <section key={section.title}>
            <h2 className="text-base font-bold text-gray-900 mb-2">
              {section.title}
            </h2>
            <p>{section.body}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
