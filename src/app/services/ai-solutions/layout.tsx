import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Solutions & Automation Services For Modern Businesses",
  description:
    "Improve efficiency and business productivity through AI-powered automation, workflows, marketing systems, and intelligent solutions.",
  keywords: ["AI Solutions", "Business Automation", "Marketing Automation", "AI Consulting Services"],
  alternates: { canonical: "/services/ai-solutions" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}