"use client";

import React from "react";
import Link from "next/link";
import {
  Leaf,
  ArrowRight,
  Shield,
  Sprout,
  Globe,
  Layers,
  ShoppingBag,
  Package,
  Wrench,
  Shirt,
  Home as HomeIcon,
  Phone,
  X,
  MessageCircle,
} from "lucide-react";
import styles from "./page.module.css";

interface FeaturedProduct {
  id: string;
  name: string;
  price: number;
  category: string;
  rating: number;
  reviews: number;
  image: string;
}

const FEATURED_PRODUCTS: FeaturedProduct[] = [
  {
    id: "prod-1",
    name: "Handwoven Premium Jute Rug (5x7 ft)",
    price: 4999,
    category: "Rugs & Mats",
    rating: 4.8,
    reviews: 124,
    image: "/jute_rug.png",
  },
  {
    id: "prod-2",
    name: "Classic Artisanal Jute Tote Bag",
    price: 899,
    category: "Bags & Totes",
    rating: 4.9,
    reviews: 340,
    image: "/jute_bags.png",
  },
  {
    id: "prod-3",
    name: "Rustic Hanging Nesting Plant Baskets",
    price: 1249,
    category: "Baskets & Storage",
    rating: 4.7,
    reviews: 95,
    image: "/jute_baskets.png",
  }
];

const HERO_IMAGES = [
  {
    src: "/jute_bags.png",
    title: "Eco-Friendly Carry Bags",
    desc: "Chic, reusable jute totes for modern daily life.",
  },
  {
    src: "/jute_rug.png",
    title: "Handwoven Jute Rugs",
    desc: "Exquisite organic textures for high-traffic rooms.",
  },
  {
    src: "/jute_concrete_curing.png",
    title: "Concrete Curing Sheets",
    desc: "Heavy-duty wet jute sheets for curing concrete columns at construction sites.",
  },
  {
    src: "/jute_dry.png",
    title: "Raw Golden Fiber",
    desc: "Sun-dried carbon-negative stalks ready for processing.",
  },
];

const USE_CASES = [
  {
    id: "use-1",
    title: "Fashion & Carry Bags",
    desc: "Strong, elegant tote bags, shoppers, and purses designed with beautiful weaves. Replaces thousand single-use plastics.",
    icon: Shirt,
    bgImg: "/use_fashion.png",
  },
  {
    id: "use-2",
    title: "Home Furnishings",
    desc: "Organic rugs, curtains, laundry hampers, and textured wall hangings that bring a warm, rustic accent to modern homes.",
    icon: HomeIcon,
    bgImg: "/use_home.png",
  },
  {
    id: "use-3",
    title: "Industrial Packaging",
    desc: "Traditional gunny sacks, twine, and protective padding used globally to store grains, sugar, coffee, and dry cargo.",
    icon: Package,
    bgImg: "/use_packaging.png",
  },
  {
    id: "use-4",
    title: "Civil Geotextiles",
    desc: "Heavy meshes laid on riverbanks and hillsides to prevent soil erosion while vegetation grows. 100% biodegradable soil binding.",
    icon: Layers,
    bgImg: "/use_geotextiles.png",
  },
  {
    id: "use-5",
    title: "Agriculture Wraps",
    desc: "Sapling wraps, plant protection tubes, and organic nursery pots that decompose directly in the soil when planted.",
    icon: Sprout,
    bgImg: "/use_agriculture.png",
  },
  {
    id: "use-6",
    title: "Artisanal Crafts",
    desc: "Intricate braided table mats, braided ropes, baskets, and custom artwork handmade by local farming collectives.",
    icon: Wrench,
    bgImg: "/use_crafts.png",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [enquiryProduct, setEnquiryProduct] = React.useState<any>(null);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="animate-fade-in">
        {/* 1. Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <div className={styles.heroTagline}>
                  <Leaf size={16} /> Nature&apos;s Premium Eco-Fiber
                </div>
                <h1 className={styles.heroTitle}>
                  Nature&apos;s Strongest <span>Weave</span>, Reimagined for You.
                </h1>
                <p className={styles.heroDescription}>
                  Explore GoldenFiber, where sustainability meets luxury. Discover high-quality, carbon-negative jute products crafted to last, and dive into the biological art of jute curing (retting).
                </p>
                <div className={styles.heroButtons}>
                  <Link href="/shop" className={styles.primaryBtn} style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                    Shop Jute Products <ShoppingBag size={18} />
                  </Link>
                  <Link href="/curing" className={styles.secondaryBtn}>
                    Explore Jute Curing
                  </Link>
                </div>
              </div>

              {/* Image Slider */}
              <div className={styles.heroSlider}>
                <div className={styles.sliderWrapper}>
                  {HERO_IMAGES.map((img, index) => (
                    <div
                      key={img.src}
                      className={`${styles.slide} ${currentSlide === index ? styles.activeSlide : ""}`}
                      style={{ backgroundImage: `url(${img.src})` }}
                    >
                      <div className={styles.slideCaption}>
                        <h3>{img.title}</h3>
                        <p>{img.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={styles.sliderDots}>
                  {HERO_IMAGES.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`${styles.dot} ${currentSlide === index ? styles.activeDot : ""}`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Stats Showcase */}
        <section className={styles.statsContainer}>
          <div className="container">
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <div className={styles.statNum}>100%</div>
                <div className={styles.statLabel}>Biodegradable</div>
                <div className={styles.statDesc}>Decomposes naturally within weeks</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNum}>15 T</div>
                <div className={styles.statLabel}>CO2 Absorption</div>
                <div className={styles.statDesc}>Consumes 15 tonnes of CO2 per hectare</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNum}>120 Days</div>
                <div className={styles.statLabel}>Harvest Cycle</div>
                <div className={styles.statDesc}>Rapidly renewable crop</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNum}>0%</div>
                <div className={styles.statLabel}>Chemicals Needed</div>
                <div className={styles.statDesc}>Minimal fertilizer and pesticides</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className={`${styles.featuredSection} section-padding`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.subtitle}>Best Sellers</span>
              <h2 className={styles.sectionTitle}>Featured Artisanal Products</h2>
              <p className={styles.sectionDesc}>
                Explore our hand-selected collection of premium jute goods. Handcrafted by local cooperatives using sustainable, organic fibers.
              </p>
            </div>

            <div className={styles.featuredGrid}>
              {FEATURED_PRODUCTS.map((product) => (
                <div key={product.id} className={styles.productCard}>
                  <div className={styles.imageArea}>
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <div className={styles.details}>
                    <span className={styles.cardCategory}>{product.category}</span>
                    <h3 className={styles.cardName}>{product.name}</h3>
                    <div className={styles.rating}>
                      <span className={styles.stars}>
                        {"★".repeat(Math.floor(product.rating))}
                        {product.rating % 1 !== 0 ? "½" : ""}
                      </span>
                      <span>
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                    <div className={styles.priceRow}>
                      <span className={styles.price}>
                        ₹{product.price.toLocaleString("en-IN")}
                      </span>
                      <button
                        className={styles.addBtn}
                        onClick={() => setEnquiryProduct(product)}
                      >
                        <Phone size={14} /> Buy / Enquire
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.centerContainer}>
              <Link href="/shop" className={styles.viewAllBtn}>
                Explore Full Artisanal Shop <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* 3. The Jute Story / Benefits */}
        <section id="story" className={`${styles.storySection} section-padding`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.subtitle}>Eco-Conscious Choice</span>
              <h2 className={styles.sectionTitle}>Why Choose Golden Jute?</h2>
              <p className={styles.sectionDesc}>
                Known as the &ldquo;Golden Fiber,&rdquo; jute is one of the strongest, most versatile natural fibers on Earth, acting as a natural champion for our environment.
              </p>
            </div>

            <div className={styles.storyGrid}>
              {/* Card 1 */}
              <div className={styles.storyCard}>
                <div className={styles.cardIcon}>
                  <Sprout size={28} />
                </div>
                <h3 className={styles.cardTitle}>Soil Enrichment</h3>
                <p className={styles.cardText}>
                  Jute crops rotate wonderfully, returning nutrients to the soil and improving fertility for subsequent crops like paddy and vegetables.
                </p>
              </div>

              {/* Card 2 */}
              <div className={styles.storyCard}>
                <div className={styles.cardIcon}>
                  <Shield size={28} />
                </div>
                <h3 className={styles.cardTitle}>High Tensile Strength</h3>
                <p className={styles.cardText}>
                  The natural woody composition makes jute threads incredibly tough, rendering them ideal for heavy packaging, rugs, and structural fibers.
                </p>
              </div>

              {/* Card 3 */}
              <div className={styles.storyCard}>
                <div className={styles.cardIcon}>
                  <Globe size={28} />
                </div>
                <h3 className={styles.cardTitle}>Carbon Negative</h3>
                <p className={styles.cardText}>
                  During its short growth, jute absorbs massive amounts of carbon dioxide and releases pure oxygen, beating most hardwood forests.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Use Cases - Where is Jute Used? */}
        <section id="uses" className={`${styles.usesSection} section-padding`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.subtitle}>Endless Possibilities</span>
              <h2 className={styles.sectionTitle}>Where Jute is Utilized</h2>
              <p className={styles.sectionDesc}>
                From simple packaging twine to advanced civil engineering geotextiles, explore the incredible range of applications.
              </p>
            </div>

            <div className={styles.usesGrid}>
              {USE_CASES.map((useCase) => {
                const IconComponent = useCase.icon;
                return (
                  <div key={useCase.id} className={styles.useCard}>
                    <div
                      className={styles.useBg}
                      style={{ backgroundImage: `url(${useCase.bgImg})` }}
                    />
                    <div className={styles.useOverlay}>
                      <IconComponent className={styles.useIcon} size={32} />
                      <h3 className={styles.useCardTitle}>{useCase.title}</h3>
                      <p className={styles.useCardDesc}>{useCase.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. Curing Process Teaser */}
        <section className={styles.curingCallout}>
          <div className="container">
            <div className={styles.curingContent}>
              <div className={styles.curingText}>
                <span className={styles.curingTag}>Behind the Scenes</span>
                <h2>The Biological Art of Jute Curing</h2>
                <p>
                  Before jute becomes a soft, golden bag or a tough rug, the harvested stems undergo **Retting (Curing)**. Stems are submerged in gentle, slow-flowing water where microbes dissolve the natural gums, loosening the inner fibers without damaging them.
                </p>
                <p>
                  Proper curing requires precise timing, temperature, and water quality control to achieve premium Grade-A fibers.
                </p>
                <Link href="/curing" className={styles.curingBtn}>
                  Try Curing Simulator <ArrowRight size={18} />
                </Link>
              </div>

              <div className={styles.curingVisual}>
                <div className={styles.curingImageContainer}>
                  <img
                    src="/jute_concrete_curing.png"
                    alt="Concrete Curing with Jute Sheets"
                    className={styles.curingImage}
                  />
                </div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", borderBottom: "1px solid rgba(255, 255, 255, 0.2)", paddingBottom: "12px" }}>
                  3-Step Fiber Extraction Flow
                </h3>

                <div className={styles.stepRow}>
                  <div className={styles.stepNum}>1</div>
                  <div className={styles.stepInfo}>
                    <h4>Submersion (Retting)</h4>
                    <p>Stems submerged in slow water for 15-20 days at 30°C to activate bacterial breakdown.</p>
                  </div>
                </div>

                <div className={styles.stepRow}>
                  <div className={styles.stepNum}>2</div>
                  <div className={styles.stepInfo}>
                    <h4>Stripping & Washing</h4>
                    <p>Artisans strip the loosened fiber fibers manually, rinsing off the remaining gums.</p>
                  </div>
                </div>

                <div className={styles.stepRow}>
                  <div className={styles.stepNum}>3</div>
                  <div className={styles.stepInfo}>
                    <h4>Sun Drying</h4>
                    <p>Raw fibers are hung on racks to dry in open sunlight for 3-4 days, giving them their iconic golden sheen.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Enquiry Contact Modal */}
      {enquiryProduct && (
        <div className={styles.modalOverlay} onClick={() => setEnquiryProduct(null)}>
          <div className={styles.contactModal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeModal} onClick={() => setEnquiryProduct(null)} aria-label="Close modal">
              <X size={20} />
            </button>
            <h3 className={styles.contactTitle}>Order / Enquiry</h3>
            <p className={styles.contactText}>
              Interested in purchasing <strong>{enquiryProduct.name}</strong>?
            </p>
            <p className={styles.contactText} style={{ marginBottom: "20px" }}>
              Please contact <strong>Ashok Enterprises</strong> directly to place your order or enquire about wholesale rates:
            </p>

            <div className={styles.contactButtons}>
              <a
                href="tel:+919968648541"
                className={styles.contactPhoneBtn}
              >
                <Phone size={18} /> Call: +91 99686 48541
              </a>
              <a
                href={`https://wa.me/919968648541?text=Hi,%20I%20am%20interested%20in%20ordering%20"${enquiryProduct.name}"%20(Price:%20₹${enquiryProduct.price})`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactWhatsappBtn}
              >
                <MessageCircle size={18} /> WhatsApp: +91 99686 48541
              </a>
            </div>

            <div style={{ marginTop: "24px", fontSize: "0.85rem", opacity: 0.7, textAlign: "center" }}>
              📍 Address: Street No.1, 4th Pustha Rd, Kartar Nagar, Delhi - 110053
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
