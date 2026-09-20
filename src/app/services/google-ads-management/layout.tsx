import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Ads Management Services | PPC Advertising Agency",
  description:
    "Reach high-intent customers with strategic Google Ads campaigns, PPC management, and lead generation solutions.",
  keywords: ["Google Ads Management", "PPC Management Services", "Google Advertising Agency"],
  alternates: { canonical: "/services/google-ads-management" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}