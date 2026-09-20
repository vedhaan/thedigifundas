import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Insights, Branding Strategies & Business Growth Resources",
  description:
    "Discover practical insights on digital marketing, branding, social media, websites, AI, and business growth.",
  alternates: { canonical: "/insights" },
};

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return children;
}