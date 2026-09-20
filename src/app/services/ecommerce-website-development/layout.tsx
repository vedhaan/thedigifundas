import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecommerce Website Development Services | Shopify & Ecommerce Solutions",
  description:
    "Create ecommerce websites designed for sales, customer experience, SEO performance, and long-term growth.",
  keywords: ["Ecommerce Website Development", "Shopify Development", "Online Store Development"],
  alternates: { canonical: "/services/ecommerce-website-development" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}