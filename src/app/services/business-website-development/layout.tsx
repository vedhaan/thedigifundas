import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Website Development Services | Professional Website Design",
  description:
    "Build a modern, SEO-friendly business website designed to build trust, generate enquiries, and support business growth.",
  keywords: ["Business Website Development", "Website Design Company", "Professional Website Design"],
  alternates: { canonical: "/services/business-website-development" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}