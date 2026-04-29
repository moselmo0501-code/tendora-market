import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import type { CartItem } from "@/lib/cart";

export async function POST(req: NextRequest) {
  try {
    const { items }: { items: CartItem[] } = await req.json();

    if (!items || items.length === 0) {
      return NextResponse.json({ error: "Panier vide" }, { status: 400 });
    }

    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

    const line_items = items.map(({ product, quantity }) => ({
      quantity,
      price_data: {
        currency: "eur",
        unit_amount: Math.round(product.price * 100), // en centimes
        product_data: {
          name: product.name,
          description: product.description.slice(0, 255),
          images: [product.image],
        },
      },
    }));

    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      success_url: `${siteUrl}/commande-confirmee?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/commande-annulee`,
      payment_method_types: ["card"],
      billing_address_collection: "required",
      shipping_address_collection: {
        allowed_countries: [
          "FR", "BE", "CH", "LU", "DE", "ES", "IT", "NL", "PT", "GB",
        ],
      },
      metadata: {
        source: "trendora_market",
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Erreur inconnue";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
