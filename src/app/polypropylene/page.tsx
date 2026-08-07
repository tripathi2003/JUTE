import type { Metadata } from "next";
import PolypropyleneClient from "@/app/polypropylene/PolypropyleneClient";

const BASE_URL = "https://jute-ashok-enterprises.vercel.app";

export const metadata: Metadata = {
  title: "Polypropylene (PP) Woven Bags & Packing Sacks — Factory Bulk Wholesale",
  verification: {
    google: "google8aafde1e7584c324",
  },
  description:
    "Buy heavy-duty White Laminated Polypropylene (PP) Woven Packing Bags, HDPE UV-stabilized Sandbags, Transparent Seed Sacks & Striped Logistics Bags. Factory direct prices, custom brand printing & Pan-India delivery.",
  keywords: [
    "polypropylene woven bags",
    "pp woven sacks",
    "white laminated packing bag",
    "hdpe sandbags",
    "flood control sandbags",
    "grain storage sacks",
    "rubble packing bags",
    "custom printed woven bags",
    "pp sacks manufacturer India",
    "woven packing bags wholesale",
    "ashok enterprises pp bags",
  ],
  alternates: {
    canonical: "/polypropylene",
  },
  openGraph: {
    title: "PP Woven Packing Bags & HDPE Sacks — Factory Direct Wholesale | Ashok Enterprises",
    description:
      "Extra-tough, UV-stabilized white laminated woven bags, heavy sandbags & agricultural sacks. Direct factory pricing.",
    url: `${BASE_URL}/polypropylene`,
  },
};

export default function PolypropylenePage() {
  return <PolypropyleneClient />;
}
