import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meta Ads Management Services | Facebook & Instagram Advertising",
  description:
    "Generate leads, increase sales, and maximize ROI with performance-driven Facebook and Instagram advertising campaigns.",
  keywords: ["Meta Ads Management", "Facebook Ads Agency", "Instagram Ads Management"],
  alternates: { canonical: "/services/meta-ads-management" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}