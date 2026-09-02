export const SERVICE_CATEGORIES = [
  { id: "all", label: "All Services", icon: "LayoutGrid" },
  { id: "marketplace", label: "Marketplace Management", icon: "ShoppingBag" },
  { id: "onboarding", label: "Quick Commerce & Onboarding", icon: "Zap" },
  { id: "marketing", label: "Digital Marketing & PPC", icon: "TrendingUp" },
  { id: "webdev", label: "Web & Store Development", icon: "Code" },
  { id: "cataloging", label: "Cataloging & SEO Listing", icon: "FileText" }
];

export const SERVICES_DATA = [
  // MARKETPLACE MANAGEMENT
  {
    id: "amazon-account-management",
    category: "marketplace",
    platform: "Amazon",
    title: "Amazon Account Management",
    subtitle: "Dominate India's largest e-commerce platform with end-to-end store optimization.",
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=800&q=80",
    badge: "Official SPN Partner",
    growthStat: "+340% Avg GMV",
    iconName: "ShoppingBag",
    description: "Amazon is the largest e-commerce marketplace globally. From A+ Premium content creation to Amazon PPC sponsored ad optimization, FBA inventory health, and Brand Registry, we manage every angle of your Amazon store for maximum sales and highest keyword ranks.",
    features: [
      "A+ Content (Enhanced Brand Content) Design & Upload",
      "Amazon PPC Campaign Strategy & Keyword Bid Optimization",
      "Brand Registry & IP Protection Setup",
      "FBA Shipments & Inventory Replenishment Forecasting",
      "Suppress Listing & Account Health Restoration"
    ],
    targetPlatforms: ["Amazon India", "Amazon Global Selling (USA/UAE/UK)"]
  },
  {
    id: "flipkart-account-management",
    category: "marketplace",
    platform: "Flipkart",
    title: "Flipkart Account Management",
    subtitle: "Dominate Flipkart with strategic listings, PLA ads & real-time operational tracking.",
    image: "https://images.unsplash.com/photo-1556742049-0a670fc8078a?auto=format&fit=crop&w=800&q=80",
    badge: "Flipkart SPN Network",
    growthStat: "+280% Order Spike",
    iconName: "PackageCheck",
    description: "Flipkart is India's pioneer marketplace. Our team handles your seller tier upgrades (Gold/Bronze tier), PLA advertising, Flipkart Big Billion Days festival promotion planning, and daily catalog maintenance for maximum organic reach.",
    features: [
      "Flipkart PLA Ad Campaign Creation & Optimization",
      "Smart Listing Optimization & Keyword Tagging",
      "Seller Tiering Upgrade (Bronze to Gold)",
      "Daily Order Fulfillment & SLA Health Monitoring",
      "Promotions & Festival Deal Submissions"
    ],
    targetPlatforms: ["Flipkart", "Shopsy by Flipkart"]
  },
  {
    id: "myntra-account-management",
    category: "marketplace",
    platform: "Myntra",
    title: "Myntra Account Management",
    subtitle: "Stand out in India's top fashion marketplace with tailored fashion cataloging.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    badge: "Fashion Specialist",
    growthStat: "3.8x ROAS",
    iconName: "Shirt",
    description: "Myntra commands India's online fashion market. We help apparel, footwear, and accessory brands pass Myntra onboarding, optimize style guides, manage pricing strategies, and run high-converting Myntra Brand Ads.",
    features: [
      "Myntra Style Guide & Professional Apparel Cataloging",
      "Discount Strategy & Price Tier Planning",
      "Myntra Brand Ads & Banner Promotions",
      "Seasonal Trend Analysis & Inventory Allocation",
      "Returns Rate Optimization & Size Chart Alignment"
    ],
    targetPlatforms: ["Myntra Fashion Marketplace"]
  },
  {
    id: "meesho-store-management",
    category: "marketplace",
    platform: "Meesho",
    title: "Meesho Store Management",
    subtitle: "Scale your high-volume seller account with optimized low-margin catalog strategy.",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=80",
    badge: "High Volume Scale",
    growthStat: "10k+ Monthly Orders",
    iconName: "Store",
    description: "Meesho allows sellers to reach tier 2 & tier 3 Indian shoppers with 0% commission. We help you package listings for maximum clicks, run Meesho Ads efficiently, and optimize order processing to avoid penalties.",
    features: [
      "Bulk Catalog Upload & Image Enhancement",
      "Meesho Ads Optimization for Lowest Cost Per Click",
      "RTO (Return to Origin) Minimization Strategy",
      "Competitive Price Mapping for Mass Audience",
      "Account Health & Rating Improvement"
    ],
    targetPlatforms: ["Meesho Seller Panel"]
  },
  {
    id: "shopify-store-management",
    category: "marketplace",
    platform: "Shopify",
    title: "Shopify Store Management",
    subtitle: "Build, scale & manage your direct-to-consumer (D2C) brand store effortlessly.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    badge: "D2C Specialist",
    growthStat: "5.2x Conversion Rate",
    iconName: "Globe",
    description: "Build a high-converting D2C brand on Shopify. From custom theme setup and fast payment gateway integrations to CRO (Conversion Rate Optimization) and automated SMS/WhatsApp cart recovery.",
    features: [
      "Custom Shopify Store Setup & High-Speed Theme Tuning",
      "App Integrations (Shiprocket, Razorpay, Interakt, Klaviyo)",
      "Checkout Flow & Abandoned Cart Recovery Funnels",
      "SEO-friendly Product Pages & Custom Collections",
      "D2C Analytics & Daily Sales Performance Tracking"
    ],
    targetPlatforms: ["Shopify Plus", "Shopify D2C"]
  },
  {
    id: "etsy-account-management",
    category: "marketplace",
    platform: "Etsy",
    title: "Etsy Global Store Management",
    subtitle: "Export Indian handicrafts, jewelry & custom goods to global buyers worldwide.",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=800&q=80",
    badge: "Global Exports",
    growthStat: "USD Revenue Scale",
    iconName: "Sparkles",
    description: "Take Indian artisanal products, jewelry, home decor, and fashion to international buyers in USA, Europe & UK with specialized Etsy SEO, tags, and shop branding.",
    features: [
      "Etsy SEO Tagging & Title Optimization",
      "International Shipping & DHL/FedEx Integration",
      "Etsy Promoted Listings Setup",
      "Shop Branding & Storytelling Enhancement"
    ],
    targetPlatforms: ["Etsy Global Marketplace"]
  },

  // QUICK COMMERCE & ONBOARDING
  {
    id: "blinkit-account-management",
    category: "onboarding",
    platform: "Blinkit",
    title: "Blinkit Onboarding & Management",
    subtitle: "Enter 10-minute instant commerce and capture local quick-delivery demand.",
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=80",
    badge: "Quick Commerce #1",
    growthStat: "10-Min Delivery Reach",
    iconName: "Zap",
    description: "Blinkit is revolutionizing Indian grocery and retail delivery. We manage dark store inventory allocation, city-wise onboarding, instant catalog upload, and Blinkit Sponsored Ads for maximum brand visibility.",
    features: [
      "Brand & Seller Onboarding on Blinkit Panel",
      "Dark Store Location Mapping & Stock Syncing",
      "Product Cataloging & Instant Search Visibility",
      "Blinkit In-App Banner & Search Advertising",
      "Expiration & Stock Out Prevention Alerts"
    ],
    targetPlatforms: ["Blinkit Instant Commerce"]
  },
  {
    id: "zepto-seller-onboarding",
    category: "onboarding",
    platform: "Zepto",
    title: "Zepto Seller Onboarding",
    subtitle: "Expand your FMCG & daily essentials into Zepto's hyper-fast delivery network.",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
    badge: "Hyper-Growth",
    growthStat: "10-15 Min Fulfillment",
    iconName: "Truck",
    description: "Tap into Zepto's rapid expansion across metro cities. We handle documentation, compliance, catalog verification, dark store PO creation, and promotional campaigns.",
    features: [
      "Vendor Registration & Compliance Verification",
      "Dark Store PO (Purchase Order) Management",
      "Product Listing & High-Quality Visual Upload",
      "Zepto Ad Spend Allocation & ROI Tracking"
    ],
    targetPlatforms: ["Zepto Quick Commerce"]
  },
  {
    id: "swiggy-instamart-onboarding",
    category: "onboarding",
    platform: "Swiggy Instamart",
    title: "Swiggy Instamart Seller Onboarding",
    subtitle: "Position your products on Swiggy Instamart for instant urban household delivery.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
    badge: "Instamart Network",
    growthStat: "+400% Grocery Growth",
    iconName: "ShoppingBag",
    description: "Sell packaged food, personal care, baby products, and daily home items directly on Swiggy Instamart across major Indian cities.",
    features: [
      "Instamart Merchant Account Approval",
      "SKU Level Packaging & Barcode Compliance",
      "Inventory Planning per Region",
      "Instamart Brand Days & Discount Setup"
    ],
    targetPlatforms: ["Swiggy Instamart"]
  },
  {
    id: "ajio-nykaa-tata-onboarding",
    category: "onboarding",
    platform: "Ajio & Nykaa",
    title: "Ajio, Nykaa & Tata Cliq Onboarding",
    subtitle: "Get your premium fashion, beauty & lifestyle brand listed on top curated channels.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    badge: "Curated Marketplaces",
    growthStat: "Premium Placement",
    iconName: "Crown",
    description: "Listing on premium marketplaces like Ajio, Nykaa, and Tata Cliq requires strict catalog standards. We guide your brand through gatekeeping approvals and initial launch.",
    features: [
      "Seller Approval & Trademark Verification",
      "Curated Style Guide Cataloging & Color Matching",
      "Commission Rate & Contract Negotiations",
      "Brand Store Front Page Placement Setup"
    ],
    targetPlatforms: ["Ajio", "Nykaa", "Tata Cliq"]
  },

  // DIGITAL MARKETING & PPC
  {
    id: "performance-marketing",
    category: "marketing",
    platform: "Performance Ads",
    title: "E-Commerce Performance Marketing",
    subtitle: "High-ROI Meta & Google Ads tailored specifically for D2C & Marketplace sales.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    badge: "4.5x Target ROAS",
    growthStat: "Measurable Revenue",
    iconName: "TrendingUp",
    description: "Don't burn money on generic ads. Our performance marketing strategies combine Meta Dynamic Product Ads (DPA), Google Shopping Ads, and Retargeting Funnels to deliver 4x+ Return on Ad Spend.",
    features: [
      "Meta Ads (Facebook & Instagram D2C Funnels)",
      "Google Shopping & Performance Max Campaigns",
      "Pixel Setup, Conversion API & Advanced Tracking",
      "A/B Testing Creatives & Copywriting",
      "ROAS-driven Daily Bid Optimization"
    ],
    targetPlatforms: ["Meta Ads", "Google Ads", "TikTok Ads (Global)"]
  },
  {
    id: "seo-optimization",
    category: "marketing",
    platform: "Search Engine SEO",
    title: "Search Engine Optimization (SEO)",
    subtitle: "Rank #1 on Google and Marketplace Search Engines organically without paid ads.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80",
    badge: "Organic Traffic",
    growthStat: "Top Google Ranking",
    iconName: "Search",
    description: "Capture buyers actively searching for your products. We combine Technical SEO, On-Page E-Commerce SEO, Product Schema markup, and high-quality Backlink building.",
    features: [
      "Keyword Research & High-Intent Search Term Strategy",
      "On-Page Product Page SEO & Schema Markups",
      "Technical Site Audit & Speed Optimization",
      "E-Commerce Content Marketing & Blog Strategy"
    ],
    targetPlatforms: ["Google Search", "Amazon Search", "Shopify Store SEO"]
  },
  {
    id: "graphic-design-a-plus",
    category: "marketing",
    platform: "A+ & Creatives",
    title: "Graphic Design & A+ Premium Content",
    subtitle: "Transform product imagery into high-converting visual infographics & brand modules.",
    image: "https://images.unsplash.com/photo-1542744094-3a317272018a?auto=format&fit=crop&w=800&q=80",
    badge: "High Conversion",
    growthStat: "+45% Conversion Rate",
    iconName: "Palette",
    description: "Visuals sell products. Our team of senior graphics designers crafts stunning Amazon A+ content, store banners, product feature callout infographics, and social media carousels.",
    features: [
      "Amazon Brand Storefront & Premium A+ Module Design",
      "Product Lifestyle Infographics & Dimensions Callouts",
      "High-Converting Meta & Instagram Ad Banners",
      "Brand Guidelines & Packaging Mockups"
    ],
    targetPlatforms: ["Amazon A+", "Shopify Banners", "Social Media"]
  },

  // WEB & STORE DEVELOPMENT
  {
    id: "custom-web-development",
    category: "webdev",
    platform: "Web Development",
    title: "Custom Web & Store Development",
    subtitle: "Blazing-fast, responsive web applications built with modern React, Next.js & Tailwind.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    badge: "Modern Tech Stack",
    growthStat: "99+ Lighthouse Score",
    iconName: "Code",
    description: "From custom headless e-commerce platforms to enterprise landing pages, we engineer high-performance web applications designed for maximum speed, security, and sales conversion.",
    features: [
      "React, Vite & Next.js Modern Architecture",
      "Tailwind CSS Premium UI/UX & Responsive Layouts",
      "RESTful & GraphQL API Integrations",
      "Payment Gateways & ERP/WMS Inventory Syncing",
      "Continuous Website Maintenance & Security Patching"
    ],
    targetPlatforms: ["Custom React/Next.js", "WordPress/WooCommerce", "Wix"]
  },

  // CATALOGING & SEO LISTING
  {
    id: "product-listing-services",
    category: "cataloging",
    platform: "All Marketplaces",
    title: "Professional E-Commerce Product Listing Services",
    subtitle: "Skyrocket your sales with SEO titles, bullet points, variations & catalog hygiene.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    badge: "Core Service",
    growthStat: "100% Accuracy Rate",
    iconName: "FileCheck",
    description: "Your product listing is your digital salesperson. We craft SEO-optimized product titles, keyword-rich descriptions, category mapping, variation setups, and fix catalog suppressions across Amazon, Flipkart, Meesho & Myntra.",
    features: [
      "SEO-Optimized Product Titles for Maximum Search Indexing",
      "Keyword-Rich Descriptions & Highlight Bullet Points",
      "Exact Category & Backend Search Term Mapping",
      "Variations, Parent-Child Mapping & Stock Sync",
      "Listing Error Resolution & Suppression Cleanup"
    ],
    targetPlatforms: ["Amazon", "Flipkart", "Meesho", "Myntra", "JioMart"]
  }
];

export const LISTING_STEPS = [
  {
    num: "01",
    title: "SEO-Optimized Product Titles",
    desc: "Crafting title formulas matching buyer search patterns and platform search algorithms.",
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
    desc: "Precise node mapping ensures your listing shows up under exact buyer filters.",
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
    title: "Variations, Pricing & Inventory Setup",
    desc: "Seamless parent-child matrix for sizes, colors, multi-packs & live stock links.",
    icon: "Layers"
  },
  {
    num: "06",
    title: "Listing Error Fixes & Catalog Hygiene",
    desc: "Resolving brand gating errors, suppressed listings, barcode glitches & policy flags.",
    icon: "CheckCircle2"
  }
];
