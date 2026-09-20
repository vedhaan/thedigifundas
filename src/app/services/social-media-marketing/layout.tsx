import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media Marketing Services For Growing Brands",
  description:
    "Strategic social media marketing services including content creation, account management, engagement, and growth strategies.",
  keywords: ["Social Media Marketing Services", "Instagram Marketing Agency", "Social Media Management"],
  alternates: { canonical: "/services/social-media-marketing" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}