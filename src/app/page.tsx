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

import { PRODUCTS as ALL_PRODUCTS, FEATURED_CURING_PRODUCTS, type Product } from "../data/products";

const HERO_IMAGES = [
  {
    src: "/collection_traditional.png",
    title: "Premium Artisanal Art",
    desc: "Hand-painted carry bags showcasing traditional Indian folk art.",
    bgColor: "#877247",
  },
  {
    src: "/collection_modern.png",
    title: "Modern Screen-Printed Totes",
    desc: "Chic, minimal golden and ocean blue totes for daily commutes.",
    bgColor: "#fafbfa",
  },
  {
    src: "/collection_utility.png",
    title: "Utility Bottle Bags & Planters",
    desc: "Cozy home decor, braided baskets, and raw utility wraps.",
    bgColor: "#848f7f",
  },
  {
    src: "/jute_bags.png",
    title: "Eco-Friendly Classic Carry Bags",
    desc: "High-density golden jute totes built for strength and daily use.",
    bgColor: "#af8d71",
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
  const [filter, setFilter] = React.useState("All");
  const [activeImage, setActiveImage] = React.useState<string | null>(null);

  const artisanalScrollRef = React.useRef<HTMLDivElement>(null);
  const curingScrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (ref: React.RefObject<HTMLDivElement | null>, direction: "left" | "right") => {
    if (ref.current) {
      const { scrollLeft, clientWidth } = ref.current;
      const scrollTo = direction === "left"
        ? scrollLeft - clientWidth * 0.75
        : scrollLeft + clientWidth * 0.75;
      ref.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  React.useEffect(() => {
    if (enquiryProduct) {
      setActiveImage(enquiryProduct.images?.[0] || enquiryProduct.image);
    } else {
      setActiveImage(null);
    }
  }, [enquiryProduct]);

  const filteredProducts = React.useMemo(() => {
    if (filter === "All") return ALL_PRODUCTS;
    return ALL_PRODUCTS.filter((p) => p.category === filter);
  }, [filter]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.sectionVisible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    const elements = document.querySelectorAll(`.${styles.revealSection}`);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className="animate-fade-in">
        {/* 1. Hero Section */}
        <section className={styles.hero}>
          {/* Image Slider (Full Background) */}
          <div className={styles.heroSlider}>
            <div className={styles.sliderWrapper}>
              {HERO_IMAGES.map((img, index) => (
                <div
                  key={img.src}
                  className={`${styles.slide} ${currentSlide === index ? styles.activeSlide : ""}`}
                >
                  <div className={styles.slideImageContainer} style={{ backgroundColor: img.bgColor }}>
                    <img src={img.src} alt={img.title} className={styles.slideImage} />
                  </div>
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

          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Stats Showcase */}
        {/* Featured Products Section */}
        <section className={`${styles.featuredSection} ${styles.revealSection} section-padding`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.subtitle}>Bestsellers</span>
              <h2 className={styles.sectionTitle}>Featured Artisanal Products</h2>
              <p className={styles.sectionDesc}>
                Explore our hand-selected collection of premium jute goods. Handcrafted by local cooperatives using sustainable, organic fibers.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className={styles.homeFilterTabs}>
              {["All", "Tote Bags", "Shopping Bags", "Lunch & Bottle Bags", "Gift Bags"].map((cat) => (
                <button
                  key={cat}
                  className={`${styles.homeFilterTab} ${filter === cat ? styles.activeHomeFilterTab : ""}`}
                  onClick={() => setFilter(cat)}
                >
                  {cat === "All" ? "Show All" : cat}
                </button>
              ))}
            </div>

            <div className={styles.carouselWrapper}>
              <button 
                className={`${styles.scrollBtn} ${styles.scrollLeft}`} 
                onClick={() => scroll(artisanalScrollRef, "left")}
                aria-label="Scroll left"
              >
                &#8249;
              </button>
              
              <div className={styles.featuredGrid} ref={artisanalScrollRef}>
                {filteredProducts.slice(0, 6).map((product) => (
                  <div 
                    key={product.id} 
                    className={styles.productCardClean} 
                    onClick={() => setEnquiryProduct(product)}
                  >
                    <div className={styles.imageAreaClean}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className={styles.productImageClean}
                      />
                    </div>
                    <div className={styles.detailsClean}>
                      <h3 className={styles.cardNameClean}>{product.name}</h3>
                      <span className={styles.priceClean}>
                        Rs. {product.price.toFixed(2)}
                      </span>
                      <div className={styles.ratingClean}>
                        <span className={styles.starsClean}>
                          {"★".repeat(Math.floor(product.rating))}
                          {product.rating % 1 !== 0 ? "½" : ""}
                        </span>
                        <span className={styles.ratingNumClean}>
                          ({product.rating})
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Explore More Card */}
                <div className={`${styles.productCardClean} ${styles.exploreMoreCardClean}`}>
                  <Link href="/shop" className={styles.exploreMoreLinkClean}>
                    <ShoppingBag size={36} className={styles.exploreMoreIconClean} />
                    <h3>View All Products</h3>
                    <span>Browse complete catalog</span>
                    <button className={styles.exploreMoreBtnClean}>
                      Go to Shop <ArrowRight size={14} />
                    </button>
                  </Link>
                </div>
              </div>

              <button 
                className={`${styles.scrollBtn} ${styles.scrollRight}`} 
                onClick={() => scroll(artisanalScrollRef, "right")}
                aria-label="Scroll right"
              >
                &#8250;
              </button>
            </div>

            <div className={styles.centerContainer}>
              <Link href="/shop" className={styles.viewAllBtn}>
                Explore Full Artisanal Shop <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Curing & Raw Materials Section */}
        <section className={`${styles.featuredSection} ${styles.revealSection} section-padding`} style={{ borderTop: "1px solid var(--border-light)", backgroundColor: "var(--background)" }}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.subtitle}>Industrial Grade</span>
              <h2 className={styles.sectionTitle}>Featured Curing & Raw Materials</h2>
              <p className={styles.sectionDesc}>
                High-density concrete curing sheets, heavy-duty packing sacks, and eco-friendly burlap rolls directly from production units.
              </p>
            </div>

            <div className={styles.carouselWrapper}>
              <button 
                className={`${styles.scrollBtn} ${styles.scrollLeft}`} 
                onClick={() => scroll(curingScrollRef, "left")}
                aria-label="Scroll left"
              >
                &#8249;
              </button>

              <div className={styles.featuredGrid} ref={curingScrollRef}>
                {FEATURED_CURING_PRODUCTS.map((product) => (
                  <div 
                    key={product.id} 
                    className={styles.productCardClean} 
                    onClick={() => setEnquiryProduct(product)}
                  >
                    <div className={styles.imageAreaClean}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className={styles.productImageClean}
                      />
                    </div>
                    <div className={styles.detailsClean}>
                      <h3 className={styles.cardNameClean}>{product.name}</h3>
                      <span className={styles.priceClean}>
                        Rs. {product.price.toFixed(2)}
                      </span>
                      <div className={styles.ratingClean}>
                        <span className={styles.starsClean}>
                          {"★".repeat(Math.floor(product.rating))}
                        </span>
                        <span className={styles.ratingNumClean}>
                          ({product.rating})
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Explore More Card for Curing */}
                <div className={`${styles.productCardClean} ${styles.exploreMoreCardClean}`}>
                  <Link href="/curing" className={styles.exploreMoreLinkClean}>
                    <Package size={36} className={styles.exploreMoreIconClean} />
                    <h3>View All Curing</h3>
                    <span>Explore industrial wraps & rolls</span>
                    <button className={styles.exploreMoreBtnClean}>
                      Go to Curing <ArrowRight size={14} />
                    </button>
                  </Link>
                </div>
              </div>

              <button 
                className={`${styles.scrollBtn} ${styles.scrollRight}`} 
                onClick={() => scroll(curingScrollRef, "right")}
                aria-label="Scroll right"
              >
                &#8250;
              </button>
            </div>

            <div className={styles.centerContainer}>
              <Link href="/curing" className={styles.viewAllBtn}>
                Explore All Curing Materials <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* 2. Stats Showcase */}
        <section className={`${styles.statsContainer} ${styles.revealSection}`}>
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

        {/* 3. The Jute Story / Benefits */}
        <section id="story" className={`${styles.storySection} ${styles.revealSection} section-padding`}>
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
        <section id="uses" className={`${styles.usesSection} ${styles.revealSection} section-padding`}>
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


      </div>
      {/* Enquiry Contact Modal */}
      {enquiryProduct && (
        <div className={styles.modalOverlay} onClick={() => setEnquiryProduct(null)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeModal} onClick={() => setEnquiryProduct(null)} aria-label="Close modal">
              <X size={20} />
            </button>
            <div className={styles.modalContent}>
              <div className={styles.modalImageContainer}>
                <div className={styles.modalImage}>
                  <img
                    src={activeImage || enquiryProduct.image}
                    alt={enquiryProduct.name}
                    style={{ width: "100%", height: "100%", objectFit: "contain", padding: "16px" }}
                  />
                </div>
                {enquiryProduct.images && enquiryProduct.images.length > 1 && (
                  <div className={styles.modalThumbnails}>
                    {enquiryProduct.images.map((imgUrl: string) => (
                      <button
                        key={imgUrl}
                        className={`${styles.thumbnailBtn} ${
                          activeImage === imgUrl ? styles.activeThumbnail : ""
                        }`}
                        onClick={() => setActiveImage(imgUrl)}
                      >
                        <img
                          src={imgUrl}
                          alt={`${enquiryProduct.name} thumbnail`}
                          style={{ width: "100%", height: "100%", objectFit: "contain", padding: "4px" }}
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className={styles.modalInfo}>
                <span className={styles.cardCategory} style={{ fontSize: "0.8rem" }}>
                  {enquiryProduct.category}
                </span>
                <h2 className={styles.modalTitle}>{enquiryProduct.name}</h2>
                <div className={styles.rating}>
                  <span className={styles.stars}>
                    {"★".repeat(Math.floor(enquiryProduct.rating))}
                  </span>
                  <span>
                    {enquiryProduct.rating} ({enquiryProduct.reviews} Verified Buyer Reviews)
                  </span>
                </div>
                <p className={styles.modalDesc}>{enquiryProduct.description}</p>

                {/* Specs */}
                <table className={styles.specTable}>
                  <tbody>
                    <tr>
                      <td className={styles.specLabel}>Sourced From</td>
                      <td>{enquiryProduct.origin}</td>
                    </tr>
                    <tr>
                      <td className={styles.specLabel}>Material Base</td>
                      <td>{enquiryProduct.material}</td>
                    </tr>
                    <tr>
                      <td className={styles.specLabel}>Average Size</td>
                      <td>{enquiryProduct.dimensions}</td>
                    </tr>
                  </tbody>
                </table>

                <div className={styles.modalPriceRow} style={{ flexDirection: "column", alignItems: "stretch", gap: "16px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                    <span className={styles.modalPrice} style={{ margin: 0 }}>
                      ₹{enquiryProduct.price.toLocaleString("en-IN")}
                    </span>
                    <span style={{ fontSize: "0.85rem", opacity: 0.8 }}>Direct Order Price</span>
                  </div>
                  
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%" }}>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
