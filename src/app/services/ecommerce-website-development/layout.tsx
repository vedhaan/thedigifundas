import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecommerce Website Development | Shopify & WooCommerce Agency | The Digi Fundas",
  description:
    "Professional ecommerce website development services. The Digi Fundas builds high-performing online stores on Shopify, WooCommerce, and custom Next.js solutions — designed to convert visitors into customers.",
  keywords: [
    "Ecommerce Website Development",
    "Ecommerce Website Design Company",
    "Shopify Development Services",
    "WooCommerce Development",
    "Online Store Development",
    "Ecommerce Website Developer",
    "Shopify Website Design",
    "Ecommerce Solutions",
    "Ecommerce Development Agency",
  ],
  openGraph: {
    title: "Ecommerce Website Development Services | The Digi Fundas",
    description:
      "Ecommerce websites designed to convert visitors into customers — Shopify, WooCommerce, and custom development built for performance and growth.",
    url: "https://thedigifundas.vercel.app/services/ecommerce-website-development",
    siteName: "The Digi Fundas",
    type: "website",
  },
  alternates: {
    canonical: "https://thedigifundas.vercel.app/services/ecommerce-website-development",
  },
};

export default function EcommerceWebsiteDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}