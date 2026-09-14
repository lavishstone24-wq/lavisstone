import React from "react";
import type { Metadata } from "next";
import { productsData } from "@/data/products";
import { ProductCategoryDetail } from "@/components/products/ProductCategoryDetail";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "Garden Stones | Decorative Stones for Planters & Gardens | Lavish Stone",
  description:
    "Decorative garden stones, pathway infill pebbles, and planter top-dressings designed to conserve moisture and elevate residential and commercial gardens.",
  alternates: {
    canonical: `${siteConfig.url}/products/garden-stones`,
  },
};

export default function GardenStonesPage() {
  const product = productsData.find((p) => p.slug === "garden-stones")!;

  return (
    <ProductCategoryDetail
      product={product}
      customHeading="Garden Stones"
      customCtaLabel="Request Garden Stone Quote"
    />
  );
}
