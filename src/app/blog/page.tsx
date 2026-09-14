import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { siteConfig } from "@/config/siteConfig";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";
import { Sparkles, Clock, Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Stone & Landscaping Guides | Lavish Stone Architectural Blog",
  description:
    "Expert articles and guides on choosing decorative pebbles, river stones, pebble sizing, and stone applications in architectural landscape design.",
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
};

export default function BlogPage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Guides & Articles", item: "/blog" },
  ];

  return (
    <div className="pt-28 pb-24 bg-brand-black min-h-screen">
      <BreadcrumbsJsonLd items={breadcrumbs} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Stone & Landscape Guides" }]} />

        {/* Page Header */}
        <div className="py-12 sm:py-16 max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-charcoal border border-brand-gold/30 text-[11px] uppercase tracking-widest text-brand-gold font-sans font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Architectural & Landscape Guides</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-light text-brand-ivory leading-tight">
            Stone, Design & <br />
            <span className="italic text-gold-gradient font-normal">
              Landscape Knowledge
            </span>
          </h1>

          <p className="text-base sm:text-lg text-brand-muted font-light leading-relaxed pt-2">
            Technical guides and design inspiration curated for landscape architects, contractors, and estate owners seeking stone mastery.
          </p>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col bg-brand-charcoal border border-brand-border rounded-xl overflow-hidden glass-panel-hover"
            >
              <Link href={`/blog/${post.slug}`} className="relative aspect-[16/10] w-full overflow-hidden bg-brand-black">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent opacity-60" />
                <span className="absolute top-3 left-3 text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded bg-black/80 border border-brand-gold/30 text-brand-gold-light backdrop-blur-md">
                  {post.category}
                </span>
              </Link>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-3 text-xs text-brand-muted">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-serif text-brand-ivory font-normal group-hover:text-brand-gold transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-brand-muted line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-border/60 flex items-center justify-between">
                  <span className="text-[11px] text-brand-muted">
                    Category: <span className="text-brand-gold">{post.relatedProductName}</span>
                  </span>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs uppercase tracking-wider font-semibold text-brand-gold hover:text-brand-gold-light inline-flex items-center gap-1"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
