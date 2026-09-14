export interface ApplicationItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  recommendedStones: string[];
  features: string[];
}

export const applicationsData: ApplicationItem[] = [
  {
    id: "landscape-design",
    title: "Landscape Design",
    subtitle: "Organic structure and textured terrain definition",
    description:
      "Decorative stones ground master landscape plans with sculptural substance. From dry riverbeds to terraced contouring, our stones deliver permanence and tactile depth to premier residential and public realms.",
    image: "/images/products/landscape-border-pebbles.jpg",
    recommendedStones: ["Landscape Stones", "Natural Pebbles", "Mixed Pebbles"],
    features: ["Slope retention and natural soil stabilization", "Harmonizes softscape greenery with hardscape pavers", "Zero decomposition compared to wood mulches"],
  },
  {
    id: "gardens",
    title: "Gardens & Floral Beds",
    subtitle: "Sanctuary borders and biophilic tranquility",
    description:
      "Accentuate perennial beds, Zen dry landscapes, and ornamental trees with smooth decorative pebbles that protect topsoil, conserve vital moisture, and frame botanical specimens.",
    image: "/images/products/garden-pebble-stepping-path.jpg",
    recommendedStones: ["Decorative Pebbles", "Garden Stones", "Natural Pebbles"],
    features: ["Retains soil moisture by slowing evaporation", "Minimizes weed emergence naturally", "Clean architectural contrast against dark foliage"],
  },
  {
    id: "water-features",
    title: "Water Features & Reflection Pools",
    subtitle: "Sensory clarity and shimmering submerged elegance",
    description:
      "Water amplifies the mineral luster and crystalline veins of natural stone. Our chemically inert pebbles and glass gems ensure crystal clear water clarity in fountains, cascades, koi ponds, and infinity edges.",
    image: "/images/products/aqua-glass-crystal-pebbles.jpg",
    recommendedStones: ["River Pebbles", "Aqua Glass Pebbles", "Polished Black Pebbles"],
    features: ["Chemically inert stone composition safe for aquatic flora and fauna", "Enhanced color saturation and light refraction when submerged", "Resists algae accumulation on smooth polished surfaces"],
  },
  {
    id: "pathways",
    title: "Pathways & Stepping Walkways",
    subtitle: "Tactile circulation and meandering visual journeys",
    description:
      "Create immersive walkways where sound and texture engage every step. Whether packed firmly between slate flagstones or designed for sensory barefoot walking in luxury wellness spas.",
    image: "/images/products/garden-pebble-stepping-path.jpg",
    recommendedStones: ["River Pebbles", "Decorative Pebbles", "Glow Stones"],
    features: ["Permeable surface supporting natural stormwater infiltration", "Ergonomically tumbled edges for comfortable walking", "Nocturnal guidance when paired with self-illuminating glow stones"],
  },
  {
    id: "planters",
    title: "Planters & Architectural Pots",
    subtitle: "Clean finish for indoor and outdoor botanical vessels",
    description:
      "Top-dress specimen planters and large-scale architectural urns with curated stone chips and tumbled pebbles to prevent potting soil scatter and retain root hydration.",
    image: "/images/products/colored-pebbles-studio.jpg",
    recommendedStones: ["Colored Pebbles", "Decorative Pebbles", "Micro Chips"],
    features: ["Prevents potting medium displacement during irrigation", "Pest-resistant and hygienic top dressing", "Aesthetic complement to minimalist architectural containers"],
  },
  {
    id: "resorts-hospitality",
    title: "Resorts & Hospitality Environments",
    subtitle: "Luxurious outdoor living for world-class destinations",
    description:
      "Elevate 5-star hotel courtyards, poolside cabanas, open-air dining pavilions, and spa sanctuaries with stone surfaces that exude effortless luxury and withstand continuous guest traffic.",
    image: "/images/products/natural-river-pebbles-hero.jpg",
    recommendedStones: ["Natural River Pebbles", "Landscape Stones", "Glow Stones"],
    features: ["Premium resort-grade aesthetic longevity", "Low-maintenance surface requiring simple water rinsing", "Safe and cool underfoot in warm tropical climates"],
  },
  {
    id: "commercial-landscapes",
    title: "Commercial & Corporate Landscapes",
    subtitle: "Civic presence, durability, and institutional prestige",
    description:
      "Corporate headquarters, luxury retail plazas, and modern healthcare campuses benefit from the low-maintenance, high-impact presence of structured stone groundcover.",
    image: "/images/products/bulk-supply-pebbles-stockpile.jpg",
    recommendedStones: ["Landscape Stones", "Mixed Pebbles", "Decorative Pebbles"],
    features: ["Significantly reduces municipal maintenance and irrigation overhead", "Engineered for high-volume commercial container deployment", "Timeless architectural gravitas that enhances property valuation"],
  },
  {
    id: "interior-decoration",
    title: "Interior Decoration & Living Atriums",
    subtitle: "Bringing raw geological calm into indoor architectural spaces",
    description:
      "Integrate natural pebbles into interior glass floor lightboxes, luxury bathroom shower floors, indoor Zen gardens, living moss walls, and reception water features.",
    image: "/images/products/stone-swatches-grid.jpg",
    recommendedStones: ["White River Pebbles", "Polished Black Onyx", "Colored Pebbles"],
    features: ["Odorless, dust-washed, and allergen-free for indoor biophilia", "Pairs elegantly with warm concealed LED architectural lighting", "Tactile organic complement to modern glass and polished concrete"],
  },
  {
    id: "architectural-projects",
    title: "Architectural Projects & Mosaic Art",
    subtitle: "Intricate pebble mosaics and custom surface artistry",
    description:
      "From classical Mediterranean pebble mosaics and mandala courtyard flooring to bespoke stone wall panels, our assorted pebbles serve as artistic tesserae for artisans and master masons.",
    image: "/images/products/architectural-pebble-mosaic.jpg",
    recommendedStones: ["Natural Pebbles", "Decorative Pebbles", "Sandstone Pebbles"],
    features: ["Precision sorted by size and profile for level artistic embedding", "Compatible with polymer cements, epoxy terrazzo, and lime mortars", "Enduring artistic legacy that matures gracefully over decades"],
  },
];
