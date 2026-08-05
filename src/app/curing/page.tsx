import type { Metadata } from "next";
import CuringClient from "./CuringClient";

const BASE_URL = "https://jute-ashok-enterprises.vercel.app";

export const metadata: Metadata = {
  title: "Jute Curing Sheets, Hessian Cloth & Raw Materials — Bulk Orders",
  verification: {
    google: "google8aafde1e7584c324",
  },
  description:
    "Buy industrial-grade jute curing sheets for concrete construction, hessian cloth rolls, burlap fabric, gunny bags & jute sacking bags. High-density 350-480 GSM. Bulk commercial pricing. Direct from manufacturer. Pan-India delivery.",
  keywords: [
    "jute curing sheets",
    "concrete curing jute",
    "hessian cloth rolls",
    "burlap fabric India",
    "gunny bags wholesale",
    "jute sacking bags",
    "jute raw materials",
    "construction jute sheets",
    "concrete curing sheets",
    "jute packing bags",
    "agricultural jute bags",
    "jute geotextile",
    "jute rope India",
    "bulk jute supplier",
  ],
  alternates: {
    canonical: "/curing",
  },
  openGraph: {
    title: "Jute Curing Sheets & Raw Materials — Bulk Orders | Ashok Enterprises",
    description:
      "Industrial-grade jute curing sheets, hessian cloth, gunny bags & sacking rolls. Bulk commercial pricing, direct from manufacturer.",
    url: `${BASE_URL}/curing`,
  },
};

export default function Curing() {
  return <CuringClient />;
}
