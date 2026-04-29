import type { Badge as BadgeType } from "@/lib/products";

const styles: Record<BadgeType, string> = {
  "best-seller": "bg-amber-500 text-white",
  tendance: "bg-violet-600 text-white",
  nouveau: "bg-emerald-500 text-white",
};

const labels: Record<BadgeType, string> = {
  "best-seller": "Best-seller",
  tendance: "Tendance",
  nouveau: "Nouveau",
};

export default function Badge({ badge }: { badge: BadgeType }) {
  return (
    <span
      className={`text-xs font-semibold px-2 py-0.5 rounded-full ${styles[badge]}`}
    >
      {labels[badge]}
    </span>
  );
}
