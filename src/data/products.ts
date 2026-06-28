export interface Product {
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

export const PRODUCTS: Product[] = [
  {
    id: "prod-rangwala",
    name: "Rangwala Designer Kurties Jute Tote Bag",
    price: 499,
    category: "Tote Bags",
    rating: 4.9,
    reviews: 142,
    image: "/rangwala_jute_bag.png",
    images: ["/rangwala_jute_bag.png"],
    description: "An elegant bleached white canvas jute tote bag featuring the designer logo 'Rangwala - A House of Designer Kurties' print. Comes with a convenient front zippered pocket styled with traditional Warli art illustrations. Complete with robust cotton handles and water-resistant interior lining.",
    origin: "West Bengal, India",
    material: "Bleached Jute & Cotton Canvas, Traditional Dyes",
    dimensions: "35cm x 38cm x 12cm"
  },
  {
    id: "prod-floral-bouquet",
    name: "Floral Bouquet Jute Tote Bag",
    price: 499,
    category: "Tote Bags",
    rating: 4.9,
    reviews: 128,
    image: "/floral_jute_bag.png",
    images: ["/floral_jute_bag.png"],
    description: "A stunning white jute tote bag adorned with a vibrant hand-printed floral bouquet featuring pink, blue, yellow, and purple blooms with lush green leaves. Thick white cotton rope handles for comfortable carrying. Perfect for daily errands, gifting, or eco-conscious fashion.",
    origin: "West Bengal, India",
    material: "Premium Bleached Jute, Cotton Rope Handles, Natural Dyes",
    dimensions: "32cm x 32cm x 12cm"
  },
  {
    id: "prod-2",
    name: "Classic Artisanal Jute Tote Bag",
    price: 499,
    category: "Tote Bags",
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
    price: 499,
    category: "Shopping Bags",
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
    price: 499,
    category: "Tote Bags",
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
    category: "Lunch & Bottle Bags",
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
    price: 499,
    category: "Lunch & Bottle Bags",
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
    id: "prod-8",
    name: "Premium Yellow Heart Jute Tote Bag",
    price: 499,
    category: "Tote Bags",
    rating: 4.8,
    reviews: 112,
    image: "/heart_jute_bag_front.png",
    images: ["/heart_jute_bag_front.png", "/heart_jute_bag_side.png"],
    description: "A beautifully crafted, spacious yellow jute tote bag decorated with a colorful painted heart pattern. Built with organic bleached jute and high-quality white cotton handles. Internal water-resistant laminate lining for extra safety.",
    origin: "West Bengal, India",
    material: "100% Organic Jute, Cotton Handles",
    dimensions: "38cm x 35cm x 12cm"
  },
  {
    id: "prod-9",
    name: "Lace-Trim Jute Bags with Window (Set of 4)",
    price: 499,
    category: "Gift Bags",
    rating: 4.7,
    reviews: 88,
    image: "/lace_window_jute_bags.png",
    images: ["/lace_window_jute_bags.png"],
    description: "A set of four elegant, colored jute bags featuring transparent windows and elegant lace trim borders. Perfect for organizing, return gifts, and daily shopping. Colors: Lime Green, Ivory White, Berry Magenta, and Golden Yellow.",
    origin: "Rajasthan, India",
    material: "Golden Jute, Clear Vinyl, Lace Border",
    dimensions: "30cm x 25cm x 10cm"
  },
  {
    id: "prod-10",
    name: "Artistic Printed Jute Tote Bags (Set of 4)",
    price: 499,
    category: "Tote Bags",
    rating: 4.9,
    reviews: 145,
    image: "/artistic_printed_jute_bags.png",
    images: ["/artistic_printed_jute_bags.png"],
    description: "A gorgeous collection of premium printed canvas tote bags featuring vibrant illustrations, including Majestic Horse, Magical Open Book, Vintage Floral Bloom, and Flowers-in-Bicycle. Sturdy construction, comfortable handles.",
    origin: "Assam, India",
    material: "Canvas Jute Blend, Soft-grip Handles",
    dimensions: "35cm x 40cm"
  },
  {
    id: "prod-11",
    name: "Colorful Heart-Pattern Jute Gift Bags (Set of 4)",
    price: 499,
    category: "Gift Bags",
    rating: 4.6,
    reviews: 76,
    image: "/heart_gift_jute_bags.png",
    images: ["/heart_gift_jute_bags.png"],
    description: "A set of 4 vibrant heart-pattern gift bags in Lime Green, Sunshine Yellow, Ocean Blue, and Ivory White. Comes with white handles and a durable, eco-friendly weave.",
    origin: "Bihar, India",
    material: "Bleached Jute Yarn, Rope Handles",
    dimensions: "30cm x 30cm x 12cm"
  },
  {
    id: "prod-12",
    name: "Promo Custom Jute Tote Bag",
    price: 499,
    category: "Tote Bags",
    rating: 4.8,
    reviews: 94,
    image: "/promo_jute_bag.png",
    images: ["/promo_jute_bag.png"],
    description: "A custom promotional jute bag perfect for corporate gifting and brand merchandising. Features durable black handles and a classic textured weave.",
    origin: "West Bengal, India",
    material: "100% Organic Jute, Cotton Handles",
    dimensions: "35cm x 35cm x 12cm"
  },
  {
    id: "prod-13",
    name: "Premium Diamond-Pattern Jute Tote Bag",
    price: 499,
    category: "Tote Bags",
    rating: 4.9,
    reviews: 108,
    image: "/diamond_jute_bag_front.png",
    images: ["/diamond_jute_bag_front.png", "/diamond_jute_bag_back.png"],
    description: "A premium monochrome tote bag featuring a traditional geometric diamond pattern. Made from high-quality woven jute with comfortable handles, suitable for shopping and styling.",
    origin: "Rajasthan, India",
    material: "Organic Jute Yarn, Rope Handles",
    dimensions: "38cm x 40cm x 12cm"
  },
  {
    id: "prod-14",
    name: "Hamburg Landmark Sketch Jute Shopping Bag",
    price: 499,
    category: "Shopping Bags",
    rating: 4.7,
    reviews: 82,
    image: "/hamburg_jute_bag.png",
    images: ["/hamburg_jute_bag.png"],
    description: "A spacious, unbleached natural jute shopping bag featuring printed hand-drawn landmarks of Hamburg. Perfect for eco-friendly grocery runs, beach trips, and heavy storage.",
    origin: "Assam, India",
    material: "100% Raw Golden Jute, Padded Handles",
    dimensions: "42cm x 38cm x 15cm"
  },
  {
    id: "prod-15",
    name: "Kerala Ayurveda International Yoga Day Jute Bag",
    price: 499,
    category: "Shopping Bags",
    rating: 4.8,
    reviews: 64,
    image: "/yoga_day_jute_bag.png",
    images: ["/yoga_day_jute_bag.png"],
    description: "A custom printed natural jute shopping bag commemorating International Yoga Day. Features green foliage prints and a sturdy handle, perfect for wellness campaigns and daily shopping.",
    origin: "West Bengal, India",
    material: "100% Organic Jute, Cotton Handles",
    dimensions: "35cm x 35cm x 10cm"
  }
];

export const FEATURED_CURING_PRODUCTS: Product[] = [
  {
    id: "raw-curing-sheet",
    name: "Concrete Curing Jute Sheet (Hessian Wrap)",
    price: 4500,
    category: "Curing Materials",
    rating: 4.8,
    reviews: 142,
    image: "/raw_concrete_curing_ai.png",
    images: ["/raw_concrete_curing_ai.png", "/curing_sheet_detail.png"],
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
    image: "/raw_hessian_roll_ai.png",
    images: ["/raw_hessian_roll_ai.png", "/hessian_roll_detail.png"],
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
    image: "/raw_gunny_bags_ai.png",
    images: ["/raw_gunny_bags_ai.png", "/gunny_bags_detail.png"],
    description: "Traditional high-capacity double-sewed jute sacking sacks. Extremely robust, breathable, and designed for heavy warehouse storage of grains, rice, potatoes, onions, and agricultural logistics.",
    origin: "West Bengal, India",
    material: "480 GSM Jute (Extra Heavy)",
    dimensions: "Pack of 10 Bags (65cm x 105cm)"
  }
];
