import type { Metadata } from "next";
import ShopClient from "./ShopClient";
import { ProductListJsonLd } from "@/components/JsonLd";
import { PRODUCTS } from "../../data/products";

const BASE_URL = "https://ashokenterprises.in";

export const metadata: Metadata = {
  title: "Shop Jute Bags — Tote, Gift, Shopping & Lunch Bags Online",
  description:
    "Browse & buy premium handcrafted jute bags online. Tote bags, shopping bags, gift bags, lunch bags with Madhubani & Pichwai art. Wholesale pricing, bulk orders, direct from manufacturer. GOTS certified organic jute.",
  keywords: [
    "buy jute bags online",
    "jute tote bags shop",
    "jute shopping bags",
    "jute gift bags",
    "jute lunch bags",
    "wholesale jute bags",
    "artisanal jute bags India",
    "printed jute bags",
    "custom jute bags",
    "eco friendly bags shop",
  ],
  alternates: {
    canonical: "/shop",
  },
  openGraph: {
    title: "Shop Jute Bags — Tote, Gift, Shopping & Lunch Bags | Ashok Enterprises",
    description:
      "Browse & buy premium handcrafted jute bags. Wholesale pricing, bulk orders welcome. Direct from manufacturer.",
    url: `${BASE_URL}/shop`,
  },
};

export default function Shop() {
  const allProducts = PRODUCTS.map((p) => ({
    name: p.name,
    description: p.description,
    image: `${BASE_URL}${p.image}`,
    price: p.price,
    rating: p.rating,
    reviewCount: p.reviews,
  }));

  return (
    <>
      <ProductListJsonLd products={allProducts} sellerName="Ashok Enterprises" />
      <ShopClient />
    </>
  );
}
