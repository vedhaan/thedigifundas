import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content Marketing Services | Strategic Content For Business Growth",
  description:
    "Build authority, attract customers, and improve visibility through strategic content marketing services designed for long-term growth.",
  keywords: ["Content Marketing Services", "SEO Content Marketing", "Blog Writing Services", "Content Strategy"],
  alternates: { canonical: "/services/content-marketing" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}