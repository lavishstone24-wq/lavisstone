import React from "react";
import type { Metadata } from "next";
import { productsData } from "@/data/products";
import { ProductCategoryDetail } from "@/components/products/ProductCategoryDetail";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "Glow Stones | Decorative Glow Pebbles for Gardens & Pathways | Lavish Stone",
  description:
    "Self-illuminating luminescent glow stones for nighttime pathways, garden borders, swimming pool surrounds, and creative landscape installations.",
  alternates: {
    canonical: `${siteConfig.url}/products/glow-stones`,
  },
};

export default function GlowStonesPage() {
  const product = productsData.find((p) => p.slug === "glow-stones")!;

  return (
    <ProductCategoryDetail
      product={product}
      customHeading="Glow Stones"
      customCtaLabel="Enquire About Glow Stones"
      isDarkTheme={true}
    />
  );
}
