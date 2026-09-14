import React from "react";
import type { Metadata } from "next";
import { productsData } from "@/data/products";
import { ProductCategoryDetail } from "@/components/products/ProductCategoryDetail";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "Natural Pebbles | Decorative River & Landscape Stones | Lavish Stone",
  description:
    "Natural pebbles with organic textures and smooth forms for garden decoration, water features, pathways and landscape applications. Lavish Stone B2B supply.",
  alternates: {
    canonical: `${siteConfig.url}/products/natural-pebbles`,
  },
};

export default function NaturalPebblesPage() {
  const product = productsData.find((p) => p.slug === "natural-pebbles")!;

  return (
    <ProductCategoryDetail
      product={product}
      customHeading="Natural & River Pebbles"
      customCtaLabel="Request Natural Pebble Quote"
    />
  );
}
