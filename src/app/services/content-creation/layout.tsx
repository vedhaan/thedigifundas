import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content Creation Services | Text, Video & Creative Content",
  description:
    "Professional content creation services including social media content, reels, videos, website content, and copywriting designed to engage audiences and strengthen brand presence.",
  keywords: [
    "Content Creation Services",
    "Video Content Creation",
    "Creative Content Agency",
    "Social Media Content Creation",
  ],
  alternates: { canonical: "/services/content-creation" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}