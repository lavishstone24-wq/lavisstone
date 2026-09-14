import React from "react";
import type { Metadata } from "next";
import { productsData } from "@/data/products";
import { ProductCategoryDetail } from "@/components/products/ProductCategoryDetail";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "Mixed Pebbles | Blended Decorative Stones for Landscaping | Lavish Stone",
  description:
    "Curated blends of mixed decorative pebbles for gardens, landscaping, and water features. Lavish Stone B2B project supply and custom ratio blending.",
  alternates: {
    canonical: `${siteConfig.url}/products/mixed-pebbles`,
  },
};

export default function MixedPebblesPage() {
  const product = productsData.find((p) => p.slug === "mixed-pebbles")!;

  return (
    <ProductCategoryDetail
      product={product}
      customHeading="Mixed Decorative Pebbles"
      customCtaLabel="Request Mixed Pebble Quote"
    />
  );
}
