import React from "react";
import type { Metadata } from "next";
import { productsData } from "@/data/products";
import { ProductCategoryDetail } from "@/components/products/ProductCategoryDetail";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "River Pebbles | Natural River Stones for Spas & Landscaping | Lavish Stone",
  description:
    "Naturally smoothed river pebbles formed by flowing currents. Perfect for spas, pools, reflexology pathways, and water gardens. B2B bulk supply.",
  alternates: {
    canonical: `${siteConfig.url}/products/river-pebbles`,
  },
};

export default function RiverPebblesPage() {
  const product = productsData.find((p) => p.slug === "river-pebbles")!;

  return (
    <ProductCategoryDetail
      product={product}
      customHeading="River Pebbles"
      customCtaLabel="Request River Pebble Quote"
    />
  );
}
