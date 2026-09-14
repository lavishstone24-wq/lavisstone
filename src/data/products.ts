export interface ProductItem {
  id: string;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  shortDescription: string;
  description: string;
  heroImage: string;
  galleryImages: string[];
  applications: string[];
  finishes: string[];
  availableSizes: string;
  availableColours: string[];
  seoTitle: string;
  seoDescription: string;
  features: string[];
  isFeatured?: boolean;
  highlightBadge?: string;
}

export const productsData: ProductItem[] = [
  {
    id: "decorative-pebbles",
    name: "Decorative Pebbles",
    slug: "decorative-pebbles",
    category: "Decorative Stones",
    categorySlug: "decorative-pebbles",
    shortDescription:
      "Smooth, hand-selected pebbles designed to bring tactile richness and refined architectural texture to prestige landscapes.",
    description:
      "Decorative pebbles by Lavish Stone bring together tactile elegance and endurance. Sourced and processed for discerning landscape architects, commercial contractors, and luxury garden designers, these decorative pebbles accentuate planters, courtyards, Zen dry-gardens, and luxury water features. Available sizes and colours can be customized based on project requirements.",
    heroImage: "/images/products/colored-pebbles-studio.jpg",
    galleryImages: [
      "/images/products/colored-pebbles-studio.jpg",
      "/images/products/natural-pebbles-stream.jpg",
      "/images/products/stone-swatches-grid.jpg",
      "/images/products/garden-pebble-stepping-path.jpg",
    ],
    applications: [
      "Gardens & Flowerbeds",
      "Pathway Accents",
      "Planters & Pots",
      "Water Features & Fountains",
      "Landscape Edging",
      "Indoor Atriums",
      "Commercial Courtyards",
    ],
    finishes: ["Tumbled", "Polished", "Natural Matte", "Semi-Honed"],
    availableSizes:
      "Available in standard sizing spectrums (e.g., 10-20mm, 20-40mm, 40-70mm). Sizing can be tailored to project specifications.",
    availableColours: ["Snow White", "River Tan", "Graphite Grey", "Golden Amber", "Rose Onyx", "Mixed Earth"],
    seoTitle: "Decorative Pebbles | Premium Landscape & Garden Stones | Lavish Stone",
    seoDescription:
      "Premium decorative pebbles for gardens, pathways, planters, water features, and architectural projects. Bulk supply and project customization available.",
    features: [
      "Hand-sorted for structural integrity and smooth texture",
      "Chemically inert and safe for aquatic environments and sensitive foliage",
      "Weather-resistant finish that retains depth across outdoor climates",
      "High compressive strength suitable for foot-traffic walkways",
    ],
    isFeatured: true,
    highlightBadge: "Architectural Grade",
  },
  {
    id: "colored-pebbles",
    name: "Colored Decorative Pebbles",
    slug: "colored-pebbles",
    category: "Colored Stones",
    categorySlug: "colored-pebbles",
    shortDescription:
      "Vibrant, precision-finished pebbles in curated color families to impart dramatic contrast and bespoke artistry.",
    description:
      "Add colour, texture and visual character to gardens, planters, pathways and creative landscape designs. Lavish Stone colored decorative pebbles are available in both single-chroma selections and custom designer blends, providing endless possibilities for resort landscapes, hotel atriums, artistic mosaic pathways, and high-end residential focal points.",
    heroImage: "/images/products/colored-pebbles-glossy.jpg",
    galleryImages: [
      "/images/products/colored-pebbles-glossy.jpg",
      "/images/products/colored-pebbles-studio.jpg",
      "/images/products/multi-color-lawn-pebbles.jpg",
      "/images/products/micro-colored-chips.jpg",
    ],
    applications: [
      "Creative Landscape Features",
      "Floral & Mosaic Stone Carpets",
      "Luxury Planters & Greenery Beds",
      "Resort Walkways & Terraces",
      "Interior Decor & Glass Displays",
    ],
    finishes: ["High Gloss Polished", "Tumbled Smooth", "Glazed Luster"],
    availableSizes:
      "Standard and micro gradations available. Sizing and packaging can be customized based on project requirements.",
    availableColours: [
      "Pure White",
      "Ruby Red",
      "Blush Pink",
      "Ocean Blue",
      "Emerald Green",
      "Sunburst Yellow",
      "Warm Orange",
      "Royal Purple",
      "Artisan Mixed",
    ],
    seoTitle: "Colored Decorative Pebbles | Landscaping & Garden Stones | Lavish Stone",
    seoDescription:
      "Add vibrant color and texture with Lavish Stone colored decorative pebbles. Available in white, red, blue, green, yellow, pink, and custom project blends.",
    features: [
      "UV-stable coloration developed for resilient outdoor longevity",
      "High-lustre surface treatment that sparkles under sunlight and architectural lighting",
      "Non-toxic formulation suitable for exterior and interior applications",
      "Available in sorted single colours or balanced project blends",
    ],
    isFeatured: true,
    highlightBadge: "Curated Chromas",
  },
  {
    id: "natural-pebbles",
    name: "Natural Pebbles",
    slug: "natural-pebbles",
    category: "Natural Stones",
    categorySlug: "natural-pebbles",
    shortDescription:
      "Raw geological character shaped over millennia, capturing organic earth tones and subtle textural nuances.",
    description:
      "Natural pebbles embody the untouched spirit of the earth. From river-washed granite and quartzite to sedimentary sandstone pebbles, each piece is selected for organic balance and durability. Suitable for biophilic architectural designs, Japanese Zen gardens, dry creek beds, and expansive corporate landscapes.",
    heroImage: "/images/products/natural-pebbles-stream.jpg",
    galleryImages: [
      "/images/products/natural-pebbles-stream.jpg",
      "/images/products/natural-river-pebbles-hero.jpg",
      "/images/products/sandstone-striped-pebbles.jpg",
      "/images/products/landscape-border-pebbles.jpg",
    ],
    applications: [
      "Biophilic Landscape Design",
      "Dry Riverbeds & Swales",
      "Zen & Rock Gardens",
      "Reflecting Pools & Waterfalls",
      "Architectural Ground Cover",
    ],
    finishes: ["Natural Unpolished", "Water-Washed Matte", "Lightly Tumbled"],
    availableSizes:
      "Available across small, medium, and large boulder-pebble ranges. Custom size grading available upon request.",
    availableColours: ["Granite Grey", "Charcoal Black", "River Cream", "Ochre Sandstone", "Earth Brown", "Mixed River"],
    seoTitle: "Natural Pebbles | Decorative River & Landscape Stones | Lavish Stone",
    seoDescription:
      "Discover organic natural pebbles for architectural landscapes, water features, and zen gardens. Authentic geological textures with global bulk supply.",
    features: [
      "100% natural quarried and water-formed stone",
      "Naturally non-porous and resilient against freeze-thaw cycles",
      "Seamless integration with natural vegetation, timber, and concrete",
      "Maintains organic look without synthetic coatings",
    ],
    isFeatured: true,
    highlightBadge: "100% Natural",
  },
  {
    id: "river-pebbles",
    name: "River Pebbles",
    slug: "river-pebbles",
    category: "River Stones",
    categorySlug: "river-pebbles",
    shortDescription:
      "Silky-smooth, naturally rounded river stones sculpted by continuous natural water currents.",
    description:
      "Crafted by the relentless flow of natural river waters over centuries, our River Pebbles boast an extraordinarily smooth, pleasant tactile feel. Ideal for sensory barefoot pathways, swimming pool surrounds, luxury spas, water gardens, and indoor living walls where organic calm is paramount.",
    heroImage: "/images/products/natural-river-pebbles-hero.jpg",
    galleryImages: [
      "/images/products/natural-river-pebbles-hero.jpg",
      "/images/products/natural-pebbles-stream.jpg",
      "/images/products/bulk-supply-pebbles-stockpile.jpg",
      "/images/products/garden-pebble-stepping-path.jpg",
    ],
    applications: [
      "Barefoot Spa & Reflexology Paths",
      "Pool Coping & Beach Entries",
      "Aquascapes & Pond Margins",
      "Living Wall Planters",
      "Architectural Drainage Channels",
    ],
    finishes: ["Naturally Water-Polished", "Waxed Lustre", "Matte River Wash"],
    availableSizes:
      "Grades from 15mm to 100mm. Project-specific grading and packing options can be arranged.",
    availableColours: ["Smoky Grey", "Ivory White", "Deep Basalt", "Caramel Tan", "Multi-River Assorted"],
    seoTitle: "River Pebbles | Natural River Stones for Spas & Landscaping | Lavish Stone",
    seoDescription:
      "Ultra-smooth river pebbles harvested for luxury spas, swimming pools, ponds, and architectural landscaping. Global B2B supply from Lavish Stone.",
    features: [
      "Exceptional tactile smoothness with zero sharp edges",
      "Perfect for barefoot walkways and sensory garden zones",
      "Resistant to algae adhesion and easy to clean with water wash",
      "Supplied washed and ready for landscape installation",
    ],
    isFeatured: true,
    highlightBadge: "Naturally Rounded",
  },
  {
    id: "landscape-stones",
    name: "Landscape Stones",
    slug: "landscape-stones",
    category: "Landscape Materials",
    categorySlug: "landscape-stones",
    shortDescription:
      "Substantial decorative stones and architectural aggregates engineered for large-format site transformations.",
    description:
      "Landscape stones provide the structural anchor and visual grounding for expansive outdoor developments. Whether creating dramatic rockery terraces, boundary definitions, resort campus pathways, or commercial courtyard focal points, Lavish Stone supplies premium landscape stones graded for durability and visual prestige.",
    heroImage: "/images/products/landscape-border-pebbles.jpg",
    galleryImages: [
      "/images/products/landscape-border-pebbles.jpg",
      "/images/products/garden-pebble-stepping-path.jpg",
      "/images/products/bulk-supply-pebbles-stockpile.jpg",
      "/images/products/natural-pebbles-stream.jpg",
    ],
    applications: [
      "Resort & Hotel Grounds",
      "Public Plazas & Commercial Centers",
      "Retaining Borders & Tree Rings",
      "Slope Erosion Control & Drainage",
      "Signature Rockery Accents",
    ],
    finishes: ["Split-Face", "Tumbled Heavy", "Natural Fractured", "Chiseled"],
    availableSizes:
      "From decorative cobbles (50-100mm) to landscape boulders. Specific dimensional requirements can be quoted.",
    availableColours: ["Graphite", "Terracotta Red", "Sandstone Buff", "Snow Crystal", "Mixed Quartzite"],
    seoTitle: "Landscape Stones | Premium Stones for Gardens & Outdoor Spaces | Lavish Stone",
    seoDescription:
      "Large-format landscape stones and decorative rockery for commercial landscaping, resorts, public plazas, and residential estates.",
    features: [
      "High density stone capable of withstanding extreme environmental exposure",
      "Visual gravitas suitable for focal points and structural edging",
      "Available in bulk container volumes for macro civil landscape projects",
      "Naturally weed-suppressing when installed over landscape fabric",
    ],
    isFeatured: false,
    highlightBadge: "Large Format",
  },
  {
    id: "garden-stones",
    name: "Garden Stones",
    slug: "garden-stones",
    category: "Garden Elements",
    categorySlug: "garden-stones",
    shortDescription:
      "Curated decorative stones designed to complement flora, retain soil moisture, and elevate private gardens.",
    description:
      "Transforming garden beds, terrace planters, and residential arboretums into curated sanctuaries. Garden stones by Lavish Stone prevent soil erosion, moderate root temperature, discourage weed growth, and create immaculate boundaries that contrast against lush greenery.",
    heroImage: "/images/products/garden-pebble-stepping-path.jpg",
    galleryImages: [
      "/images/products/garden-pebble-stepping-path.jpg",
      "/images/products/architectural-pebble-mosaic.jpg",
      "/images/products/natural-river-pebbles-hero.jpg",
      "/images/products/colored-pebbles-studio.jpg",
    ],
    applications: [
      "Residential Garden Pathways",
      "Raised Planter Beds",
      "Bonsai & Succulent Top-Dressing",
      "Stepping Stone Infill",
      "Terrace & Rooftop Gardens",
    ],
    finishes: ["Tumbled", "Polished", "Natural Rounded"],
    availableSizes: "10mm to 50mm standard garden gradations. Custom sizing options available.",
    availableColours: ["Snow White", "River Brown", "Smoked Grey", "Polished Black", "Multicolor Mix"],
    seoTitle: "Garden Stones | Decorative Stones for Planters & Gardens | Lavish Stone",
    seoDescription:
      "Enhance private gardens, rooftop terraces, and botanical borders with Lavish Stone decorative garden stones. B2B bulk supply and custom packaging.",
    features: [
      "Helps retain soil moisture and reduce garden irrigation demands",
      "Shields topsoil from wind and torrential rain erosion",
      "Clean, pest-resistant alternative to organic bark mulch",
      "Low maintenance with multi-year aesthetic stability",
    ],
    isFeatured: false,
    highlightBadge: "Botanical Grade",
  },
  {
    id: "glow-stones",
    name: "Glow Stones",
    slug: "glow-stones",
    category: "Specialty Stones",
    categorySlug: "glow-stones",
    shortDescription:
      "Self-illuminating luminescent stones that charge under daylight and emanate ethereal radiance after dark.",
    description:
      "Bring nocturnal magic to pathways, poolside perimeters, and bespoke landscape installations with Lavish Stone Glow Stones. Designed to absorb natural sunlight or ambient lighting throughout the day, these luminescent stones gently radiate in darkness without electrical wiring, guiding footsteps and crafting ethereal architectural nightscapes.",
    heroImage: "/images/products/glow-stones-luminescent.jpg",
    galleryImages: [
      "/images/products/glow-stones-luminescent.jpg",
      "/images/products/aqua-glass-crystal-pebbles.jpg",
      "/images/products/stone-swatches-grid.jpg",
    ],
    applications: [
      "Nighttime Pathway Illumination",
      "Swimming Pool Coping & Steps",
      "Water Feature Bed Accents",
      "Garden Border Safety Highlights",
      "Artistic Landscape Installations",
      "Planters & Indoor Night Lighting",
    ],
    finishes: ["Luminescent Smooth", "Glow Pebble Tumbled"],
    availableSizes:
      "Available in pebble gradations suitable for surface broadcasting or epoxy resin binding. Specifications upon inquiry.",
    availableColours: ["Sky Blue Glow", "Emerald Neon Glow", "Aquamarine Glow", "Sunset Coral Glow", "Mixed Glow"],
    seoTitle: "Glow Stones | Decorative Glow Pebbles for Gardens & Pathways | Lavish Stone",
    seoDescription:
      "Luminescent glow stones for night pathways, garden borders, pool surrounds, and creative landscape installations. Enquire for bulk specifications.",
    features: [
      "Zero power consumption — passive daylight photo-charging mechanism",
      "Weather-resistant and waterproof for underwater and sub-grade applications",
      "Can be embedded directly into concrete, terrazzo, epoxy or scattered loose",
      "Creates an enchanting nocturnal experience for luxury hospitality and estates",
    ],
    isFeatured: true,
    highlightBadge: "Nocturnal Glow",
  },
  {
    id: "mixed-pebbles",
    name: "Mixed Decorative Pebbles",
    slug: "mixed-pebbles",
    category: "Mixed Collections",
    categorySlug: "mixed-pebbles",
    shortDescription:
      "Harmonious blends of contrasting mineral tones, offering textured multi-tonal depth for dynamic landscape surfaces.",
    description:
      "Mixed Pebbles bring together contrasting earth tones, mineral quartz, and sedimentary pebbles in balanced ratios. Designed for projects demanding visual complexity, our mixed pebble collections introduce rich variegated patterning to large ground cover expanses, water courses, and garden borders.",
    heroImage: "/images/products/multi-color-lawn-pebbles.jpg",
    galleryImages: [
      "/images/products/multi-color-lawn-pebbles.jpg",
      "/images/products/sandstone-striped-pebbles.jpg",
      "/images/products/aqua-glass-crystal-pebbles.jpg",
      "/images/products/stone-swatches-grid.jpg",
    ],
    applications: [
      "Variegated Ground Cover",
      "Water Feature Infill",
      "Lawn & Patio Contrast Borders",
      "Urban Streetscape Landscaping",
      "Commercial Planter Topping",
    ],
    finishes: ["Tumbled Mixed", "Natural Water Worn", "Lightly Honed"],
    availableSizes:
      "Standard mixes in 10-25mm and 20-50mm. Bespoke color mix ratios can be blended for volume orders.",
    availableColours: ["River Blend", "Alpine Contrast", "Sandstone Rainbow", "Desert Earth", "Tropical Multi"],
    seoTitle: "Mixed Pebbles | Blended Decorative Stones for Landscaping | Lavish Stone",
    seoDescription:
      "Explore curated blends of mixed decorative pebbles for gardens, landscaping, and water features. Lavish Stone B2B project supply.",
    features: [
      "Carefully proportioned colour ratios for consistent visual distribution",
      "Naturally hides dust and organic debris between routine maintenance",
      "Exceptional visual warmth under both natural and warm artificial illumination",
      "Packed in heavy-duty weatherproof bulk bags or custom project sacks",
    ],
    isFeatured: false,
    highlightBadge: "Curated Blends",
  },
];
