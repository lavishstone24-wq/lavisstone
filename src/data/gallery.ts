export interface GalleryImage {
  id: string;
  title: string;
  category: "Decorative Pebbles" | "Colored Stones" | "Natural Stones" | "Landscape Applications" | "Glow Stones";
  src: string;
  alt: string;
  dimensions?: string;
  aspect?: "square" | "portrait" | "landscape";
  caption: string;
}

export const galleryCategories = [
  "All",
  "Decorative Pebbles",
  "Colored Stones",
  "Natural Stones",
  "Landscape Applications",
  "Glow Stones",
] as const;

export const galleryItems: GalleryImage[] = [
  {
    id: "gal-1",
    title: "Natural River Pebbles Composition",
    category: "Natural Stones",
    src: "/images/products/natural-river-pebbles-hero.jpg",
    alt: "Hand-curated smooth natural river pebbles presented on stone platter in garden setting",
    aspect: "portrait",
    caption: "Water-worn natural river pebbles capturing organic earth tones and smooth rounded contours.",
  },
  {
    id: "gal-2",
    title: "Curated Studio Pebble Spectrum",
    category: "Colored Stones",
    src: "/images/products/colored-pebbles-studio.jpg",
    alt: "Studio presentation of 7 mounds of colored tumbled pebbles including snow white, emerald, pink, and gold",
    aspect: "landscape",
    caption: "Precision-tumbled decorative pebbles sorted into curated chromatic collections for interior and landscape design.",
  },
  {
    id: "gal-3",
    title: "Nocturnal Luminescent Glow Stones",
    category: "Glow Stones",
    src: "/images/products/glow-stones-luminescent.jpg",
    alt: "Multicolor glowing stones illuminating in darkness held in hand for pathway illumination",
    aspect: "square",
    caption: "Self-charging luminescent glow stones creating an ethereal nocturnal glow along pathways and pools.",
  },
  {
    id: "gal-4",
    title: "Pebble Infill Stepping Walkway",
    category: "Landscape Applications",
    src: "/images/products/garden-pebble-stepping-path.jpg",
    alt: "Natural grey slate stepping stones surrounded by white and granite pebble ground cover in garden walkway",
    aspect: "square",
    caption: "Textured garden stepping path harmonizing slate pavers with tumbled marble pebble ground cover.",
  },
  {
    id: "gal-5",
    title: "Architectural Pebble Mosaic Paving",
    category: "Landscape Applications",
    src: "/images/products/architectural-pebble-mosaic.jpg",
    alt: "Intricate floral pebble mosaic floor crafted with white, grey, and ochre pebbles",
    aspect: "portrait",
    caption: "Handcrafted architectural pebble floor mosaic showcasing bespoke botanical pattern design.",
  },
  {
    id: "gal-6",
    title: "High-Gloss Colored Pebbles Array",
    category: "Colored Stones",
    src: "/images/products/colored-pebbles-glossy.jpg",
    alt: "Glossy polished colored pebbles grouped in vibrant purple, red, orange, yellow, and blue",
    aspect: "square",
    caption: "Vibrant high-lustre decorative pebbles engineered for planter accents and decorative displays.",
  },
  {
    id: "gal-7",
    title: "Natural River Stone Stream Bed",
    category: "Natural Stones",
    src: "/images/products/natural-pebbles-stream.jpg",
    alt: "Assorted natural pebbles and river cobbles staged alongside running water stream",
    aspect: "landscape",
    caption: "Diverse geological assortment of river-washed pebbles, basalt stones, and quartzite cobbles.",
  },
  {
    id: "gal-8",
    title: "Landscape Bed Pebble Edging",
    category: "Landscape Applications",
    src: "/images/products/landscape-border-pebbles.jpg",
    alt: "Cobblestone border edging filled with mixed natural pebbles next to granite pavers and garden plants",
    aspect: "portrait",
    caption: "Precision landscape boundary border combining stone curbing with rich textured pebble infill.",
  },
  {
    id: "gal-9",
    title: "Bulk Supply River Pebble Stockpile",
    category: "Landscape Applications",
    src: "/images/products/bulk-supply-pebbles-stockpile.jpg",
    alt: "Massive quarry stockpiles of washed golden river pebbles and sorting grades for bulk export supply",
    aspect: "portrait",
    caption: "Macro quarry stockpiles ready for containerized bulk supply and large-scale infrastructure projects.",
  },
  {
    id: "gal-10",
    title: "Decorative Mineral Swatch Board",
    category: "Decorative Pebbles",
    src: "/images/products/stone-swatches-grid.jpg",
    alt: "Nine-panel stone swatch grid showing white marble, amber quartz, black onyx, and teakwood sandstone",
    aspect: "square",
    caption: "Curated mineral swatch selection illustrating natural finishes, veining variations, and tones.",
  },
  {
    id: "gal-11",
    title: "Banded Rainbow Sandstone Pebbles",
    category: "Decorative Pebbles",
    src: "/images/products/sandstone-striped-pebbles.jpg",
    alt: "Natural sedimentary rainbow sandstone pebbles displaying exquisite geological stratification stripes",
    aspect: "portrait",
    caption: "Naturally striated sandstone pebbles capturing stratified geological history in warm desert hues.",
  },
  {
    id: "gal-12",
    title: "Aqua Glass Crystal Pebbles",
    category: "Decorative Pebbles",
    src: "/images/products/aqua-glass-crystal-pebbles.jpg",
    alt: "Translucent turquoise and sapphire glass pebbles for fountains, aquascapes, and reflection pools",
    aspect: "square",
    caption: "Translucent jewel-toned crystal glass pebbles designed for water features and illuminated displays.",
  },
  {
    id: "gal-13",
    title: "Multicolor Landscape Groundcover",
    category: "Colored Stones",
    src: "/images/products/multi-color-lawn-pebbles.jpg",
    alt: "Vibrant mixed decorative pebbles laid neatly alongside manicured turf grass border",
    aspect: "square",
    caption: "Colorful decorative pebble blend providing crisp visual definition along lush garden lawns.",
  },
  {
    id: "gal-14",
    title: "Micro Decorative Colored Chips",
    category: "Colored Stones",
    src: "/images/products/micro-colored-chips.jpg",
    alt: "Fine gradation micro colored stone chips for succulent planters and epoxy terrazzo surfaces",
    aspect: "landscape",
    caption: "Graded micro stone chips offering smooth coverage for architectural planters and bonsai cultivation.",
  },
];
