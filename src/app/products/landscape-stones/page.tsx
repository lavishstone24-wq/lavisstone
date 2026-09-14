import React from "react";
import type { Metadata } from "next";
import { productsData } from "@/data/products";
import { ProductCategoryDetail } from "@/components/products/ProductCategoryDetail";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "Landscape Stones | Premium Stones for Gardens & Outdoor Spaces | Lavish Stone",
  description:
    "Large-format landscape stones for garden landscaping, resort grounds, commercial developments, and outdoor stone features. Sourced by Lavish Stone.",
  alternates: {
    canonical: `${siteConfig.url}/products/landscape-stones`,
  },
};

export default function LandscapeStonesPage() {
  const product = productsData.find((p) => p.slug === "landscape-stones")!;

  return (
    <ProductCategoryDetail
      product={product}
      customHeading="Landscape Stones"
      customCtaLabel="Request Landscape Stone Quote"
    />
  );
}
