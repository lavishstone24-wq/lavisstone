export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  category: string;
  description: string;
  url: string;
  logo: string;
  logo3D: string;
  contact: {
    email: string;
    phone: string;
    phoneFormatted: string;
    whatsappNumber: string;
    whatsappDefaultMessage: string;
    addressLine1: string;
    addressLine2: string;
    businessHours: string;
    exportDeskEmail: string;
  };
  socials: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
    youtube?: string;
  };
  metaKeywords: string[];
}

export const siteConfig: SiteConfig = {
  name: "Lavish Stone",
  legalName: "Lavish Stone Materials",
  tagline: "Natural Beauty, Crafted for Exceptional Spaces.",
  category: "Premium Decorative Stones, Landscaping Stones, Pebbles & Garden Stones",
  description:
    "Explore premium decorative pebbles, natural stones, colored pebbles, landscape stones and specialty stone products for gardens, landscaping, architecture and outdoor spaces.",
  url: "https://www.lavishstone.in",
  logo: "/images/brand/lavish-stone-logo.png",
  logo3D: "/images/brand/lavish-stone-3d-wall.png",
  contact: {
    email: "Lavishstone24@gmail.com",
    phone: "+91 87960 82406",
    phoneFormatted: "+91 87960 82406",
    whatsappNumber: "918796082406",
    whatsappDefaultMessage:
      "Hello Lavish Stone, I am interested in your decorative stone products. Please share product details and pricing.",
    addressLine1: "Rajkot, Gujarat, India",
    addressLine2: "",
    businessHours: "Monday - Saturday: 09:00 AM - 06:30 PM",
    exportDeskEmail: "Lavishstone24@gmail.com",
  },
  socials: {
    linkedin: "https://linkedin.com/company/lavish-stone",
    instagram: "https://instagram.com/lavishstone",
  },
  metaKeywords: [
    "lavish stone",
    "lavish stone rajkot",
    "decorative pebbles supplier in rajkot",
    "decorative pebbles manufacturer in gujarat",
    "natural river pebbles india",
    "colored decorative pebbles supplier",
    "landscape stones supplier india",
    "garden pebbles wholesale india",
    "aquarium pebbles manufacturer",
    "glow stones supplier india",
    "premium decorative stones",
    "white polished pebbles",
    "black river pebbles",
    "landscape stone aggregates",
    "architectural rockery stones",
    "pebble exporter india",
    "decorative stone wholesaler rajkot",
  ],
};
