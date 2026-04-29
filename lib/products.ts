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

  // ─── ANIMAUX ───────────────────────────────────────────────
  {
    id: "1", name: "Fontaine à eau pour chat", slug: "fontaine-eau-chat",
    category: "animaux", price: 29.99, comparePrice: 44.99,
    description: "Fontaine silencieuse avec filtre à charbon actif. Encourage votre chat à s'hydrater davantage.",
    features: ["Capacité 2L", "Filtre charbon actif", "Pompe silencieuse", "Facile à nettoyer"],
    badge: "best-seller",
    image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1548546738-8509cb246ed3?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=600&fit=crop",
    ],
    stock: "en stock", rating: 4.7, reviews: 312,
  },
  {
    id: "2", name: "Lit donut ultra-moelleux", slug: "lit-donut-animaux",
    category: "animaux", price: 34.99, comparePrice: 49.99,
    description: "Lit rond effet câlin pour chiens et chats. Lavable en machine, anti-dérapant.",
    features: ["Mousse mémoire de forme", "Lavable en machine", "Tailles M et L", "Anti-dérapant"],
    badge: "tendance",
    image: "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=600&fit=crop",
    ],
    stock: "en stock", rating: 4.8, reviews: 205,
  },
  {
    id: "3", name: "Jouet laser automatique chat", slug: "jouet-laser-chat",
    category: "animaux", price: 19.99,
    description: "Laser rotatif automatique 360°. Stimule l'instinct de chasse, arrêt automatique 15 min.",
    features: ["Rotation 360°", "3 vitesses", "Arrêt auto 15 min", "Pile incluse"],
    badge: "nouveau",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=600&h=600&fit=crop",
    ],
    stock: "en stock", rating: 4.5, reviews: 98,
  },
  {
    id: "4", name: "Harnais anti-traction chien", slug: "harnais-anti-traction",
    category: "animaux", price: 24.99, comparePrice: 35.99,
    description: "Harnais ergonomique qui réduit les tractions. Réfléchissant pour les sorties nocturnes.",
    features: ["Anti-traction", "Bandes réfléchissantes", "Réglable", "Plusieurs tailles"],
    badge: "tendance",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=600&h=600&fit=crop",
    ],
    stock: "en stock", rating: 4.6, reviews: 178,
  },
  {
    id: "5", name: "Distributeur friandises puzzle", slug: "puzzle-friandises-chien",
    category: "animaux", price: 22.99,
    description: "Jouet d'enrichissement mental pour chiens. Ralentit la prise de repas et stimule l'intellect.",
    features: ["3 niveaux de difficulté", "Sans BPA", "Lave-vaisselle", "Toutes tailles"],
    badge: "nouveau",
    image: "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=600&fit=crop",
    ],
    stock: "en stock", rating: 4.4, reviews: 134,
  },
  {
    id: "6", name: "Brosse autonettoyante poils", slug: "brosse-autonettoyante",
    category: "animaux", price: 16.99, comparePrice: 24.99,
    description: "Brosse à picots rétractables d'un simple bouton. Collecte les poils sans effort.",
    features: ["Rétractation 1 bouton", "Poils acier inox", "Ergonomique", "Chats et chiens"],
    badge: "best-seller",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1548546738-8509cb246ed3?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=600&h=600&fit=crop",
    ],
    stock: "en stock", rating: 4.7, reviews: 289,
  },

  // ─── TECH ──────────────────────────────────────────────────
  {
    id: "7", name: "Support magnétique voiture", slug: "support-magnetique-voiture",
    category: "tech", price: 14.99, comparePrice: 24.99,
    description: "Support magnétique universel pour tableau de bord. Compatible MagSafe et tous smartphones.",
    features: ["Aimant N52", "Rotation 360°", "Installation 1 sec", "Compatible MagSafe"],
    badge: "best-seller",
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600&h=600&fit=crop",
    ],
    stock: "en stock", rating: 4.6, reviews: 541,
  },
  {
    id: "8", name: "Câble USB-C 3-en-1 rétractable", slug: "cable-usb-retractable",
    category: "tech", price: 12.99, comparePrice: 19.99,
    description: "Câble 3-en-1 USB-C, Lightning, Micro-USB. Charge rapide 65W, nylon tressé.",
    features: ["65W charge rapide", "1.2m rétractable", "iPhone/Android", "Nylon tressé"],
    badge: "tendance",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1592890288564-76628a30a657?w=600&h=600&fit=crop",
    ],
    stock: "en stock", rating: 4.4, reviews: 287,
  },
  {
    id: "9", name: "Chargeur sans fil 15W", slug: "chargeur-sans-fil-15w",
    category: "tech", price: 24.99,
    description: "Chargeur Qi 15W compatible iPhone 15, Samsung S24. Protection surchauffe intégrée.",
    features: ["15W rapide", "Qi universel", "LED indicateur", "Anti-surchauffe"],
    badge: "nouveau",
    image: "https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1612703842178-a5a52f4e01f9?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600&h=600&fit=crop",
    ],
    stock: "en stock", rating: 4.5, reviews: 163,
  },
  {
    id: "10", name: "Mini caméra de surveillance HD", slug: "mini-camera-espion",
    category: "tech", price: 39.99, comparePrice: 59.99,
    description: "Caméra de surveillance miniature 1080p avec détection de mouvement et vision nocturne.",
    features: ["1080p HD", "Vision nocturne", "Détection mouvement", "WiFi"],
    badge: "tendance",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=600&fit=crop",
    ],
    stock: "en stock", rating: 4.3, reviews: 201,
  },
  {
    id: "11", name: "Écouteurs sans fil ANC", slug: "ecouteurs-anc",
    category: "tech", price: 49.99, comparePrice: 79.99,
    description: "Écouteurs True Wireless avec réduction de bruit active. Autonomie 30h avec boîtier.",
    features: ["ANC actif", "30h autonomie", "IPX5 waterproof", "Charge rapide"],
    badge: "best-seller",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop",
    ],
    stock: "en stock", rating: 4.6, reviews: 423,
  },
  {
    id: "12", name: "Batterie portable 20000mAh", slug: "batterie-portable-20000",
    category: "tech", price: 34.99, comparePrice: 49.99,
    description: "Powerbank ultra-slim 20000mAh avec charge rapide 22.5W. 3 ports USB simultanés.",
    features: ["20000mAh", "22.5W rapide", "3 ports USB", "Ultra-slim"],
    badge: "tendance",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1592890288564-76628a30a657?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop",
    ],
    stock: "en stock", rating: 4.5, reviews: 334,
  },
  {
    id: "13", name: "Stylet tactile iPad & tablette", slug: "stylet-tactile",
    category: "tech", price: 19.99, comparePrice: 29.99,
    description: "Stylet précis pour iPad, Samsung Tab et toutes tablettes. Rejet de la paume intégré.",
    features: ["Rejet paume", "Rechargeable USB-C", "Compatible tous iPad", "Pointe 1.5mm"],
    badge: "nouveau",
    image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=600&h=600&fit=crop",
    ],
    stock: "en stock", rating: 4.4, reviews: 156,
  },

  // ─── MAISON ────────────────────────────────────────────────
  {
    id: "14", name: "Organisateur tiroir modulable", slug: "organisateur-tiroir",
    category: "maison", price: 18.99, comparePrice: 29.99,
    description: "Set de 8 compartiments modulables pour tiroirs cuisine, bureau ou salle de bain.",
    features: ["8 compartiments", "PP recyclable", "Modulable", "Facile à nettoyer"],
    badge: "best-seller",
    image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=600&h=600&fit=crop",
    ],
    stock: "en stock", rating: 4.7, reviews: 423,
  },
  {
    id: "15", name: "Porte-câbles magnétique", slug: "porte-cables-magnetique",
    category: "maison", price: 9.99,
    description: "Clips adhésifs magnétiques pour ranger tous vos câbles. Pack de 6, adhésif 3M.",
    features: ["Pack 6 clips", "Adhésif 3M", "Repositionnable", "Tous câbles"],
    badge: "tendance",
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=600&h=600&fit=crop",
    ],
    stock: "en stock", rating: 4.3, reviews: 198,
  },
  {
    id: "16", name: "Diffuseur huiles essentielles LED", slug: "diffuseur-huiles",
    category: "maison", price: 27.99, comparePrice: 39.99,
    description: "Diffuseur ultrasonique 500ml avec 7 couleurs LED. Minuterie et arrêt automatique.",
    features: ["500ml", "7 couleurs LED", "Minuterie", "Ultra-silencieux"],
    badge: "best-seller",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1602178668018-f2c8bfdf5bae?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop",
    ],
    stock: "en stock", rating: 4.6, reviews: 389,
  },
  {
    id: "17", name: "Purificateur d'air HEPA", slug: "purificateur-air-hepa",
    category: "maison", price: 69.99, comparePrice: 99.99,
    description: "Purificateur d'air avec filtre HEPA H13. Élimine 99.97% des allergènes et bactéries.",
    features: ["Filtre HEPA H13", "20m² couverture", "Silencieux 25dB", "Indicateur qualité air"],
    badge: "nouveau",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&h=600&fit=crop",
    ],
    stock: "en stock", rating: 4.7, reviews: 312,
  },
  {
    id: "18", name: "Prise connectée WiFi", slug: "prise-connectee-wifi",
    category: "maison", price: 14.99, comparePrice: 22.99,
    description: "Prise intelligente WiFi avec compteur d'énergie. Contrôlez vos appareils depuis votre téléphone.",
    features: ["WiFi 2.4GHz", "Compteur énergie", "Alexa/Google", "Timer programmable"],
    badge: "tendance",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=600&fit=crop",
    ],
    stock: "en stock", rating: 4.4, reviews: 234,
  },
  {
    id: "19", name: "Lampe de bureau LED tactile", slug: "lampe-bureau-led",
    category: "maison", price: 32.99, comparePrice: 45.99,
    description: "Lampe LED tactile 3 températures, 10 niveaux de luminosité. Port USB-C intégré.",
    features: ["3 températures", "10 niveaux", "Port USB-C", "Mémoire luminosité"],
    badge: "best-seller",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1513506003901-1e6a35f39d4a?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=600&fit=crop",
    ],
    stock: "en stock", rating: 4.6, reviews: 445,
  },

  // ─── DÉCO & CADEAUX ────────────────────────────────────────
  {
    id: "20", name: "Tasse personnalisée minimaliste", slug: "tasse-personnalisee",
    category: "deco", price: 22.99,
    description: "Tasse céramique 330ml personnalisable. Idéale cadeau anniversaire ou mariage.",
    features: ["330ml céramique", "Personnalisation", "Lave-vaisselle", "Boîte cadeau"],
    badge: "nouveau",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1572119865084-43c285814d63?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=600&fit=crop",
    ],
    stock: "en stock", rating: 4.9, reviews: 87,
  },
  {
    id: "21", name: "Lampe LED lune 3D", slug: "lampe-lune-led",
    category: "deco", price: 32.99, comparePrice: 44.99,
    description: "Lampe lune 3D en résine, 16 couleurs LED, télécommande. Déco tendance chambre ou salon.",
    features: ["16 couleurs", "Télécommande", "15cm diamètre", "USB-C rechargeable"],
    badge: "tendance",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1513506003901-1e6a35f39d4a?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=600&fit=crop",
    ],
    stock: "en stock", rating: 4.6, reviews: 264,
  },
  {
    id: "22", name: "Cadre photo LED personnalisé", slug: "cadre-photo-led",
    category: "deco", price: 28.99, comparePrice: 39.99,
    description: "Cadre lumineux LED avec vos photos. Effet chaleureux et moderne pour toute pièce.",
    features: ["LED chaud", "Format A4", "Personnalisable", "Câble USB"],
    badge: "best-seller",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop",
    ],
    stock: "en stock", rating: 4.7, reviews: 198,
  },
  {
    id: "23", name: "Bougie parfumée soja luxe", slug: "bougie-parfumee-soja",
    category: "deco", price: 18.99,
    description: "Bougie 100% cire de soja, parfums naturels. Durée de combustion 50h, mèche coton.",
    features: ["Cire soja pure", "50h combustion", "Mèche coton", "Parfums naturels"],
    badge: "tendance",
    image: "https://images.unsplash.com/photo-1602178668018-f2c8bfdf5bae?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1608181831688-8e53e3a43f41?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop",
    ],
    stock: "en stock", rating: 4.8, reviews: 321,
  },

  // ─── ÉCO-RESPONSABLE ───────────────────────────────────────
  {
    id: "24", name: "Gourde isotherme inox 500ml", slug: "gourde-isotherme-inox",
    category: "eco", price: 26.99, comparePrice: 39.99,
    description: "Gourde inox double paroi 500ml. Chaud 12h, froid 24h. Zéro plastique, zéro BPA.",
    features: ["Inox 18/8", "Double paroi", "Bouchon anti-fuite", "Lave-vaisselle"],
    badge: "best-seller",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=600&fit=crop",
    ],
    stock: "en stock", rating: 4.8, reviews: 512,
  },
  {
    id: "25", name: "Kit brosses bambou x4", slug: "brosse-dents-bambou",
    category: "eco", price: 11.99,
    description: "Pack 4 brosses biodégradables en bambou FSC. Poils medium, emballage recyclable.",
    features: ["Bambou FSC", "Pack de 4", "Poils medium", "100% recyclable"],
    badge: "tendance",
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop",
    ],
    stock: "en stock", rating: 4.5, reviews: 341,
  },
  {
    id: "26", name: "Sac à vrac réutilisable x5", slug: "sac-vrac-reutilisable",
    category: "eco", price: 13.99,
    description: "Set de 5 sacs en filet de coton bio pour courses en vrac. Lavables en machine.",
    features: ["Coton bio", "Pack de 5", "Lavable machine", "Tailles variées"],
    badge: "nouveau",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=600&h=600&fit=crop",
    ],
    stock: "en stock", rating: 4.6, reviews: 223,
  },
  {
    id: "27", name: "Lunch box inox hermétique", slug: "lunch-box-inox",
    category: "eco", price: 21.99, comparePrice: 31.99,
    description: "Boîte repas inox 3 compartiments, hermétique et étanche. Zéro plastique au quotidien.",
    features: ["3 compartiments", "Hermétique", "Inox alimentaire", "Lave-vaisselle"],
    badge: "best-seller",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&h=600&fit=crop",
    ],
    stock: "en stock", rating: 4.7, reviews: 298,
  },

  // ─── FITNESS ───────────────────────────────────────────────
  {
    id: "28", name: "Bandes de résistance x5", slug: "bandes-resistance",
    category: "fitness", price: 19.99, comparePrice: 29.99,
    description: "Set 5 bandes latex résistances variables. Idéal musculation, yoga et rééducation.",
    features: ["5 résistances", "Latex naturel", "Anti-déchirement", "Sac inclus"],
    badge: "best-seller",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=600&fit=crop",
    ],
    stock: "en stock", rating: 4.7, reviews: 567,
  },
  {
    id: "29", name: "Tapis de yoga antidérapant", slug: "tapis-yoga-antiderapant",
    category: "fitness", price: 34.99, comparePrice: 49.99,
    description: "Tapis yoga TPE 6mm, surface antidérapante double face. Lignes d'alignement imprimées.",
    features: ["TPE écologique", "6mm épaisseur", "Double face", "Sangle incluse"],
    badge: "tendance",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=600&fit=crop",
    ],
    stock: "en stock", rating: 4.6, reviews: 389,
  },
  {
    id: "30", name: "Rouleau de massage fascia", slug: "rouleau-massage-fascia",
    category: "fitness", price: 24.99,
    description: "Foam roller haute densité pour récupération musculaire. Idéal après sport.",
    features: ["Haute densité", "33cm longueur", "Surface texturée", "Tous muscles"],
    badge: "nouveau",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=600&fit=crop",
    ],
    stock: "en stock", rating: 4.5, reviews: 234,
  },
  {
    id: "31", name: "Corde à sauter intelligente", slug: "corde-sauter-intelligente",
    category: "fitness", price: 27.99, comparePrice: 39.99,
    description: "Corde à sauter avec compteur digital intégré. Poids ajustables, parfaite cardio.",
    features: ["Compteur digital", "Poids ajustables", "Longueur réglable", "LCD affichage"],
    badge: "tendance",
    image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
    ],
    stock: "en stock", rating: 4.4, reviews: 178,
  },
  {
    id: "32", name: "Shaker protéine 700ml", slug: "shaker-proteine",
    category: "fitness", price: 14.99,
    description: "Shaker sans BPA 700ml avec grille anti-grumeaux. Graduation ml/oz, couvercle hermétique.",
    features: ["700ml", "Sans BPA", "Anti-grumeaux", "Hermétique"],
    badge: "best-seller",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=600&fit=crop",
    ],
    stock: "en stock", rating: 4.5, reviews: 445,
  },

  // ─── BEAUTÉ ────────────────────────────────────────────────
  {
    id: "33", name: "Masque LED thérapie lumière", slug: "masque-led-therapie",
    category: "beaute", price: 54.99, comparePrice: 89.99,
    description: "Masque LED 7 couleurs pour soin du visage. Réduit rides, acné et taches. Cliniquement testé.",
    features: ["7 couleurs LED", "Anti-âge", "Anti-acné", "20 min par séance"],
    badge: "tendance",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&h=600&fit=crop",
    ],
    stock: "en stock", rating: 4.5, reviews: 234,
  },
  {
    id: "34", name: "Rouleau jade gua sha", slug: "rouleau-jade-gua-sha",
    category: "beaute", price: 16.99,
    description: "Set rouleau jade + gua sha en quartz rose naturel. Drainant, anti-gonflement.",
    features: ["Quartz rose", "Double têtes", "Anti-gonflement", "Drainage lymphatique"],
    badge: "nouveau",
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&h=600&fit=crop",
    ],
    stock: "en stock", rating: 4.4, reviews: 312,
  },
  {
    id: "35", name: "Sérum vitamine C 30ml", slug: "serum-vitamine-c",
    category: "beaute", price: 22.99, comparePrice: 34.99,
    description: "Sérum visage 20% vitamine C pure. Éclat, anti-taches et anti-rides. Tous types de peau.",
    features: ["20% vit. C", "Anti-taches", "Anti-rides", "Tous types peau"],
    badge: "best-seller",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=600&fit=crop",
    ],
    stock: "en stock", rating: 4.7, reviews: 489,
  },
  {
    id: "36", name: "Brosse nettoyante visage sonique", slug: "brosse-nettoyante-sonique",
    category: "beaute", price: 29.99, comparePrice: 44.99,
    description: "Brosse nettoyante visage 6000 vibrations/min. Nettoie 6x mieux qu'à la main.",
    features: ["6000 vib/min", "IPX6 waterproof", "USB rechargeable", "3 vitesses"],
    badge: "tendance",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&h=600&fit=crop",
    ],
    stock: "en stock", rating: 4.5, reviews: 267,
  },
  {
    id: "37", name: "Lisseur ionique céramique", slug: "lisseur-ionique",
    category: "beaute", price: 39.99, comparePrice: 59.99,
    description: "Lisseur professionnel ionique céramique. Chauffe en 30 sec, protection 230°C.",
    features: ["Ionique céramique", "30 sec chauffe", "230°C max", "Arrêt auto"],
    badge: "best-seller",
    image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&h=600&fit=crop",
    ],
    stock: "en stock", rating: 4.6, reviews: 378,
  },

  // ─── CUISINE ───────────────────────────────────────────────
  {
    id: "38", name: "Machine à café capsules", slug: "machine-cafe-capsules",
    category: "cuisine", price: 79.99, comparePrice: 119.99,
    description: "Machine expresso compatible Nespresso. 19 bars de pression, chauffe en 25 secondes.",
    features: ["19 bars", "25 sec chauffe", "Compatible Nespresso", "Réservoir 1L"],
    badge: "tendance",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1572119865084-43c285814d63?w=600&h=600&fit=crop",
    ],
    stock: "en stock", rating: 4.7, reviews: 445,
  },
  {
    id: "39", name: "Blender portable USB", slug: "blender-portable-usb",
    category: "cuisine", price: 29.99, comparePrice: 44.99,
    description: "Mini blender rechargeable USB-C. Smoothies, shakes protéinés partout. 6 lames inox.",
    features: ["USB-C rechargeable", "6 lames inox", "400ml", "Nettoyage auto"],
    badge: "best-seller",
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?w=600&h=600&fit=crop",
    ],
    stock: "en stock", rating: 4.6, reviews: 512,
  },
  {
    id: "40", name: "Coupe-légumes mandoline pro", slug: "mandoline-legumes",
    category: "cuisine", price: 24.99, comparePrice: 36.99,
    description: "Mandoline multifonction 5 lames inox. Julienne, tranches fines, râpe. Sécurité main.",
    features: ["5 lames inox", "Julienne & tranches", "Protection main", "Lave-vaisselle"],
    badge: "nouveau",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=600&fit=crop",
    ],
    stock: "en stock", rating: 4.6, reviews: 334,
  },
  {
    id: "41", name: "Moule silicone formes variées", slug: "moule-silicone",
    category: "cuisine", price: 15.99,
    description: "Set 6 moules silicone flexibles. Gâteaux, muffins, chocolats. Résiste -40° à +230°C.",
    features: ["6 moules", "Silicone platine", "-40° à +230°C", "Anti-adhérent"],
    badge: "tendance",
    image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=600&h=600&fit=crop",
    ],
    stock: "en stock", rating: 4.5, reviews: 189,
  },
  {
    id: "42", name: "Balance cuisine numérique", slug: "balance-cuisine",
    category: "cuisine", price: 12.99,
    description: "Balance de précision 0.1g à 5kg. Écran LCD, tare automatique, 4 unités de mesure.",
    features: ["0.1g précision", "5kg max", "Tare auto", "4 unités"],
    badge: "best-seller",
    image: "https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600&h=600&fit=crop",
    ],
    stock: "en stock", rating: 4.4, reviews: 223,
  },

  // ─── VOYAGE ────────────────────────────────────────────────
  {
    id: "43", name: "Organisateur valise x6", slug: "organisateur-valise",
    category: "voyage", price: 22.99, comparePrice: 34.99,
    description: "Set 6 pochettes rangement valise avec compression. Gain de place 30%. Nylon léger.",
    features: ["6 pochettes", "Compression 30%", "Nylon léger", "Tailles variées"],
    badge: "best-seller",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&h=600&fit=crop",
    ],
    stock: "en stock", rating: 4.7, reviews: 445,
  },
  {
    id: "44", name: "Adaptateur universel 150 pays", slug: "adaptateur-universel",
    category: "voyage", price: 19.99,
    description: "Adaptateur voyage universel 150 pays avec 4 ports USB et 1 USB-C. Sécurité intégrée.",
    features: ["150 pays", "4 USB + 1 USB-C", "Sécurité fusible", "Compact"],
    badge: "tendance",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop",
    ],
    stock: "en stock", rating: 4.5, reviews: 312,
  },
  {
    id: "45", name: "Trousse de toilette imperméable", slug: "trousse-toilette",
    category: "voyage", price: 17.99, comparePrice: 26.99,
    description: "Trousse toilette imperméable grande capacité. Compartiments multiples, crochet suspendu.",
    features: ["Imperméable", "Crochet suspendu", "Grande capacité", "Nylon résistant"],
    badge: "nouveau",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=600&fit=crop",
    ],
    stock: "en stock", rating: 4.6, reviews: 367,
  },
  {
    id: "46", name: "Oreiller gonflable voyage", slug: "oreiller-gonflable",
    category: "voyage", price: 14.99,
    description: "Oreiller de voyage ergonomique gonflable. Support cou, tête et menton. Ultra-compact.",
    features: ["Gonflable", "Ergonomique", "Velours doux", "Sac compact"],
    badge: "tendance",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop",
    ],
    stock: "en stock", rating: 4.3, reviews: 178,
  },

  // ─── BÉBÉ & ENFANTS ────────────────────────────────────────
  {
    id: "47", name: "Veilleuse étoiles projection", slug: "veilleuse-etoiles",
    category: "bebe", price: 24.99, comparePrice: 36.99,
    description: "Veilleuse projecteur étoiles et lune. 8 couleurs, sons apaisants, minuterie 1h.",
    features: ["8 couleurs", "Sons apaisants", "Minuterie 1h", "USB rechargeable"],
    badge: "best-seller",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&h=600&fit=crop",
    ],
    stock: "en stock", rating: 4.8, reviews: 423,
  },
  {
    id: "48", name: "Thermomètre bébé sans contact", slug: "thermometre-bebe",
    category: "bebe", price: 29.99, comparePrice: 44.99,
    description: "Thermomètre frontal infrarouge. Résultat en 1 seconde, mémoire 35 mesures.",
    features: ["1 sec résultat", "Sans contact", "Mémoire 35", "Alerte fièvre"],
    badge: "tendance",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=600&fit=crop",
    ],
    stock: "en stock", rating: 4.7, reviews: 312,
  },
  {
    id: "49", name: "Tapis d'éveil musical bébé", slug: "tapis-eveil-bebe",
    category: "bebe", price: 34.99, comparePrice: 49.99,
    description: "Tapis d'éveil 0-12 mois avec arche, miroir et jouets musicaux amovibles.",
    features: ["Arche amovible", "Miroir", "Sons et lumières", "Lavable machine"],
    badge: "nouveau",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&h=600&fit=crop",
    ],
    stock: "en stock", rating: 4.6, reviews: 189,
  },
  {
    id: "50", name: "Babyphone vidéo WiFi", slug: "babyphone-video",
    category: "bebe", price: 59.99, comparePrice: 89.99,
    description: "Babyphone caméra HD 1080p WiFi. Vision nocturne, berceuses, alerte température.",
    features: ["1080p HD", "Vision nocturne", "Alerte température", "App smartphone"],
    badge: "best-seller",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=600&fit=crop",
    ],
    stock: "en stock", rating: 4.7, reviews: 334,
  },
  {
    id: "51", name: "Jouet Montessori tri formes", slug: "montessori-tri-formes",
    category: "bebe", price: 19.99,
    description: "Jeu éducatif Montessori en bois naturel. Tri de formes et couleurs, 1-4 ans.",
    features: ["Bois naturel", "Peinture non-toxique", "18 pièces", "Sac rangement"],
    badge: "tendance",
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&h=600&fit=crop",
    ],
    stock: "en stock", rating: 4.6, reviews: 201,
  },
  {
    id: "52", name: "Sac à langer imperméable", slug: "sac-a-langer",
    category: "bebe", price: 37.99, comparePrice: 54.99,
    description: "Sac à langer grande capacité avec tapis à langer intégré. 12 poches, USB intégré.",
    features: ["Tapis intégré", "12 poches", "Port USB", "Imperméable"],
    badge: "nouveau",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&h=600&fit=crop",
    ],
    stock: "en stock", rating: 4.6, reviews: 234,
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
