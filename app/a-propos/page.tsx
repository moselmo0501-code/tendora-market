import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "À propos",
  description: `Découvrez l'histoire et la mission de ${siteConfig.name}.`,
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-3">
        À propos de {siteConfig.name}
      </h1>
      <p className="text-gray-500 mb-10 text-lg">
        Notre mission : vous proposer des produits utiles, tendance et accessibles.
      </p>

      <div className="space-y-8 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Notre concept</h2>
          <p>
            {siteConfig.name} est une boutique en ligne moderne fonctionnant sans stock
            physique. Grâce au dropshipping et au print-on-demand, nous sélectionnons
            des produits de qualité auprès de fournisseurs vérifiés et les faisons
            livrer directement chez vous.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Pourquoi nous choisir ?</h2>
          <ul className="space-y-2">
            {siteConfig.advantages.map((adv) => (
              <li key={adv.title} className="flex items-start gap-2">
                <span className="text-xl shrink-0">{adv.icon}</span>
                <span>
                  <strong>{adv.title}</strong> — {adv.desc}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Nos valeurs</h2>
          <p>
            Nous croyons en une consommation responsable : produits sélectionnés pour
            leur durabilité, fournisseurs respectant des normes éthiques, et une
            démarche progressive vers des emballages éco-responsables.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Nous contacter</h2>
          <p>
            Une question ? Écrivez-nous à{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-violet-600 underline"
            >
              {siteConfig.email}
            </a>
            . Nous répondons sous 24h.
          </p>
        </section>
      </div>
    </div>
  );
}
