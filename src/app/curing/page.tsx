"use client";

import React, { useState, useMemo, useEffect } from "react";
import { Phone, MessageCircle, ShieldCheck, X } from "lucide-react";
import styles from "./curing.module.css";

interface SpecsType {
  dimensions: string;
  thickness: string;
  feature: string;
  origin: string;
}

interface ProductType {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  specs: SpecsType;
  image: string;
  images: string[];
}

const PRODUCTS: ProductType[] = [
  {
    id: "raw-curing-sheet",
    name: "Concrete Curing Jute Sheet (Hessian Wrap)",
    price: 4500,
    category: "Curing Materials",
    description: "Heavy-duty, high water-retentive natural jute sheets. Designed specifically for construction sites to wrap concrete columns, beams, and slabs to prevent rapid evaporation and ensure maximum concrete strength.",
    specs: {
      dimensions: "1.2m x 100m Roll",
      thickness: "350 GSM (High Density)",
      feature: "Superior Water Retention",
      origin: "West Bengal, India"
    },
    image: "/raw_concrete_curing.png",
    images: ["/raw_concrete_curing.png", "/curing_sheet_detail.png"]
  },
  {
    id: "raw-hessian-roll",
    name: "Premium Burlap Hessian Roll",
    price: 2800,
    category: "Hessian Cloth",
    description: "Natural brown raw jute fabric in rolls. Perfect for agricultural root ball wrapping, landscaping, soil erosion control (geotextiles), frost protection, and bulk rustic decorations.",
    specs: {
      dimensions: "1.5m x 50m Roll",
      thickness: "280 GSM (Medium Weave)",
      feature: "Breathable & Eco-friendly",
      origin: "Assam, India"
    },
    image: "/raw_hessian_roll.png",
    images: ["/raw_hessian_roll.png", "/hessian_roll_detail.png"]
  },
  {
    id: "raw-white-sack",
    name: "White Laminated Woven Packing Bag",
    price: 250,
    category: "Packing Sacks",
    description: "Extra-tough, UV-stabilized white woven sacks. Highly resilient and moisture-resistant, making them ideal for heavy packing, flood control sand hoarding, and construction materials.",
    specs: {
      dimensions: "Pack of 25 Bags (55cm x 95cm)",
      thickness: "90 GSM (Laminated)",
      feature: "Water & Dust Resistant",
      origin: "Gujarat, India"
    },
    image: "/raw_white_woven_bag.png",
    images: ["/raw_white_woven_bag.png", "/white_woven_bag_detail.png"]
  },
  {
    id: "raw-gunny-bags",
    name: "Bulk Jute Sacking Bags (Gunny Bags)",
    price: 420,
    category: "Packing Sacks",
    description: "Traditional high-capacity double-sewed jute sacking sacks. Extremely robust, breathable, and designed for heavy warehouse storage of grains, rice, potatoes, onions, and agricultural logistics.",
    specs: {
      dimensions: "Pack of 10 Bags (65cm x 105cm)",
      thickness: "480 GSM (Extra Heavy)",
      feature: "Heavy-Duty Wear Resistant",
      origin: "West Bengal, India"
    },
    image: "/raw_gunny_bags.png",
    images: ["/raw_gunny_bags.png", "/gunny_bags_detail.png"]
  },
  {
    id: "raw-sacking-bag",
    name: "Heavy-Grade Jute Sacking Rolls",
    price: 3200,
    category: "Packing Sacks",
    description: "Classic, coarse-weave raw jute sacking rolls. Highly breathable and double-strength, designed for wrapping nursery plants, bulk logistics, construction floor protection, and heavy packing.",
    specs: {
      dimensions: "1.2m x 50m Roll",
      thickness: "450 GSM (Heavy Duty)",
      feature: "Highly Breathable Fiber",
      origin: "West Bengal, India"
    },
    image: "/raw_sacking_rolls.png",
    images: ["/raw_sacking_rolls.png"]
  }
];

const BANNER_IMAGES = [
  {
    src: "/raw_concrete_curing.png",
    alt: "Concrete Curing Jute Sheets on Site"
  },
  {
    src: "/raw_concrete_curing_2.png",
    alt: "High-density concrete curing rolls"
  },
  {
    src: "/jute_concrete_curing.png",
    alt: "Jute sheets for building construction"
  },
  {
    src: "/jute_curing_process.png",
    alt: "Raw Jute processing and curing"
  }
];

export default function Curing() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [currentBannerIndex, setCurrentBannerIndex] = useState<number>(0);

  const categories = ["All", "Curing Materials", "Hessian Cloth", "Packing Sacks", "Twines"];

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") return PRODUCTS;
    return PRODUCTS.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    if (selectedProduct) {
      setActiveImage(selectedProduct.images?.[0] || selectedProduct.image);
    } else {
      setActiveImage(null);
    }
  }, [selectedProduct]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % BANNER_IMAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className={`${styles.curingPage} animate-fade-in`}>
        {/* Banner */}
        <section className={styles.banner}>
          <div className="container">
            <div className={styles.bannerGrid}>
              <div className={styles.bannerText}>
                <span className={styles.badge}>Industrial raw materials</span>
                <h1>Jute Raw Materials</h1>
                <p>
                  Direct sourcing of high-density construction curing sheets, hessian cloth rolls, twine, and bulk packing bags. Sustainable, highly durable, and biodegradable solutions.
                </p>
              </div>
              <div className={styles.bannerImageContainer}>
                {BANNER_IMAGES.map((img, index) => (
                  <div
                    key={img.src}
                    className={`${styles.bannerSlide} ${index === currentBannerIndex ? styles.activeSlide : ""}`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className={styles.bannerImage}
                    />
                  </div>
                ))}
                
                {/* Arrow Navigation */}
                <button
                  className={styles.bannerArrowLeft}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentBannerIndex((prev) => (prev - 1 + BANNER_IMAGES.length) % BANNER_IMAGES.length);
                  }}
                  aria-label="Previous slide"
                >
                  &lsaquo;
                </button>
                <button
                  className={styles.bannerArrowRight}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentBannerIndex((prev) => (prev + 1) % BANNER_IMAGES.length);
                  }}
                  aria-label="Next slide"
                >
                  &rsaquo;
                </button>

                {/* Dot Indicators */}
                <div className={styles.bannerDots}>
                  {BANNER_IMAGES.map((_, index) => (
                    <button
                      key={index}
                      className={`${styles.bannerDot} ${index === currentBannerIndex ? styles.activeDot : ""}`}
                      onClick={() => setCurrentBannerIndex(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Catalog Filters and Grid */}
        <section className="section-padding" style={{ backgroundColor: "var(--background)" }}>
          <div className="container">
            <div className={styles.catalogHeader}>
              <h2 className={styles.sectionTitle}>Raw Materials Catalog</h2>
              <p className={styles.sectionSubtitle}>
                Select your required raw jute specifications. Click Buy / Enquire to view details and contact our sales desk directly.
              </p>
            </div>

            {/* Filter Bar */}
            <div className={styles.filterBar}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`${styles.filterBtn} ${selectedCategory === cat ? styles.activeFilter : ""}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Products Grid */}
            <div className={styles.productsGrid}>
              {filteredProducts.map((product) => (
                <div key={product.id} className={styles.productCard}>
                  <div className={styles.productImageContainer} onClick={() => setSelectedProduct(product)} style={{ cursor: "pointer" }}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className={styles.productImage}
                    />
                    <span className={styles.productBadge}>{product.category}</span>
                  </div>
                  <div className={styles.productDetails}>
                    <h3 className={styles.productName} onClick={() => setSelectedProduct(product)} style={{ cursor: "pointer" }}>
                      {product.name}
                    </h3>
                    <p className={styles.productDesc}>{product.description}</p>

                    {/* Product specs table */}
                    <div className={styles.specsGrid}>
                      <div className={styles.specRow}>
                        <span className={styles.specLabel}>Dimensions</span>
                        <span className={styles.specVal}>{product.specs.dimensions}</span>
                      </div>
                      <div className={styles.specRow}>
                        <span className={styles.specLabel}>Grade / Density</span>
                        <span className={styles.specVal}>{product.specs.thickness}</span>
                      </div>
                      <div className={styles.specRow}>
                        <span className={styles.specLabel}>Feature</span>
                        <span className={styles.specVal}>{product.specs.feature}</span>
                      </div>
                      <div className={styles.specRow}>
                        <span className={styles.specLabel}>Sourced From</span>
                        <span className={styles.specVal}>{product.specs.origin}</span>
                      </div>
                    </div>

                    <div className={styles.priceRow}>
                      <div className={styles.priceContainer}>
                        <span className={styles.currencySymbol}>₹</span>
                        <span className={styles.priceVal}>{product.price.toLocaleString("en-IN")}</span>
                      </div>
                      <button
                        className={styles.enquireBtn}
                        onClick={() => setSelectedProduct(product)}
                      >
                        <Phone size={14} /> Buy / Enquire
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industrial Applications Section */}
        <section className={styles.applicationsSection}>
          <div className="container">
            <div className={styles.bannerGrid}>
              <div className={styles.bannerText}>
                <span className={styles.subtitle} style={{ color: "var(--primary)", fontWeight: 600, fontSize: "0.85rem", textTransform: "uppercase" }}>Construction Curing</span>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "2.2rem", color: "var(--primary)", marginBottom: "16px" }}>
                  Concrete Curing on Construction Sites
                </h2>
                <p style={{ fontSize: "1rem", lineHeight: "1.65", opacity: 0.9 }}>
                  Ashok Enterprises provides high-density, raw jute sheets specially woven for building construction projects. 
                  Wrapping concrete pillars, columns, and slabs with wet jute sacking sheets (Hessian bags) prevents the water from evaporating too quickly during the critical curing phase.
                </p>
                <p style={{ fontSize: "1rem", lineHeight: "1.65", opacity: 0.9 }}>
                  By maintaining continuous dampness, our premium jute wraps ensure concrete achieves maximum compressive strength, durability, and crack resistance.
                </p>
              </div>
              <div className={styles.appImageContainer}>
                <img
                  src="/raw_concrete_curing.png"
                  alt="Wet Jute Sheets Concrete Curing on Site"
                  className={styles.appImage}
                />
              </div>
            </div>

            <div className={styles.bannerGrid} style={{ marginTop: "64px", direction: "rtl" }}>
              <div className={styles.bannerText} style={{ direction: "ltr" }}>
                <span className={styles.subtitle} style={{ color: "var(--primary)", fontWeight: 600, fontSize: "0.85rem", textTransform: "uppercase" }}>Twine & Ropes</span>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "2.2rem", color: "var(--primary)", marginBottom: "16px" }}>
                  Strong Biodegradable Ropes & Twines
                </h2>
                <p style={{ fontSize: "1rem", lineHeight: "1.65", opacity: 0.9 }}>
                  Jute fibers are twisted and spun into multiple plies to create highly reliable, eco-friendly ropes (known locally as "rasan" or "rassa"). 
                  These are extensively used for bundling agricultural crops, secure packaging, tying construction scaffolding, and creating artisanal crafts.
                </p>
                <p style={{ fontSize: "1rem", lineHeight: "1.65", opacity: 0.9 }}>
                  Fully biodegradable and compostable, our ropes offer excellent knot-holding ability and high tensile strength without harming the environment.
                </p>
              </div>
              <div className={styles.appImageContainer}>
                <img
                  src="/jute_rope_making.png"
                  alt="Jute Rope Twist Spinning in Factory"
                  className={styles.appImage}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Processing & Stitching Steps Section */}
        <section className={styles.processSection}>
          <div className="container">
            <div className="text-center" style={{ textAlign: "center", marginBottom: "48px" }}>
              <span className={styles.subtitle} style={{ color: "var(--primary)", fontWeight: 600, fontSize: "0.85rem", textTransform: "uppercase" }}>Jute Lifecycle</span>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "2.5rem", color: "var(--primary)", marginTop: "8px" }}>
                How It is Made & Stitched
              </h2>
              <p style={{ maxWidth: "600px", margin: "12px auto 0 auto", opacity: 0.8, fontSize: "0.95rem" }}>
                From biological retting to state-of-the-art weaving and industrial sewing, follow the journey of the golden fiber.
              </p>
            </div>

            <div className={styles.processGrid}>
              <div className={styles.processCard}>
                <img src="/jute_curing_process.png" alt="Retting and washing" className={styles.processImage} />
                <div className={styles.stepHeader}>
                  <div className={styles.stepNumber}>1</div>
                  <h4>Retting & Stripping</h4>
                </div>
                <p>
                  Harvested stalks are submerged in slow-flowing fresh water for 12 to 18 days (retting) to decompose the pectin gums. Fibers are then stripped off the woody core manually and thoroughly washed.
                </p>
              </div>

              <div className={styles.processCard}>
                <img src="/jute_rope_making.png" alt="Combing and spinning jute yarn" className={styles.processImage} />
                <div className={styles.stepHeader}>
                  <div className={styles.stepNumber}>2</div>
                  <h4>Spinning & Weaving</h4>
                </div>
                <p>
                  Sun-dried raw golden fibers are combed and spun into strong yarns. These yarns are either twisted into heavy-duty ropes and twines, or woven on power looms into high-density jute fabrics and sacking sheets.
                </p>
              </div>

              <div className={styles.processCard}>
                <img src="/jute_stitching.png" alt="Stitching and bag assembly" className={styles.processImage} />
                <div className={styles.stepHeader}>
                  <div className={styles.stepNumber}>3</div>
                  <h4>Sewing & Stitching</h4>
                </div>
                <p>
                  Woven jute sheets are cut and stitched using heavy-duty industrial sewing machines to create shopping bags, sacks, and custom wraps. Heavy-grade cotton thread ensures secure seams and high load-bearing limits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bulk Enquiry Bar */}
        <section style={{ backgroundColor: "#e8f0e6", padding: "40px 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
          <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <ShieldCheck size={40} style={{ color: "var(--primary)" }} />
              <div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.35rem", color: "var(--primary)" }}>Bulk Commercial Pricing Available</h3>
                <p style={{ fontSize: "0.9rem", opacity: 0.8, marginTop: "4px" }}>Are you sourcing for a large-scale construction or packaging site? Contact our team directly.</p>
              </div>
            </div>
            <a
              href="tel:+919968648541"
              className={styles.bulkCallBtn}
              style={{
                backgroundColor: "var(--primary)",
                color: "white",
                padding: "12px 28px",
                borderRadius: "var(--radius-full)",
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "var(--shadow-sm)",
                transition: "var(--transition)"
              }}
            >
              Call: +91 99686 48541
            </a>
          </div>
        </section>
      </div>

      {/* Product Detail Modal (Rendered outside the animated container to prevent stacking context bugs) */}
      {selectedProduct && (
        <div className={styles.modalOverlay} onClick={() => setSelectedProduct(null)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeModal}
              onClick={() => setSelectedProduct(null)}
              aria-label="Close product details modal"
            >
              <X size={20} />
            </button>

            <div className={styles.modalContent}>
              <div className={styles.modalImageContainer}>
                <div className={styles.modalImage}>
                  <img
                    src={activeImage || selectedProduct.image}
                    alt={selectedProduct.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                {selectedProduct.images && selectedProduct.images.length > 1 && (
                  <div className={styles.modalThumbnails}>
                    {selectedProduct.images.map((imgUrl: string) => (
                      <button
                        key={imgUrl}
                        className={`${styles.thumbnailBtn} ${
                          activeImage === imgUrl ? styles.activeThumbnail : ""
                        }`}
                        onClick={() => setActiveImage(imgUrl)}
                      >
                        <img
                          src={imgUrl}
                          alt={`${selectedProduct.name} thumbnail`}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className={styles.modalInfo}>
                <span className={styles.productBadge} style={{ position: "static", display: "inline-block", width: "fit-content", marginBottom: "8px" }}>
                  {selectedProduct.category}
                </span>
                <h2 className={styles.modalTitle}>{selectedProduct.name}</h2>
                <p className={styles.modalDesc}>{selectedProduct.description}</p>

                {/* Specs Table */}
                <table className={styles.specTable}>
                  <tbody>
                    <tr>
                      <td className={styles.specLabel}>Dimensions</td>
                      <td>{selectedProduct.specs.dimensions}</td>
                    </tr>
                    <tr>
                      <td className={styles.specLabel}>Grade / Density</td>
                      <td>{selectedProduct.specs.thickness}</td>
                    </tr>
                    <tr>
                      <td className={styles.specLabel}>Special Feature</td>
                      <td>{selectedProduct.specs.feature}</td>
                    </tr>
                    <tr>
                      <td className={styles.specLabel}>Sourced From</td>
                      <td>{selectedProduct.specs.origin}</td>
                    </tr>
                  </tbody>
                </table>

                <div className={styles.modalPriceRow}>
                  <span className={styles.modalPrice}>
                    ₹{selectedProduct.price.toLocaleString("en-IN")}
                  </span>
                  <span style={{ fontSize: "0.85rem", opacity: 0.8 }}>Bulk Order Price</span>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "16px" }}>
                  <a
                    href="tel:+919968648541"
                    className={styles.contactPhoneBtn}
                  >
                    <Phone size={18} /> Call: +91 99686 48541
                  </a>
                  <a
                    href={`https://wa.me/919968648541?text=Hi,%20I%20am%20interested%20in%20ordering%20raw%20material%20"${selectedProduct.name}"%20(Price:%20₹${selectedProduct.price})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactWhatsappBtn}
                  >
                    <MessageCircle size={18} /> WhatsApp: +91 99686 48541
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
