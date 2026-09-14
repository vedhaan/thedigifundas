import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing For Fashion & Clothing Brands | Fashion Marketing Agency | The Digi Fundas",
  description:
    "Digital marketing services built for fashion and clothing brands. The Digi Fundas helps fashion businesses increase visibility, drive ecommerce sales, and build lasting customer connections through branding, content, and paid advertising.",
  keywords: [
    "Digital Marketing For Fashion Brands",
    "Fashion Marketing Agency",
    "Clothing Brand Marketing",
    "Social Media Marketing For Fashion Brands",
    "Ecommerce Marketing Agency",
    "Fashion Brand Advertising",
    "Marketing For Clothing Brands",
    "Fashion Ecommerce Marketing",
    "Fashion Brand Growth",
  ],
  openGraph: {
    title: "Digital Marketing For Fashion & Clothing Brands | The Digi Fundas",
    description:
      "Helping fashion brands build visibility, drive sales, and create lasting connections through branding, content creation, social media marketing, and ecommerce solutions.",
    url: "https://thedigifundas.vercel.app/services/digital-marketing/fashion",
    siteName: "The Digi Fundas",
    type: "website",
  },
  alternates: {
    canonical: "https://thedigifundas.vercel.app/services/digital-marketing/fashion",
  },
};

export default function FashionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}