import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing For Small Businesses",
  description:
    "Marketing, branding, websites, advertising, and growth solutions tailored for small businesses.",
  keywords: [
    "Digital Marketing For Small Businesses",
    "Small Business Marketing Agency",
    "Business Growth Solutions",
  ],
  alternates: { canonical: "/services/digital-marketing/small-business" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}