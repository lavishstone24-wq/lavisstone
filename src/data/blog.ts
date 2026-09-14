export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  content: string[];
  relatedProductSlug: string;
  relatedProductName: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "post-1",
    slug: "how-to-choose-decorative-pebbles-for-garden-landscaping",
    title: "How to Choose Decorative Pebbles for Garden Landscaping",
    excerpt:
      "A comprehensive guide for landscape architects and estate owners on selecting pebble shapes, mineral compositions, and sizing that enhance garden foliage while conserving soil moisture.",
    category: "Landscape Design",
    readTime: "5 min read",
    date: "October 14, 2025",
    image: "/images/products/garden-pebble-stepping-path.jpg",
    tags: ["Landscaping", "Garden Stones", "Design Guide"],
    relatedProductSlug: "decorative-pebbles",
    relatedProductName: "Decorative Pebbles",
    content: [
      "Natural stone in landscape architecture is more than mere ground cover; it provides thermal moderation, weed deterrence, and visual rhythm. When choosing decorative pebbles for garden applications, key variables include stone geometry, moisture absorption, and color temperature relative to planting beds.",
      "For minimalist gardens and contemporary architecture, monochrome stones like Snow White marble or deep Charcoal basalt introduce clean lines that allow plant silhouettes to pop. Conversely, for cottage or rustic landscapes, warm river blends and ochre sandstone pebbles integrate seamlessly with timber fencing and natural mulch.",
      "Ensure proper sub-base preparation: always install a heavy-duty geotextile weed membrane beneath the pebble layer. A depth of 40mm to 50mm of stones ensures adequate coverage without scattering underfoot.",
    ],
  },
  {
    id: "post-2",
    slug: "decorative-pebbles-vs-river-pebbles-whats-the-difference",
    title: "Decorative Pebbles vs River Pebbles: What's the Difference?",
    excerpt:
      "Explore the key differences in geological formation, surface texture, and functional durability between mechanically tumbled decorative pebbles and naturally tumbled river stones.",
    category: "Material Science",
    readTime: "4 min read",
    date: "November 02, 2025",
    image: "/images/products/natural-river-pebbles-hero.jpg",
    tags: ["River Pebbles", "Natural Stones", "Material Guide"],
    relatedProductSlug: "river-pebbles",
    relatedProductName: "River Pebbles",
    content: [
      "While the terms are often used interchangeably, natural river pebbles and manufactured tumbled decorative pebbles possess distinct visual and tactile characteristics born of their origins.",
      "River pebbles are shaped through natural alluvial erosion over centuries. Moving currents round the stones into organic, oblong, and flattened pebbles with satiny, soft surfaces that are remarkably comfortable under bare feet. This makes river pebbles the premier choice for luxury wellness spas, reflexology walkways, swimming pool edges, and tranquil water features.",
      "Mechanically tumbled decorative pebbles, on the other hand, are quarried stone pieces shaped in rotating drums. They offer tighter sizing consistency, higher colour vibrancy, and broader mineral selections such as crystalline quartz, red jasper, and green serpentine.",
    ],
  },
  {
    id: "post-3",
    slug: "how-to-use-landscape-stones-in-garden-design",
    title: "How to Use Landscape Stones in Garden Design",
    excerpt:
      "Learn how to use large-format landscape stones, rockery boulders, and structured aggregate borders to anchor open spaces and create compelling vertical and horizontal contrast.",
    category: "Hardscape Architecture",
    readTime: "6 min read",
    date: "November 18, 2025",
    image: "/images/products/landscape-border-pebbles.jpg",
    tags: ["Landscape Stones", "Hardscape", "Urban Design"],
    relatedProductSlug: "landscape-stones",
    relatedProductName: "Landscape Stones",
    content: [
      "Effective landscape design balances softscape (foliage, turf, trees) with permanent hardscape elements. Large-format landscape stones create structural permanence, guiding lines of sight and creating focal points that retain interest across changing seasons.",
      "Using stones as natural retaining borders around planting zones prevents soil erosion while defining clean mowing lines. In sloped terrains, stone terracing creates microclimates that trap heat during cool nights, benefiting sensitive shrubs.",
      "When specifying landscape stones for commercial or resort settings, consider bulk deliveries in jumbo bags to streamline logistical staging on site.",
    ],
  },
  {
    id: "post-4",
    slug: "best-decorative-stones-for-pathways-and-planters",
    title: "Best Decorative Stones for Pathways and Planters",
    excerpt:
      "A curator's recommendations for selecting stones that offer stable foot traction, minimal displacement, and superior aesthetic compatibility with architectural pots.",
    category: "Practical Landscaping",
    readTime: "4 min read",
    date: "December 05, 2025",
    image: "/images/products/colored-pebbles-studio.jpg",
    tags: ["Pathways", "Planters", "Urban Living"],
    relatedProductSlug: "garden-stones",
    relatedProductName: "Garden Stones",
    content: [
      "Pathways and planters demand distinct stone properties. For walkable garden pathways, stones between 10mm and 20mm pack together more stably than large cobbles, creating an even walking plane that resists shifting underfoot.",
      "In indoor and outdoor planters, stones act as clean top-dressing. They prevent lightweight perlite and potting soil from splashing out during heavy watering, deter gnats, and keep root zones cooler beneath hot sun.",
      "Pairing dark charcoal planters with pure white decorative pebbles creates a timeless monochrome aesthetic favored in contemporary luxury residences.",
    ],
  },
  {
    id: "post-5",
    slug: "how-to-select-pebble-size-for-landscaping-projects",
    title: "How to Select Pebble Size for Landscaping Projects",
    excerpt:
      "A technical sizing breakdown: from 5mm micro-chips for bonsai to 100mm cobbles for riverbeds, discover how scale impacts functionality and visual weight.",
    category: "Specification Guide",
    readTime: "5 min read",
    date: "January 10, 2026",
    image: "/images/products/stone-swatches-grid.jpg",
    tags: ["Specifications", "Sizing", "B2B Supply"],
    relatedProductSlug: "decorative-pebbles",
    relatedProductName: "Decorative Pebbles",
    content: [
      "Scale is crucial in stone specification. A common design pitfall is using stones too small for extensive public plazas or too large for refined interior courtyards.",
      "For fine planter top-dressing and pebble mosaics: 5mm – 12mm.\nFor pedestrian pathways and stepping stone surrounds: 15mm – 25mm.\nFor garden bed mulch replacement and water features: 20mm – 40mm.\nFor dry creek beds and large commercial boundaries: 40mm – 80mm+.",
      "Lavish Stone provides custom screening and sorting upon request, ensuring every shipment conforms to your structural and visual thresholds.",
    ],
  },
  {
    id: "post-6",
    slug: "natural-vs-colored-decorative-stones",
    title: "Natural vs Colored Decorative Stones",
    excerpt:
      "Comparing understated organic earth tones with vibrant chromatic stone options to achieve the exact design mood required for your space.",
    category: "Design Inspiration",
    readTime: "4 min read",
    date: "February 01, 2026",
    image: "/images/products/colored-pebbles-glossy.jpg",
    tags: ["Colored Pebbles", "Color Theory", "Styling"],
    relatedProductSlug: "colored-pebbles",
    relatedProductName: "Colored Decorative Pebbles",
    content: [
      "Natural stones—such as quartzite, river granite, and sandstone—celebrate the unvarnished authenticity of the earth, fitting biophilic architecture and tranquil retreats.",
      "Colored decorative pebbles, however, unlock creative artistic expression. They allow landscape designers to introduce playful hues into luxury resort kid-zones, corporate branding displays, vibrant terrace borders, and high-contrast indoor atriums.",
      "By combining both—using natural stone as the broad landscape canvas and vibrant colored pebbles as deliberate focal accents—designers achieve balance without visual fatigue.",
    ],
  },
];
