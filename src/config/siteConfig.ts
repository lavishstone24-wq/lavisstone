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
  url: "https://www.lavishstone.com",
  logo: "/images/brand/lavish-stone-logo.png",
  logo3D: "/images/brand/lavish-stone-3d-wall.png",
  contact: {
    email: "Lavishstone24@gmail.com",
    phone: "+91 99049 63554",
    phoneFormatted: "Direct WhatsApp Desk",
    whatsappNumber: "919904963554",
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
    "premium decorative stones",
    "decorative pebbles",
    "landscape stones",
    "garden stones",
    "natural pebbles",
    "river pebbles",
    "colored pebbles",
    "decorative stone supplier",
    "landscaping stones",
    "decorative pebbles supplier",
    "bulk decorative stones",
    "landscape stone supplier",
  ],
};
