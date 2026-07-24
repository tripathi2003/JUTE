import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { ProductListJsonLd } from "@/components/JsonLd";
import { PRODUCTS } from "../data/products";

const BASE_URL = "https://jute-ashok-enterprises.vercel.app";

export const metadata: Metadata = {
  title: "Buy Premium Jute Bags Online — Eco-Friendly Handcrafted Bags India",
  description:
    "Shop premium handcrafted jute tote bags, gift bags, shopping bags & Madhubani art bags. 100% organic, GOTS certified, direct from manufacturer. Bulk orders welcome. Pan-India delivery.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ashok Enterprises — Premium Jute Bags & Eco-Friendly Products India",
    description:
      "Handcrafted jute bags, curing sheets & bulk raw materials. Direct from manufacturer in West Bengal. GOTS certified, 100% natural.",
    url: BASE_URL,
  },
};

export default function Home() {
  const topProducts = PRODUCTS.slice(0, 6).map((p) => ({
    name: p.name,
    description: p.description,
    image: `${BASE_URL}${p.image}`,
    price: p.price,
    rating: p.rating,
    reviewCount: p.reviews,
  }));

  return (
    <>
      <ProductListJsonLd products={topProducts} sellerName="Ashok Enterprises" />
      <HomeClient />
    </>
  );
}
