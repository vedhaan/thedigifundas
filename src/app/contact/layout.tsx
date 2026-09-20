import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact The Digi Fundas | Book A Strategy Call",
  description:
    "Get in touch with The Digi Fundas to discuss branding, marketing, website development, content creation, and AI-powered business solutions.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}