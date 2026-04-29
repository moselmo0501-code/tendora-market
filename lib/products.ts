export type Badge = "tendance" | "best-seller" | "nouveau";

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  price: number;
  comparePrice?: number;
  description: string;
  features: string[];
  badge?: Badge;
  image: string;
  images?: string[];
  stock: "en stock" | "rupture" | "précommande";
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  // --- Animaux ---
  {
    id: "1",
    name: "Distributeur d'eau fontaine chat",
    slug: "fontaine-eau-chat",
    category: "animaux",
    price: 29.99,
    comparePrice: 44.99,
    description:
      "Fontaine à eau silencieuse avec filtre à charbon actif pour chats et petits chiens. Encourage votre animal à s'hydrater.",
    features: [
      "Capacité 2 litres",
      "Filtre charbon actif inclus",
      "Pompe ultra-silencieuse",
      "Nettoyage facile",
    ],
    badge: "best-seller",
    image: "https://images.unsplash.com/photo-1548546738-8509cb246ed3?w=600&h=600&fit=crop",
    stock: "en stock",
    rating: 4.7,
    reviews: 312,
  },
  {
    id: "2",
    name: "Lit donut pour chien et chat",
    slug: "lit-donut-animaux",
    category: "animaux",
    price: 34.99,
    comparePrice: 49.99,
    description:
      "Lit rond ultra-moelleux effet calins pour chiens et chats. Design tendance, lavable en machine.",
    features: [
      "Mousse mémoire de forme",
      "Lavable en machine",
      "Taille M et L disponibles",
      "Anti-dérapant",
    ],
    badge: "tendance",
    image: "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?w=600&h=600&fit=crop",
    stock: "en stock",
    rating: 4.8,
    reviews: 205,
  },
  {
    id: "3",
    name: "Jouet interactif laser automatique",
    slug: "jouet-laser-chat",
    category: "animaux",
    price: 19.99,
    description:
      "Laser rotatif automatique qui stimule l'instinct de chasse de votre chat. 3 vitesses réglables.",
    features: [
      "Rotation automatique 360°",
      "3 vitesses",
      "Arrêt automatique 15 min",
      "Pile AA incluse",
    ],
    badge: "nouveau",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=600&fit=crop",
    stock: "en stock",
    rating: 4.5,
    reviews: 98,
  },

  // --- Tech ---
  {
    id: "4",
    name: "Support téléphone magnétique voiture",
    slug: "support-magnetique-voiture",
    category: "tech",
    price: 14.99,
    comparePrice: 24.99,
    description:
      "Support magnétique universel pour tableau de bord ou grille d'aération. Compatible tous smartphones.",
    features: [
      "Aimant puissant N52",
      "Rotation 360°",
      "Installation en 1 seconde",
      "Compatible MagSafe",
    ],
    badge: "best-seller",
    image: "https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=600&h=600&fit=crop",
    stock: "en stock",
    rating: 4.6,
    reviews: 541,
  },
  {
    id: "5",
    name: "Câble USB-C rétractable 3-en-1",
    slug: "cable-usb-retractable",
    category: "tech",
    price: 12.99,
    comparePrice: 19.99,
    description:
      "Câble 3-en-1 rétractable USB-C, Lightning et Micro-USB. Charge rapide 65W, compact et durable.",
    features: [
      "Charge rapide 65W",
      "Longueur 1,2m rétractable",
      "Compatible iPhone/Android",
      "Nylon tressé résistant",
    ],
    badge: "tendance",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop",
    stock: "en stock",
    rating: 4.4,
    reviews: 287,
  },
  {
    id: "6",
    name: "Chargeur sans fil 15W rapide",
    slug: "chargeur-sans-fil-15w",
    category: "tech",
    price: 24.99,
    description:
      "Chargeur à induction 15W compatible Qi. Charge iPhone 15, Samsung S24 et tous appareils Qi.",
    features: [
      "15W charge rapide",
      "Compatible Qi universel",
      "Indicateur LED",
      "Protection surchauffe",
    ],
    badge: "nouveau",
    image: "https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?w=600&h=600&fit=crop",
    stock: "en stock",
    rating: 4.5,
    reviews: 163,
  },

  // --- Maison ---
  {
    id: "7",
    name: "Organisateur de tiroir modulable",
    slug: "organisateur-tiroir",
    category: "maison",
    price: 18.99,
    comparePrice: 29.99,
    description:
      "Set de 8 compartiments modulables pour tiroirs de cuisine, bureau ou salle de bain. Empilables.",
    features: [
      "8 compartiments inclus",
      "PP recyclable sans BPA",
      "Modulable selon tiroir",
      "Facile à nettoyer",
    ],
    badge: "best-seller",
    image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=600&h=600&fit=crop",
    stock: "en stock",
    rating: 4.7,
    reviews: 423,
  },
  {
    id: "8",
    name: "Porte-câbles bureau magnétique",
    slug: "porte-cables-magnetique",
    category: "maison",
    price: 9.99,
    description:
      "Clips adhésifs magnétiques pour ranger vos câbles sur le bureau ou le bureau de nuit. Pack de 6.",
    features: [
      "Pack de 6 clips",
      "Adhésif 3M repositionnable",
      "Charge max 1kg",
      "Compatible tous câbles",
    ],
    badge: "tendance",
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop",
    stock: "en stock",
    rating: 4.3,
    reviews: 198,
  },

  // --- Déco & Cadeaux ---
  {
    id: "9",
    name: "Tasse personnalisée minimaliste",
    slug: "tasse-personnalisee",
    category: "deco",
    price: 22.99,
    description:
      "Tasse en céramique 330ml avec texte ou prénom personnalisé. Idéale cadeau anniversaire ou mariage.",
    features: [
      "330ml céramique qualité",
      "Personnalisation texte",
      "Résistante lave-vaisselle",
      "Livraison boîte cadeau",
    ],
    badge: "nouveau",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&h=600&fit=crop",
    stock: "en stock",
    rating: 4.9,
    reviews: 87,
  },
  {
    id: "10",
    name: "Lampe LED lune ambiance",
    slug: "lampe-lune-led",
    category: "deco",
    price: 32.99,
    comparePrice: 44.99,
    description:
      "Lampe lune 3D en résine avec 16 couleurs LED et télécommande. Déco tendance pour chambre ou salon.",
    features: [
      "16 couleurs LED",
      "Télécommande incluse",
      "Diamètre 15cm",
      "Rechargeable USB-C",
    ],
    badge: "tendance",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop",
    stock: "en stock",
    rating: 4.6,
    reviews: 264,
  },

  // --- Éco-responsable ---
  {
    id: "11",
    name: "Gourde isotherme en inox 500ml",
    slug: "gourde-isotherme-inox",
    category: "eco",
    price: 26.99,
    comparePrice: 39.99,
    description:
      "Gourde inox double paroi 500ml. Maintient chaud 12h, froid 24h. Zéro plastique, zéro BPA.",
    features: [
      "Inox 18/8 alimentaire",
      "Double paroi isotherme",
      "Bouchon anti-fuite",
      "Compatibles lave-vaisselle",
    ],
    badge: "best-seller",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&h=600&fit=crop",
    stock: "en stock",
    rating: 4.8,
    reviews: 512,
  },
  {
    id: "12",
    name: "Kit brosses à dents bambou",
    slug: "brosse-dents-bambou",
    category: "eco",
    price: 11.99,
    description:
      "Pack de 4 brosses à dents biodégradables en bambou. Poils medium souples. 100% naturelles.",
    features: [
      "Pack de 4 brosses",
      "Bambou certifié FSC",
      "Poils medium souples",
      "Emballage recyclable",
    ],
    badge: "tendance",
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=600&h=600&fit=crop",
    stock: "en stock",
    rating: 4.5,
    reviews: 341,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
  );
}
