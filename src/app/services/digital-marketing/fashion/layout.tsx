import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing For Fashion & Clothing Brands",
  description:
    "Helping fashion brands increase visibility, strengthen brand identity, grow online sales, and build customer loyalty.",
  keywords: ["Fashion Marketing Agency", "Clothing Brand Marketing", "Fashion Ecommerce Marketing"],
  alternates: { canonical: "/services/digital-marketing/fashion" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}