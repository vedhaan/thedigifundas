import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Website Development Services | Professional Website Design | The Digi Fundas",
  description:
    "Professional business website development services. The Digi Fundas designs and develops corporate and business websites built to build trust, generate enquiries, and support long-term growth.",
  keywords: [
    "Business Website Development",
    "Website Development Company",
    "Professional Website Design Services",
    "Business Website Design",
    "Website Development Agency",
    "Corporate Website Development",
    "Responsive Website Design",
    "SEO Friendly Website Development",
    "Website Design Company",
  ],
  openGraph: {
    title: "Business Website Development Services | The Digi Fundas",
    description:
      "Professional business websites designed to build trust and generate enquiries — corporate, service-based, startup, and portfolio websites.",
    url: "https://thedigifundas.vercel.app/services/business-website-development",
    siteName: "The Digi Fundas",
    type: "website",
  },
  alternates: {
    canonical: "https://thedigifundas.vercel.app/services/business-website-development",
  },
};

export default function BusinessWebsiteDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}