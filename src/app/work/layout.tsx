import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Work & Case Studies | The Digi Fundas",
  description:
    "Explore branding, marketing, website development, and growth projects that helped businesses improve visibility and achieve measurable results.",
  alternates: { canonical: "/work" },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}