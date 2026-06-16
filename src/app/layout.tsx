import React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ashok Enterprises | Premium Artisanal Jute Shop",
  description: "Discover eco-friendly premium jute products, handcrafted bags, rugs, and storage baskets. Carbon-negative, 100% natural and sustainable.",
  keywords: "jute, organic jute, eco-friendly shopping, jute bags, jute rug, sustainable bags, ashok enterprises",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable}`} data-scroll-behavior="smooth">
      <body style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <CartProvider>
          <Navbar />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
