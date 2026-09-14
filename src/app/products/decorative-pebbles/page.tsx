import React from "react";
import type { Metadata } from "next";
import { productsData } from "@/data/products";
import { ProductCategoryDetail } from "@/components/products/ProductCategoryDetail";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "Decorative Pebbles | Premium Landscape & Garden Stones | Lavish Stone",
  description:
    "Explore premium decorative pebbles for gardens, pathways, planters, water features, landscaping and architectural spaces. Direct B2B supply and customizable sizes.",
  alternates: {
    canonical: `${siteConfig.url}/products/decorative-pebbles`,
  },
};

export default function DecorativePebblesPage() {
  const product = productsData.find((p) => p.slug === "decorative-pebbles")!;

  return (
    <ProductCategoryDetail
      product={product}
      customHeading="Decorative Pebbles"
      customCtaLabel="Request Decorative Pebble Quote"
    />
  );
}
