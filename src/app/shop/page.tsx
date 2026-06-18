"use client";

import React, { useState, useMemo } from "react";
import { Search, X, ArrowUpDown, Phone, MessageCircle } from "lucide-react";
import styles from "./shop.module.css";

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

const PRODUCTS: Product[] = [
  {
    id: "prod-2",
    name: "Classic Artisanal Jute Tote Bag",
    price: 899,
    category: "Bags & Totes",
    rating: 4.9,
    reviews: 340,
    image: "/jute_bags.png",
    images: ["/jute_bags.png"],
    description: "A spacious, lightweight carry tote bag with soft cotton padded handles, dynamic vertical stitches, and internal water-resistant laminate lining. Perfect for everyday market shopping, library visits, or office commutes.",
    origin: "Assam, India",
    material: "Bleached Jute Fiber, Cotton Blend Handles",
    dimensions: "38cm x 42cm x 12cm"
  },
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
    dimensions: "12cm x 32cm (Diameter x Height)"
  }
];

export default function Shop() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  React.useEffect(() => {
    if (selectedProduct) {
      setActiveImage(selectedProduct.images?.[0] || selectedProduct.image);
    } else {
      setActiveImage(null);
    }
  }, [selectedProduct]);

  const categories = ["All", "Bags & Totes", "Rugs & Mats", "Baskets & Storage", "Ropes & Twine"];

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Category filter
    if (selectedCategory !== "All") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Search query filter
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
      );
    }

    // Sorting
    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategory, search, sortBy]);

  return (
    <div className={styles.shopPage}>
      <div className="animate-fade-in">
        {/* Shop Banner */}
        <section className={styles.banner}>
          <div className="container">
            <h1>Artisanal Store</h1>
            <p>
              Buy premium hand-woven goods directly from local cooperatives. Every purchase directly supports sustainable agriculture and rural artisan livelihoods.
            </p>
          </div>
        </section>

        {/* Main Grid Section */}
        <section className="section-padding" style={{ paddingTop: "0" }}>
          <div className="container">
            <div className={styles.layout}>
              {/* Sidebar Filters */}
              <aside className={styles.sidebar}>
                {/* Search */}
                <div className={styles.filterBox}>
                  <h3 className={styles.filterTitle}>Search</h3>
                  <div className={styles.searchWrapper}>
                    <Search size={18} className={styles.searchIcon} />
                    <input
                      type="text"
                      className={styles.searchInput}
                      placeholder="Search products..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                </div>

                {/* Categories */}
                <div className={styles.filterBox}>
                  <h3 className={styles.filterTitle}>Categories</h3>
                  <div className={styles.categoryList}>
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        className={`${styles.categoryBtn} ${selectedCategory === cat ? styles.activeCategory : ""
                          }`}
                        onClick={() => setSelectedCategory(cat)}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </aside>

              {/* Product Grid Area */}
              <main className={styles.productsSection}>
                {/* Toolbar */}
                <div className={styles.toolbar}>
                  <span className={styles.resultsCount}>
                    Showing <strong>{filteredProducts.length}</strong> products
                  </span>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <ArrowUpDown size={16} style={{ opacity: 0.7 }} />
                    <select
                      className={styles.sortSelect}
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      aria-label="Sort products by"
                    >
                      <option value="featured">Featured</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="rating">Top Rated</option>
                    </select>
                  </div>
                </div>

                {/* Grid */}
                {filteredProducts.length === 0 ? (
                  <div style={{ textAlign: "center", padding: "80px 0", border: "1px dashed var(--border)", borderRadius: "var(--radius-md)" }}>
                    <p style={{ opacity: 0.7, fontSize: "1.1rem" }}>No products matches your search filters.</p>
                  </div>
                ) : (
                  <div className={styles.grid}>
                    {filteredProducts.map((product) => (
                      <div key={product.id} className={styles.card}>
                        <div
                          className={styles.imageArea}
                          onClick={() => setSelectedProduct(product)}
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                          />
                        </div>
                        <div className={styles.details}>
                          <span className={styles.cardCategory}>{product.category}</span>
                          <h3
                            className={styles.cardName}
                            onClick={() => setSelectedProduct(product)}
                          >
                            {product.name}
                          </h3>
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
                              onClick={() => setSelectedProduct(product)}
                            >
                              <Phone size={14} /> Buy / Enquire
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </main>
            </div>
          </div>
        </section>
      </div>

      {/* Product Detail Modal */}
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
                <span className={styles.cardCategory} style={{ fontSize: "0.8rem" }}>
                  {selectedProduct.category}
                </span>
                <h2 className={styles.modalTitle}>{selectedProduct.name}</h2>
                <div className={styles.rating}>
                  <span className={styles.stars}>
                    {"★".repeat(Math.floor(selectedProduct.rating))}
                  </span>
                  <span>
                    {selectedProduct.rating} ({selectedProduct.reviews} Verified Buyer Reviews)
                  </span>
                </div>
                <p className={styles.modalDesc}>{selectedProduct.description}</p>

                {/* Specs */}
                <table className={styles.specTable}>
                  <tbody>
                    <tr>
                      <td className={styles.specLabel}>Sourced From</td>
                      <td>{selectedProduct.origin}</td>
                    </tr>
                    <tr>
                      <td className={styles.specLabel}>Material Base</td>
                      <td>{selectedProduct.material}</td>
                    </tr>
                    <tr>
                      <td className={styles.specLabel}>Average Size</td>
                      <td>{selectedProduct.dimensions}</td>
                    </tr>
                  </tbody>
                </table>

                <div className={styles.modalPriceRow} style={{ flexDirection: "column", alignItems: "stretch", gap: "16px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                    <span className={styles.modalPrice} style={{ margin: 0 }}>
                      ₹{selectedProduct.price.toLocaleString("en-IN")}
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
                      href={`https://wa.me/919968648541?text=Hi,%20I%20am%20interested%20in%20ordering%20"${selectedProduct.name}"%20(Price:%20₹${selectedProduct.price})`}
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
