import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers At The Digi Fundas | Marketing, Design & Development Jobs",
  description:
    "Explore career opportunities, internships, and freelance collaborations at The Digi Fundas.",
  alternates: { canonical: "/career" },
};

export default function CareerLayout({ children }: { children: React.ReactNode }) {
  return children;
}