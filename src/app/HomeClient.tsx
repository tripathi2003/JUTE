"use client";

import React from "react";
import Link from "next/link";
import {
  Leaf,
  ArrowRight,
  Shield,
  ShoppingBag,
  Package,
  Phone,
  X,
  MessageCircle,
  CheckCircle,
  Truck,
  Factory,
  Award,
  Headphones,
  MapPin,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import styles from "./page.module.css";

import { PRODUCTS as ALL_PRODUCTS, FEATURED_CURING_PRODUCTS, type Product } from "../data/products";

const HERO_SLIDES = [
  {
    src: "/collection_traditional.png",
    tag: "New Collection",
    title: "Jute Reimagined",
    subtitle: "Artisanal Carry Bags",
    desc: "Hand-painted bags showcasing vibrant Indian folk art. Direct from West Bengal artisans.",
    panelBg: "linear-gradient(135deg, #5c3a1e 0%, #7a4f2a 40%, #9c6b3c 100%)",
    leftBg: "#6b4423",
    accentColor: "#fde68a",
  },
  {
    src: "/jute_bags.png",
    tag: "Eco Friendly",
    title: "Golden Fiber",
    subtitle: "Premium Tote Bags",
    desc: "100% organic jute totes — strong, sustainable, and beautifully crafted for everyday life.",
    panelBg: "linear-gradient(135deg, #1a3d1a 0%, #2e5a27 40%, #3d7a33 100%)",
    leftBg: "#1f4a1f",
    accentColor: "#86efac",
  },
  {
    src: "/madhubani_jute_bag.png",
    tag: "Gift Special",
    title: "Gifting Made",
    subtitle: "Beautiful & Eco",
    desc: "Elegant jute gift bags with Madhubani art. Perfect for weddings, festivals & corporate gifting.",
    panelBg: "linear-gradient(135deg, #4a1530 0%, #7a2040 40%, #9c2d52 100%)",
    leftBg: "#5a1a38",
    accentColor: "#fda4af",
  },
  {
    src: "/pichwai_jute_bag.png",
    tag: "Handcrafted Art",
    title: "Pichwai Elegance",
    subtitle: "Folk Art on Jute",
    desc: "Traditional Pichwai cow & calf painting on premium jute. A piece of Rajasthan in every bag.",
    panelBg: "linear-gradient(135deg, #1a2a4a 0%, #1e3a6e 40%, #2952a0 100%)",
    leftBg: "#1c2f52",
    accentColor: "#93c5fd",
  },
  {
    src: "/floral_jute_bag.png",
    tag: "Trending Now",
    title: "Floral Blooms",
    subtitle: "Vibrant & Stylish",
    desc: "Stunning white jute bag with vibrant hand-printed floral bouquet. Perfect for every occasion.",
    panelBg: "linear-gradient(135deg, #4a1a3a 0%, #7a2060 40%, #a03078 100%)",
    leftBg: "#551a42",
    accentColor: "#f9a8d4",
  },
  {
    src: "/artistic_printed_jute_bags.png",
    tag: "Best Value",
    title: "Art Collections",
    subtitle: "Sets of 4 Bags",
    desc: "Gorgeous printed canvas jute bags — Horse, Book, Floral & Bicycle. Set of 4 at unbeatable price.",
    panelBg: "linear-gradient(135deg, #1a2a2a 0%, #1e4a4a 40%, #226666 100%)",
    leftBg: "#1a3030",
    accentColor: "#67e8f9",
  },
];



const TESTIMONIALS = [
  {
    id: 1,
    name: "Priya Sharma",
    city: "Delhi",
    rating: 5,
    product: "Classic Artisanal Jute Tote Bag",
    text: "Bohot hi sundar bag mila! Quality ekdum first class hai. Maine 50 bags bulk order kiye corporate gifting ke liye aur sab ne tariff ki. Ashok ji bahut cooperative hain. Definitely recommend karunga!",
    avatar: "PS",
    avatarColor: "#2e5a27",
  },
  {
    id: 2,
    name: "Rajesh Agarwal",
    city: "Kolkata",
    rating: 5,
    product: "Concrete Curing Jute Sheet",
    text: "Construction site ke liye curing sheets liye — quality bahut achi hai. 350 GSM wali sheets pani retain karti hain perfectly. Delivery bhi time par aayi. Phir se order karunga next project mein.",
    avatar: "RA",
    avatarColor: "#b85a38",
  },
  {
    id: 3,
    name: "Meena Iyer",
    city: "Bangalore",
    rating: 5,
    product: "Madhubani Peacock Jute Lunch Bag",
    text: "Gift ke liye order kiya tha apni best friend ko — wo dekh ke dang reh gayi! Art itni detailed aur vibrant hai. Eco-friendly bhi hai toh double khushi. Packaging bhi neat thi. 10/10!",
    avatar: "MI",
    avatarColor: "#5a3e9c",
  },
  {
    id: 4,
    name: "Suresh Patel",
    city: "Ahmedabad",
    rating: 5,
    product: "Bulk Jute Sacking Bags",
    text: "Hamare grain storage ke liye 500 gunny bags order kiye. Ekdum perfect quality, breathable fabric. Price bhi market se kam tha. WhatsApp par baat karo toh turant reply milta hai — bahut achi service!",
    avatar: "SP",
    avatarColor: "#7a5c38",
  },
  {
    id: 5,
    name: "Kavita Nair",
    city: "Mumbai",
    rating: 5,
    product: "Pichwai Cow & Calf Jute Bag",
    text: "Maine apni boutique ke liye 100 bags order kiye — sab customers ko bohot pasand aaya! Hand-painted art ekdum authentic lag rahi thi. Return rate zero — log baar baar aate hain aisi bags ke liye!",
    avatar: "KN",
    avatarColor: "#c45c8a",
  },
];

const TRUST_BADGES = [
  {
    icon: Factory,
    title: "Direct from Manufacturer",
    desc: "No middlemen. Get wholesale prices straight from our production unit in West Bengal.",
    color: "#2e5a27",
    bg: "#e8f0e6",
  },
  {
    icon: Truck,
    title: "Pan-India Delivery",
    desc: "We ship to all 28 states and 8 union territories. Bulk orders dispatched within 3-5 days.",
    color: "#b85a38",
    bg: "#fbeee9",
  },
  {
    icon: Package,
    title: "Bulk Orders Welcome",
    desc: "Minimum order quantity starts from just 50 units. Corporate & government orders accepted.",
    color: "#1a6a7a",
    bg: "#e0f4f7",
  },
  {
    icon: Award,
    title: "100% Eco-Certified",
    desc: "All our jute is GOTS certified, chemical-free, and fully biodegradable within 2–5 weeks.",
    color: "#7a5c28",
    bg: "#f7f0e0",
  },
  {
    icon: Headphones,
    title: "WhatsApp Support 24/7",
    desc: "Direct line to our team on WhatsApp. Samples, pricing, customization — all on chat.",
    color: "#25d366",
    bg: "#e3fbed",
  },
];



// Animated Counter Hook
function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

export default function HomeClient() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [enquiryProduct, setEnquiryProduct] = React.useState<any>(null);
  const [filter, setFilter] = React.useState("All");
  const [activeImage, setActiveImage] = React.useState<string | null>(null);
  const [statsVisible, setStatsVisible] = React.useState(false);
  const [testimonialIndex, setTestimonialIndex] = React.useState(0);


  const artisanalScrollRef = React.useRef<HTMLDivElement>(null);
  const curingScrollRef = React.useRef<HTMLDivElement>(null);
  const statsRef = React.useRef<HTMLDivElement>(null);
  const testimonialTouchStartX = React.useRef<number>(0);

  const handleTestimonialTouchStart = (e: React.TouchEvent) => {
    testimonialTouchStartX.current = e.touches[0].clientX;
  };

  const handleTestimonialTouchEnd = (e: React.TouchEvent) => {
    const diff = testimonialTouchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        setTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
      } else {
        setTestimonialIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
      }
    }
  };

  // Counters
  const counter1 = useCountUp(500, 2000, statsVisible);
  const counter2 = useCountUp(15, 1800, statsVisible);
  const counter3 = useCountUp(120, 2200, statsVisible);
  const counter4 = useCountUp(28, 1600, statsVisible);

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
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Testimonial auto-advance
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Scroll reveal + stats counter trigger
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.sectionVisible);
            if (entry.target === statsRef.current) {
              setStatsVisible(true);
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    const elements = document.querySelectorAll(`.${styles.revealSection}`);
    elements.forEach((el) => observer.observe(el));
    if (statsRef.current) observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className="animate-fade-in">
        {/* 1. Hero Section — Split Layout */}
        <section className={styles.heroBannerSection}>
          {HERO_SLIDES.map((slide, index) => (
            <div
              key={slide.src}
              className={`${styles.heroBannerSlide} ${currentSlide === index ? styles.activeBannerSlide : ""}`}
            >
              {/* LEFT: Image Panel */}
              <div
                className={styles.heroBannerLeft}
                style={{ backgroundColor: slide.leftBg }}
              >
                <img
                  src={slide.src}
                  alt={slide.title}
                  className={styles.heroBannerImg}
                />
                {/* Mobile-only dots — shows on image when right panel hidden */}
                <div className={styles.mobileHeroDots}>
                  {HERO_SLIDES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`${styles.heroBannerDot} ${currentSlide === i ? styles.activeHeroDot : ""}`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* RIGHT: Text Panel — pure CSS, no image */}
              <div
                className={styles.heroBannerRight}
                style={{ background: slide.panelBg }}
              >
                {/* Decorative mandala SVG */}
                <svg className={styles.mandalaBg} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="200" cy="200" r="190" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
                  <circle cx="200" cy="200" r="150" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
                  <circle cx="200" cy="200" r="110" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
                  {[0,30,60,90,120,150,180,210,240,270,300,330].map(a => (
                    <line key={a} x1="200" y1="10" x2="200" y2="390"
                      transform={`rotate(${a} 200 200)`}
                      stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
                  ))}
                </svg>

                <div className={styles.heroBannerContent}>
                  <span className={styles.heroBannerTag2}
                    style={{ color: slide.accentColor, borderColor: slide.accentColor }}>
                    ✦ {slide.tag}
                  </span>
                  <h2 className={styles.heroBannerHeading}>{slide.title}</h2>
                  <p className={styles.heroBannerItalic}
                    style={{ color: slide.accentColor }}>
                    {slide.subtitle}
                  </p>
                  <p className={styles.heroBannerText}>{slide.desc}</p>
                  <Link href="/shop" className={styles.heroBannerShopBtn}>
                    Shop Collection <ArrowRight size={16} />
                  </Link>
                  <div className={styles.heroBannerTrustRow}>
                    <div className={styles.heroBannerTrustItem}><Leaf size={13}/> Eco Friendly</div>
                    <div className={styles.heroBannerTrustItem}><Shield size={13}/> GOTS Certified</div>
                    <div className={styles.heroBannerTrustItem}><Award size={13}/> 25+ Yrs</div>
                  </div>
                </div>

                {/* Slide dots inside right panel */}
                <div className={styles.heroBannerDots}>
                  {HERO_SLIDES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`${styles.heroBannerDot} ${currentSlide === i ? styles.activeHeroDot : ""}`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* 2. Featured Products Section */}
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
                ‹
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
                      <div className={styles.quickViewOverlay}>
                        <span className={styles.quickViewBtn}>Quick View</span>
                      </div>
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
                ›
              </button>
            </div>

            <div className={styles.centerContainer}>
              <Link href="/shop" className={styles.viewAllBtn}>
                Explore Full Artisanal Shop <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* 3. Featured Curing & Raw Materials Section */}
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
                ‹
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
                      <div className={styles.quickViewOverlay}>
                        <span className={styles.quickViewBtn}>Quick View</span>
                      </div>
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
                ›
              </button>
            </div>

            <div className={styles.centerContainer}>
              <Link href="/curing" className={styles.viewAllBtn}>
                Explore All Curing Materials <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* 4. Animated Stats Showcase */}
        <section
          ref={statsRef}
          className={`${styles.statsContainer} ${styles.revealSection}`}
        >
          <div className="container">
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <div className={styles.statNum}>{counter1}+</div>
                <div className={styles.statLabel}>Happy Clients</div>
                <div className={styles.statDesc}>Businesses & individuals served pan-India</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNum}>{counter2}T</div>
                <div className={styles.statLabel}>CO2 Absorption</div>
                <div className={styles.statDesc}>Consumes 15 tonnes of CO2 per hectare</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNum}>{counter3} Days</div>
                <div className={styles.statLabel}>Harvest Cycle</div>
                <div className={styles.statDesc}>Rapidly renewable crop</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNum}>{counter4} States</div>
                <div className={styles.statLabel}>Delivery Coverage</div>
                <div className={styles.statDesc}>We ship across all of India</div>
              </div>
            </div>
          </div>
        </section>



        {/* Why Buy From Us — Trust Badges */}
        <section className={`${styles.trustSection} ${styles.revealSection} section-padding`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.subtitle}>Our Promise</span>
              <h2 className={styles.sectionTitle}>Why Choose Ashok Enterprises?</h2>
              <p className={styles.sectionDesc}>
                Directly from our family-run manufacturing unit in West Bengal — no compromises on quality, price, or service.
              </p>
            </div>
            <div className={styles.trustGrid}>
              {TRUST_BADGES.map((badge, i) => {
                const Icon = badge.icon;
                return (
                  <div key={i} className={styles.trustCard} style={{ "--badge-color": badge.color, "--badge-bg": badge.bg } as React.CSSProperties}>
                    <div className={styles.trustIconWrap}>
                      <Icon size={28} />
                    </div>
                    <h3 className={styles.trustTitle}>{badge.title}</h3>
                    <p className={styles.trustDesc}>{badge.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>




        {/* 9. Customer Testimonials */}
        <section className={`${styles.testimonialsSection} ${styles.revealSection} section-padding`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.subtitle}>What Our Customers Say</span>
              <h2 className={styles.sectionTitle}>Trusted Across India</h2>
              <p className={styles.sectionDesc}>
                Over 500+ happy clients — from home buyers to construction companies. Here's what they say about us.
              </p>
            </div>

            <div className={styles.testimonialsWrapper}>
              <button
                className={styles.testimonialNavBtn}
                onClick={() => setTestimonialIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={22} />
              </button>

              <div
                className={styles.testimonialsTrack}
                onTouchStart={handleTestimonialTouchStart}
                onTouchEnd={handleTestimonialTouchEnd}
              >
                {TESTIMONIALS.map((t, i) => (
                  <div
                    key={t.id}
                    className={`${styles.testimonialCard} ${i === testimonialIndex ? `${styles.activeTestimonial} ${styles.mobileActiveCard}` : i === (testimonialIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length ? styles.prevTestimonial : i === (testimonialIndex + 1) % TESTIMONIALS.length ? styles.nextTestimonial : styles.hiddenTestimonial}`}
                  >
                    <div className={styles.testimonialQuoteIcon}>
                      <Quote size={20} />
                    </div>
                    <p className={styles.testimonialText}>&ldquo;{t.text}&rdquo;</p>
                    <div className={styles.testimonialStars}>
                      {"★".repeat(t.rating)}
                    </div>
                    <div className={styles.testimonialFooter}>
                      <div
                        className={styles.testimonialAvatar}
                        style={{ backgroundColor: t.avatarColor }}
                      >
                        {t.avatar}
                      </div>
                      <div>
                        <div className={styles.testimonialName}>{t.name}</div>
                        <div className={styles.testimonialMeta}>
                          <MapPin size={12} /> {t.city} &nbsp;·&nbsp; {t.product}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                className={styles.testimonialNavBtn}
                onClick={() => setTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length)}
                aria-label="Next testimonial"
              >
                <ChevronRight size={22} />
              </button>
            </div>

            {/* Dots */}
            <div className={styles.testimonialDots}>
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.testimonialDot} ${i === testimonialIndex ? styles.activeTestimonialDot : ""}`}
                  onClick={() => setTestimonialIndex(i)}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </section>


        {/* 11. Bold CTA WhatsApp Banner */}
        <section className={`${styles.ctaBanner} ${styles.revealSection}`}>
          <div className={styles.ctaBannerBg} />
          <div className="container">
            <div className={styles.ctaContent}>
              <div className={styles.ctaLeft}>
                <span className={styles.ctaTag}>🌱 Eco-Friendly & Affordable</span>
                <h2 className={styles.ctaTitle}>
                  Get Exclusive Bulk Pricing &<br />
                  <span className={styles.ctaTitleAccent}>Free Product Samples</span>
                </h2>
                <p className={styles.ctaDesc}>
                  Join 500+ businesses who order directly from us. WhatsApp us your requirements and get a quote within 30 minutes — no middlemen, no markup.
                </p>
                <div className={styles.ctaButtons}>
                  <a
                    href="https://wa.me/919968648541?text=Hi,%20I%20want%20to%20enquire%20about%20bulk%20jute%20products%20and%20pricing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.ctaWhatsappBtn}
                  >
                    <MessageCircle size={20} />
                    Chat on WhatsApp
                  </a>
                  <a href="tel:+919968648541" className={styles.ctaCallBtn}>
                    <Phone size={20} />
                    Call Now
                  </a>
                </div>
              </div>
              <div className={styles.ctaRight}>
                <div className={styles.ctaImageCard}>
                  <img src="/jute_bags.png" alt="Premium Jute Products" className={styles.ctaImage} />
                </div>
                <div className={styles.ctaFeatures}>
                  {["Direct Factory Price", "Min. 50 Units MOQ", "Custom Branding", "GOTS Certified"].map((f, i) => (
                    <div key={i} className={styles.ctaFeatureItem}>
                      <CheckCircle size={15} />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
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
                        className={`${styles.thumbnailBtn} ${activeImage === imgUrl ? styles.activeThumbnail : ""
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
