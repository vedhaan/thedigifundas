import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meta Ads Management Services | Facebook & Instagram Ads Agency | The Digi Fundas",
  description:
    "Expert Meta Ads management for Facebook and Instagram. The Digi Fundas is a performance marketing agency specializing in lead generation ads, ecommerce advertising, and data-driven Meta advertising services built for measurable ROI.",
  keywords: [
    "Meta Ads Management Services",
    "Facebook Ads Agency",
    "Instagram Ads Management",
    "Meta Advertising Services",
    "Facebook Advertising Agency",
    "Lead Generation Ads",
    "Ecommerce Advertising Agency",
    "Meta Ads Expert",
    "Performance Marketing Agency",
  ],
  openGraph: {
    title: "Meta Ads Management Services | The Digi Fundas",
    description:
      "Performance-driven Meta Ads that generate leads, sales, and business growth. Facebook & Instagram advertising built for measurable outcomes.",
    url: "https://thedigifundas.vercel.app/services/meta-ads-management",
    siteName: "The Digi Fundas",
    type: "website",
  },
  alternates: {
    canonical: "https://thedigifundas.vercel.app/services/meta-ads-management",
  },
};

export default function MetaAdsManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}