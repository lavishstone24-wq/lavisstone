import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";
import { siteConfig } from "@/config/siteConfig";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";
import { Calendar, Clock, ArrowLeft, ArrowRight, Sparkles, Tag } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | Lavish Stone Guide`,
    description: post.excerpt,
    alternates: {
      canonical: `${siteConfig.url}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: `${siteConfig.url}${post.image}` }],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Blog", item: "/blog" },
    { name: post.title, item: `/blog/${post.slug}` },
  ];

  return (
    <article className="pt-28 pb-24 bg-brand-black min-h-screen">
      <BreadcrumbsJsonLd items={breadcrumbs} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Guides", href: "/blog" },
            { label: post.title },
          ]}
        />

        {/* Back Link */}
        <div className="pt-4 pb-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-brand-muted hover:text-brand-gold transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Guides</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="space-y-4 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-charcoal border border-brand-gold/30 text-[10px] uppercase tracking-widest text-brand-gold font-sans font-semibold">
            <span>{post.category}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-light text-brand-ivory leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-xs text-brand-muted border-y border-brand-border/60 py-3">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-brand-gold" />
              {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-brand-gold" />
              {post.readTime}
            </span>
            <span>•</span>
            <span>By Lavish Stone Technical Desk</span>
          </div>
        </header>

        {/* Hero Image */}
        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-brand-border/80 shadow-2xl mb-12">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 800px"
            className="object-cover object-center"
          />
        </div>

        {/* Article Body */}
        <div className="prose prose-invert max-w-none space-y-6 text-brand-ivory/85 text-base sm:text-lg leading-relaxed font-light">
          {post.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Internal Linking: Related Product Card */}
        <div className="my-12 p-6 sm:p-8 rounded-xl bg-brand-charcoal border border-brand-gold/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-widest text-brand-gold font-semibold font-sans">
              Featured Material
            </span>
            <h3 className="text-xl font-serif text-brand-ivory">
              {post.relatedProductName}
            </h3>
            <p className="text-xs text-brand-muted">
              Discover gradations, finishes, and bulk specifications for this stone line.
            </p>
          </div>

          <Link
            href={`/products/${post.relatedProductSlug}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-gold text-brand-black text-xs uppercase tracking-widest font-semibold rounded hover:bg-brand-gold-light transition-all shadow-gold-glow whitespace-nowrap"
          >
            <span>View {post.relatedProductName}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Tags */}
        <div className="pt-6 border-t border-brand-border/60 flex items-center gap-2 flex-wrap text-xs">
          <span className="text-brand-muted flex items-center gap-1">
            <Tag className="w-3.5 h-3.5 text-brand-gold" />
            Tags:
          </span>
          {post.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded bg-brand-charcoal border border-brand-border text-brand-muted"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
