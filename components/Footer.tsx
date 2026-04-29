import Link from "next/link";
import { siteConfig } from "@/lib/config";

const footerLinks = [
  {
    title: "Informations",
    links: [
      { href: "/a-propos", label: "À propos" },
      { href: "/contact", label: "Contact" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    title: "Commandes",
    links: [
      { href: "/livraison", label: "Livraison & Retours" },
      { href: "/checkout", label: "Commander" },
    ],
  },
  {
    title: "Légal",
    links: [
      { href: "/cgv", label: "CGV" },
      { href: "/confidentialite", label: "Confidentialité" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <p className="text-white font-extrabold text-lg mb-2">
              <span className="text-violet-400">✦</span> {siteConfig.name}
            </p>
            <p className="text-sm text-gray-500 mb-4">{siteConfig.tagline}</p>
            <div className="flex gap-3">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors text-sm"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <a
                href={siteConfig.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors text-sm"
                aria-label="TikTok"
              >
                TikTok
              </a>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors text-sm"
                aria-label="Facebook"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <p className="text-white font-semibold text-sm mb-3">
                {col.title}
              </p>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-600">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Tous droits
            réservés.
          </p>
          <p>
            Contact :{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="hover:text-gray-400"
            >
              {siteConfig.email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
