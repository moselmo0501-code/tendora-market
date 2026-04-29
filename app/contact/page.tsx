import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contactez l'équipe ${siteConfig.name} pour toute question.`,
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-14">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Contact</h1>
      <p className="text-gray-500 mb-10">
        Une question, une réclamation ou une suggestion ? Nous sommes là.
      </p>
      <ContactForm />
      <div className="mt-6 text-center text-sm text-gray-500 space-y-1">
        <p>
          Ou par email directement :{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-violet-600 font-semibold hover:underline"
          >
            {siteConfig.email}
          </a>
        </p>
        <p>Réponse garantie sous 24h ouvrées.</p>
      </div>
    </div>
  );
}
