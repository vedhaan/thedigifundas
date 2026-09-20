import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Branding & Design Services | Logo, Catalogue & Company Profile Design",
  description:
    "Professional branding and design services including logo design, company profiles, catalogues, brochures, portfolios, exhibition designs, and branding assets.",
  keywords: [
    "Branding Services",
    "Logo Design Services",
    "Company Profile Design",
    "Catalogue Design Services",
  ],
  alternates: { canonical: "/services/branding-design" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}