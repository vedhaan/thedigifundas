import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing For Small Businesses | Small Business Marketing Agency | The Digi Fundas",
  description:
    "Digital marketing services built for small businesses. The Digi Fundas helps small businesses build visibility, generate leads, and grow with confidence through strategic marketing, branding, content, and website development.",
  keywords: [
    "Digital Marketing For Small Businesses",
    "Small Business Marketing Agency",
    "Marketing Services For Small Businesses",
    "Social Media Marketing For Small Business",
    "Lead Generation For Small Businesses",
    "Small Business Growth Agency",
  ],
  openGraph: {
    title: "Digital Marketing For Small Businesses | The Digi Fundas",
    description:
      "Helping small businesses build visibility, generate leads, and grow with confidence through strategic marketing, branding, content creation, and advertising.",
    url: "https://thedigifundas.vercel.app/services/digital-marketing/small-business",
    siteName: "The Digi Fundas",
    type: "website",
  },
  alternates: {
    canonical: "https://thedigifundas.vercel.app/services/digital-marketing/small-business",
  },
};

export default function SmallBusinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}