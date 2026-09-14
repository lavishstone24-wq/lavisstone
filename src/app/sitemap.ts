import { MetadataRoute } from "next";
import { siteConfig } from "@/config/siteConfig";
import { productsData } from "@/data/products";
import { blogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const getPriority = (route: string) => {
    if (route === "") return 1.0;
    if (route === "/products" || route === "/contact") return 0.9;
    if (route === "/privacy-policy" || route === "/terms-and-conditions") return 0.3;
    return 0.8;
  };

  // Static routes
  const staticRoutes = [
    "",
    "/products",
    "/about",
    "/applications",
    "/gallery",
    "/export",
    "/blog",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/products" ? ("daily" as const) : ("weekly" as const),
    priority: getPriority(route),
  }));

  // Product categories
  const productRoutes = productsData.map((prod) => ({
    url: `${baseUrl}/products/${prod.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Blog posts
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...productRoutes, ...blogRoutes];
}
