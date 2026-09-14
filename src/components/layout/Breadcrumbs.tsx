import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-0">
      <ol className="flex items-center flex-wrap gap-2 text-xs text-brand-muted">
        <li>
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-brand-gold transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only">Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-2">
              <ChevronRight className="w-3 h-3 text-brand-border" />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-brand-gold transition-colors capitalize"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-brand-ivory font-medium capitalize truncate max-w-xs">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
