import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About The Digi Fundas | Strategic Marketing & Growth Partner",
  description:
    "Learn how The Digi Fundas helps businesses strengthen their brand presence and achieve sustainable growth through marketing, design, content, and technology.",
  alternates: { canonical: "/about" },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}