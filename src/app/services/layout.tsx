import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing, Branding & Digital Growth Solutions | The Digi Fundas",
  description:
    "Explore marketing, branding, content creation, website development, advertising, and AI solutions tailored for growing businesses.",
  alternates: { canonical: "/services" },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}