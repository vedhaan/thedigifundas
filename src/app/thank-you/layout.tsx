import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | The Digi Fundas",
  robots: { index: false, follow: false },
  alternates: { canonical: "/thank-you" },
};

export default function ThankYouLayout({ children }: { children: React.ReactNode }) {
  return children;
}