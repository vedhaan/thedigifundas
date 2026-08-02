import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Ads Management Services | PPC & Search Ads Agency | The Digi Fundas",
  description:
    "Expert Google Ads management and PPC advertising. The Digi Fundas is a performance marketing agency specializing in search ads, ecommerce Google Ads, and lead generation advertising built for measurable results.",
  keywords: [
    "Google Ads Management Services",
    "Google Ads Agency",
    "PPC Management Services",
    "Pay Per Click Advertising",
    "Google Advertising Agency",
    "Search Ads Management",
    "Ecommerce Google Ads",
    "Lead Generation Advertising",
    "PPC Agency",
  ],
  openGraph: {
    title: "Google Ads Management Services | The Digi Fundas",
    description:
      "Google Ads campaigns designed to generate qualified leads and business growth. Search, Shopping, Display, and Remarketing built for measurable ROI.",
    url: "https://thedigifundas.vercel.app/services/google-ads-management",
    siteName: "The Digi Fundas",
    type: "website",
  },
  alternates: {
    canonical: "https://thedigifundas.vercel.app/services/google-ads-management",
  },
};

export default function GoogleAdsManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}