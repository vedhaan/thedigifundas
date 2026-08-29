import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Branding & Design Services | Logo & Brand Identity Agency | The Digi Fundas",
  description:
    "Professional branding and design services including logo design, company profiles, brochures, catalogues, portfolios, and exhibition design. The Digi Fundas creates consistent, impactful visual identities for growing businesses.",
  keywords: [
    "Branding Services",
    "Logo Design Services",
    "Company Profile Design",
    "Catalogue Design Services",
    "Brochure Design Company",
    "Portfolio Design Services",
    "Exhibition Design Services",
    "Branding Agency",
    "Brand Identity Design",
    "Creative Design Services",
  ],
  openGraph: {
    title: "Branding & Design Services | The Digi Fundas",
    description:
      "Creative design solutions that strengthen brands — logo design, company profiles, brochures, exhibition design, and complete brand identity systems.",
    url: "https://thedigifundas.vercel.app/services/branding-design",
    siteName: "The Digi Fundas",
    type: "website",
  },
  alternates: {
    canonical: "https://thedigifundas.vercel.app/services/branding-design",
  },
};

export default function BrandingDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}