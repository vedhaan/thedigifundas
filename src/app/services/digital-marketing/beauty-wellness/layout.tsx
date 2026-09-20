import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing For Beauty & Wellness Brands",
  description:
    "Helping beauty and wellness businesses attract customers, generate bookings, and strengthen their online presence.",
  keywords: ["Beauty Marketing Agency", "Salon Marketing Services", "Wellness Marketing Agency"],
  alternates: { canonical: "/services/digital-marketing/beauty-wellness" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}