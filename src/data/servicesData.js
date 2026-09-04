export const SERVICE_CATEGORIES = [
  { id: "all", label: "All 3 Core Marketplaces", icon: "LayoutGrid" },
  { id: "meesho", label: "Meesho Management", icon: "Store" },
  { id: "amazon", label: "Amazon Account Mgmt", icon: "ShoppingBag" },
  { id: "flipkart", label: "Flipkart Account Mgmt", icon: "PackageCheck" }
];

export const SERVICES_DATA = [
  {
    id: "meesho-store-management",
    category: "meesho",
    platform: "Meesho",
    title: "Meesho Store Management",
    subtitle: "Scale your high-volume seller account with optimized low-margin catalog strategy & 0% commission growth.",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=80",
    badge: "High Volume Scale",
    growthStat: "10k+ Monthly Orders",
    iconName: "Store",
    description: "Meesho allows sellers to reach Tier 2 & Tier 3 Indian shoppers with maximum volume. We help you package listings for maximum clicks, run Meesho Ads efficiently, manage pricing & cataloging, and optimize order processing to minimize RTO (Return to Origin).",
    features: [
      "Bulk Catalog Upload & Professional Image Enhancement",
      "Meesho Smart Ads Optimization for Lowest Cost Per Click",
      "RTO (Return to Origin) Minimization & Packaging Guidelines",
      "Competitive Price Mapping for Mass Tier-2/3 Audience",
      "Account Health Monitoring & Rating Improvement"
    ],
    targetPlatforms: ["Meesho Seller Panel", "Meesho Supplier Hub"]
  },
  {
    id: "amazon-account-management",
    category: "amazon",
    platform: "Amazon",
    title: "Amazon Account Management",
    subtitle: "Dominate India's largest e-commerce platform with end-to-end store & listing optimization.",
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=800&q=80",
    badge: "Official SPN Network",
    growthStat: "+150% Avg GMV",
    iconName: "ShoppingBag",
    description: "Amazon is India's leading shopping marketplace. From A+ Premium content creation to Amazon PPC sponsored ad optimization, FBA inventory health, and Brand Registry, we manage every angle of your Amazon store for maximum sales and highest keyword ranks.",
    features: [
      "A+ Content (Enhanced Brand Content) Design & Upload",
      "Amazon PPC Campaign Strategy & Keyword Bid Optimization",
      "Brand Registry & IP Protection Setup",
      "FBA Shipments & Inventory Replenishment Forecasting",
      "Suppress Listing & Account Health Restoration"
    ],
    targetPlatforms: ["Amazon India (amazon.in)", "Amazon Global Selling"]
  },
  {
    id: "flipkart-account-management",
    category: "flipkart",
    platform: "Flipkart",
    title: "Flipkart Account Management",
    subtitle: "Dominate Flipkart with strategic listings, PLA ads & real-time operational tracking.",
    image: "https://images.unsplash.com/photo-1556742049-0a670fc8078a?auto=format&fit=crop&w=800&q=80",
    badge: "Flipkart SPN Network",
    growthStat: "+280% Order Spike",
    iconName: "PackageCheck",
    description: "Flipkart is India's pioneer marketplace. Our team handles your seller tier upgrades (Gold/Silver tier), PLA advertising, Flipkart Big Billion Days festival promotion planning, and daily catalog maintenance for maximum organic reach.",
    features: [
      "Flipkart PLA Ad Campaign Creation & Bid Optimization",
      "Smart Listing Optimization & Keyword Tagging",
      "Seller Tiering Upgrade (Bronze/Silver to Gold)",
      "Daily Order Fulfillment & SLA Health Monitoring",
      "Promotions & Big Billion Days Festival Deal Submissions"
    ],
    targetPlatforms: ["Flipkart Seller Hub", "Shopsy by Flipkart"]
  }
];

export const LISTING_STEPS = [
  {
    num: "01",
    title: "SEO-Optimized Product Titles",
    desc: "Crafting title formulas matching buyer search patterns for Meesho, Amazon & Flipkart.",
    icon: "Type"
  },
  {
    num: "02",
    title: "Keyword-rich Descriptions & Bullets",
    desc: "Highlighting key USPs, specs, and benefits using high-volume indexing keywords.",
    icon: "FileText"
  },
  {
    num: "03",
    title: "Category & Keyword Mapping",
    desc: "Precise node mapping ensures your listing shows up under exact buyer search filters.",
    icon: "MapPin"
  },
  {
    num: "04",
    title: "Image Enhancement & Infographics",
    desc: "Transforming standard product images into high-converting visual sales graphics.",
    icon: "Image"
  },
  {
    num: "05",
    title: "Variations, Pricing & Stock Setup",
    desc: "Seamless parent-child matrix for sizes, colors, multi-packs & live stock links.",
    icon: "Layers"
  },
  {
    num: "06",
    title: "Listing Error Fixes & Catalog Health",
    desc: "Resolving brand gating errors, suppressed listings, barcode glitches & policy flags.",
    icon: "CheckCircle2"
  }
];
