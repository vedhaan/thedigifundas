import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing For Beauty & Wellness Brands | Salon & Spa Marketing | The Digi Fundas",
  description:
    "Digital marketing services built for beauty and wellness businesses. The Digi Fundas helps salons, spas, skincare brands, and wellness clinics attract customers, increase bookings, and build lasting brand trust.",
  keywords: [
    "Digital Marketing For Beauty Brands",
    "Beauty Marketing Agency",
    "Salon Marketing Services",
    "Wellness Marketing Agency",
    "Social Media Marketing For Beauty Business",
    "Beauty Brand Advertising",
    "Marketing For Salons",
    "Wellness Business Marketing",
    "Beauty Business Growth",
  ],
  openGraph: {
    title: "Digital Marketing For Beauty & Wellness Brands | The Digi Fundas",
    description:
      "Helping beauty and wellness brands build trust, attract customers, and grow consistently through branding, content, social media, and paid advertising.",
    url: "https://thedigifundas.vercel.app/services/digital-marketing/beauty-wellness",
    siteName: "The Digi Fundas",
    type: "website",
  },
  alternates: {
    canonical: "https://thedigifundas.vercel.app/services/digital-marketing/beauty-wellness",
  },
};

export default function BeautyWellnessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}