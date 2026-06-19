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

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  rating: number;
  reviews: number;
  image: string;
  images: string[];
  description: string;
  origin: string;
  material: string;
  dimensions: string;
}

const ALL_PRODUCTS: Product[] = [
  {
    id: "prod-4",
    name: "Pichwai Cow & Calf Jute Shopping Bag",
    price: 599,
    category: "Bags & Totes",
    rating: 4.8,
    reviews: 156,
    image: "/pichwai_jute_bag.png",
    images: ["/pichwai_jute_bag.png"],
    description: "A beautiful hand-painted jute shopping bag featuring traditional Pichwai cow and calf art surrounded by gorgeous pink lotuses. Features sturdy handles and a durable, eco-friendly weave.",
    origin: "Rajasthan, India",
    material: "100% Organic Golden Jute, Natural Dyes",
    dimensions: "35cm x 35cm x 10cm"
  },
  {
    id: "prod-5",
    name: "Under The Sea Jute Tote Bag",
    price: 399,
    category: "Bags & Totes",
    rating: 4.9,
    reviews: 242,
    image: "/seaturtle_jute_bag.png",
    images: ["/seaturtle_jute_bag.png"],
    description: "Spacious and sturdy blue jute tote bag featuring an artistic screen-printed sea turtle illustration. Ideal for daily shopping, library visits, or as an eco-friendly statement accessory.",
    origin: "Assam, India",
    material: "Natural Dyed Jute Yarn, Padded Cotton Handles",
    dimensions: "38cm x 40cm x 12cm"
  },
  {
    id: "prod-6",
    name: "Madhubani Peacock Jute Lunch Bag",
    price: 499,
    category: "Bags & Totes",
    rating: 4.7,
    reviews: 184,
    image: "/madhubani_jute_bag.png",
    images: ["/madhubani_jute_bag.png"],
    description: "Chic and compact lunch bag with blue handles, showcasing a gorgeous circular Madhubani peacock painting on the front. Features a water-resistant interior lining.",
    origin: "Bihar, India",
    material: "Premium Bleached Jute, Water-Resistant Laminate",
    dimensions: "30cm x 30cm x 12cm"
  },
  {
    id: "prod-7",
    name: "Water is our best friend jute bottle bag",
    price: 299,
    category: "Bags & Totes",
    rating: 4.8,
    reviews: 96,
    image: "/bottle_jute_bag.png",
    images: ["/bottle_jute_bag.png"],
    description: "A tall, durable single-bottle bag with a convenient handle. Features screen-printed eco-friendly text 'WATER IS OUR BEST FRIEND' to promote hydration and plastic-free living.",
    origin: "West Bengal, India",
    material: "100% Raw Jute Thread, Vegan Screen Prints",
    dimensions: "12cm x 32cm"
  },
  {
    id: "prod-2",
    name: "Classic Artisanal Jute Tote Bag",
    price: 899,
    category: "Bags & Totes",
    rating: 4.9,
    reviews: 340,
    image: "/jute_bags.png",
    images: ["/jute_bags.png"],
    description: "A spacious, lightweight carry tote bag with soft cotton padded handles, dynamic vertical stitches, and internal water-resistant laminate lining.",
    origin: "Assam, India",
    material: "Bleached Jute Fiber, Cotton Blend Handles",
    dimensions: "38cm x 42cm x 12cm"
  }
];

const FEATURED_CURING_PRODUCTS: Product[] = [
  {
    id: "raw-curing-sheet",
    name: "Concrete Curing Jute Sheet (Hessian Wrap)",
    price: 4500,
    category: "Curing Materials",
    rating: 4.8,
    reviews: 142,
    image: "/raw_concrete_curing.png",
    images: ["/raw_concrete_curing.png", "/curing_sheet_detail.png"],
    description: "Heavy-duty, high water-retentive natural jute sheets. Designed specifically for construction sites to wrap concrete columns, beams, and slabs to prevent rapid evaporation and ensure maximum concrete strength.",
    origin: "West Bengal, India",
    material: "350 GSM Jute (High Density)",
    dimensions: "1.2m x 100m Roll"
  },
  {
    id: "raw-hessian-roll",
    name: "Premium Burlap Hessian Roll",
    price: 2800,
    category: "Hessian Cloth",
    rating: 4.9,
    reviews: 198,
    image: "/raw_hessian_roll.png",
    images: ["/raw_hessian_roll.png", "/hessian_roll_detail.png"],
    description: "Natural brown raw jute fabric in rolls. Perfect for agricultural root ball wrapping, landscaping, soil erosion control (geotextiles), frost protection, and bulk rustic decorations.",
    origin: "Assam, India",
    material: "280 GSM Jute (Medium Weave)",
    dimensions: "1.5m x 50m Roll"
  },
  {
    id: "raw-gunny-bags",
    name: "Bulk Jute Sacking Bags (Gunny Bags)",
    price: 420,
    category: "Packing Sacks",
    rating: 4.7,
    reviews: 215,
    image: "/raw_gunny_bags.png",
    images: ["/raw_gunny_bags.png", "/gunny_bags_detail.png"],
    description: "Traditional high-capacity double-sewed jute sacking sacks. Extremely robust, breathable, and designed for heavy warehouse storage of grains, rice, potatoes, onions, and agricultural logistics.",
    origin: "West Bengal, India",
    material: "480 GSM Jute (Extra Heavy)",
    dimensions: "Pack of 10 Bags (65cm x 105cm)"
  }
];

const HERO_IMAGES = [
  {
    src: "/collection_traditional.png",
    title: "Premium Artisanal Art",
    desc: "Hand-painted carry bags showcasing traditional Indian folk art.",
  },
  {
    src: "/collection_modern.png",
    title: "Modern Screen-Printed Totes",
    desc: "Chic, minimal golden and ocean blue totes for daily commutes.",
  },
  {
    src: "/collection_utility.png",
    title: "Utility Bottle Bags & Planters",
    desc: "Cozy home decor, braided baskets, and raw utility wraps.",
  },
  {
    src: "/jute_bags.png",
    title: "Eco-Friendly Classic Carry Bags",
    desc: "High-density golden jute totes built for strength and daily use.",
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
                  <div className={styles.slideImageContainer}>
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
        <section className={`${styles.featuredSection} section-padding`}>
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
              {["All", "Bags & Totes", "Rugs & Mats", "Baskets & Storage"].map((cat) => (
                <button
                  key={cat}
                  className={`${styles.homeFilterTab} ${filter === cat ? styles.activeHomeFilterTab : ""}`}
                  onClick={() => setFilter(cat)}
                >
                  {cat === "All" ? "Show All" : cat}
                </button>
              ))}
            </div>

            <div className={styles.featuredGrid}>
              {filteredProducts.map((product) => (
                <div key={product.id} className={styles.productCard}>
                  <div className={styles.imageArea} onClick={() => setEnquiryProduct(product)} style={{ cursor: "pointer" }}>
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <div className={styles.details}>
                    <span className={styles.cardCategory}>{product.category}</span>
                    <h3 className={styles.cardName} onClick={() => setEnquiryProduct(product)} style={{ cursor: "pointer" }}>{product.name}</h3>
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

        {/* Featured Curing & Raw Materials Section */}
        <section className={`${styles.featuredSection} section-padding`} style={{ borderTop: "1px solid var(--border-light)", backgroundColor: "var(--background)" }}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.subtitle}>Industrial Grade</span>
              <h2 className={styles.sectionTitle}>Featured Curing & Raw Materials</h2>
              <p className={styles.sectionDesc}>
                High-density concrete curing sheets, heavy-duty packing sacks, and eco-friendly burlap rolls directly from production units.
              </p>
            </div>

            <div className={styles.featuredGrid}>
              {FEATURED_CURING_PRODUCTS.map((product) => (
                <div key={product.id} className={styles.productCard}>
                  <div className={styles.imageArea} onClick={() => setEnquiryProduct(product)} style={{ cursor: "pointer" }}>
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <div className={styles.details}>
                    <span className={styles.cardCategory}>{product.category}</span>
                    <h3 className={styles.cardName} onClick={() => setEnquiryProduct(product)} style={{ cursor: "pointer" }}>{product.name}</h3>
                    <div className={styles.rating}>
                      <span className={styles.stars}>
                        {"★".repeat(Math.floor(product.rating))}
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
              <Link href="/curing" className={styles.viewAllBtn}>
                Explore All Curing Materials <ArrowRight size={18} />
              </Link>
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
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
