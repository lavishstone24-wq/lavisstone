import React from "react";
import type { Metadata } from "next";
import { productsData } from "@/data/products";
import { ProductCategoryDetail } from "@/components/products/ProductCategoryDetail";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "Colored Decorative Pebbles | Landscaping & Garden Stones | Lavish Stone",
  description:
    "Add colour, texture and visual character to gardens, planters, pathways and creative landscape designs with Lavish Stone colored decorative pebbles.",
  alternates: {
    canonical: `${siteConfig.url}/products/colored-pebbles`,
  },
};

export default function ColoredPebblesPage() {
  const product = productsData.find((p) => p.slug === "colored-pebbles")!;

  return (
    <ProductCategoryDetail
      product={product}
      customHeading="Colored Decorative Pebbles"
      customCtaLabel="Request Colour & Size Options"
    />
  );
}
